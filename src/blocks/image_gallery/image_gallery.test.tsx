import { render, screen } from "@testing-library/react";
import image_gallery from "@/blocks/image_gallery";

// Mix of images: some with a real src, some without (placeholder path).
const images = [
  { src: "https://example.com/blinds.jpg", alt: "Living-room roller blinds in St. Catharines" },
  { alt: "Custom drapery panels in a Niagara dining room" }, // no src -> placeholder
  { src: "https://example.com/shutters.jpg", alt: "Plantation shutters on a bay window" },
];

test("default renders an <img> for src'd images with correct alt", () => {
  render(<image_gallery.default images={images as any} />);
  const img = screen.getByAltText("Living-room roller blinds in St. Catharines");
  expect(img.tagName).toBe("IMG");
  expect(img).toHaveAttribute("src", "https://example.com/blinds.jpg");
});

test("default exposes alt text for src-less placeholder images", () => {
  render(<image_gallery.default images={images as any} />);
  expect(
    screen.getByRole("img", { name: "Custom drapery panels in a Niagara dining room" }),
  ).toBeInTheDocument();
});

test("default uses list semantics, one item per image", () => {
  render(<image_gallery.default images={images as any} />);
  expect(screen.getByRole("list")).toBeInTheDocument();
  expect(screen.getAllByRole("listitem")).toHaveLength(images.length);
});
