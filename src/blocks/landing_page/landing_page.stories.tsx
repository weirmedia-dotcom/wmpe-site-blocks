import type { Meta, StoryObj } from "@storybook/react";
import landing_page from "./index";
import { SAMPLE } from "./sample";

const Block = landing_page.default;
const meta: Meta<typeof Block> = { title: "Blocks/landing_page", component: Block };
export default meta;
type Story = StoryObj<typeof Block>;

/** Every part on one instance. */
export const FullPage: Story = { args: SAMPLE };
/** The top of a stored page: hero and sections, before the client's form block. */
export const BeforeTheForm: Story = { args: { hero: SAMPLE.hero, sections: SAMPLE.sections } };
/** The bottom of a stored page: links and closing, after the client's form block. No h1. */
export const AfterTheForm: Story = { args: { links: SAMPLE.links, closing: SAMPLE.closing } };
/** A client renderer composing the block with its own form in the slot. */
export const WithFormSlot: Story = {
  args: {
    form: SAMPLE.form,
    formSlot: (
      <form>
        <label>Name <input name="name" /></label>
        <button type="submit">Send</button>
      </form>
    ),
  },
};
