import { render, screen } from "@testing-library/react";
import category_tiles from "@/blocks/category_tiles";

const content = {
  heading: "Shop by room",
  eyebrow: "Categories",
  items: [
    { title: "Interior paint", blurb: "Walls, trim and ceilings.", image: { src: "/i.jpg", alt: "Interior" }, href: "/interior" },
    { title: "Exterior paint", blurb: "Built for the weather.", href: "/exterior" },
    { title: "Supplies", blurb: "Rollers, brushes and tape." },
  ],
};

test("default renders each tile title and blurb", () => {
  render(<category_tiles.default {...(content as any)} />);
  for (const item of content.items) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.blurb)).toBeInTheDocument();
  }
});

test("default uses list semantics with one tile per item", () => {
  render(<category_tiles.default {...(content as any)} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(content.items.length);
});

test("default link-wraps tiles that have an href", () => {
  render(<category_tiles.default {...(content as any)} />);
  expect(screen.getByRole("link", { name: /Interior paint/ })).toHaveAttribute("href", "/interior");
  expect(screen.getAllByRole("link")).toHaveLength(2);
});
