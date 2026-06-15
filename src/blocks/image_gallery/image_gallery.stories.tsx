import type { Meta } from "@storybook/react";
import image_gallery from "@/blocks/image_gallery";

// Falls Decor sample — a few placeholder srcs plus one or two without src
// to show the accessible placeholder tile.
const images = [
  { src: "https://picsum.photos/seed/fd1/800/600", alt: "Living-room roller blinds in St. Catharines" },
  { src: "https://picsum.photos/seed/fd2/800/1000", alt: "Floor-to-ceiling drapery in a Niagara-on-the-Lake sunroom" },
  { src: "https://picsum.photos/seed/fd3/800/600", alt: "Plantation shutters on a Welland bay window" },
  { alt: "Motorized blackout shades in a Thorold primary bedroom" }, // no src -> placeholder
  { src: "https://picsum.photos/seed/fd5/800/700", alt: "Layered Roman shades in a Fonthill kitchen" },
  { alt: "Custom valance over a Grimsby patio door" }, // no src -> placeholder
];

const meta: Meta = { title: "Blocks/ImageGallery" };
export default meta;

// kebab-keyed variants can't be JSX tags directly — extract to PascalCase const first.
const TwoUp = image_gallery["two-up"];

export const Default = () => <image_gallery.default images={images} />;
export const Masonry = () => <image_gallery.masonry images={images} />;
export const Carousel = () => <image_gallery.carousel images={images} />;
export const TwoUpStory = () => <TwoUp images={images} />;
