import type { BlockComponent, ImageGalleryContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ImageGalleryContent> = ({ images }) => (
  <Section>
    <Container>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {(images ?? []).map((img, i) => (
          <li key={i}>
            {img.src
              ? <img src={img.src} alt={img.alt} className="w-full h-auto" />
              : <div className="w-full h-48 bg-muted" role="img" aria-label={img.alt} />}
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
