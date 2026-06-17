import { render, screen } from "@testing-library/react";
import legal_prose from "@/blocks/legal_prose";

const markdown = `## Privacy Policy

Falls Decor respects your privacy. We collect only the information needed to
schedule your **in-home consultation** and fulfil your order.

We never sell your personal information to third parties.`;

test("default renders the markdown heading + paragraph text", () => {
  render(<legal_prose.default markdown={markdown} {...({} as any)} />);
  expect(
    screen.getByRole("heading", { level: 2, name: "Privacy Policy" }),
  ).toBeInTheDocument();
  expect(screen.getByText(/Falls Decor respects your privacy/)).toBeInTheDocument();
  expect(screen.getByText(/never sell your personal information/)).toBeInTheDocument();
});
