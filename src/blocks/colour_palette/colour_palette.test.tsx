import { render, screen } from "@testing-library/react";
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

test("default renders heading, body and every swatch name", () => {
  render(<colour_palette.default {...(content as any)} />);
  expect(screen.getByText(content.heading)).toBeInTheDocument();
  expect(screen.getByText(content.body)).toBeInTheDocument();
  for (const s of content.swatches) {
    expect(screen.getByText(s.name)).toBeInTheDocument();
  }
});

test("default uses list semantics for swatches", () => {
  render(<colour_palette.default {...(content as any)} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(content.swatches.length);
});
