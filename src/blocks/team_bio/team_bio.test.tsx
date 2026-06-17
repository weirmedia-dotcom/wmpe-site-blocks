import { render, screen } from "@testing-library/react";
import team_bio from "@/blocks/team_bio";

const sample = {
  name: "Jane Falls",
  role: "Founder",
  bio: "Jane has dressed Niagara windows for over 15 years, blending an eye for fabric with a craftsperson's precision.",
};

test("default renders name, role and bio", () => {
  render(<team_bio.default {...(sample as any)} />);
  expect(screen.getByText(sample.name)).toBeInTheDocument();
  expect(screen.getByText(sample.role)).toBeInTheDocument();
  expect(screen.getByText(sample.bio)).toBeInTheDocument();
});

test("default exposes the member as an accessible image", () => {
  render(<team_bio.default {...(sample as any)} />);
  expect(screen.getByRole("img", { name: sample.name })).toBeInTheDocument();
});
