import { render, screen } from "@testing-library/react";
import testimonial from "./index";

const content = {
  heading: "What our patients say",
  aggregate: { score: "4.9", count: "120" },
  items: [
    { quote: "They explained everything clearly.", name: "Margaret", town: "Lindsay" },
    { quote: "No pressure, just honest advice.", name: "Bill", town: "Fenelon Falls" },
  ],
};

test("default renders heading, aggregate score, and every quote", () => {
  render(<testimonial.default {...(content as any)} />);
  expect(screen.getByText(content.heading)).toBeInTheDocument();
  expect(screen.getByText(content.aggregate.score)).toBeInTheDocument();
  for (const item of content.items) {
    expect(screen.getByText(new RegExp(item.quote))).toBeInTheDocument();
  }
});

test("renders without aggregate", () => {
  render(<testimonial.default items={content.items as any} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(content.items.length);
});
