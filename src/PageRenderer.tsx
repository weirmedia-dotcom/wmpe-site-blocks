import type { Page, Registry } from "./types";
import { BlockRenderer } from "./BlockRenderer";
export function PageRenderer({ page, overrides, registry }:
  { page: Page; overrides?: Registry; registry?: Registry }) {
  return <>{page.blocks.map((b, i) => <BlockRenderer key={i} block={b} overrides={overrides} registry={registry} />)}</>;
}
