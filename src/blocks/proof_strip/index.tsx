import type { VariantMap } from "@/types";
import Default from "./Default";
import Marquee from "./Marquee";
import SingleSpotlight from "./SingleSpotlight";
import LogosAndQuote from "./LogosAndQuote";
const proof_strip: VariantMap = {
  default: Default,
  marquee: Marquee,
  "single-spotlight": SingleSpotlight,
  "logos-and-quote": LogosAndQuote,
};
export default proof_strip;
