import { render } from "@testing-library/react";
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

test.each(Object.keys(product_card_grid))("variant %s renders all product names and features", (v) => {
  const C = (product_card_grid as any)[v];
  const { unmount } = render(<C {...content} props={{ variant: v }} />);
  for (const item of content.items) {
    expect(document.body.textContent).toContain(item.name);
    expect(document.body.textContent).toContain(item.tagline);
    expect(document.body.textContent).toContain(item.cta_label);
    for (const f of item.features) {
      expect(document.body.textContent).toContain(f);
    }
  }
  unmount();
});

test("product_card_grid.default and horizontal exist", () => {
  expect(product_card_grid.default).toBeTruthy();
  expect(product_card_grid.horizontal).toBeTruthy();
});
