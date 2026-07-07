/**
 * Validate a content-supplied URL before it is used as an iframe `src`.
 *
 * Content (site_pages) is authored via WCE generation, the E4 CMS block
 * editor, or manual DB edits — none of which currently constrain the value
 * of an embed-URL field. Only allow https: URLs so a stray `javascript:`,
 * `data:`, or `http:` (mixed-content / no-TLS) value can't be rendered as a
 * live iframe source. Returns null when the value fails validation; callers
 * should fall back to not rendering the iframe at all.
 */
export function safeEmbedUrl(url: string | undefined | null): string | null {
  if (!url) return null;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" ? url : null;
  } catch {
    return null;
  }
}
