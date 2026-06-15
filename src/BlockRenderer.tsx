import type { Block, Registry } from "@/types";
import { BLOCK_REGISTRY } from "@/registry";
export function BlockRenderer({ block, overrides, registry = BLOCK_REGISTRY }:
  { block: Block; overrides?: Registry; registry?: Registry }) {
  const variant = block.props?.variant ?? "default";
  const reg = { ...registry[block.blockType], ...overrides?.[block.blockType] };
  const Comp = (reg as any)?.[variant] ?? (reg as any)?.default;
  if (!Comp) {
    if (process.env.NODE_ENV !== "production") console.warn(`[blocks] no component for blockType="${block.blockType}"`);
    return null;
  }
  return <Comp {...(block.content as any)} props={block.props} />;
}
