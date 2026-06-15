import type { Meta } from "@storybook/react";
import team_bio from "@/blocks/team_bio";

const sample = {
  name: "Jane Falls",
  role: "Founder & Lead Designer",
  bio: "Jane has dressed Niagara windows for over 15 years, blending an eye for fabric with a craftsperson's precision.",
};

const meta: Meta = { title: "Blocks/TeamBio" };
export default meta;

const QuoteStyleVariant = team_bio["quote-style"];
export const Default = () => <team_bio.default {...sample} />;
export const Card = () => <team_bio.card {...sample} />;
export const Centered = () => <team_bio.centered {...sample} />;
export const QuoteStyle = () => <QuoteStyleVariant {...sample} />;
