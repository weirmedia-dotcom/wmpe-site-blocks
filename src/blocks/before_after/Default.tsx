import type { BlockComponent, BeforeAfterContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<BeforeAfterContent> = ({ before, after, caption }) => (
  <Section>
    <Container>
      <div className="grid gap-4 md:grid-cols-2">
        <figure className="space-y-2">
          {before.src
            ? <img src={before.src} alt={before.alt} className="w-full h-auto" />
            : <div className="w-full h-64 bg-muted" role="img" aria-label={before.alt} />}
          <figcaption className="text-sm text-muted-foreground">Before</figcaption>
        </figure>
        <figure className="space-y-2">
          {after.src
            ? <img src={after.src} alt={after.alt} className="w-full h-auto" />
            : <div className="w-full h-64 bg-muted" role="img" aria-label={after.alt} />}
          <figcaption className="text-sm text-muted-foreground">After</figcaption>
        </figure>
      </div>
      {caption && <p className="mt-4 text-sm text-muted-foreground">{caption}</p>}
    </Container>
  </Section>
);

export default Default;
