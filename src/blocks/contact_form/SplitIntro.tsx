import type { BlockComponent, ContactFormContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";
import { Field } from "./Field";

const SplitIntro: BlockComponent<ContactFormContent> = ({ intro, fields }) => (
  <Section className="bg-background">
    <Container>
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* left: intro / heading */}
        <div className="md:sticky md:top-24">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden className="h-px w-8 bg-border" />
            Get in touch
          </span>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {intro ?? "Let's talk"}
          </h2>
          <div aria-hidden className="mt-6 h-px w-16 bg-border" />
        </div>

        {/* right: form */}
        <form noValidate className="flex flex-col gap-6">
          {fields.map((field) => (
            <Field key={field} field={field} />
          ))}
          <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">
            Send message
          </Button>
          <p className="text-xs text-muted-foreground">
            Fields marked <span aria-hidden>*</span> are required.
          </p>
        </form>
      </div>
    </Container>
  </Section>
);

export default SplitIntro;
