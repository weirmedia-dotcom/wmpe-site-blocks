import { render, screen } from "@testing-library/react";
import comparison_table from "@/blocks/comparison_table";

const columns = ["Feature", "Custom (Falls Decor)", "Big-box ready-made"];

const rows = [
  ["Made-to-measure fit", "Yes", "No"],
  ["Material grade", "Premium hardwood", "Particleboard"],
  ["Warranty", "Lifetime", "1 year"],
];

test("default renders column headers + cell content", () => {
  render(<comparison_table.default columns={columns as any} rows={rows as any} />);
  for (const col of columns) {
    expect(screen.getByText(col)).toBeInTheDocument();
  }
  expect(screen.getByText("Premium hardwood")).toBeInTheDocument();
  expect(screen.getByText("Lifetime")).toBeInTheDocument();
  expect(screen.getByText("Made-to-measure fit")).toBeInTheDocument();
});

test("default uses table semantics with scoped column headers", () => {
  render(<comparison_table.default columns={columns as any} rows={rows as any} />);
  expect(screen.getByRole("table")).toBeInTheDocument();
  const headers = screen.getAllByRole("columnheader");
  expect(headers).toHaveLength(columns.length);
  for (const h of headers) {
    expect(h).toHaveAttribute("scope", "col");
  }
  expect(screen.getAllByRole("row")).toHaveLength(rows.length + 1);
});
