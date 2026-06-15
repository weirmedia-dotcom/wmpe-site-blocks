import { render, screen } from "@testing-library/react";
import step_list from "@/blocks/step_list";

const steps = [
  { title: "Book your consult", body: "Pick a time that suits you; we come to your home." },
  { title: "Measure & advise", body: "We take precise measurements and recommend options." },
  { title: "Professional install", body: "We fit everything and tidy up." },
];

test.each(Object.keys(step_list))(
  "step_list variant %s renders every step title + body",
  (v) => {
    const C = (step_list as any)[v];
    const { unmount } = render(<C steps={steps} props={{ variant: v }} />);
    for (const step of steps) {
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.body)).toBeInTheDocument();
    }
    unmount();
  },
);

test("step_list exposes default", () => {
  expect(step_list.default).toBeTruthy();
});

test("default variant uses ordered list semantics", () => {
  render(<step_list.default steps={steps} />);
  const list = screen.getByRole("list");
  expect(list.tagName).toBe("OL");
  expect(screen.getAllByRole("listitem")).toHaveLength(steps.length);
});
