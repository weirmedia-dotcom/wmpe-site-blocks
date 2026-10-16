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

test("default renders the accent segment in the heading", () => {
  render(<hero.default headline="Lindsay Ear Clinic:" headline_accent="Sound Solutions for a Clear Tomorrow" {...({} as any)} />);
  const h1 = screen.getByRole("heading", { level: 1 });
  expect(h1).toHaveTextContent("Lindsay Ear Clinic: Sound Solutions for a Clear Tomorrow");
  const accent = screen.getByText("Sound Solutions for a Clear Tomorrow");
  expect(accent.tagName).toBe("SPAN");
  expect(accent).toHaveClass("text-primary");
});

test("cta_note absent leaves the markup unchanged", () => {
  const { container } = render(<hero.default {...(content as any)} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class="w-full py-16 md:py-24"><div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 space-y-5"><h1 class="text-3xl text-heading">Falls Decor</h1><p class="text-lg text-muted-foreground">Window fashions for Niagara homes</p><p><a href="/contact">Book a consultation</a></p></div></section>"`);
});

test("cta_note present renders a small muted paragraph directly under the cta", () => {
  render(<hero.default {...(content as any)} cta_note="No obligation." />);
  const note = screen.getByText("No obligation.");
  expect(note.tagName).toBe("P");
  expect(note.className).toContain("text-sm");
  expect(note.className).toContain("text-muted-foreground");
  expect(note.children).toHaveLength(0);
  const cta = screen.getByRole("link", { name: "Book a consultation" }).closest("p")!;
  expect(cta.nextElementSibling).toBe(note);
});
