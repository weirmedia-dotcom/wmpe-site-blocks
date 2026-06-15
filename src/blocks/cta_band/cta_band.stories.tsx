import type { Meta } from "@storybook/react";
import cta_band from "@/blocks/cta_band";
const sample = { headline: "Ready to transform your windows?", cta_label: "Book a free consult", cta_href: "/contact" };
const meta: Meta = { title: "Blocks/CtaBand" }; export default meta;
export const Default = () => <cta_band.default {...sample} />;
export const Split = () => <cta_band.split {...sample} />;
export const Boxed = () => <cta_band.boxed {...sample} />;
export const Minimal = () => <cta_band.minimal {...sample} />;
