import type { PageCandidate } from "./page-candidate";

/** Tenant-scoped page catalog. Implementations must not leak other tenants. */
export interface PageSource {
  listPages(tenantId: string): AsyncIterable<PageCandidate>;
}

export type CachedFeed = {
  readonly body: Uint8Array;
  readonly rowCount: number;
  readonly skipped: number;
  readonly etag: string;
  readonly expiresAt: number;
};

/** Process-local feed cache. Keys are tenant ids, never raw access keys. */
export interface FeedCache {
  get(tenantId: string): CachedFeed | null;
  /** Returns the stored entry, or null when the body exceeds the cache budget. */
  set(tenantId: string, entry: CachedFeed): CachedFeed | null;
}

export type TenantScope = {
  readonly id: string;
  readonly origin: string;
};
