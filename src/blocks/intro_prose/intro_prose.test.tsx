import { render, screen } from "@testing-library/react";
import intro_prose from "@/blocks/intro_prose";

const markdown = `## Window coverings, made for Niagara

Falls Decor designs **custom blinds, shades and shutters** for homes across the
Niagara region.

We measure, recommend and install so every window fits perfectly.`;

test("default renders the markdown heading + paragraph text", () => {
  render(<intro_prose.default markdown={markdown} {...({} as any)} />);
  expect(
    screen.getByRole("heading", { level: 2, name: /Window coverings, made for Niagara/ }),
  ).toBeInTheDocument();
  expect(screen.getByText(/custom blinds, shades and shutters/)).toBeInTheDocument();
  expect(screen.getByText(/every window fits perfectly/)).toBeInTheDocument();
});
