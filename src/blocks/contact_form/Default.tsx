import type { BlockComponent, ContactFormContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

/** slugify a field label into a safe id/name token */
function slugify(field: string): string {
  return field
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** derive whether a field should render as a multi-line textarea */
function isMultiline(field: string): boolean {
  const f = field.toLowerCase();
  return f.includes("message") || f.includes("notes") || f.includes("comment");
}

const Default: BlockComponent<ContactFormContent> = ({ heading, intro, fields, submit_label, props }) => (
  <Section>
    <Container>
      {heading ? <h2 className="mb-8 text-2xl text-heading">{heading}</h2> : null}
      {intro ? <p className="text-base text-muted-foreground">{intro}</p> : null}
      <form className="flex flex-col gap-4">
        {(fields ?? []).map((field) => {
          const id = slugify(field);
          return (
            <div key={field} className="flex flex-col gap-1">
              <label htmlFor={id} className="text-sm text-foreground">
                {field}
              </label>
              {isMultiline(field) ? (
                <textarea id={id} name={id} className="text-base text-foreground" />
              ) : (
                <input id={id} name={id} type="text" className="text-base text-foreground" />
              )}
            </div>
          );
        })}
        {(props?.hiddenFields ?? []).filter((n) => typeof n === "string" && n).map((name) => (
          <input key={name} type="hidden" name={name} defaultValue="" />
        ))}
        <button type="submit" className="text-base text-foreground">
          {submit_label || "Send message"}
        </button>
      </form>
    </Container>
  </Section>
);

export default Default;
