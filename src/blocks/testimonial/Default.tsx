import type { BlockComponent, TestimonialContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<TestimonialContent> = ({ items, heading, aggregate }) => (
  <Section>
    <Container>
      {heading && <h2 className="mb-8 text-2xl font-semibold text-foreground">{heading}</h2>}
      {aggregate && (
        <div className="mb-8 flex items-baseline gap-3">
          <span className="text-5xl font-semibold text-foreground">{aggregate.score}</span>
          <span className="text-sm text-muted-foreground">
            out of 5{aggregate.count ? ` · ${aggregate.count} reviews` : ""}
          </span>
        </div>
      )}
      <ul className="grid gap-6 md:grid-cols-3">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
            <blockquote className="text-card-foreground">&ldquo;{item.quote}&rdquo;</blockquote>
            {(item.name || item.town) && (
              <figcaption className="text-sm text-muted-foreground">
                {item.name}
                {item.name && item.town ? " · " : ""}
                {item.town}
              </figcaption>
            )}
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
