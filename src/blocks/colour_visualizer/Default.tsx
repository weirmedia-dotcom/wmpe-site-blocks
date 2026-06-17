import type { BlockComponent, ColourVisualizerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ColourVisualizerContent> = ({
  image,
  swatches = [],
  eyebrow,
  heading,
  subhead,
}) => (
  <Section>
    <Container>
      {(eyebrow || heading || subhead) && (
        <div className="space-y-2">
          {eyebrow && <p className="text-sm text-muted-foreground">{eyebrow}</p>}
          {heading && <h2 className="text-3xl text-foreground">{heading}</h2>}
          {subhead && <p className="text-lg text-muted-foreground">{subhead}</p>}
        </div>
      )}
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {image && (
          <img
            src={image}
            alt={heading ?? "Colour visualizer"}
            className="w-full h-auto bg-muted"
          />
        )}
        <ul className="grid grid-cols-2 gap-4">
          {swatches.map((s, i) => (
            <li key={i}>
              <button type="button" className="flex items-center gap-2 text-left">
                <span
                  className="inline-block h-6 w-6"
                  style={{ backgroundColor: s.hex }}
                  aria-hidden
                />
                <span className="text-base text-foreground">{s.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </Section>
);

export default Default;
