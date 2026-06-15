import type { VariantMap } from "@/types";
import Default from "./Default";
import Inline from "./Inline";
import BadgeRow from "./BadgeRow";

const risk_reversal: VariantMap = {
  default: Default,
  inline: Inline,
  "badge-row": BadgeRow,
};

export default risk_reversal;
