import type { Meta } from "@storybook/react";
import hero from "@/blocks/hero";
const sample = { headline: "Window fashions that fit your home", subhead: "Custom blinds, shades & drapery in Niagara.", cta_label: "Book a consult", cta_href: "/contact" };
const meta: Meta = { title: "Blocks/Hero" }; export default meta;
const FullBleedVariant = hero["full-bleed"];
export const Default = () => <hero.default {...sample} />;
export const Centered = () => <hero.centered {...sample} />;
export const FullBleed = () => <FullBleedVariant {...sample} />;
export const Minimal = () => <hero.minimal {...sample} />;
