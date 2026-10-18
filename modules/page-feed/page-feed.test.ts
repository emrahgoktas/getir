import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { escapeCsvField } from "./application/csv-encoder";
import { PageFeedService } from "./application/page-feed-service";
import { formatCustomLabels, MAX_CUSTOM_LABELS } from "./domain/custom-label";
import {
  createDefaultEligibilityPolicy,
  type ExclusionReason,
} from "./domain/eligibility-policy";
import type { PageCandidate } from "./domain/page-candidate";
import { tryPageUrl } from "./domain/page-url";
import type { PageSource, TenantScope } from "./domain/ports";
import { regions } from "../../data/regions";
import { posts } from "../../data/posts";
import { ContentPageRepository } from "./infrastructure/content-page-repository";
import { createPageFeedRuntime } from "./infrastructure/composition";
import { handlePageFeedRequest } from "./infrastructure/http-handler";
import { MemoryFeedCache } from "./infrastructure/memory-feed-cache";
import {
  authorizeFeedRequest,
  loadTenantRegistry,
} from "./infrastructure/tenant-registry";

const ORIGIN = "https://www.getircilingir.com.tr";
const TENANT: TenantScope = { id: "getircilingir", origin: ORIGIN };
const ACCESS_KEY = "test-access-key-1234";

function candidate(overrides: Partial<PageCandidate> & Pick<PageCandidate, "path">): PageCandidate {
  return {
    tenantId: TENANT.id,
    status: "active",
    indexable: true,
    stock: "not_tracked",
    kind: "other",
    labels: ["hizmet"],
    ...overrides,
  };
}

function harness(
  pages: readonly PageCandidate[],
  options?: { ttlMs?: number; chunkSize?: number; maxFeedBytes?: number },
) {
  let clock = 1_000_000;
  const source = {
    calls: 0,
    async *listPages(): AsyncIterable<PageCandidate> {
      source.calls += 1;
      yield* pages;
    },
  };
  const cache = new MemoryFeedCache({
    ttlMs: options?.ttlMs ?? 5_000,
    maxEntries: 4,
    maxBytes: 1024 * 1024,
    now: () => clock,
  });
  const service = new PageFeedService(source, createDefaultEligibilityPolicy(), cache, {
    chunkSize: options?.chunkSize ?? 500,
    maxFeedBytes: options?.maxFeedBytes ?? 1024 * 1024,
    now: () => clock,
  });

  return {
    source,
    service,
    advance(ms: number) {
      clock += ms;
    },
  };
}

function decodeFeed(body: Uint8Array): string {
  return new TextDecoder().decode(body);
}

function parseCsv(text: string): string[][] {
  let source = text;
  if (source.charCodeAt(0) === 0xfeff) source = source.slice(1);

  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"') {
        if (source[index + 1] === '"') {
          field += '"';
          index += 1;
        } else {
          quoted = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      if (!(row.length === 1 && row[0] === "")) rows.push(row);
      row = [];
      field = "";
    } else {
      field += char;
    }
  }

  return rows;
}

describe("page url", () => {
  it("keeps an https path on the tenant origin and drops tracking", () => {
    assert.equal(
      tryPageUrl(ORIGIN, "/cilingir/maslak-hatti/maslak"),
      `${ORIGIN}/cilingir/maslak-hatti/maslak`,
    );
  });

  it("rejects insecure, off-origin, and dot-segment paths", () => {
    assert.equal(tryPageUrl("http://www.getircilingir.com.tr", "/"), null);
    assert.equal(tryPageUrl(ORIGIN, "//evil.example/phish"), null);
    assert.equal(tryPageUrl(ORIGIN, "/cilingir/../admin"), null);
    assert.equal(tryPageUrl(ORIGIN, "/blog/yazi?utm_source=ads"), null);
  });
});

describe("custom labels", () => {
  it("joins labels with semicolons and caps the list at 20", () => {
    const labels = Array.from({ length: 25 }, (_, index) => `etiket-${index}`);
    const formatted = formatCustomLabels(labels);
    assert.equal(formatted.split(";").length, MAX_CUSTOM_LABELS);
    assert.equal(formatted.includes(","), false);
  });

  it("quotes a field that contains a comma", () => {
    assert.equal(escapeCsvField("a,b"), '"a,b"');
  });
});

