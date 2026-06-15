import type { Preview } from "@storybook/react";
import "./tailwind.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="font-body bg-background text-foreground min-h-screen">{Story()}</div>
    ),
  ],
  parameters: { layout: "fullscreen" },
};
export default preview;
