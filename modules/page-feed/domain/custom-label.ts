import type { PageCandidate } from "./page-candidate";

/** Google Ads allows at most 20 custom labels on a single page-feed URL. */
export const MAX_CUSTOM_LABELS = 20;

const MAX_LABEL_LENGTH = 80;

/**
 * Google Ads separates page-feed labels with a semicolon.
 * Commas would also break the CSV column, so they are not used as separators.
 */
export function formatCustomLabels(rawLabels: readonly string[]): string {
  const unique: string[] = [];
  const seen = new Set<string>();

  for (const raw of rawLabels) {
    const label = normalizeLabel(raw);
    if (!label || seen.has(label)) continue;
    seen.add(label);
    unique.push(label);
    if (unique.length === MAX_CUSTOM_LABELS) break;
  }

  return unique.join(";");
}

export function labelsForCandidate(page: PageCandidate): string {
  const labels =
    page.stock === "in_stock" ? [...page.labels, "stokta"] : page.labels;
  return formatCustomLabels(labels);
}

function normalizeLabel(raw: string): string | null {
  const value = raw
    .trim()
    .toLowerCase()
    .replace(/[;\r\n",]/g, "-")
    .replace(/\s+/g, "-");

  if (!value || value.length > MAX_LABEL_LENGTH) return null;
  return value;
}
