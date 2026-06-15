import type { BlockComponent, TeamBioContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Avatar } from "./Avatar";

const Default: BlockComponent<TeamBioContent> = ({ name, role, bio }) => (
  <Section className="bg-background">
    <Container className="max-w-4xl">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <Avatar name={name} size="size-16 sm:size-20" tone="secondary" />
        <div className="flex-1">
          <h2 className="font-heading text-2xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl">
            {name}
          </h2>
          {role && (
            <p className="mt-1.5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
              {role}
            </p>
          )}
          <div className="mt-4 flex items-start gap-4">
            <span className="mt-2 hidden h-px w-8 shrink-0 bg-primary sm:block" aria-hidden />
            <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
