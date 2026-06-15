import { render, screen } from "@testing-library/react";
import cta_band from "@/blocks/cta_band";
const c = { headline: "Ready to transform your windows?", cta_label: "Book a free consult", cta_href: "/contact" };
test.each(Object.keys(cta_band))("cta_band variant %s renders headline + cta", (v) => {
  const C = (cta_band as any)[v];
  render(<C {...c} props={{ variant: v }} />);
  expect(screen.getByRole("heading", { name: /Ready to transform your windows\?/ })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Book a free consult/ })).toHaveAttribute("href", "/contact");
});
test("cta_band exposes default", () => {
  expect(cta_band.default).toBeTruthy();
});