describe("eligibility", () => {
  const policy = createDefaultEligibilityPolicy();

  function reason(page: PageCandidate): ExclusionReason | "include" {
    const decision = policy.evaluate(page);
    return decision.include ? "include" : decision.reason;
  }

  it("admits an active indexable service page", () => {
    assert.equal(reason(candidate({ path: "/sss", kind: "faq" })), "include");
  });

  it("rejects drafts, noindex pages, and out-of-stock products", () => {
    assert.equal(reason(candidate({ path: "/blog/taslak", status: "draft" })), "not_active");
    assert.equal(reason(candidate({ path: "/gizli", indexable: false })), "not_indexable");
    assert.equal(
      reason(candidate({ path: "/urun", stock: "out_of_stock", kind: "other" })),
      "out_of_stock",
    );
  });

  it("rejects contact, privacy, cart, and account urls", () => {
    assert.equal(reason(candidate({ path: "/iletisim", kind: "contact" })), "excluded_url");
    assert.equal(
      reason(candidate({ path: "/gizlilik-politikasi", kind: "legal" })),
      "excluded_url",
    );
    assert.equal(reason(candidate({ path: "/sepet/odeme", kind: "other" })), "excluded_url");
    assert.equal(reason(candidate({ path: "/hesabim", kind: "account" })), "excluded_url");
  });
});

describe("page feed service", () => {
  it("emits a utf-8 bom csv and only the requested tenant", async () => {
    const { service } = harness(
      [
        candidate({ tenantId: "baska-kiraci", path: "/gizli-kiraci", labels: ["gizli"] }),
        candidate({
          path: "/cilingir/maslak-hatti/maslak",
          kind: "neighborhood",
          labels: ["mahalle", "maslak-hatti", "maslak", "hizmet", "acil"],
        }),
        candidate({ path: "/iletisim", kind: "contact", labels: ["iletisim"] }),
        candidate({ path: "/urun/kilit", stock: "in_stock", labels: ["kilit"] }),
        candidate({ path: "/urun/kilit", stock: "in_stock", labels: ["kilit"] }),
        candidate({ path: "/urun/tukenen", stock: "out_of_stock", labels: ["kilit"] }),
        candidate({ path: "/blog/taslak", kind: "blog_post", status: "draft", labels: ["blog"] }),
      ],
      { chunkSize: 1 },
    );

    const feed = await service.getFeed(TENANT);
    assert.equal(feed.body[0], 0xef);
    assert.equal(feed.body[1], 0xbb);
    assert.equal(feed.body[2], 0xbf);
    assert.equal(feed.fromCache, false);

    const rows = parseCsv(decodeFeed(feed.body));
    assert.deepEqual(rows[0], ["Page URL", "Custom label"]);
    const urls = rows.slice(1).map((row) => row[0]);
    assert.deepEqual(urls, [
      `${ORIGIN}/cilingir/maslak-hatti/maslak`,
      `${ORIGIN}/urun/kilit`,
    ]);
    assert.equal(rows[1]?.[1], "mahalle;maslak-hatti;maslak;hizmet;acil");
    assert.equal(rows[2]?.[1], "kilit;stokta");
    assert.equal(feed.rowCount, 2);
  });

  it("serves a cached body until the ttl expires", async () => {
    const { service, source, advance } = harness([
      candidate({ path: "/sss", kind: "faq", labels: ["sss"] }),
    ]);

    const first = await service.getFeed(TENANT);
    const second = await service.getFeed(TENANT);
    assert.equal(source.calls, 1);
    assert.equal(second.fromCache, true);
    assert.equal(Buffer.compare(first.body, second.body), 0);

    advance(5_001);
    const third = await service.getFeed(TENANT);
    assert.equal(source.calls, 2);
    assert.equal(third.fromCache, false);
  });

  it("builds once when two callers overlap", async () => {
    let release: () => void = () => {};
    const gate = new Promise<void>((resolve) => {
      release = resolve;
    });
    let calls = 0;
    const source: PageSource = {
      async *listPages() {
        calls += 1;
        await gate;
        yield candidate({ path: "/sss", kind: "faq", labels: ["sss"] });
      },
    };
    const service = new PageFeedService(
      source,
      createDefaultEligibilityPolicy(),
      new MemoryFeedCache({
        ttlMs: 5_000,
        maxEntries: 2,
        maxBytes: 1024 * 1024,
        now: () => 1_000,
      }),
      { chunkSize: 10, maxFeedBytes: 1024 * 1024, now: () => 1_000 },
    );

    const first = service.getFeed(TENANT);
    const second = service.getFeed(TENANT);
    release();
    const [left, right] = await Promise.all([first, second]);
    assert.equal(calls, 1);
    assert.equal(left.rowCount, 1);
    assert.equal(right.rowCount, 1);
  });

  it("refuses a feed that exceeds the byte cap", async () => {
    const { service } = harness(
      [candidate({ path: "/sss", kind: "faq", labels: ["sss"] })],
      { maxFeedBytes: 8 },
    );
    await assert.rejects(() => service.getFeed(TENANT), { name: "FeedTooLargeError" });
  });
});

