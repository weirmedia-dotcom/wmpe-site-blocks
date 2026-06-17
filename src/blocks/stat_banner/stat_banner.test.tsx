import { render, screen } from "@testing-library/react";
import stat_banner from "./index";

const content = {
  heading: "Falls Decor by the numbers",
  items: [
    { number: "57", label: "Years in Smiths Falls" },
    { number: "2,000+", label: "Colours in stock" },
    { number: "Same day", label: "Custom mixing" },
    { number: "100%", label: "Canadian-made paints" },
  ],
};

test("default renders heading + every stat number and label", () => {
  render(<stat_banner.default {...(content as any)} />);
  expect(screen.getByText(content.heading)).toBeInTheDocument();
  for (const item of content.items) {
    expect(screen.getByText(item.number)).toBeInTheDocument();
    expect(screen.getByText(item.label)).toBeInTheDocument();
  }
});

test("default uses list semantics", () => {
  render(<stat_banner.default {...(content as any)} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(content.items.length);
});
