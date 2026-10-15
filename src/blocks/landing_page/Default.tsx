import type { BlockComponent, LandingPageContent, LandingSection } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

/**
 * landing_page: every landing page part it is given, as a neutral structure. The hero's h1 is the only h1; sections are h2 with
 * h3 items. Structure only (CONVENTIONS.md): a client override styles it. The form part is a heading and intro around `formSlot`,
 * which only a client renderer composing this block fills; stored pages put their form on the client's wired form block instead.
 */
function Part({ s }: { s: LandingSection }) {
  if (s.kind === "benefits" || s.kind === "process") {
    const List = s.kind === "process" ? "ol" : "ul";
    return (
      <Section data-part={s.kind}>
        <Container className="space-y-8">
          <h2 className="text-2xl text-heading">{s.heading}</h2>
          <List className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {s.items.map((it, i) => (
              <li key={i} className="space-y-2">
                <h3 className="text-lg text-heading">{it.title}</h3>
                <p className="text-base text-muted-foreground">{it.body}</p>
              </li>
            ))}
          </List>
        </Container>
      </Section>
    );
  }
  if (s.kind === "proof") {
    return (
      <Section data-part="proof">
        <Container className="space-y-8">
          <h2 className="text-2xl text-heading">{s.heading}</h2>
          {s.items.map((p, i) => (
            <figure key={i}>
              <blockquote className="text-lg text-foreground">{p.text}</blockquote>
              {p.author && (
                <figcaption className="mt-2 text-base text-muted-foreground"><cite>{p.author}</cite></figcaption>
              )}
            </figure>
          ))}
        </Container>
      </Section>
    );
  }
  if (s.kind === "faq") {
    return (
      <Section data-part="faq">
        <Container className="space-y-4">
          <h2 className="text-2xl text-heading">{s.heading}</h2>
          {s.items.map((q, i) => (
            <details key={i}>
              <summary className="text-lg text-foreground">{q.question}</summary>
              <p className="mt-2 text-base text-muted-foreground">{q.answer}</p>
            </details>
          ))}
        </Container>
      </Section>
    );
  }
  return (
    <Section data-part="service_area">
      <Container className="space-y-4">
        <h2 className="text-2xl text-heading">{s.heading}</h2>
        <p className="text-base text-muted-foreground">{s.body}</p>
      </Container>
    </Section>
  );
}

const Default: BlockComponent<LandingPageContent> = ({ hero, sections, form, formSlot, links, closing }) => (
  <div data-block="landing_page">
    {hero && (
      <Section data-part="hero">
        <Container className="space-y-5">
          <h1 className="text-3xl text-heading">{hero.h1}</h1>
          <p className="text-lg text-muted-foreground">{hero.subheading}</p>
          <p><a href={hero.primary_cta.href} className="text-base text-foreground">{hero.primary_cta.label}</a></p>
          {hero.trust_line && <p className="text-sm text-muted-foreground">{hero.trust_line}</p>}
        </Container>
      </Section>
    )}
    {(sections ?? []).map((s, i) => <Part key={`${s.kind}-${i}`} s={s} />)}
    {form && (
      <Section data-part="form" id="contact">
        <Container className="space-y-4">
          <h2 className="text-2xl text-heading">{form.heading}</h2>
          <p className="text-base text-muted-foreground">{form.intro}</p>
          {formSlot}
        </Container>
      </Section>
    )}
    {links && links.length > 0 && (
      <Section data-part="links">
        <Container>
          <ul className="flex flex-wrap gap-4">
            {links.map((l) => (
              <li key={l.href}><a href={l.href} className="text-base text-foreground">{l.anchor}</a></li>
            ))}
          </ul>
        </Container>
      </Section>
    )}
    {closing && (
      <Section data-part="closing">
        <Container className="space-y-4">
          <h2 className="text-2xl text-heading">{closing.heading}</h2>
          <p className="text-base text-muted-foreground">{closing.body}</p>
          <p><a href={closing.href} className="text-base text-foreground">{closing.button}</a></p>
        </Container>
      </Section>
    )}
  </div>
);

export default Default;
