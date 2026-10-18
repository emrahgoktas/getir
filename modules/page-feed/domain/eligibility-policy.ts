import type { PageCandidate, PageKind } from "./page-candidate";

export type ExclusionReason =
  | "not_active"
  | "not_indexable"
  | "out_of_stock"
  | "excluded_url";

export type EligibilityDecision =
  | { include: true }
  | { include: false; reason: ExclusionReason };

export interface EligibilityPolicy {
  evaluate(page: PageCandidate): EligibilityDecision;
}

/**
 * Paths that must never be DSA landing pages.
 * Match is exact or a child path (`/sepet` and `/sepet/odeme`, not `/sepetci`).
 */
export const DEFAULT_EXCLUDED_PATHS = [
  "/iletisim",
  "/gizlilik-politikasi",
  "/gizlilik",
  "/privacy",
  "/hizmet-sartlari",
  "/sepet",
  "/cart",
  "/checkout",
  "/odeme",
  "/hesabim",
  "/hesap",
  "/account",
  "/giris",
  "/login",
  "/kayit",
  "/register",
  "/uye-ol",
] as const;

const DEFAULT_EXCLUDED_KINDS: readonly PageKind[] = [
  "contact",
  "cart",
  "account",
  "legal",
];

type PolicyOptions = {
  excludedKinds: readonly PageKind[];
  excludedPaths: readonly string[];
};

export function createDefaultEligibilityPolicy(): EligibilityPolicy {
  return new DefaultEligibilityPolicy({
    excludedKinds: DEFAULT_EXCLUDED_KINDS,
    excludedPaths: DEFAULT_EXCLUDED_PATHS,
  });
}

export class DefaultEligibilityPolicy implements EligibilityPolicy {
  constructor(private readonly options: PolicyOptions) {}

  evaluate(page: PageCandidate): EligibilityDecision {
    if (page.status !== "active") return { include: false, reason: "not_active" };
    if (!page.indexable) return { include: false, reason: "not_indexable" };
    if (page.stock === "out_of_stock") {
      return { include: false, reason: "out_of_stock" };
    }
    if (this.options.excludedKinds.includes(page.kind)) {
      return { include: false, reason: "excluded_url" };
    }
    if (this.isExcludedPath(page.path)) {
      return { include: false, reason: "excluded_url" };
    }
    return { include: true };
  }

  private isExcludedPath(path: string): boolean {
    return this.options.excludedPaths.some(
      (prefix) => path === prefix || path.startsWith(`${prefix}/`),
    );
  }
}
