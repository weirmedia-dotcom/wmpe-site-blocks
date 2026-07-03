import { BLOCK_REGISTRY } from "@/registry";
import type { BlockType } from "@/types";

const ALL: BlockType[] = [
  "hero", "intro_prose", "definition_answer", "value_prop_grid", "step_list",
  "comparison_table", "faq_accordion", "proof_strip", "cta_band", "risk_reversal",
  "internal_link_cluster", "contact_form", "team_bio", "legal_prose", "image_gallery",
  "image_content_split", "before_after", "stat_banner", "product_card_grid", "colour_palette",
  "media_list_row", "category_tiles", "visit_us", "promo_banner", "image_ticker",
  "mf_paints_band", "colour_visualizer", "credential_strip", "testimonial",
];

test("registry has all 29 block types, each with a default variant", () => {
  for (const t of ALL) {
    expect(BLOCK_REGISTRY[t], `missing block: ${t}`).toBeTruthy();
    expect(BLOCK_REGISTRY[t]!.default, `missing default variant: ${t}`).toBeTruthy();
  }
  expect(Object.keys(BLOCK_REGISTRY).sort()).toEqual([...ALL].sort());
});

// Core is structure-only: each block exposes a single `default` skeleton. WCE
// `props.variant` strings resolve against the CLIENT override (override[variant]
// ?? override.default); in core they fall back to `default` (see BlockRenderer).
// So the package no longer ships named variants.
test("every block exposes only a default in core", () => {
  for (const t of ALL) {
    expect(Object.keys(BLOCK_REGISTRY[t]!)).toEqual(["default"]);
  }
});
