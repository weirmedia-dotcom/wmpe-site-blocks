import type { Page, Registry } from "./types";
import { BlockRenderer } from "./BlockRenderer";
import { collectBlockCss, hasAnyBlockStyle } from "./blockStyle";
export function PageRenderer({ page, overrides, registry }:
  { page: Page; overrides?: Registry; registry?: Registry }) {
  return (
    <>
      {hasAnyBlockStyle(page.blocks) && (
        <style dangerouslySetInnerHTML={{ __html: collectBlockCss(page.blocks) }} />
      )}
      {page.blocks.map((b, i) => <BlockRenderer key={i} index={i} block={b} overrides={overrides} registry={registry} />)}
    </>
  );
}
