import type { VariantMap } from "@/types";
import Default from "./Default";
import Card from "./Card";
import Centered from "./Centered";
import QuoteStyle from "./QuoteStyle";
const team_bio: VariantMap = {
  default: Default,
  card: Card,
  centered: Centered,
  "quote-style": QuoteStyle,
};
export default team_bio;
