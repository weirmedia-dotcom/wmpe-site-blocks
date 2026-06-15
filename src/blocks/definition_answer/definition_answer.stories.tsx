import type { Meta } from "@storybook/react";
import definition_answer from "@/blocks/definition_answer";

const sample = {
  question: "What are cellular shades?",
  answer:
    "Cellular (honeycomb) shades are a window covering whose pleats form air pockets that insulate the window — cutting heat loss in winter and glare in summer. They're a popular energy-efficient choice for Niagara homes.",
};

const meta: Meta = { title: "Blocks/DefinitionAnswer" };
export default meta;

export const Default = () => <definition_answer.default {...sample} />;
export const Card = () => <definition_answer.card {...sample} />;
export const Highlight = () => <definition_answer.highlight {...sample} />;
