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

test("body absent leaves the markup unchanged", () => {
  const { container } = render(<cta_band.default {...(content as any)} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class="w-full py-16 md:py-24"><div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"><div class="flex flex-col gap-4"><h2 class="text-2xl text-heading">Ready to transform your windows?</h2><div><a href="/contact" class="text-base text-foreground">Book a free consult</a></div></div></div></section>"`);
});

test("body present renders a paragraph between the headline and the button", () => {
  const { container } = render(<cta_band.default {...(content as any)} body="Supporting line." />);
  const p = screen.getByText("Supporting line.");
  expect(p.tagName).toBe("P");
  const h2 = screen.getByRole("heading", { level: 2 });
  const a = screen.getByRole("link");
  expect(h2.compareDocumentPosition(p) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(p.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(container.querySelectorAll("p")).toHaveLength(1);
});
