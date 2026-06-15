import { render, screen } from "@testing-library/react";
import value_prop_grid from "@/blocks/value_prop_grid";

const items = [
  { title: "Free in-home consultation", body: "We measure and advise on-site across Niagara.", icon: "home" },
  { title: "Lifetime workmanship warranty", body: "Every install is backed in writing.", icon: "shield-check" },
  { title: "Precision measuring", body: "Made-to-fit blinds, shades and shutters.", icon: "ruler" },
  { title: "Local Niagara showroom", body: "Touch the fabrics before you decide.", icon: "store" },
];

test.each(Object.keys(value_prop_grid))(
  "value_prop_grid variant %s renders every item title + body",
  (v) => {
    const C = (value_prop_grid as any)[v];
    const { unmount } = render(<C items={items} props={{ variant: v, columns: 3 }} />);
    for (const item of items) {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.body)).toBeInTheDocument();
    }
    unmount();
  },
);

test("value_prop_grid exposes default + audience-split", () => {
  expect(value_prop_grid.default).toBeTruthy();
  expect((value_prop_grid as any)["audience-split"]).toBeTruthy();
});

test("default variant uses list semantics", () => {
  render(<value_prop_grid.default items={items} props={{ columns: 3 }} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(items.length);
});
