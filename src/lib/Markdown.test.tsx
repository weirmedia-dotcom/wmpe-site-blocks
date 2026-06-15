import { render, screen } from "@testing-library/react";
import { Markdown } from "@/lib/Markdown";

const sample = `# gone

## Heading

Some **bold** text and a [link](https://x.com).`;

test("renders heading, paragraph, bold and an absolute link", () => {
  render(<Markdown>{sample}</Markdown>);

  expect(screen.getByRole("heading", { level: 2, name: "Heading" })).toBeInTheDocument();
  expect(screen.getByText(/Some/)).toBeInTheDocument();
  expect(screen.getByText("bold")).toBeInTheDocument();

  const link = screen.getByRole("link", { name: "link" });
  expect(link).toHaveAttribute("href", "https://x.com");
  expect(link).toHaveAttribute("target", "_blank");
});

test("renders lists", () => {
  render(<Markdown>{"- one\n- two\n- three"}</Markdown>);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

test("relative links are not given target=_blank", () => {
  render(<Markdown>{"[home](/about)"}</Markdown>);
  const link = screen.getByRole("link", { name: "home" });
  expect(link).toHaveAttribute("href", "/about");
  expect(link).not.toHaveAttribute("target");
});

test("renders nothing for empty input", () => {
  const { container } = render(<Markdown>{""}</Markdown>);
  expect(container).toBeEmptyDOMElement();
});
