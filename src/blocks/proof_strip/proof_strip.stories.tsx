import type { Meta } from "@storybook/react";
import proof_strip from "@/blocks/proof_strip";

const sample = {
  items: [
    {
      quote:
        "They measured, advised, and installed flawlessly. Our living room finally feels finished.",
      attribution: "Sarah M., St. Catharines",
    },
    {
      quote:
        "From the first consult to installation, the whole team was friendly, punctual, and professional.",
      attribution: "David R., Niagara Falls",
    },
    {
      quote:
        "The new shades transformed how light moves through the house. We couldn't be happier.",
      attribution: "Priya K., Welland",
    },
    {
      quote:
        "Honest pricing and gorgeous craftsmanship. We've already recommended them to two neighbours.",
      attribution: "Tom & Lisa B., Thorold",
    },
  ],
};

const meta: Meta = { title: "Blocks/ProofStrip" };
export default meta;

const SingleSpotlightVariant = proof_strip["single-spotlight"];
const LogosAndQuoteVariant = proof_strip["logos-and-quote"];
export const Default = () => <proof_strip.default {...sample} />;
export const Marquee = () => <proof_strip.marquee {...sample} />;
export const SingleSpotlight = () => <SingleSpotlightVariant {...sample} />;
export const LogosAndQuote = () => <LogosAndQuoteVariant {...sample} />;
