import { render, screen } from "@testing-library/react";
import { PageRenderer } from "@/PageRenderer";
import type { Page, Registry } from "@/types";
const reg: Registry = { hero: { default: ({ headline }: any) => <h1>{headline}</h1> }, cta_band: { default: ({ headline }: any) => <p>{headline}</p> } };
const page: Page = { slug: "home", page_type: "home", tier: 1, meta: { title: "t", description: "d" },
  blocks: [ { blockType: "hero", content: { headline: "Top" } }, { blockType: "cta_band", content: { headline: "Go", cta_label: "X" } } ] };
test("renders all blocks in order", () => {
  render(<PageRenderer page={page} registry={reg} />);
  expect(screen.getByText("Top")).toBeInTheDocument();
  expect(screen.getByText("Go")).toBeInTheDocument();
});
