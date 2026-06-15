import type { VariantMap } from "@/types";
import Default from "./Default";
import TwoColumn from "./TwoColumn";
import Bordered from "./Bordered";
import BoxedMuted from "./BoxedMuted";

const faq_accordion: VariantMap = {
  default: Default,
  "two-column": TwoColumn,
  bordered: Bordered,
  "boxed-muted": BoxedMuted,
};

export default faq_accordion;