describe("content repository", () => {
  it("drops draft posts, legal pages, and malformed slugs", async () => {
    const repository = new ContentPageRepository({
      tenantId: TENANT.id,
      regions: [
        {
          slug: "maslak-hatti",
          name: "Maslak",
          description: "",
          avgResponseMinutes: "10",
          image: "/images/regions/maslak.jpg",
          presenceLine: "",
          neighborhoods: [
            {
              slug: "maslak",
              name: "Maslak",
              heroLine: "",
              referenceLandmark: "",
              avgResponseMinutes: "10",
              latitude: 0,
              longitude: 0,
              description: "",
            },
            {
              slug: "../admin",
              name: "Bad",
              heroLine: "",
              referenceLandmark: "",
              avgResponseMinutes: "10",
              latitude: 0,
              longitude: 0,
              description: "",
            },
          ],
        },
      ],
      posts: [
        { slug: "yayinda" },
        { slug: "taslak-yazi", status: "draft" },
      ],
    });
    const cache = new MemoryFeedCache({
      ttlMs: 1_000,
      maxEntries: 1,
      maxBytes: 1024 * 1024,
      now: () => 1_000,
    });
    const service = new PageFeedService(repository, createDefaultEligibilityPolicy(), cache, {
      chunkSize: 2,
      maxFeedBytes: 1024 * 1024,
      now: () => 1_000,
    });

    const feed = await service.getFeed(TENANT);
    const urls = parseCsv(decodeFeed(feed.body))
      .slice(1)
      .map((row) => row[0]);

    assert.deepEqual(urls, [
      `${ORIGIN}/`,
      `${ORIGIN}/hakkimizda`,
      `${ORIGIN}/sss`,
      `${ORIGIN}/blog`,
      `${ORIGIN}/cilingir/maslak-hatti`,
      `${ORIGIN}/cilingir/maslak-hatti/maslak`,
      `${ORIGIN}/blog/yayinda`,
    ]);
  });

  it("returns nothing for a different tenant id", async () => {
    const repository = new ContentPageRepository({
      tenantId: TENANT.id,
      regions: [],
      posts: [],
    });
    const pages = [];
    for await (const page of repository.listPages("baska-kiraci")) pages.push(page);
    assert.equal(pages.length, 0);
  });
});

describe("site catalog feed", () => {
  it("lists every published landing page and no excluded url", async () => {
    const runtime = createPageFeedRuntime({
      PAGE_FEED_ACCESS_KEY: ACCESS_KEY,
      PAGE_FEED_TENANT_ID: "getircilingir",
    });
    const feed = await runtime.service.getFeed(TENANT);
    const rows = parseCsv(decodeFeed(feed.body));
    const urls = rows.slice(1).map((row) => row[0]);

    const neighborhoods = regions.reduce((count, region) => count + region.neighborhoods.length, 0);
    const publishedPosts = posts.filter(
      (post) => (post.status ?? "active") === "active" && post.indexable !== false,
    );
    assert.equal(urls.length, 4 + regions.length + neighborhoods + publishedPosts.length);
    assert.equal(new Set(urls).size, urls.length);
    assert.ok(urls.every((url) => url.startsWith(`${ORIGIN}/`)));
    assert.equal(urls.some((url) => url.includes("/iletisim")), false);
    assert.equal(urls.some((url) => url.includes("/gizlilik-politikasi")), false);
    assert.equal(urls.some((url) => url.includes("/hizmet-sartlari")), false);
    assert.equal(urls.some((url) => url.includes("/sepet")), false);
    assert.equal(urls.some((url) => url.includes("/hesabim")), false);
    assert.ok(urls.includes(`${ORIGIN}/cilingir/maslak-hatti/maslak`));
    assert.ok(urls.includes(`${ORIGIN}/blog/${publishedPosts[0]?.slug}`));
  });
});

