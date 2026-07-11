export type BlockStyle = { vars?: Record<string, string>; css?: string };
type Attrs = { "data-blk"?: string; style?: Record<string, string> };

function hasStyle(s: BlockStyle | undefined): s is BlockStyle {
  return !!s && ((!!s.vars && Object.keys(s.vars).length > 0) || (!!s.css && s.css.trim().length > 0));
}
export function blockAttrs(style: BlockStyle | undefined, index: number): Attrs {
  if (!hasStyle(style)) return {};
  const out: Attrs = { "data-blk": `b${index}` };
  if (style.vars && Object.keys(style.vars).length) out.style = style.vars;
  return out;
}
export function collectBlockCss(blocks: { style?: BlockStyle }[]): string {
  return blocks.map((b, i) => (b.style?.css && b.style.css.trim() ? `[data-blk="b${i}"]{ ${b.style.css} }` : ""))
    .filter(Boolean).join("\n");
}
export function hasAnyBlockStyle(blocks: { style?: BlockStyle }[]): boolean {
  return blocks.some((b) => hasStyle(b.style));
}
