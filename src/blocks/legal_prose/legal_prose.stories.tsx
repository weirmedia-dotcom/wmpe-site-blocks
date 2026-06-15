import type { Meta } from "@storybook/react";
import legal_prose from "@/blocks/legal_prose";

const markdown = `## Privacy Policy

Last updated June 2026.

Falls Decor ("we", "us") respects your privacy. This policy explains what
information we collect, how we use it and the choices you have.

### Information we collect

When you request a quote or book an **in-home consultation**, we collect your
name, address, phone number and email so we can schedule a visit and prepare a
written estimate.

### How we use your information

- To schedule and complete your window-covering consultation and installation.
- To send order updates, warranty information and service reminders.
- To respond to questions you send us.

### Your choices

You may ask us to update or delete your information at any time by contacting our
St. Catharines showroom. We never sell your personal information to third parties.`;

const meta: Meta = { title: "Blocks/LegalProse" };
export default meta;

export const Default = () => <legal_prose.default markdown={markdown} />;
export const Dense = () => <legal_prose.dense markdown={markdown} />;
