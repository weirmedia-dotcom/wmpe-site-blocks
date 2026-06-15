import { render, screen } from "@testing-library/react";
import faq_accordion from "@/blocks/faq_accordion";

const items = [
  { q: "Do you offer free in-home consultations?", a: "Yes — we measure and advise on-site across Niagara at no charge." },
  { q: "How long does installation take?", a: "Most installations are completed in a single visit, often within a couple of hours." },
  { q: "Do you service the whole Niagara region?", a: "We cover St. Catharines, Niagara Falls, Welland, Thorold and surrounding areas." },
];

// Kebab-keyed variants cannot be used as JSX tags directly — extract to consts.
const Default = faq_accordion.default;
const TwoColumn = faq_accordion["two-column"];
const Bordered = faq_accordion.bordered;
const BoxedMuted = faq_accordion["boxed-muted"];

const variants: Array<[string, typeof Default]> = [
  ["default", Default],
  ["two-column", TwoColumn],
  ["bordered", Bordered],
  ["boxed-muted", BoxedMuted],
];

test.each(variants)("faq_accordion variant %s renders all questions", (key, C) => {
  render(<C items={items} props={{ variant: key }} />);
  for (const item of items) {
    expect(screen.getByText(item.q)).toBeInTheDocument();
  }
});

test("faq_accordion exposes default", () => {
  expect(faq_accordion.default).toBeTruthy();
});
