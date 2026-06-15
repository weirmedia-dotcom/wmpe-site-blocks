import { render, screen } from "@testing-library/react";
import proof_strip from "@/blocks/proof_strip";

const items = [
  { quote: "They measured, advised, and installed flawlessly.", attribution: "Sarah M., St. Catharines" },
  { quote: "Beautiful shades, on time and on budget.", attribution: "David R., Niagara Falls" },
  { quote: "Our living room finally feels finished.", attribution: "Priya K., Welland" },
];

test.each(Object.keys(proof_strip))("proof_strip variant %s renders first quote", (v) => {
  const C = (proof_strip as any)[v];
  render(<C items={items} props={{ variant: v }} />);
  // Marquee duplicates the track, so the first quote may appear more than once.
  expect(screen.getAllByText(/They measured, advised, and installed flawlessly\./).length).toBeGreaterThan(0);
});

test("proof_strip exposes default", () => {
  expect(proof_strip.default).toBeTruthy();
});
