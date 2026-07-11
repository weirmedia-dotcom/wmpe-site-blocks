export type BlockStyle = {
  vars?: Record<string, string>;
  css?: string;
  sizes?: { headline?: number; body?: number; eyebrow?: number };
  colors?: { headline?: string; body?: string; eyebrow?: string };
};
type Attrs = { "data-blk"?: string; style?: Record<string, string> };

function hasStyle(s: BlockStyle | undefined): s is BlockStyle {
  return !!s && (
    (!!s.vars && Object.keys(s.vars).length > 0) ||
    (!!s.css && s.css.trim().length > 0) ||
    (!!s.sizes && Object.keys(s.sizes).length > 0) ||
    (!!s.colors && Object.keys(s.colors).length > 0)
  );
}
export function blockAttrs(style: BlockStyle | undefined, index: number): Attrs {
  if (!hasStyle(style)) return {};
  const out: Attrs = { "data-blk": `b${index}` };
  if (style.vars && Object.keys(style.vars).length) out.style = style.vars;
  return out;
}

const SIZE_SELECTORS: Record<string, string> = {
  headline: ":is(h1,h2,h3)",
  body: ":is(p,li)",
  eyebrow: '[class*="eyebrow"]',
};
function sizeCss(sizes: BlockStyle["sizes"], i: number): string {
  if (!sizes) return "";
  return (["headline", "body", "eyebrow"] as const)
    .filter((k) => typeof sizes[k] === "number")
    .map((k) => `[data-blk="b${i}"] ${SIZE_SELECTORS[k]}{font-size:${sizes[k]}px}`)
    .join("\n");
}

const COLOR_SELECTORS: Record<string, string> = {
  headline: ":is(h1,h2,h3)",
  body: ":is(p,li)",
  eyebrow: '[class*="eyebrow"]',
};
function colorCss(colors: BlockStyle["colors"], i: number): string {
  if (!colors) return "";
  return (["headline", "body", "eyebrow"] as const)
    .filter((k) => typeof colors[k] === "string" && colors[k])
    .map((k) => `[data-blk="b${i}"] ${COLOR_SELECTORS[k]}{color:hsl(${colors[k]})}`)
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
