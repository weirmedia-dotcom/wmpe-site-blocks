import { render, screen } from "@testing-library/react";
import risk_reversal from "@/blocks/risk_reversal";

const markdown = `**100% satisfaction guarantee.** If your blinds aren't perfect, we'll make it
right — no charge.`;

// kebab-keyed variants can't be JSX tags directly; extract first.
const BadgeRow = risk_reversal["badge-row"];

test.each(Object.keys(risk_reversal))(
  "risk_reversal variant %s renders the markdown text",
  (v) => {
    const C = (risk_reversal as any)[v];
    const { unmount } = render(<C markdown={markdown} props={{ variant: v }} />);
    expect(screen.getByText(/satisfaction guarantee/)).toBeInTheDocument();
    expect(screen.getByText(/we'll make it/)).toBeInTheDocument();
    unmount();
  },
);

test("badge-row renders the guarantee pills", () => {
  render(<BadgeRow markdown={markdown} />);
  expect(screen.getByText("Free measure")).toBeInTheDocument();
  expect(screen.getByText("Lifetime warranty")).toBeInTheDocument();
  expect(screen.getByText("Local install")).toBeInTheDocument();
});

test("risk_reversal exposes default, inline and badge-row", () => {
  expect(risk_reversal.default).toBeTruthy();
  expect(risk_reversal.inline).toBeTruthy();
  expect(risk_reversal["badge-row"]).toBeTruthy();
});
