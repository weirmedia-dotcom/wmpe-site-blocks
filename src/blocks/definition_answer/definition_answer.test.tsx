import { render, screen } from "@testing-library/react";
import definition_answer from "@/blocks/definition_answer";

const sample = {
  question: "What are cellular shades?",
  answer:
    "Cellular (honeycomb) shades are a window covering whose pleats form air pockets that insulate the window.",
};

test.each(Object.keys(definition_answer))(
  "definition_answer variant %s renders question as heading and answer text",
  (v) => {
    const C = (definition_answer as any)[v];
    render(<C {...sample} props={{ variant: v }} />);
    const heading = screen.getByRole("heading", { name: sample.question });
    expect(heading).toBeInTheDocument();
    expect(screen.getByText(sample.answer)).toBeInTheDocument();
  }
);

test("definition_answer exposes default", () => {
  expect(definition_answer.default).toBeTruthy();
});
