import { render } from "@testing-library/react";
import { Card } from "@/ui/card";

test("card renders children", () => {
  const { getByText } = render(<Card>Hi</Card>);
  expect(getByText("Hi")).toBeInTheDocument();
});

// F8 regression guard: the studio's Refine-stage "Card radius" knob
// (--card-radius) only works if this exact var + fallback string stays on
// Card. Pins the formula so a future refactor can't silently drift it, and
// asserts the old static rounded-lg is truly gone, not just shadowed.
test("Card carries the exact --card-radius var/fallback class, not a static rounded-lg", () => {
  const { container } = render(<Card data-testid="card">Hi</Card>);
  const card = container.querySelector('[data-testid="card"]')!;
  expect(card.className).toContain("[border-radius:var(--card-radius,var(--radius))]");
  expect(card.className).not.toContain("rounded-lg");
});
