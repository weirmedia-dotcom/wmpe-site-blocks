import type { VariantMap } from "../../types";
import Default from "./Default";
import CardGrid from "./CardGrid";
import HighlightFirst from "./HighlightFirst";
import Checkmark from "./Checkmark";

const comparison_table: VariantMap = {
  default: Default,
  "card-grid": CardGrid,
  "highlight-first": HighlightFirst,
  checkmark: Checkmark,
};

export default comparison_table;
