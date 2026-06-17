import type { BlockComponent, ProductCardGridContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";

const Default: BlockComponent<ProductCardGridContent> = ({ items }) => (
  <Section>
    <Container>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item, i) => (
          <li key={i} className="flex flex-col gap-3">
            {item.image ? (
              <img src={item.image} alt={item.name} className="w-full h-auto" />
            ) : (
              <div className="w-full h-auto bg-muted" aria-hidden />
            )}
            <h3 className="text-lg text-foreground">{item.name}</h3>
            <p className="text-base text-muted-foreground">{item.tagline}</p>
            {item.features && item.features.length > 0 && (
              <ul className="flex flex-col gap-1">
                {item.features.map((f, j) => (
                  <li key={j} className="text-sm text-muted-foreground">{f}</li>
                ))}
              </ul>
            )}
            <a href={item.cta_href ?? "#"} className="text-base text-foreground">
              {item.cta_label}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </Section>
);

export default Default;
