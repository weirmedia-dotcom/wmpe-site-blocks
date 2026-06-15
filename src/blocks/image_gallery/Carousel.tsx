import type { BlockComponent, ImageGalleryContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import Tile from "./Tile";

// horizontal scroll-snap row — fixed-width tiles, snap to start, edge fade via padding
const Carousel: BlockComponent<ImageGalleryContent> = ({ images }) => (
  <Section className="bg-background">
    <Container>
      <ul className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
        {images.map((img, i) => (
          <li
            key={i}
            className="w-[78%] shrink-0 snap-start sm:w-[48%] lg:w-[32%]"
          >
            <Tile src={img.src} alt={img.alt} className="aspect-[4/3]" />
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Carousel;
