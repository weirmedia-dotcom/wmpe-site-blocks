import { render, screen } from "@testing-library/react";
import product_card_grid from "./index";

const content = {
  items: [
    {
      name: "MF Proline",
      tagline: "The trade professional's first choice.",
      features: ["High hide formula", "Spray or roll", "Seamless touch-ups"],
      cta_label: "Shop Proline",
      cta_href: "/mf-paints-brand-authority/what-is-mf-proline",
    },
    {
      name: "MF Portico",
      tagline: "Washable, durable, built for busy homes.",
      features: ["Scrubbable finish", "Easy DIY application", "Moisture resistant"],
      cta_label: "Shop Portico",
      cta_href: "/products",
    },
  ],
};

test("default renders every product name, tagline, features and CTA", () => {
  render(<product_card_grid.default {...(content as any)} />);
  for (const item of content.items) {
    expect(screen.getByText(item.name)).toBeInTheDocument();
    expect(screen.getByText(item.tagline)).toBeInTheDocument();
    expect(screen.getByText(item.cta_label)).toBeInTheDocument();
    for (const f of item.features) {
      expect(screen.getByText(f)).toBeInTheDocument();
    }
  }
});

test("default uses list semantics for the cards", () => {
  render(<product_card_grid.default {...(content as any)} />);
  const lists = screen.getAllByRole("list");
  expect(lists.length).toBeGreaterThanOrEqual(1);
});
