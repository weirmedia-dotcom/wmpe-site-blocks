import type { BlockComponent, MediaListRowContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<MediaListRowContent> = ({ heading, eyebrow, items }) => (
  <Section>
    <Container>
      {(eyebrow || heading) && (
        <div className="space-y-2">
          {eyebrow && <p className="text-sm text-muted-foreground">{eyebrow}</p>}
          {heading && <h2 className="text-2xl text-foreground">{heading}</h2>}
        </div>
      )}

      <ul className="mt-8 space-y-8">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col gap-4 sm:flex-row">
            {item.image?.src && (
              <img
                src={item.image.src}
                alt={item.image.alt || item.name}
                className="w-full h-auto sm:w-40"
              />
            )}
            <div className="flex-1 space-y-2">
              <h3 className="text-lg text-foreground">{item.name}</h3>
              {item.tagline && <p className="text-base text-muted-foreground">{item.tagline}</p>}
              {item.meta && item.meta.length > 0 && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                  {item.meta.map((m, j) => (
                    <li key={j} className="text-sm text-muted-foreground">{m}</li>
                  ))}
                </ul>
              )}
              {item.price && <p className="text-base text-foreground">{item.price}</p>}
              {item.cta_label && (
                <a href={item.cta_href ?? "#"} className="text-base text-foreground">
                  {item.cta_label}
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
