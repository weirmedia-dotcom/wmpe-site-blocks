import type { VariantMap } from "@/types";
import Default from "./Default";
import Card from "./Card";
import Highlight from "./Highlight";
const definition_answer: VariantMap = {
  default: Default,
  card: Card,
  highlight: Highlight,
};
export default definition_answer;
