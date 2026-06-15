import { render, screen } from "@testing-library/react";
import intro_prose from "@/blocks/intro_prose";

const markdown = `## Window coverings, made for Niagara

Falls Decor designs **custom blinds, shades and shutters** for homes across the
Niagara region.

We measure, recommend and install so every window fits perfectly.`;

test.each(Object.keys(intro_prose))(
  "intro_prose variant %s renders the heading + paragraph text",
  (v) => {
    const C = (intro_prose as any)[v];
    const { unmount } = render(<C markdown={markdown} props={{ variant: v }} />);
    expect(
      screen.getByRole("heading", { level: 2, name: /Window coverings, made for Niagara/ }),
    ).toBeInTheDocument();
    expect(screen.getByText(/custom blinds, shades and shutters/)).toBeInTheDocument();
    expect(screen.getByText(/every window fits perfectly/)).toBeInTheDocument();
    unmount();
  },
);

test("intro_prose exposes default, lead and narrow", () => {
  expect(intro_prose.default).toBeTruthy();
  expect(intro_prose.lead).toBeTruthy();
  expect(intro_prose.narrow).toBeTruthy();
});
