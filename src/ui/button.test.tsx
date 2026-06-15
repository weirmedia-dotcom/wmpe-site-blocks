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
