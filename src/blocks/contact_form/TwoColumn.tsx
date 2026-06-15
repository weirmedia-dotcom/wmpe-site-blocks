import type { BlockComponent, ContactFormContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";
import { Field, controlFor } from "./Field";

const TwoColumn: BlockComponent<ContactFormContent> = ({ intro, fields }) => (
  <Section className="bg-background">
    <Container className="max-w-3xl">
      {intro ? (
        <div className="mb-10 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span aria-hidden className="h-px w-8 bg-border" />
            Contact
          </span>
          <h2 className="font-heading text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {intro}
          </h2>
        </div>
      ) : null}

      <form noValidate>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {fields.map((field) => (
            <Field
              key={field}
              field={field}
              // textareas span the full grid width; short inputs sit in 2-col
              className={controlFor(field) === "textarea" ? "md:col-span-2" : undefined}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            Send message
          </Button>
          <p className="text-xs text-muted-foreground">
            Fields marked <span aria-hidden>*</span> are required.
          </p>
        </div>
      </form>
    </Container>
  </Section>
);

export default TwoColumn;
