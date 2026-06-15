import type { VariantMap } from "../../types";
import Default from "./Default";
import AudienceSplit from "./AudienceSplit";
import Bordered from "./Bordered";
import Numbered from "./Numbered";

const value_prop_grid: VariantMap = {
  default: Default,
  "audience-split": AudienceSplit,
  bordered: Bordered,
  numbered: Numbered,
};

export default value_prop_grid;
