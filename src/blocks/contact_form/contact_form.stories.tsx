import type { Meta } from "@storybook/react";
import contact_form from "@/blocks/contact_form";

const sample = {
  intro:
    "Tell us about your windows and we'll be in touch within one business day.",
  fields: ["Name", "Email", "Phone", "Message"],
};

const meta: Meta = { title: "Blocks/ContactForm" };
export default meta;

// kebab-keyed variants extracted to PascalCase consts (can't be JSX tags directly)
const TwoColumn = contact_form["two-column"];
const SplitIntro = contact_form["split-intro"];

export const Default = () => <contact_form.default {...sample} />;
export const TwoColumnStory = () => <TwoColumn {...sample} />;
export const Boxed = () => <contact_form.boxed {...sample} />;
export const SplitIntroStory = () => <SplitIntro {...sample} />;
