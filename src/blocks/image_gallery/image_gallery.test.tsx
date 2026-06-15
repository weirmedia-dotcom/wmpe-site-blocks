import { render, screen } from "@testing-library/react";
import image_gallery from "@/blocks/image_gallery";

// Mix of images: some with a real src, some without (placeholder path).
const images = [
  { src: "https://example.com/blinds.jpg", alt: "Living-room roller blinds in St. Catharines" },
  { alt: "Custom drapery panels in a Niagara dining room" }, // no src -> placeholder
  { src: "https://example.com/shutters.jpg", alt: "Plantation shutters on a bay window" },
];

// kebab-keyed variants can't be JSX tags directly — extract to PascalCase consts.
const TwoUp = image_gallery["two-up"];

test.each(Object.keys(image_gallery))(
  "image_gallery variant %s renders <img> for src'd images and alt text for placeholders",
  (v) => {
    const C = (image_gallery as any)[v];
    const { unmount } = render(<C images={images} />);

    // images WITH src render a real <img> with the right alt (and lazy loading)
    const img = screen.getByAltText("Living-room roller blinds in St. Catharines");
    expect(img.tagName).toBe("IMG");
    expect(img).toHaveAttribute("src", "https://example.com/blinds.jpg");
    expect(img).toHaveAttribute("loading", "lazy");

    // images WITHOUT src still expose their alt as (sr-only) text
    expect(
      screen.getByText("Custom drapery panels in a Niagara dining room"),
    ).toBeInTheDocument();

    unmount();
  },
);

test("image_gallery exposes default + all kebab keys", () => {
  expect(image_gallery.default).toBeTruthy();
  expect(image_gallery.masonry).toBeTruthy();
  expect(image_gallery.carousel).toBeTruthy();
  expect(image_gallery["two-up"]).toBeTruthy();
});

test("two-up variant renders every image", () => {
  render(<TwoUp images={images} />);
  // two src'd images -> two <img>; the placeholder -> its alt text
  expect(screen.getAllByRole("img")).toHaveLength(2);
  expect(
    screen.getByText("Custom drapery panels in a Niagara dining room"),
  ).toBeInTheDocument();
});
