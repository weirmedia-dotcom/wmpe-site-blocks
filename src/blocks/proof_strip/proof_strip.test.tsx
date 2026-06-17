import { render, screen } from "@testing-library/react";
import proof_strip from "@/blocks/proof_strip";

const items = [
  { quote: "They measured, advised, and installed flawlessly.", attribution: "Sarah M., St. Catharines" },
  { quote: "Beautiful shades, on time and on budget.", attribution: "David R., Niagara Falls" },
  { quote: "Our living room finally feels finished.", attribution: "Priya K., Welland" },
];

test("default renders every quote + attribution", () => {
  render(<proof_strip.default items={items as any} />);
  for (const item of items) {
    expect(screen.getByText(item.quote)).toBeInTheDocument();
    expect(screen.getByText(item.attribution!)).toBeInTheDocument();
  }
});

test("default uses blockquote + cite semantics", () => {
  const { container } = render(<proof_strip.default items={items as any} />);
  expect(container.querySelectorAll("blockquote")).toHaveLength(items.length);
  expect(container.querySelectorAll("cite")).toHaveLength(items.length);
});
