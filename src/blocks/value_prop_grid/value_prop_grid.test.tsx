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

const gridItems = [{ title: "One", body: "First point." }, { title: "Two", body: "Second point." }];

test("heading absent leaves the markup unchanged", () => {
  const { container } = render(<value_prop_grid.default items={gridItems as any} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class="w-full py-16 md:py-24"><div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"><ul class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"><li><h3 class="text-lg text-heading">One</h3><p class="mt-2 text-base text-muted-foreground">First point.</p></li><li><h3 class="text-lg text-heading">Two</h3><p class="mt-2 text-base text-muted-foreground">Second point.</p></li></ul></div></section>"`);
});

test("heading present renders a plain h2 above the grid", () => {
  const { container } = render(<value_prop_grid.default items={gridItems as any} heading="Why it matters" />);
  const h2 = screen.getByRole("heading", { level: 2, name: "Why it matters" });
  expect(h2.children).toHaveLength(0);
  expect(h2.compareDocumentPosition(container.querySelector("ul")!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});
