import { render, screen } from "@testing-library/react";
import faq_accordion from "@/blocks/faq_accordion";

const items = [
  { q: "Do you offer free in-home consultations?", a: "Yes — we measure and advise on-site at no charge." },
  { q: "How long does installation take?", a: "Most installations are completed in a single visit." },
  { q: "Do you service the whole Niagara region?", a: "We cover St. Catharines, Niagara Falls and surrounding areas." },
];

test("default renders every question + answer", () => {
  render(<faq_accordion.default items={items as any} />);
  for (const item of items) {
    expect(screen.getByText(item.q)).toBeInTheDocument();
    expect(screen.getByText(item.a)).toBeInTheDocument();
  }
});

test("default uses native details/summary semantics", () => {
  const { container } = render(<faq_accordion.default items={items as any} />);
  expect(container.querySelectorAll("details")).toHaveLength(items.length);
  expect(container.querySelectorAll("summary")).toHaveLength(items.length);
});

const faqItems = [{ q: "First question?", a: "First answer." }];

test("heading absent leaves the markup unchanged", () => {
  const { container } = render(<faq_accordion.default items={faqItems as any} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class="w-full py-16 md:py-24"><div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"><div class="space-y-4"><details><summary class="text-lg text-foreground">First question?</summary><p class="mt-2 text-base text-muted-foreground">First answer.</p></details></div></div></section>"`);
});

test("heading present renders a plain h2 above the items", () => {
  const { container } = render(<faq_accordion.default items={faqItems as any} heading="Common questions" />);
  const h2 = screen.getByRole("heading", { level: 2, name: "Common questions" });
  expect(h2.children).toHaveLength(0);
  expect(h2.compareDocumentPosition(container.querySelector("details")!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});
