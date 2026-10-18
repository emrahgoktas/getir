import { createHash } from "node:crypto";
import { CSV_HEADER, encodeFeedRows, type FeedRow } from "./csv-encoder";
import { labelsForCandidate } from "../domain/custom-label";
import type { EligibilityPolicy } from "../domain/eligibility-policy";
import { tryPageUrl } from "../domain/page-url";
import type { CachedFeed, FeedCache, PageSource, TenantScope } from "../domain/ports";

export class FeedTooLargeError extends Error {
  constructor() {
    super("page feed exceeded the byte cap");
    this.name = "FeedTooLargeError";
  }
}

export type FeedSnapshot = CachedFeed & {
  readonly fromCache: boolean;
};

type ServiceOptions = {
  chunkSize: number;
  maxFeedBytes: number;
  now: () => number;
};

const textEncoder = new TextEncoder();

/**
 * Builds a Google Ads page feed for one tenant.
 * Candidates are pulled and encoded in chunks so the catalog is never
 * materialized as one array. The CSV buffer is the only retained output,
 * and it is capped by `maxFeedBytes`.
 */
export class PageFeedService {
  private readonly inflight = new Map<string, Promise<FeedSnapshot>>();

  constructor(
    private readonly source: PageSource,
    private readonly policy: EligibilityPolicy,
    private readonly cache: FeedCache,
    private readonly options: ServiceOptions,
  ) {}

  async getFeed(tenant: TenantScope): Promise<FeedSnapshot> {
    const cached = this.cache.get(tenant.id);
    if (cached) return { ...cached, fromCache: true };

    let job = this.inflight.get(tenant.id);
    if (!job) {
      job = this.build(tenant);
      this.inflight.set(tenant.id, job);
      void job.then(
        () => {
          if (this.inflight.get(tenant.id) === job) this.inflight.delete(tenant.id);
        },
        () => {
          if (this.inflight.get(tenant.id) === job) this.inflight.delete(tenant.id);
        },
      );
    }

    return job;
  }

  private async build(tenant: TenantScope): Promise<FeedSnapshot> {
    const seen = new Set<string>();
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    let rowCount = 0;
    let skipped = 0;
    let batch: FeedRow[] = [];

    const pushText = (text: string) => {
      const encoded = textEncoder.encode(text);
      bytes += encoded.byteLength;
      if (bytes > this.options.maxFeedBytes) {
        throw new FeedTooLargeError();
      }
      chunks.push(encoded);
    };

    const flush = () => {
      if (batch.length === 0) return;
      pushText(encodeFeedRows(batch));
      rowCount += batch.length;
      batch = [];
    };

    pushText(CSV_HEADER);

    for await (const candidate of this.source.listPages(tenant.id)) {
      if (candidate.tenantId !== tenant.id) {
        skipped += 1;
        continue;
      }

      const decision = this.policy.evaluate(candidate);
      if (!decision.include) {
        skipped += 1;
        continue;
      }

      const pageUrl = tryPageUrl(tenant.origin, candidate.path);
      if (!pageUrl || seen.has(pageUrl)) {
        skipped += 1;
        continue;
      }

      seen.add(pageUrl);
      batch.push({
        pageUrl,
        customLabel: labelsForCandidate(candidate),
      });

      if (batch.length >= this.options.chunkSize) flush();
    }

    flush();
    seen.clear();

    const body = concatBytes(chunks);
    const built: CachedFeed = {
      body,
      rowCount,
      skipped,
      etag: `"${createHash("sha256").update(body).digest("hex")}"`,
      expiresAt: this.options.now(),
    };

    const stored = this.cache.set(tenant.id, built);
    return { ...(stored ?? built), fromCache: false };
  }
}

function concatBytes(chunks: readonly Uint8Array[]): Uint8Array {
  const total = chunks.reduce((sum, chunk) => sum + chunk.byteLength, 0);
  const body = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return body;
}
