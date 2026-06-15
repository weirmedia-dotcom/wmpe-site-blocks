import type { Meta } from "@storybook/react";
import faq_accordion from "@/blocks/faq_accordion";

const sample = {
  items: [
    {
      q: "Do you offer free in-home consultations?",
      a: "Yes — we measure and advise on-site across the Niagara region at no charge. You'll see fabric and material samples in your own light before deciding.",
    },
    {
      q: "What window coverings do you carry?",
      a: "We stock custom drapery, roller and roman shades, wood and faux-wood blinds, shutters, and motorized options from trusted Canadian and European mills.",
    },
    {
      q: "How long does a typical installation take?",
      a: "Most homes are completed in a single visit — usually two to three hours depending on the number of windows. We tidy up and haul away every scrap before we leave.",
    },
    {
      q: "Do you install motorized and smart-home blinds?",
      a: "We do. Our team programs battery and hardwired motors and can integrate them with most major smart-home systems so your shades move on schedule.",
    },
    {
      q: "Is there a warranty on your products?",
      a: "Every product carries the manufacturer's warranty, and our workmanship is guaranteed. If something isn't right, we come back and make it right.",
    },
    {
      q: "Which areas of Niagara do you serve?",
      a: "We serve St. Catharines, Niagara Falls, Welland, Thorold, Grimsby, and the surrounding communities throughout the region.",
    },
  ],
};

const meta: Meta = { title: "Blocks/FaqAccordion" };
export default meta;

// Kebab-keyed variants cannot be used as JSX tags directly — extract to consts.
const TwoColumn = faq_accordion["two-column"];
const Bordered = faq_accordion.bordered;
const BoxedMuted = faq_accordion["boxed-muted"];

export const Default = () => <faq_accordion.default {...sample} />;
export const TwoColumnStory = () => <TwoColumn {...sample} />;
export const BorderedStory = () => <Bordered {...sample} />;
export const BoxedMutedStory = () => <BoxedMuted {...sample} />;
