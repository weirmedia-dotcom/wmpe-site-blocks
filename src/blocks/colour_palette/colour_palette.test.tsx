import { render } from "@testing-library/react";
import colour_palette from "./index";

const content = {
  heading: "Warm Neutrals Collection",
  body: "Curated colour families for Smiths Falls interiors.",
  swatches: [
    { name: "Linen White", family: "Neutrals" },
    { name: "Warm Greige", family: "Neutrals" },
    { name: "Evergreen", hex: "#1F5C46", family: "Greens" },
    { name: "Terracotta", hex: "#C2683F", family: "Earthtones" },
  ],
};

test.each(Object.keys(colour_palette))("variant %s renders all swatch names", (v) => {
  const C = (colour_palette as any)[v];
  const { unmount } = render(<C {...content} props={{ variant: v }} />);
  for (const s of content.swatches) {
    expect(document.body.textContent).toContain(s.name);
  }
  unmount();
});

test("colour_palette.default and strip exist", () => {
  expect(colour_palette.default).toBeTruthy();
  expect(colour_palette.strip).toBeTruthy();
});
