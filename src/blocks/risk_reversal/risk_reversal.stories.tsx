import type { Meta } from "@storybook/react";
import risk_reversal from "@/blocks/risk_reversal";

const markdown = `**100% satisfaction guarantee.** If your blinds aren't perfect, we'll make it
right — no charge. Every Falls Decor installation is backed by a lifetime
workmanship warranty and a free in-home measure, so the only thing you risk is
loving your windows.`;

const meta: Meta = { title: "Blocks/RiskReversal" };
export default meta;

const BadgeRow = risk_reversal["badge-row"];

export const Default = () => <risk_reversal.default markdown={markdown} />;
export const Inline = () => <risk_reversal.inline markdown={markdown} />;
export const BadgeRowStory = () => <BadgeRow markdown={markdown} />;
