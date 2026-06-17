import { render, screen } from "@testing-library/react";
import definition_answer from "@/blocks/definition_answer";

const sample = {
  question: "What are cellular shades?",
  answer:
    "Cellular (honeycomb) shades are a window covering whose pleats form air pockets that insulate the window.",
};

test("default renders question as heading and answer text", () => {
  render(<definition_answer.default {...(sample as any)} />);
  expect(screen.getByRole("heading", { name: sample.question })).toBeInTheDocument();
  expect(screen.getByText(sample.answer)).toBeInTheDocument();
});
