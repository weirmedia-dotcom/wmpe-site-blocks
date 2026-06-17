import type { BlockComponent, ColourPaletteContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ColourPaletteContent> = ({ swatches, heading, body }) => (
  <Section>
    <Container>
      {heading && <h2 className="mb-4 text-2xl text-foreground">{heading}</h2>}
      {body && <p className="mb-8 text-base text-muted-foreground">{body}</p>}
      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {swatches.map((swatch, i) => (
          <li key={i} className="flex flex-col gap-2">
            {swatch.hex ? (
              <span
                className="w-full h-8"
                style={{ backgroundColor: swatch.hex }}
                role="img"
                aria-label={swatch.name}
              />
            ) : (
              <span className="w-full h-8 bg-muted" role="img" aria-label={swatch.name} />
            )}
            <span className="text-sm text-foreground">{swatch.name}</span>
            {swatch.family && (
              <span className="text-sm text-muted-foreground">{swatch.family}</span>
            )}
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
