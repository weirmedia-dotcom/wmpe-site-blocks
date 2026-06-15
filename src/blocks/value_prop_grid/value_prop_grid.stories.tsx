import type { Meta } from "@storybook/react";
import value_prop_grid from "@/blocks/value_prop_grid";

const items = [
  {
    title: "Free in-home consultation",
    body: "We measure and advise on-site across Niagara so every window is a perfect fit.",
    icon: "home",
  },
  {
    title: "Made-to-measure precision",
    body: "Blinds, shades, drapery and shutters cut to your exact openings.",
    icon: "ruler",
  },
  {
    title: "Lifetime workmanship warranty",
    body: "Professional installation backed in writing for as long as you own your home.",
    icon: "shield-check",
  },
  {
    title: "Premium brands, local prices",
    body: "Hunter Douglas and trusted Canadian makers, sourced for the Niagara market.",
    icon: "award",
  },
  {
    title: "Showroom you can touch",
    body: "Feel fabrics and test lift systems before you commit at our St. Catharines studio.",
    icon: "store",
  },
  {
    title: "Motorization made simple",
    body: "Smart, cordless shades that work with a tap, a schedule or your voice.",
    icon: "zap",
  },
];

const meta: Meta = { title: "Blocks/ValuePropGrid" };
export default meta;

const Split = value_prop_grid["audience-split"];

export const Default = () => <value_prop_grid.default items={items} props={{ columns: 3 }} />;
export const AudienceSplit = () => <Split items={items} />;
export const Bordered = () => <value_prop_grid.bordered items={items} props={{ columns: 3 }} />;
export const Numbered = () => <value_prop_grid.numbered items={items.slice(0, 4)} props={{ columns: 4 }} />;
