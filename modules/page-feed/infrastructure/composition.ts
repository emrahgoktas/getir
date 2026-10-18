import { posts } from "../../../data/posts";
import { regions } from "../../../data/regions";
import { SITE_URL } from "../../../lib/constants";
import { PageFeedService } from "../application/page-feed-service";
import { createDefaultEligibilityPolicy } from "../domain/eligibility-policy";
import { ContentPageRepository } from "./content-page-repository";
import { MemoryFeedCache } from "./memory-feed-cache";
import { RoutingPageSource } from "./routing-page-source";
import { loadTenantRegistry, type PageFeedEnv, type TenantRegistry } from "./tenant-registry";

const DEFAULT_CACHE_TTL_SECONDS = 300;
const DEFAULT_MAX_CACHE_BYTES = 8 * 1024 * 1024;
const DEFAULT_MAX_FEED_BYTES = 32 * 1024 * 1024;
const CACHE_BYTE_CEILING = 32 * 1024 * 1024;
const FEED_BYTE_CEILING = 64 * 1024 * 1024;

export type PageFeedRuntime = {
  readonly registry: TenantRegistry;
  readonly service: PageFeedService;
  readonly cacheTtlSeconds: number;
};

export function createPageFeedRuntime(env: PageFeedEnv): PageFeedRuntime {
  const registry = loadTenantRegistry(env, SITE_URL);
  const sources = new Map<string, ContentPageRepository>();

  for (const id of registry.ids()) {
    sources.set(
      id,
      new ContentPageRepository({
        tenantId: id,
        regions,
        posts,
      }),
    );
  }

  const cacheTtlSeconds = parseBoundedInt(
    env.PAGE_FEED_CACHE_TTL_SECONDS,
    DEFAULT_CACHE_TTL_SECONDS,
    86_400,
  );
  const now = () => Date.now();
  const cache = new MemoryFeedCache({
    ttlMs: cacheTtlSeconds * 1000,
    maxEntries: 16,
    maxBytes: parseBoundedInt(
      env.PAGE_FEED_MAX_CACHE_BYTES,
      DEFAULT_MAX_CACHE_BYTES,
      CACHE_BYTE_CEILING,
    ),
    now,
  });

  const service = new PageFeedService(
    new RoutingPageSource(sources),
    createDefaultEligibilityPolicy(),
    cache,
    {
      chunkSize: 500,
      maxFeedBytes: parseBoundedInt(
        env.PAGE_FEED_MAX_FEED_BYTES,
        DEFAULT_MAX_FEED_BYTES,
        FEED_BYTE_CEILING,
      ),
      now,
    },
  );

  return { registry, service, cacheTtlSeconds };
}

let runtime: PageFeedRuntime | undefined;

export function getPageFeedRuntime(): PageFeedRuntime {
  if (!runtime) runtime = createPageFeedRuntime(readProcessEnv());
  return runtime;
}

function readProcessEnv(): PageFeedEnv {
  const env = process.env as Record<string, string | undefined>;
  return {
    PAGE_FEED_ACCESS_KEY: env.PAGE_FEED_ACCESS_KEY,
    PAGE_FEED_TENANT_ID: env.PAGE_FEED_TENANT_ID,
    PAGE_FEED_ORIGIN: env.PAGE_FEED_ORIGIN,
    PAGE_FEED_CACHE_TTL_SECONDS: env.PAGE_FEED_CACHE_TTL_SECONDS,
    PAGE_FEED_MAX_CACHE_BYTES: env.PAGE_FEED_MAX_CACHE_BYTES,
    PAGE_FEED_MAX_FEED_BYTES: env.PAGE_FEED_MAX_FEED_BYTES,
  };
}

function parseBoundedInt(raw: string | undefined, fallback: number, max: number): number {
  if (!raw) return fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value <= 0) return fallback;
  return Math.min(value, max);
}
