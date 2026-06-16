import type { Block, Registry } from "./types";
import { BLOCK_REGISTRY } from "./registry";
export function BlockRenderer({ block, overrides, registry = BLOCK_REGISTRY }:
  { block: Block; overrides?: Registry; registry?: Registry }) {
  const variant = block.props?.variant ?? "default";
  // Override-first resolution: if a client overrode this blockType, prefer THEIR
  // component (their variant, else their default) over the package — even when the
  // content sets a named variant the override didn't define. A client overriding a
  // blockType means "use my bespoke component for it." Falls back to the package
  // (its variant, else its default) only when there is no override for the type.
  const ov = overrides?.[block.blockType] as any;
  const pkg = (registry as any)[block.blockType];
  const Comp =
    (ov && (ov[variant] ?? ov.default)) ??
    (pkg && (pkg[variant] ?? pkg.default));
  if (!Comp) {
    if (process.env.NODE_ENV !== "production") console.warn(`[blocks] no component for blockType="${block.blockType}"`);
    return null;
  }
  return <Comp {...(block.content as any)} props={block.props} />;
}
