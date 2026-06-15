import { render, screen } from "@testing-library/react";
import hero from "@/blocks/hero";
const c = { headline: "Falls Decor", subhead: "Window fashions", cta_label: "Book", cta_href: "/contact" };
test.each(Object.keys(hero))("hero variant %s renders headline + cta", (v) => {
  const C = (hero as any)[v];
  render(<C {...c} props={{ variant: v }} />);
  expect(screen.getByRole("heading", { name: /Falls Decor/ })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Book" })).toHaveAttribute("href", "/contact");
});
test("hero exposes default + centered", () => {
  expect(hero.default).toBeTruthy(); expect((hero as any).centered).toBeTruthy();
});
