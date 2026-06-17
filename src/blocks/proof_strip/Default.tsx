import type { BlockComponent, ProofStripContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ProofStripContent> = ({
  items,
  eyebrow,
  heading,
}) => (
  <Section>
    <Container>
      {eyebrow && (
        <p className="text-sm text-muted-foreground">{eyebrow}</p>
      )}
      {heading && (
        <h2 className="text-3xl text-foreground">{heading}</h2>
      )}
      <div className="space-y-8">
        {(items ?? []).map((item, i) => (
          <figure key={i}>
            <blockquote className="text-lg text-foreground">
              {item.quote}
            </blockquote>
            {item.attribution && (
              <figcaption className="mt-2 text-base text-muted-foreground">
                <cite>{item.attribution}</cite>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </Container>
  </Section>
);

export default Default;
