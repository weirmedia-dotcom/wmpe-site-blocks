import type { Meta } from "@storybook/react";
import intro_prose from "@/blocks/intro_prose";

const markdown = `## Custom window coverings, made for Niagara homes

Falls Decor is the Niagara region's destination for **made-to-measure blinds,
shades, shutters and drapery**. From St. Catharines to Niagara-on-the-Lake, we
help homeowners dress every window with coverings that fit the room, the light
and the way you live.

Our designers visit your home, measure each opening to the millimetre and walk
you through fabrics and lift systems you can actually see and touch. The result
is window treatments that look tailored, last for years and feel completely
your own.`;

const meta: Meta = { title: "Blocks/IntroProse" };
export default meta;

export const Default = () => <intro_prose.default markdown={markdown} />;
export const Lead = () => <intro_prose.lead markdown={markdown} />;
export const Narrow = () => <intro_prose.narrow markdown={markdown} />;
