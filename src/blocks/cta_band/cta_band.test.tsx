import { render, screen } from "@testing-library/react";
import cta_band from "@/blocks/cta_band";

const content = {
  headline: "Ready to transform your windows?",
  cta_label: "Book a free consult",
  cta_href: "/contact",
};

test("default renders headline + cta link", () => {
  render(<cta_band.default {...(content as any)} />);
  expect(
    screen.getByRole("heading", { name: /Ready to transform your windows\?/ })
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Book a free consult/ })).toHaveAttribute(
    "href",
    "/contact"
  );
});
