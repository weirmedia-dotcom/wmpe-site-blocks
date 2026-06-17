import { render, screen } from "@testing-library/react";
import image_ticker from "@/blocks/image_ticker";

const items = [
  { src: "/a.jpg", alt: "Living room in sage", colour: "Sage Whisper", room: "Living room", hex: "#9CA98A" },
  { src: "/b.jpg", alt: "Bedroom in clay", colour: "Clay Warmth", room: "Bedroom", hex: "#C2683F" },
  { src: "/c.jpg", alt: "Kitchen in linen", colour: "Linen", hex: "#FBF8F3" },
];

test("default renders every colour label", () => {
  render(<image_ticker.default items={items as any} eyebrow="Recent projects" />);
  expect(screen.getByText("Recent projects")).toBeInTheDocument();
  for (const item of items) {
    expect(screen.getByText(item.colour)).toBeInTheDocument();
  }
});

test("default renders rooms when present", () => {
  render(<image_ticker.default items={items as any} />);
  expect(screen.getByText("Living room")).toBeInTheDocument();
  expect(screen.getByText("Bedroom")).toBeInTheDocument();
});

test("default images all have alt text", () => {
  render(<image_ticker.default items={items as any} />);
  const imgs = screen.getAllByRole("img");
  expect(imgs).toHaveLength(items.length);
  for (const item of items) {
    expect(screen.getByAltText(item.alt)).toBeInTheDocument();
  }
});

test("default uses list semantics", () => {
  render(<image_ticker.default items={items as any} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(items.length);
});
