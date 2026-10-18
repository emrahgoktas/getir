import type { Region } from "../../../data/regions";
import type { PageCandidate, PageStatus } from "../domain/page-candidate";
import type { PageSource } from "../domain/ports";

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type CatalogPost = {
  readonly slug: string;
  readonly status?: PageStatus;
  readonly indexable?: boolean;
};

export type ContentCatalog = {
  readonly tenantId: string;
  readonly regions: readonly Region[];
  readonly posts: readonly CatalogPost[];
};

/**
 * Maps the site's static catalog into page candidates for one tenant.
 * Rows are yielded one at a time; the region tree is not copied into a
 * second full list before the feed service filters it.
 */
export class ContentPageRepository implements PageSource {
  constructor(private readonly catalog: ContentCatalog) {}

  async *listPages(tenantId: string): AsyncIterable<PageCandidate> {
    if (tenantId !== this.catalog.tenantId) return;

    const tenantIdBound = this.catalog.tenantId;

    yield page(tenantIdBound, "/", "home", ["anasayfa", "hizmet", "yuksek-oncelik"]);
    yield page(tenantIdBound, "/hakkimizda", "about", ["kurumsal"]);
    yield page(tenantIdBound, "/sss", "faq", ["sss", "icerik"]);
    yield page(tenantIdBound, "/blog", "blog_index", ["blog", "icerik"]);
    yield page(tenantIdBound, "/iletisim", "contact", ["iletisim"]);
    yield page(tenantIdBound, "/gizlilik-politikasi", "legal", ["gizlilik"]);
    yield page(tenantIdBound, "/hizmet-sartlari", "legal", ["hizmet-sartlari"]);

    for (const region of this.catalog.regions) {
      if (!SLUG.test(region.slug)) continue;

      yield page(tenantIdBound, `/cilingir/${region.slug}`, "region", [
        "bolge",
        region.slug,
        "hizmet",
      ]);

      for (const neighborhood of region.neighborhoods) {
        if (!SLUG.test(neighborhood.slug)) continue;
        yield page(
          tenantIdBound,
          `/cilingir/${region.slug}/${neighborhood.slug}`,
          "neighborhood",
          ["mahalle", region.slug, neighborhood.slug, "hizmet", "acil"],
        );
      }
    }

    for (const post of this.catalog.posts) {
      if (!SLUG.test(post.slug)) continue;
      const status = post.status ?? "active";
      const indexable = post.indexable ?? status === "active";
      yield {
        tenantId: tenantIdBound,
        path: `/blog/${post.slug}`,
        status,
        indexable,
        stock: "not_tracked",
        kind: "blog_post",
        labels: ["blog", "icerik"],
      };
    }
  }
}

function page(
  tenantId: string,
  path: string,
  kind: PageCandidate["kind"],
  labels: readonly string[],
): PageCandidate {
  return {
    tenantId,
    path,
    status: "active",
    indexable: true,
    stock: "not_tracked",
    kind,
    labels,
  };
}
