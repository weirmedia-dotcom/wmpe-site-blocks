import type { Registry } from "@/types";
import hero from "@/blocks/hero";
import intro_prose from "@/blocks/intro_prose";
import definition_answer from "@/blocks/definition_answer";
import value_prop_grid from "@/blocks/value_prop_grid";
import step_list from "@/blocks/step_list";
import comparison_table from "@/blocks/comparison_table";
import faq_accordion from "@/blocks/faq_accordion";
import proof_strip from "@/blocks/proof_strip";
import cta_band from "@/blocks/cta_band";
import risk_reversal from "@/blocks/risk_reversal";
import internal_link_cluster from "@/blocks/internal_link_cluster";
import contact_form from "@/blocks/contact_form";
import team_bio from "@/blocks/team_bio";
import legal_prose from "@/blocks/legal_prose";
import image_gallery from "@/blocks/image_gallery";

// Every WCE block type → its variant map. All 15 registered here.
export const BLOCK_REGISTRY: Registry = {
  hero,
  intro_prose,
  definition_answer,
  value_prop_grid,
  step_list,
  comparison_table,
  faq_accordion,
  proof_strip,
  cta_band,
  risk_reversal,
  internal_link_cluster,
  contact_form,
  team_bio,
  legal_prose,
  image_gallery,
};
