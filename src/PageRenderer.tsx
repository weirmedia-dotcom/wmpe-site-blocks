import type { Page, Registry } from "./types";
import { BlockRenderer } from "./BlockRenderer";
import { collectBlockCss, collectTypeCss, hasAnyBlockStyle, type BlockStyle } from "./blockStyle";
export function PageRenderer({ page, overrides, registry, typeDesign = {} }:
  { page: Page; overrides?: Registry; registry?: Registry; typeDesign?: Record<string, BlockStyle> }) {
  return (
    <>
      {Object.keys(typeDesign).length > 0 && (
        <style dangerouslySetInnerHTML={{ __html: collectTypeCss(typeDesign) }} />
      )}
      {hasAnyBlockStyle(page.blocks) && (
        <style dangerouslySetInnerHTML={{ __html: collectBlockCss(page.blocks) }} />
      )}
      {page.blocks.map((b, i) => <BlockRenderer key={i} index={i} block={b} overrides={overrides} registry={registry} forceAttrs={!!typeDesign[b.blockType]} />)}
    </>
  );
}
