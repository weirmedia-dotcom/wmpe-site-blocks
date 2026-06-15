import type { BlockComponent, TeamBioContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Avatar } from "./Avatar";

const QuoteStyle: BlockComponent<TeamBioContent> = ({ name, role, bio }) => (
  <Section className="relative overflow-hidden bg-secondary text-secondary-foreground">
    <span
      className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 select-none font-heading text-[12rem] leading-none text-primary/10 md:text-[18rem]"
      aria-hidden
    >
      &ldquo;
    </span>
    <Container className="relative max-w-4xl text-center">
      <figure>
        <blockquote className="text-balance font-heading text-2xl font-medium leading-snug tracking-tight text-foreground md:text-4xl md:leading-snug">
          {bio}
        </blockquote>
        <figcaption className="mt-10 flex flex-col items-center gap-4">
          <span className="h-px w-12 bg-primary" aria-hidden />
          <Avatar name={name} size="size-14" tone="muted" />
          <div>
            <cite className="font-heading text-lg font-semibold not-italic tracking-tight text-foreground">
              {name}
            </cite>
            {role && (
              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {role}
              </p>
            )}
          </div>
        </figcaption>
      </figure>
    </Container>
  </Section>
);

export default QuoteStyle;
