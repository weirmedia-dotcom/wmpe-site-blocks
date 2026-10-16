import { render, screen } from "@testing-library/react";
import intro_prose from "@/blocks/intro_prose";

const markdown = `## Window coverings, made for Niagara

Falls Decor designs **custom blinds, shades and shutters** for homes across the
Niagara region.

We measure, recommend and install so every window fits perfectly.`;

test("default renders the markdown heading + paragraph text", () => {
  render(<intro_prose.default markdown={markdown} {...({} as any)} />);
  expect(
    screen.getByRole("heading", { level: 2, name: /Window coverings, made for Niagara/ }),
  ).toBeInTheDocument();
  expect(screen.getByText(/custom blinds, shades and shutters/)).toBeInTheDocument();
  expect(screen.getByText(/every window fits perfectly/)).toBeInTheDocument();
});

test("heading absent leaves the markup unchanged", () => {
  const { container } = render(<intro_prose.default markdown="Body text." {...({} as any)} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class="w-full py-16 md:py-24"><div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"><div class=""><p class="my-4 text-base text-muted-foreground">Body text.</p></div></div></section>"`);
});

test("heading present renders a plain h2 above the markdown body", () => {
  const { container } = render(<intro_prose.default markdown="Body text." heading="Our story" {...({} as any)} />);
  const h2 = screen.getByRole("heading", { level: 2, name: "Our story" });
  expect(h2.children).toHaveLength(0);
  expect(h2.compareDocumentPosition(container.querySelector("p")!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});
