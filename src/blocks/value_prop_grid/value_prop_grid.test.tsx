import { render, screen } from "@testing-library/react";
import value_prop_grid from "@/blocks/value_prop_grid";

const items = [
  { title: "Free in-home consultation", body: "We measure and advise on-site." },
  { title: "Lifetime workmanship warranty", body: "Every install is backed in writing." },
  { title: "Precision measuring", body: "Made-to-fit." },
];

test("default renders every item title + body", () => {
  render(<value_prop_grid.default items={items as any} />);
  for (const item of items) {
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.body)).toBeInTheDocument();
  }
});

test("default uses list semantics", () => {
  render(<value_prop_grid.default items={items as any} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(items.length);
});
