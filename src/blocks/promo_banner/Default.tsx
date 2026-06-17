import type { BlockComponent, PromoBannerContent } from "../../types";
import { Container } from "../../primitives/Container";
import { Button } from "../../ui/button";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

const Default: BlockComponent<PromoBannerContent> = ({ text, icon, cta_label, cta_href }) => {
  const Icon =
    icon && typeof (Icons as Record<string, unknown>)[icon] === "function"
      ? ((Icons as unknown as Record<string, LucideIcon>)[icon] as LucideIcon)
      : undefined;

  return (
    <div className="bg-primary py-3 text-primary-foreground md:py-4">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
        <p className="inline-flex items-center gap-2.5 text-sm font-medium md:text-base">
          {Icon && <Icon className="h-5 w-5 shrink-0 opacity-90" aria-hidden />}
          {text}
        </p>
        {cta_label && (
          <Button asChild variant="secondary" size="sm">
            <a href={cta_href ?? "#"}>{cta_label}</a>
          </Button>
        )}
      </Container>
    </div>
  );
};

export default Default;
