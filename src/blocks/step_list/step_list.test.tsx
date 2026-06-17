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
