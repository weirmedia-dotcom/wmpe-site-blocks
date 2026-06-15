import type { BlockComponent, TeamBioContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card as UICard } from "../../ui/card";
import { Avatar } from "./Avatar";

const Card: BlockComponent<TeamBioContent> = ({ name, role, bio }) => (
  <Section className="bg-muted/40">
    <Container className="max-w-xl">
      <UICard className="relative overflow-hidden p-8 text-center transition-shadow duration-300 hover:shadow-md md:p-10">
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary"
          aria-hidden
        />
        <div className="flex flex-col items-center">
          <Avatar name={name} size="size-20" tone="secondary" />
          <h2 className="mt-6 font-heading text-2xl font-semibold leading-tight tracking-tight text-card-foreground">
            {name}
          </h2>
          {role && (
            <p className="mt-1.5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {role}
            </p>
          )}
          <span className="mt-5 h-px w-10 bg-primary" aria-hidden />
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground">
            {bio}
          </p>
        </div>
      </UICard>
    </Container>
  </Section>
);

export default Card;
