/** Publication state. Draft and inactive pages never enter the DSA feed. */
export type PageStatus = "active" | "inactive" | "draft";

/**
 * Stock applies to products. Services and content pages use `not_tracked`:
 * eligibility then depends on publication status, not inventory.
 */
export type StockStatus = "in_stock" | "out_of_stock" | "not_tracked";

export type PageKind =
  | "home"
  | "region"
  | "neighborhood"
  | "blog_index"
  | "blog_post"
  | "about"
  | "faq"
  | "contact"
  | "legal"
  | "cart"
  | "account"
  | "other";

/** A landing page as stored, before URL and label normalization. */
export type PageCandidate = {
  readonly tenantId: string;
  readonly path: string;
  readonly status: PageStatus;
  readonly indexable: boolean;
  readonly stock: StockStatus;
  readonly kind: PageKind;
  readonly labels: readonly string[];
};
