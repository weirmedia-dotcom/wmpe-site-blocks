import type { BlockComponent, VisitUsContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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
}) => (
  <Section className="bg-background">
    <Container>
      <Card className="overflow-hidden md:grid md:grid-cols-2">
        <div className="p-8 md:p-10">
          {eyebrow && (
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>
          )}
          {heading && (
            <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-card-foreground md:text-3xl">
              {heading}
            </h2>
          )}

          <dl className="mt-7 space-y-5">
            {address && address.length > 0 && (
              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <dd className="text-base not-italic leading-relaxed text-foreground">
                  {address.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            )}
            {phone && (
              <div className="flex items-center gap-3.5">
                <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <dd>
                  <a
                    href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                    className="text-base text-foreground transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                </dd>
              </div>
            )}
            {email && (
              <div className="flex items-center gap-3.5">
                <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <dd>
                  <a
                    href={`mailto:${email}`}
                    className="text-base text-foreground transition-colors hover:text-primary"
                  >
                    {email}
                  </a>
                </dd>
              </div>
            )}
            {hours && hours.length > 0 && (
              <div className="flex items-start gap-3.5">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                <dd className="w-full max-w-xs">
                  <ul className="space-y-1.5">
                    {hours.map((h, i) => (
                      <li key={i} className="flex items-baseline justify-between gap-4 text-base">
                        <span className="text-foreground">{h.days}</span>
                        <span className="text-muted-foreground">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>

          {cta_label && (
            <div className="mt-8">
              <Button asChild>
                <a href={cta_href ?? "#"}>
                  <MapPin className="h-4 w-4" aria-hidden />
                  {cta_label}
                </a>
              </Button>
            </div>
          )}
        </div>

        <div className="relative min-h-[260px] border-t border-border bg-muted md:border-l md:border-t-0">
          {map_embed ? (
            <iframe
              src={map_embed}
              title="Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : map_image?.src ? (
            <img
              src={map_image.src}
              alt={map_image.alt || "Map"}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : null}
        </div>
      </Card>
    </Container>
  </Section>
);

export default Default;
