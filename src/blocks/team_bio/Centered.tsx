import type { BlockComponent, TeamBioContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Avatar } from "./Avatar";

const Centered: BlockComponent<TeamBioContent> = ({ name, role, bio }) => (
  <Section className="bg-background">
    <Container className="flex max-w-2xl flex-col items-center text-center">
      <Avatar name={name} size="size-24" tone="muted" />
      <h2 className="mt-7 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
        {name}
      </h2>
      {role && (
        <p className="mt-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {role}
        </p>
      )}
      <span className="mt-6 h-px w-12 bg-primary" aria-hidden />
      <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
        {bio}
      </p>
    </Container>
  </Section>
);

export default Centered;
