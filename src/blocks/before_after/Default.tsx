import type { BlockComponent, BeforeAfterContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<BeforeAfterContent> = ({ before, after, caption }) => (
  <Section className="bg-muted/40">
    <Container>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl">
          {before.src
            ? <img src={before.src} alt={before.alt} className="aspect-[4/3] w-full object-cover" />
            : <div className="aspect-[4/3] w-full bg-muted" aria-label={before.alt} />}
          <span className="absolute bottom-3 left-3 rounded bg-background/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-foreground">
            Before
          </span>
        </div>
        <div className="relative overflow-hidden rounded-xl">
          {after.src
            ? <img src={after.src} alt={after.alt} className="aspect-[4/3] w-full object-cover" />
            : <div className="aspect-[4/3] w-full bg-muted" aria-label={after.alt} />}
          <span className="absolute bottom-3 left-3 rounded bg-primary px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            After
          </span>
        </div>
      </div>
      {caption && <p className="mt-5 text-center text-sm text-muted-foreground">{caption}</p>}
    </Container>
  </Section>
);

export default Default;
