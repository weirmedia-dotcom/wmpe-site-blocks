import { render, screen } from "@testing-library/react";
import credential_strip from "./index";

const content = {
  heading: "Why patients trust us",
  items: [
    { figure: "CASLPO", label: "Regulated", note: "College of Audiologists of Ontario" },
    { figure: "ADP", label: "Authorized vendor" },
    { figure: "30+", label: "Years of experience" },
    { figure: "4", label: "Local clinics" },
  ],
};

test("default renders heading + every figure and label", () => {
  render(<credential_strip.default {...(content as any)} />);
  expect(screen.getByText(content.heading)).toBeInTheDocument();
  for (const item of content.items) {
    expect(screen.getByText(item.figure)).toBeInTheDocument();
    expect(screen.getByText(item.label)).toBeInTheDocument();
  }
});

test("default uses list semantics", () => {
  render(<credential_strip.default {...(content as any)} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(content.items.length);
});
