import { render, screen } from "@testing-library/react";
import legal_prose from "@/blocks/legal_prose";

const markdown = `## Privacy Policy

Falls Decor respects your privacy. We collect only the information needed to
schedule your **in-home consultation** and fulfil your order.

We never sell your personal information to third parties.`;

test.each(Object.keys(legal_prose))(
  "legal_prose variant %s renders the heading + paragraph text",
  (v) => {
    const C = (legal_prose as any)[v];
    const { unmount } = render(<C markdown={markdown} props={{ variant: v }} />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Privacy Policy" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Falls Decor respects your privacy/)).toBeInTheDocument();
    expect(screen.getByText(/never sell your personal information/)).toBeInTheDocument();
    unmount();
  },
);

test("legal_prose exposes default and dense", () => {
  expect(legal_prose.default).toBeTruthy();
  expect(legal_prose.dense).toBeTruthy();
});
