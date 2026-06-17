import { render, screen } from "@testing-library/react";
import media_list_row from "@/blocks/media_list_row";

const content = {
  heading: "Featured products",
  eyebrow: "Shop",
  items: [
    {
      image: { src: "/a.jpg", alt: "Product A" },
      name: "Roller kit",
      tagline: "Everything for a clean finish.",
      meta: ["In stock", "Pickup"],
      price: "$24.99",
      cta_label: "View",
      cta_href: "/products/roller-kit",
    },
    {
      name: "Brush set",
      tagline: "Five angled brushes.",
      meta: ["Backorder"],
      price: "$18.00",
      cta_label: "Details",
      cta_href: "/products/brush-set",
    },
  ],
};

test("default renders each item name, tagline, meta and price", () => {
  render(<media_list_row.default {...(content as any)} />);
  for (const item of content.items) {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.tagline)).toBeInTheDocument();
    for (const m of item.meta) expect(screen.getByText(m)).toBeInTheDocument();
    expect(screen.getByText(item.price)).toBeInTheDocument();
  }
});

test("default uses list semantics with one row per item", () => {
  render(<media_list_row.default {...(content as any)} />);
  // first list is the outer row list; its direct children are the rows
  const outerList = screen.getAllByRole("list")[0];
  const rows = Array.from(outerList.children);
  expect(rows).toHaveLength(content.items.length);
});

test("default renders CTAs as links", () => {
  render(<media_list_row.default {...(content as any)} />);
  const view = screen.getByRole("link", { name: "View" });
  expect(view).toHaveAttribute("href", "/products/roller-kit");
});
