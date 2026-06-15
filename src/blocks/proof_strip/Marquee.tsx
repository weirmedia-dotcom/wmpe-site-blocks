import type { BlockComponent, ProofStripContent, ProofItem } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Chip = ({ item }: { item: ProofItem }) => (
  <figure className="flex w-[20rem] shrink-0 flex-col gap-3 rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm">
    <span className="font-heading text-3xl leading-none text-primary/30" aria-hidden>
      &ldquo;
    </span>
    <blockquote className="text-pretty text-base font-medium leading-relaxed">
      {item.quote}
    </blockquote>
    {item.attribution && (
      <figcaption className="mt-1">
        <cite className="text-sm font-semibold not-italic text-muted-foreground">
          {item.attribution}
        </cite>
      </figcaption>
    )}
  </figure>
);

const Marquee: BlockComponent<ProofStripContent> = ({ items }) => (
  <Section className="overflow-hidden bg-background">
    <style>{`
      @keyframes proof-marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `}</style>
    <Container className="max-w-none px-0">
      <div
        className="group relative flex overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        role="list"
        aria-label="Customer testimonials"
      >
        <div className="flex w-max gap-5 px-4 [animation:proof-marquee_36s_linear_infinite] [animation-play-state:running] hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:[animation:none]">
          {items.map((item, i) => (
            <div role="listitem" key={`a-${i}`}>
              <Chip item={item} />
            </div>
          ))}
          {items.map((item, i) => (
            <div role="listitem" aria-hidden key={`b-${i}`}>
              <Chip item={item} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  </Section>
);

export default Marquee;
