import type { PageCandidate } from "../domain/page-candidate";
import type { PageSource } from "../domain/ports";

/** Resolves a page source only for the tenant that owns it. */
export class RoutingPageSource implements PageSource {
  constructor(private readonly sources: ReadonlyMap<string, PageSource>) {}

  listPages(tenantId: string): AsyncIterable<PageCandidate> {
    const source = this.sources.get(tenantId);
    if (!source) return emptyPages();
    return source.listPages(tenantId);
  }
}

async function* emptyPages(): AsyncIterable<never> {}
