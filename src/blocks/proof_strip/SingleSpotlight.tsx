import type { BlockComponent, ProofStripContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const SingleSpotlight: BlockComponent<ProofStripContent> = ({ items }) => {
  const item = items[0];
  if (!item) return null;
  return (
    <Section className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <span
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 select-none font-heading text-[14rem] leading-none text-primary/10 md:text-[20rem]"
        aria-hidden
      >
        &ldquo;
      </span>
      <Container className="relative max-w-4xl text-center">
        <figure>
          <blockquote className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl">
            {item.quote}
          </blockquote>
          {item.attribution && (
            <figcaption className="mt-10 flex flex-col items-center gap-3">
              <span className="h-px w-12 bg-primary" aria-hidden />
              <cite className="text-base font-semibold not-italic text-muted-foreground">
                {item.attribution}
              </cite>
            </figcaption>
          )}
        </figure>
      </Container>
    </Section>
  );
};

export default SingleSpotlight;
