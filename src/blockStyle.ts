export type BlockStyle = {
  vars?: Record<string, string>;
  css?: string;
  sizes?: { headline?: number; body?: number; eyebrow?: number };
  colors?: { headline?: string; body?: string; eyebrow?: string };
};
type Attrs = { "data-blk"?: string; "data-blktype"?: string; style?: Record<string, string> };

function hasStyle(s: BlockStyle | undefined): s is BlockStyle {
  return !!s && (
    (!!s.vars && Object.keys(s.vars).length > 0) ||
    (!!s.css && s.css.trim().length > 0) ||
    (!!s.sizes && Object.keys(s.sizes).length > 0) ||
    (!!s.colors && Object.keys(s.colors).length > 0)
  );
}
export function blockAttrs(style: BlockStyle | undefined, index: number, force = false, blockType?: string): Attrs {
  const styled = hasStyle(style);
  if (!styled && !force) return {};
  const out: Attrs = { "data-blk": `b${index}` };
  if (blockType) out["data-blktype"] = blockType;
  if (style?.vars && Object.keys(style.vars).length) out.style = style.vars;
  return out;
}

const SIZE_SELECTORS: Record<string, string> = {
  headline: ":is(h1,h2,h3)",
  body: ":is(p,li)",
  eyebrow: '[class*="eyebrow"]',
};
function sizeCssFor(sel: string, sizes: BlockStyle["sizes"]): string {
  if (!sizes) return "";
  return (["headline", "body", "eyebrow"] as const)
    .filter((k) => typeof sizes[k] === "number")
    .map((k) => `${sel} ${SIZE_SELECTORS[k]}{font-size:${sizes[k]}px}`)
    .join("\n");
}
function sizeCss(sizes: BlockStyle["sizes"], i: number): string {
  return sizeCssFor(`[data-blk="b${i}"]`, sizes);
}

const COLOR_SELECTORS: Record<string, string> = {
  headline: ":is(h1,h2,h3)",
  body: ":is(p,li)",
  eyebrow: '[class*="eyebrow"]',
};
function colorCssFor(sel: string, colors: BlockStyle["colors"]): string {
  if (!colors) return "";
  return (["headline", "body", "eyebrow"] as const)
    .filter((k) => typeof colors[k] === "string" && colors[k])
    .map((k) => `${sel} ${COLOR_SELECTORS[k]}{color:hsl(${colors[k]})}`)
    .join("\n");
}
function colorCss(colors: BlockStyle["colors"], i: number): string {
  return colorCssFor(`[data-blk="b${i}"]`, colors);
}

/* Type-level (block-type-scoped) design. Instance rules from collectBlockCss
 * are emitted separately and after this, so instance CSS wins on specificity
 * ties by source order; instance vars are inline on the wrapper and always win. */
export function collectTypeCss(typeDesign: Record<string, BlockStyle>): string {
  return Object.entries(typeDesign)
    .map(([type, s]) => {
      const sel = `[data-blktype="${type}"]`;
      const parts: string[] = [];
      if (s?.css && s.css.trim()) parts.push(`${sel}{ ${s.css.replace(/<\/style>/gi, "")} }`);
      const sz = sizeCssFor(sel, s?.sizes);
      if (sz) parts.push(sz);
      const col = colorCssFor(sel, s?.colors);
      if (col) parts.push(col);
      if (s?.vars && Object.keys(s.vars).length) {
        const vars = Object.entries(s.vars)
          .map(([k, v]) => `${k}:${v}`)
          .join(";");
        parts.push(`${sel}{${vars}}`);
      }
      return parts.join("\n");
    })
    .filter(Boolean)
    .join("\n");
}

export function collectBlockCss(blocks: { style?: BlockStyle }[]): string {
  return blocks.map((b, i) => {
    const parts: string[] = [];
    if (b.style?.css && b.style.css.trim()) {
      const safe = b.style.css.replace(/<\/style>/gi, "");
      parts.push(`[data-blk="b${i}"]{ ${safe} }`);
    }
    const sz = sizeCss(b.style?.sizes, i);
    if (sz) parts.push(sz);
    const col = colorCss(b.style?.colors, i);
    if (col) parts.push(col);
    return parts.join("\n");
  })
    .filter(Boolean).join("\n");
}
export function hasAnyBlockStyle(blocks: { style?: BlockStyle }[]): boolean {
  return blocks.some((b) => hasStyle(b.style));
}
