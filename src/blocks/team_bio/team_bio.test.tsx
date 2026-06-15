import { render, screen } from "@testing-library/react";
import team_bio from "@/blocks/team_bio";

const sample = {
  name: "Jane Falls",
  role: "Founder",
  bio: "Jane has dressed Niagara windows for over 15 years, blending an eye for fabric with a craftsperson's precision.",
};

test.each(Object.keys(team_bio))("team_bio variant %s renders name, role, bio and initials", (v) => {
  const C = (team_bio as any)[v];
  render(<C {...sample} props={{ variant: v }} />);
  expect(screen.getByText(sample.name)).toBeTruthy();
  expect(screen.getByText(sample.role)).toBeTruthy();
  expect(screen.getByText(sample.bio)).toBeTruthy();
  expect(screen.getByText("JF")).toBeTruthy();
});

test("team_bio exposes default", () => {
  expect(team_bio.default).toBeTruthy();
});
