import type { VariantMap } from "@/types";
import Default from "./Default";
import TwoColumn from "./TwoColumn";
import Boxed from "./Boxed";
import SplitIntro from "./SplitIntro";

const contact_form: VariantMap = {
  default: Default,
  "two-column": TwoColumn,
  boxed: Boxed,
  "split-intro": SplitIntro,
};

export default contact_form;
