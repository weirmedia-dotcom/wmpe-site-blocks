import { render, screen } from "@testing-library/react";
import hero from "@/blocks/hero";

const content = {
  headline: "Falls Decor",
  subhead: "Window fashions for Niagara homes",
  cta_label: "Book a consultation",
  cta_href: "/contact",
};

test("default renders headline, subhead and cta", () => {
  render(<hero.default {...(content as any)} />);
  expect(screen.getByRole("heading", { level: 1, name: "Falls Decor" })).toBeInTheDocument();
  expect(screen.getByText(content.subhead)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: content.cta_label })).toHaveAttribute("href", "/contact");
});

test("default renders headline only when optional fields absent", () => {
  render(<hero.default headline="Just a headline" {...({} as any)} />);
  expect(screen.getByRole("heading", { level: 1, name: "Just a headline" })).toBeInTheDocument();
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
});
