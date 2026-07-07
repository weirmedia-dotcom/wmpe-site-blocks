import type { BlockComponent, VisitUsContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { safeEmbedUrl } from "../../lib/safeUrl";

const Default: BlockComponent<VisitUsContent> = ({
  heading,
  eyebrow,
  address,
  phone,
  email,
  hours,
  cta_label,
  cta_href,
  map_image,
  map_embed,
}) => {
  const safeMapEmbed = safeEmbedUrl(map_embed);
  return (
  <Section>
    <Container>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          {(eyebrow || heading) && (
            <div className="space-y-2">
              {eyebrow && <p className="text-sm text-muted-foreground">{eyebrow}</p>}
              {heading && <h2 className="text-2xl text-foreground">{heading}</h2>}
            </div>
          )}

          {address && address.length > 0 && (
            <address className="not-italic text-base text-foreground">
              {address.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </address>
          )}

          {phone && (
            <p>
              <a href={`tel:${phone.replace(/[^0-9+]/g, "")}`} className="text-base text-foreground">
                {phone}
              </a>
            </p>
          )}

          {email && (
            <p>
              <a href={`mailto:${email}`} className="text-base text-foreground">
                {email}
              </a>
            </p>
          )}

          {hours && hours.length > 0 && (
            <ul className="space-y-1">
              {hours.map((h, i) => (
                <li key={i} className="flex justify-between gap-4 text-base">
                  <span className="text-foreground">{h.days}</span>
                  <span className="text-muted-foreground">{h.time}</span>
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

        <div>
          {safeMapEmbed ? (
            <iframe
              src={safeMapEmbed}
              title="Map"
              loading="lazy"
              className="w-full h-full min-h-64 border-0"
            />
          ) : map_image?.src ? (
            <img src={map_image.src} alt={map_image.alt || "Map"} className="w-full h-auto" />
          ) : null}
        </div>
      </div>
    </Container>
  </Section>
  );
};

export default Default;
