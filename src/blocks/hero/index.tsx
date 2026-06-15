import type { VariantMap } from "@/types";
import Default from "./Default";
import Centered from "./Centered";
import FullBleed from "./FullBleed";
import Minimal from "./Minimal";
const hero: VariantMap = { default: Default, centered: Centered, "full-bleed": FullBleed, minimal: Minimal };
export default hero;
