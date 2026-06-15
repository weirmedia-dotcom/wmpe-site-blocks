import type { BlockComponent, ImageGalleryContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import Tile from "./Tile";

// CSS multi-column masonry — tiles flow at natural heights, never split across columns.
// Placeholders (no src) get a min-height so they still occupy real space in the flow.
const Masonry: BlockComponent<ImageGalleryContent> = ({ images }) => (
  <Section className="bg-background">
    <Container>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid">
            <Tile
              src={img.src}
              alt={img.alt}
              className={img.src ? undefined : "aspect-[4/3]"}
              imgClassName="h-auto"
            />
          </div>
        ))}
      </div>
    </Container>
  </Section>
);

export default Masonry;
