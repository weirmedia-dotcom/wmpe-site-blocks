import type { Meta } from "@storybook/react";
import comparison_table from "@/blocks/comparison_table";

const columns = ["Feature", "Custom (Falls Decor)", "Big-box ready-made"];

const rows = [
  ["Made-to-measure fit", "yes", "no"],
  ["Material", "Premium hardwood & engineered wood", "Particleboard & vinyl"],
  ["Lifetime workmanship warranty", "yes", "no"],
  ["Professional in-home install", "yes", "no"],
  ["Lead time", "3–4 weeks", "In stock"],
  ["Design consultation", "yes", "—"],
  ["Price point", "Investment", "Budget"],
];

const meta: Meta = { title: "Blocks/ComparisonTable" };
export default meta;

const CardGrid = comparison_table["card-grid"];
const HighlightFirst = comparison_table["highlight-first"];

export const Default = () => <comparison_table.default columns={columns} rows={rows} />;
export const CardGridStory = () => <CardGrid columns={columns} rows={rows} />;
export const HighlightFirstStory = () => <HighlightFirst columns={columns} rows={rows} />;
export const Checkmark = () => <comparison_table.checkmark columns={columns} rows={rows} />;
