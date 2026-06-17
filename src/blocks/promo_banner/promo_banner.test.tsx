import { render, screen } from "@testing-library/react";
import promo_banner from "@/blocks/promo_banner";

const content = {
  text: "Free shipping on orders over $50",
  cta_label: "Shop now",
  cta_href: "/shop",
};

test("default renders the banner text", () => {
  render(<promo_banner.default {...(content as any)} />);
  expect(screen.getByText(content.text)).toBeInTheDocument();
});

test("default renders the CTA as a link", () => {
  render(<promo_banner.default {...(content as any)} />);
  expect(screen.getByRole("link", { name: content.cta_label })).toHaveAttribute("href", "/shop");
});

test("default renders without a CTA", () => {
  render(<promo_banner.default text="Sale ends Friday" />);
  expect(screen.getByText("Sale ends Friday")).toBeInTheDocument();
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
});
