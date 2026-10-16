import { render, screen } from "@testing-library/react";
import step_list from "@/blocks/step_list";

const steps = [
  { title: "Book your consult", body: "Pick a time that suits you; we come to your home." },
  { title: "Measure & advise", body: "We take precise measurements and recommend options." },
  { title: "Professional install", body: "We fit everything and tidy up." },
];

test("default renders every step title + body", () => {
  render(<step_list.default steps={steps as any} />);
  for (const step of steps) {
    expect(screen.getByText(step.title)).toBeInTheDocument();
    expect(screen.getByText(step.body)).toBeInTheDocument();
  }
});

test("default uses ordered list semantics", () => {
  render(<step_list.default steps={steps as any} />);
  const list = screen.getByRole("list");
  expect(list.tagName).toBe("OL");
  expect(screen.getAllByRole("listitem")).toHaveLength(steps.length);
});

const listSteps = [{ title: "One", body: "First step." }, { title: "Two", body: "Second step." }];

test("heading absent leaves the markup unchanged", () => {
  const { container } = render(<step_list.default steps={listSteps as any} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class="w-full py-16 md:py-24"><div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"><ol class="space-y-8"><li><h3 class="text-lg text-heading">One</h3><p class="mt-2 text-base text-muted-foreground">First step.</p></li><li><h3 class="text-lg text-heading">Two</h3><p class="mt-2 text-base text-muted-foreground">Second step.</p></li></ol></div></section>"`);
});

test("heading present renders a plain h2 above the steps", () => {
  const { container } = render(<step_list.default steps={listSteps as any} heading="How it works" />);
  const h2 = screen.getByRole("heading", { level: 2, name: "How it works" });
  expect(h2.children).toHaveLength(0);
  expect(h2.compareDocumentPosition(container.querySelector("ol")!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});
