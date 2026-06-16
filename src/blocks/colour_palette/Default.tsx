import type { BlockComponent, ColourPaletteContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ColourPaletteContent> = ({ swatches, heading, body }) => (
  <Section className="bg-background">
    <Container>
      {heading && (
        <h2 className="mb-4 font-heading text-2xl font-semibold tracking-tight text-foreground">{heading}</h2>
      )}
      {body && <p className="mb-8 text-muted-foreground">{body}</p>}
      <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
        {swatches.map((swatch, i) => (
          <li key={i} className="flex flex-col gap-2">
            <div
              className="aspect-square w-full rounded-lg border border-border shadow-sm"
              style={swatch.hex ? { backgroundColor: swatch.hex } : undefined}
              role="img"
              aria-label={swatch.name}
            >
              {!swatch.hex && <div className="h-full w-full rounded-lg bg-muted" aria-hidden />}
            </div>
            <span className="text-xs font-medium text-foreground">{swatch.name}</span>
            {swatch.family && <span className="text-xs text-muted-foreground">{swatch.family}</span>}
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
