import { render, screen } from "@testing-library/react";
import colour_visualizer from "@/blocks/colour_visualizer";

const swatches = [
  { name: "Evergreen", hex: "#1F5C46", family: "green" },
  { name: "Terracotta", hex: "#C2683F", family: "orange" },
  { name: "Linen", hex: "#FBF8F3", family: "neutral" },
];

const content = {
  image: "/room.jpg",
  swatches,
  eyebrow: "Visualize",
  heading: "See it on your walls",
  subhead: "Try our palette in a real room.",
};

test("default renders heading, subhead and eyebrow", () => {
  render(<colour_visualizer.default {...(content as any)} />);
  expect(screen.getByText("Visualize")).toBeInTheDocument();
  expect(screen.getByText("See it on your walls")).toBeInTheDocument();
  expect(screen.getByText("Try our palette in a real room.")).toBeInTheDocument();
});

test("default renders every swatch name", () => {
  render(<colour_visualizer.default {...(content as any)} />);
  for (const s of swatches) {
    expect(screen.getByText(s.name)).toBeInTheDocument();
  }
});

test("default renders the room image with alt", () => {
  render(<colour_visualizer.default {...(content as any)} />);
  expect(screen.getByAltText("See it on your walls")).toBeInTheDocument();
});

test("default renders swatches as a list", () => {
  render(<colour_visualizer.default {...(content as any)} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(swatches.length);
});
