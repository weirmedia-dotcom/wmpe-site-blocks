import { BLOCK_REGISTRY } from "@/registry";
import type { BlockType } from "@/types";

const ALL: BlockType[] = [
  "hero", "intro_prose", "definition_answer", "value_prop_grid", "step_list",
  "comparison_table", "faq_accordion", "proof_strip", "cta_band", "risk_reversal",
  "internal_link_cluster", "contact_form", "team_bio", "legal_prose", "image_gallery",
];

test("registry has all 15 block types, each with a default variant", () => {
  for (const t of ALL) {
    expect(BLOCK_REGISTRY[t], `missing block: ${t}`).toBeTruthy();
    expect(BLOCK_REGISTRY[t]!.default, `missing default variant: ${t}`).toBeTruthy();
  }
  expect(Object.keys(BLOCK_REGISTRY).sort()).toEqual([...ALL].sort());
});

test("WCE-emitted named variants exist", () => {
  expect((BLOCK_REGISTRY.hero as any).centered).toBeTruthy();
  expect((BLOCK_REGISTRY.value_prop_grid as any)["audience-split"]).toBeTruthy();
});
