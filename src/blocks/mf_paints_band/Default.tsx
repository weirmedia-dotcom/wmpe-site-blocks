import type { BlockComponent, MfPaintsBandContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<MfPaintsBandContent> = ({
  paint_can,
  chips,
  eyebrow,
  heading,
  body,
  points,
  cta_label,
  cta_href,
}) => (
  <Section>
    <Container>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          {paint_can ? (
            <img src={paint_can} alt={heading} className="w-full h-auto" />
          ) : (
            <div className="w-full h-auto bg-muted" aria-hidden />
          )}
        </div>

        <div className="flex flex-col gap-4">
          {eyebrow && <span className="text-sm text-muted-foreground">{eyebrow}</span>}
          <h2 className="text-3xl text-foreground">{heading}</h2>
          <p className="text-base text-muted-foreground">{body}</p>

          {points && points.length > 0 && (
            <ul className="flex flex-col gap-2">
              {points.map((point, i) => (
                <li key={i} className="text-base text-muted-foreground">{point}</li>
              ))}
            </ul>
          )}

          {chips && chips.length > 0 && (
            <ul className="flex gap-2">
              {chips.map((chip, i) => (
                <li key={i}>
                  <span
                    className="block w-8 h-8"
                    style={{ backgroundColor: chip }}
                    role="img"
                    aria-label={`Colour ${i + 1}`}
                  />
                </li>
              ))}
            </ul>
          )}

          {cta_label && (
            <a href={cta_href ?? "#"} className="text-base text-foreground">
              {cta_label}
            </a>
          )}
        </div>
      </div>
    </Container>
  </Section>
);

export default Default;
