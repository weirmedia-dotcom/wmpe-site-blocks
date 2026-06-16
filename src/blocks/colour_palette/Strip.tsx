import type { BlockComponent, ColourPaletteContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Strip: BlockComponent<ColourPaletteContent> = ({ swatches, heading }) => (
  <Section className="bg-background">
    <Container>
      {heading && (
        <h2 className="mb-6 font-heading text-2xl font-semibold tracking-tight text-foreground">{heading}</h2>
      )}
      <div
        className="flex overflow-hidden rounded-xl border border-border"
        role="list"
        aria-label="Colour palette"
      >
        {swatches.map((swatch, i) => (
          <div
            key={i}
            role="listitem"
            title={swatch.name}
            className="group relative flex-1 cursor-default"
            style={swatch.hex ? { backgroundColor: swatch.hex } : undefined}
          >
            <div className={`h-20 transition-all duration-200 group-hover:h-28${!swatch.hex ? " bg-muted" : ""}`} />
            <div className="absolute inset-x-0 bottom-0 translate-y-full overflow-hidden bg-background/95 px-1 py-1 text-center opacity-0 transition-all duration-200 group-hover:opacity-100">
              <span className="block truncate text-xs font-medium text-foreground">{swatch.name}</span>
            </div>
          </div>
        ))}
      </div>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {swatches.map((swatch, i) => (
          <li key={i} className="text-xs text-muted-foreground">{swatch.name}</li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Strip;
