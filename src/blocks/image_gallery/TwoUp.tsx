import type { BlockComponent, ImageGalleryContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import Tile from "./Tile";

// large editorial pairs — single column on mobile, two big 3:2 tiles on md+
const TwoUp: BlockComponent<ImageGalleryContent> = ({ images }) => (
  <Section className="bg-background">
    <Container>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {images.map((img, i) => (
          <li key={i}>
            <Tile src={img.src} alt={img.alt} className="aspect-[3/2]" />
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default TwoUp;
