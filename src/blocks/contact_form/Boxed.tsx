import type { BlockComponent, ContactFormContent } from "@/types";
import { Section } from "@/primitives/Section";
import { Container } from "@/primitives/Container";
import { Button } from "@/ui/button";
import { Field } from "./Field";

const Boxed: BlockComponent<ContactFormContent> = ({ intro, fields }) => (
  <Section className="bg-muted">
    <Container className="max-w-xl">
      <div className="rounded-2xl border border-border bg-card p-8 text-card-foreground shadow-lg md:p-10">
        {intro ? (
          <div className="mb-8">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden className="h-px w-8 bg-border" />
              Contact
            </span>
            <h2 className="font-heading text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              {intro}
            </h2>
          </div>
        ) : null}

        <form noValidate className="flex flex-col gap-6">
          {fields.map((field) => (
            <Field key={field} field={field} />
          ))}
          <Button type="submit" size="lg" className="mt-2 w-full">
            Send message
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Fields marked <span aria-hidden>*</span> are required.
          </p>
        </form>
      </div>
    </Container>
  </Section>
);

export default Boxed;
