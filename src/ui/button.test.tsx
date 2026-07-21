import { render, screen } from "@testing-library/react";
import { Button } from "@/ui/button";
test("button renders label", () => {
  render(<Button>Click</Button>);
  expect(screen.getByRole("button", { name: "Click" })).toBeInTheDocument();
});
test("button asChild renders an anchor", () => {
  render(<Button asChild><a href="/x">Go</a></Button>);
  expect(screen.getByRole("link", { name: "Go" })).toHaveAttribute("href", "/x");
});

// F8 regression guard: the studio's Refine-stage button knobs
// (--btn-radius/--btn-pad-x/--btn-pad-y/--btn-bg/--btn-fg) only work if
// these exact var + fallback strings stay in the default variant/size
// classNames. Pins the formulas so a future refactor can't silently drift
// them (the `v1` tag moves with every kit change and nothing else would
// catch a silent rename/drop) — and asserts the old static rounded-md is
// truly gone from default, not just shadowed by a later class.
test("default Button carries the exact --btn-* var/fallback classes", () => {
  const { container } = render(<Button>Click</Button>);
  const btn = container.querySelector("button")!;
  expect(btn.className).toContain("[border-radius:var(--btn-radius,calc(var(--radius)_-_2px))]");
  expect(btn.className).toContain("[padding-inline:var(--btn-pad-x,1rem)]");
  expect(btn.className).toContain("[padding-block:var(--btn-pad-y,0.5rem)]");
  expect(btn.className).toContain("[background:hsl(var(--btn-bg,var(--primary)))]");
  expect(btn.className).toContain("[color:hsl(var(--btn-fg,var(--primary-foreground)))]");
  expect(btn.className).not.toContain("rounded-md");
});
test("sm/lg Button sizes pick up the same --btn-radius (no redundant static rounded-md racing it)", () => {
  const { container: sm } = render(<Button size="sm">Click</Button>);
  const { container: lg } = render(<Button size="lg">Click</Button>);
  for (const c of [sm, lg]) {
    const btn = c.querySelector("button")!;
    expect(btn.className).toContain("[border-radius:var(--btn-radius,calc(var(--radius)_-_2px))]");
    expect(btn.className).not.toContain("rounded-md");
  }
});
