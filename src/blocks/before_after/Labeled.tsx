import type { BlockComponent, BeforeAfterContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Labeled: BlockComponent<BeforeAfterContent> = ({ before, after, caption }) => (
  <Section className="bg-background">
    <Container>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-xl">
            {before.src
              ? <img src={before.src} alt={before.alt} className="aspect-[4/3] w-full object-cover" />
              : <div className="aspect-[4/3] w-full bg-muted" aria-label={before.alt} />}
          </div>
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-border" aria-hidden />
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Before
            </span>
            <span className="h-px flex-1 bg-border" aria-hidden />
          </div>
          <p className="text-center text-sm text-muted-foreground">{before.alt}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="relative overflow-hidden rounded-xl ring-2 ring-primary">
            {after.src
              ? <img src={after.src} alt={after.alt} className="aspect-[4/3] w-full object-cover" />
              : <div className="aspect-[4/3] w-full bg-muted" aria-label={after.alt} />}
          </div>
          <div className="flex items-center gap-3">
            <span className="h-px flex-1 bg-primary/30" aria-hidden />
            <span className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
              After
            </span>
            <span className="h-px flex-1 bg-primary/30" aria-hidden />
          </div>
          <p className="text-center text-sm text-muted-foreground">{after.alt}</p>
        </div>
      </div>
      {caption && <p className="mt-8 text-center text-base font-medium text-foreground">{caption}</p>}
    </Container>
  </Section>
);

export default Labeled;