describe("feed authorization", () => {
  it("closes the feed when the access key is missing or too short", () => {
    const registry = loadTenantRegistry({ PAGE_FEED_ACCESS_KEY: "short" }, ORIGIN);
    const decision = authorizeFeedRequest({
      tenantId: "getircilingir",
      queryKey: "short",
      authorization: null,
      registry,
    });
    assert.deepEqual(decision, { ok: false, status: 503, error: "feed_not_configured" });
  });

  it("rejects an unknown tenant and a wrong key", () => {
    const registry = loadTenantRegistry(
      { PAGE_FEED_ACCESS_KEY: ACCESS_KEY, PAGE_FEED_TENANT_ID: "getircilingir" },
      ORIGIN,
    );

    assert.equal(
      authorizeFeedRequest({
        tenantId: "baska-kiraci",
        queryKey: ACCESS_KEY,
        authorization: null,
        registry,
      }).ok,
      false,
    );
    const denied = authorizeFeedRequest({
      tenantId: "getircilingir",
      queryKey: "wrong-access-key-value",
      authorization: null,
      registry,
    });
    assert.equal(denied.ok, false);
    if (!denied.ok) assert.equal(denied.status, 401);
    const allowed = authorizeFeedRequest({
      tenantId: "getircilingir",
      queryKey: null,
      authorization: `Bearer ${ACCESS_KEY}`,
      registry,
    });
    assert.equal(allowed.ok, true);
    if (allowed.ok) assert.equal(allowed.tenant.origin, ORIGIN);
  });
});

describe("http feed endpoint", () => {
  function runtime() {
    return createPageFeedRuntime({
      PAGE_FEED_ACCESS_KEY: ACCESS_KEY,
      PAGE_FEED_CACHE_TTL_SECONDS: "300",
    });
  }

  function feedRequest(key: string, headers?: HeadersInit) {
    return new Request(
      `https://www.getircilingir.com.tr/api/ads/page-feed?tenant=getircilingir&key=${key}`,
      { headers },
    );
  }

  it("returns the csv and then a cache hit and a 304", async () => {
    const app = runtime();
    const first = await handlePageFeedRequest(feedRequest(ACCESS_KEY), app);
    assert.equal(first.status, 200);
    assert.equal(first.headers.get("content-type"), "text/csv; charset=utf-8");
    assert.equal(first.headers.get("x-feed-cache"), "miss");
    assert.equal(first.headers.get("referrer-policy"), "no-referrer");
    const bytes = new Uint8Array(await first.arrayBuffer());
    assert.equal(bytes[0], 0xef);
    assert.equal(bytes[1], 0xbb);
    assert.equal(bytes[2], 0xbf);
    const body = new TextDecoder("utf-8", { ignoreBOM: true }).decode(bytes);
    assert.equal(body.charCodeAt(0), 0xfeff);
    assert.equal(body.includes("Page URL,Custom label"), true);

    const second = await handlePageFeedRequest(feedRequest(ACCESS_KEY), app);
    assert.equal(second.headers.get("x-feed-cache"), "hit");
    await second.arrayBuffer();

    const etag = first.headers.get("etag");
    assert.ok(etag);
    const cached = await handlePageFeedRequest(
      feedRequest(ACCESS_KEY, { "if-none-match": etag }),
      app,
    );
    assert.equal(cached.status, 304);
  });

  it("does not return csv for a bad key or a foreign tenant", async () => {
    const app = runtime();
    const denied = await handlePageFeedRequest(feedRequest("wrong-access-key-value"), app);
    assert.equal(denied.status, 401);
    assert.equal(denied.headers.get("content-type"), "application/json; charset=utf-8");

    const foreign = await handlePageFeedRequest(
      new Request(
        "https://www.getircilingir.com.tr/api/ads/page-feed?tenant=baska-kiraci&key=test-access-key-1234",
      ),
      app,
    );
    assert.equal(foreign.status, 404);

    const closed = await handlePageFeedRequest(
      feedRequest(ACCESS_KEY),
      createPageFeedRuntime({}),
    );
    assert.equal(closed.status, 503);
  });
});
