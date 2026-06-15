import type { Meta } from "@storybook/react";
import step_list from "@/blocks/step_list";

const steps = [
  { title: "Book your consult", body: "Pick a time that suits you; we come to your home." },
  { title: "Measure & advise", body: "We take precise measurements and recommend options." },
  { title: "Custom order", body: "Your window coverings are made to spec." },
  { title: "Professional install", body: "We fit everything and tidy up." },
];

const meta: Meta = { title: "Blocks/StepList" };
export default meta;

export const Default = () => <step_list.default steps={steps} />;
export const Horizontal = () => <step_list.horizontal steps={steps} />;
export const Cards = () => <step_list.cards steps={steps} />;
export const Connected = () => <step_list.connected steps={steps} />;
