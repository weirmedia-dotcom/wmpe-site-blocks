import type { BlockComponent, CategoryTilesContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<CategoryTilesContent> = ({ heading, eyebrow, items }) => (
  <Section>
    <Container>
      {(eyebrow || heading) && (
        <div className="space-y-2">
          {eyebrow && <p className="text-sm text-muted-foreground">{eyebrow}</p>}
          {heading && <h2 className="text-2xl text-foreground">{heading}</h2>}
        </div>
      )}

      <ul className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {(items ?? []).map((item, i) => {
          const inner = (
            <>
              {item.image?.src && (
                <img
                  src={item.image.src}
                  alt={item.image.alt || item.title}
                  className="w-full h-auto"
                />
              )}
              <h3 className="text-lg text-foreground">{item.title}</h3>
              {item.blurb && <p className="text-base text-muted-foreground">{item.blurb}</p>}
            </>
          );
          return (
            <li key={i} className="space-y-2">
              {item.href ? (
                <a href={item.href} className="block space-y-2 text-foreground">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </li>
          );
        })}
      </ul>
    </Container>
  </Section>
);

export default Default;
