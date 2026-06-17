import type { BlockComponent, TeamBioContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<TeamBioContent> = ({ name, role, bio }) => (
  <Section>
    <Container>
      <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
        <div className="w-full h-48 sm:w-40 bg-muted" role="img" aria-label={name} />
        <div className="space-y-2">
          <h3 className="text-xl text-foreground">{name}</h3>
          {role && <p className="text-base text-muted-foreground">{role}</p>}
          <p className="text-base text-muted-foreground">{bio}</p>
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
