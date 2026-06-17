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
