export type FeedRow = {
  readonly pageUrl: string;
  readonly customLabel: string;
};

/** UTF-8 BOM plus the two columns Google Ads requires for a DSA page feed. */
export const CSV_HEADER = "\uFEFFPage URL,Custom label\r\n";

export function encodeFeedRows(rows: readonly FeedRow[]): string {
  let out = "";
  for (const row of rows) {
    out += `${escapeCsvField(row.pageUrl)},${escapeCsvField(row.customLabel)}\r\n`;
  }
  return out;
}

export function escapeCsvField(value: string): string {
  if (/[",\r\n]/.test(value)) {
    return `"${value.replace(/"/g, '""')}"`;
  }
  return value;
}
