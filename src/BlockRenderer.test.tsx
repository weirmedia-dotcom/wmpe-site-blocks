import { render, screen } from "@testing-library/react";
import { BlockRenderer } from "@/BlockRenderer";
import type { Registry } from "@/types";

const reg: Registry = {
  hero: {
    default: ({ headline }: any) => <h1>D:{headline}</h1>,
    centered: ({ headline }: any) => <h1>C:{headline}</h1>,
  },
};
test("resolves named variant", () => {
  render(<BlockRenderer registry={reg} block={{ blockType: "hero", props: { variant: "centered" }, content: { headline: "Hi" } }} />);
  expect(screen.getByText("C:Hi")).toBeInTheDocument();
});
test("falls back to default when variant missing", () => {
  render(<BlockRenderer registry={reg} block={{ blockType: "hero", props: { variant: "nope" }, content: { headline: "Hi" } }} />);
  expect(screen.getByText("D:Hi")).toBeInTheDocument();
});
test("overrides win over registry", () => {
  const ov: Registry = { hero: { default: ({ headline }: any) => <h1>O:{headline}</h1> } };
  render(<BlockRenderer registry={reg} overrides={ov} block={{ blockType: "hero", content: { headline: "Hi" } }} />);
  expect(screen.getByText("O:Hi")).toBeInTheDocument();
});
test("override default wins over a package NAMED variant (override-first)", () => {
  // content asks for "centered" (a package-only variant); the override provides only
  // default → the bespoke default must win, not the package's centered.
  const ov: Registry = { hero: { default: ({ headline }: any) => <h1>O:{headline}</h1> } };
  render(<BlockRenderer registry={reg} overrides={ov} block={{ blockType: "hero", props: { variant: "centered" }, content: { headline: "Hi" } }} />);
  expect(screen.getByText("O:Hi")).toBeInTheDocument();
});
test("override variant used when present; else package for non-overridden types", () => {
  const ov: Registry = { hero: { default: ({ headline }: any) => <h1>O:{headline}</h1> } };
  // non-overridden blockType falls through to the package
  render(<BlockRenderer registry={{ ...reg, cta_band: { default: ({ headline }: any) => <p>P:{headline}</p> } }} overrides={ov}
    block={{ blockType: "cta_band", content: { headline: "Go" } }} />);
  expect(screen.getByText("P:Go")).toBeInTheDocument();
});
test("unknown blockType renders nothing, no throw", () => {
  const { container } = render(<BlockRenderer registry={reg} block={{ blockType: "ghost" as any, content: {} }} />);
  expect(container).toBeEmptyDOMElement();
});
