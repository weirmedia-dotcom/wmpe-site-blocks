import type { VariantMap } from "../../types";
import Default from "./Default";
import Horizontal from "./Horizontal";
import Cards from "./Cards";
import Connected from "./Connected";

const step_list: VariantMap = {
  default: Default,
  horizontal: Horizontal,
  cards: Cards,
  connected: Connected,
};

export default step_list;
