import { render, screen, within } from "@testing-library/react";
import comparison_table from "@/blocks/comparison_table";

const columns = ["Feature", "Custom (Falls Decor)", "Big-box ready-made"];

// Use raw-text cells alongside yes/no so the text assertion holds for every variant
// (including checkmark, where yes/no become icons but raw text stays text).
const rows = [
  ["Made-to-measure fit", "yes", "no"],
  ["Material grade", "Premium hardwood", "Particleboard"],
  ["Warranty", "Lifetime", "1 year"],
  ["Professional install", "yes", "no"],
];

const CardGrid = comparison_table["card-grid"];
const HighlightFirst = comparison_table["highlight-first"];

test.each(Object.keys(comparison_table))(
  "comparison_table variant %s renders column headers + a sample raw cell",
  (v) => {
    const C = (comparison_table as any)[v];
    const { unmount } = render(<C columns={columns} rows={rows} />);
    for (const col of columns) {
      // headers may appear once (table) or per-card (card-grid) — use getAllByText
      expect(screen.getAllByText(col).length).toBeGreaterThan(0);
    }
    // raw-text cells survive in every variant
    expect(screen.getAllByText("Premium hardwood").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Lifetime").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Made-to-measure fit").length).toBeGreaterThan(0);
    unmount();
  },
);

test("comparison_table exposes default + all kebab keys", () => {
  expect(comparison_table.default).toBeTruthy();
  expect(comparison_table["card-grid"]).toBeTruthy();
  expect(comparison_table["highlight-first"]).toBeTruthy();
  expect(comparison_table.checkmark).toBeTruthy();
});

test("default variant uses proper table semantics with scoped column headers", () => {
  render(<comparison_table.default columns={columns} rows={rows} />);
  expect(screen.getByRole("table")).toBeInTheDocument();
  const headers = screen.getAllByRole("columnheader");
  expect(headers).toHaveLength(columns.length);
  for (const h of headers) {
    expect(h).toHaveAttribute("scope", "col");
  }
});

test("checkmark variant renders accessible yes/no labels for boolean cells", () => {
  render(<comparison_table.checkmark columns={columns} rows={rows} />);
  // two "yes" cells and two "no" cells in the sample
  expect(screen.getAllByText("Yes")).toHaveLength(2);
  expect(screen.getAllByText("No")).toHaveLength(2);
  // raw text still rendered as text
  expect(screen.getByText("Premium hardwood")).toBeInTheDocument();
});

test("card-grid renders one card per data row", () => {
  render(<CardGrid columns={columns} rows={rows} />);
  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(rows.length);
  // attribute (column) labels appear inside each card
  expect(within(items[0]).getByText("Custom (Falls Decor)")).toBeInTheDocument();
  expect(within(items[0]).getByText("Big-box ready-made")).toBeInTheDocument();
});

test("highlight-first marks the first data column as recommended", () => {
  render(<HighlightFirst columns={columns} rows={rows} />);
  expect(screen.getByText("Recommended")).toBeInTheDocument();
});
