import type { BlockComponent, ImageGalleryContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import Tile from "./Tile";

// responsive grid (1 → 2 → 3 cols), uniform 4:3 aspect tiles, rounded + framed
const Default: BlockComponent<ImageGalleryContent> = ({ images }) => (
  <Section className="bg-background">
    <Container>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <li key={i}>
            <Tile src={img.src} alt={img.alt} className="aspect-[4/3]" />
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
