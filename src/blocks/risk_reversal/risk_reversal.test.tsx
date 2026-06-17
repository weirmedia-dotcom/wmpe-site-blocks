import { render, screen } from "@testing-library/react";
import risk_reversal from "@/blocks/risk_reversal";

const markdown = `**100% satisfaction guarantee.** If your blinds aren't perfect, we'll make it
right — no charge.`;

test("default renders the markdown text", () => {
  render(<risk_reversal.default markdown={markdown} />);
  expect(screen.getByText(/satisfaction guarantee/)).toBeInTheDocument();
  expect(screen.getByText(/we'll make it/)).toBeInTheDocument();
});
