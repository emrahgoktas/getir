const MAX_URL_LENGTH = 2048;

/**
 * Builds the canonical HTTPS URL for one tenant origin.
 * Query strings and fragments are removed so tracking parameters never
 * reach Google Ads. Paths cannot escape the tenant origin.
 */
export function tryPageUrl(origin: string, path: string): string | null {
  if (!isRelativePath(path)) return null;

  let url: URL;
  try {
    url = new URL(path, origin);
  } catch {
    return null;
  }

  if (url.protocol !== "https:") return null;
  if (url.origin !== origin) return null;
  if (url.username || url.password) return null;
  if (url.pathname.includes("//")) return null;

  url.search = "";
  url.hash = "";

  const href = url.href;
  if (href.length > MAX_URL_LENGTH) return null;
  return href;
}

export function parseHttpsOrigin(value: string): string | null {
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (url.protocol !== "https:") return null;
  if (url.username || url.password) return null;
  if (url.search || url.hash) return null;
  if (url.pathname !== "/" && url.pathname !== "") return null;
  return url.origin;
}

function isRelativePath(path: string): boolean {
  if (!path.startsWith("/")) return false;
  if (path.startsWith("//")) return false;
  if (path.includes("\\") || path.includes("..")) return false;
  if (path.includes("?") || path.includes("#")) return false;
  return true;
}
