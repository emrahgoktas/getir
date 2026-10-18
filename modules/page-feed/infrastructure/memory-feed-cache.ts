import type { CachedFeed, FeedCache } from "../domain/ports";

type CacheOptions = {
  ttlMs: number;
  maxEntries: number;
  maxBytes: number;
  now: () => number;
};

/**
 * Bounded in-process cache for cron and Google Sheets refetches.
 * Expired and oldest tenant entries are dropped so the map cannot grow
 * without a limit. Access keys are not part of the cache key.
 */
export class MemoryFeedCache implements FeedCache {
  private readonly entries = new Map<string, CachedFeed>();

  constructor(private readonly options: CacheOptions) {}

  get(tenantId: string): CachedFeed | null {
    const entry = this.entries.get(tenantId);
    if (!entry) return null;
    if (this.options.now() >= entry.expiresAt) {
      this.entries.delete(tenantId);
      return null;
    }

    this.entries.delete(tenantId);
    this.entries.set(tenantId, entry);
    return entry;
  }

  set(tenantId: string, entry: CachedFeed): CachedFeed | null {
    if (entry.body.byteLength > this.options.maxBytes) return null;

    const stored: CachedFeed = {
      ...entry,
      expiresAt: this.options.now() + this.options.ttlMs,
    };

    this.entries.delete(tenantId);
    this.entries.set(tenantId, stored);
    this.evict();

    return this.entries.get(tenantId) ?? null;
  }

  private evict(): void {
    for (const [tenantId, entry] of this.entries) {
      if (this.options.now() >= entry.expiresAt) this.entries.delete(tenantId);
    }

    while (this.entries.size > this.options.maxEntries || this.totalBytes() > this.options.maxBytes) {
      const oldest = this.entries.keys().next().value;
      if (oldest === undefined) return;
      this.entries.delete(oldest);
    }
  }

  private totalBytes(): number {
    let total = 0;
    for (const entry of this.entries.values()) total += entry.body.byteLength;
    return total;
  }
}
