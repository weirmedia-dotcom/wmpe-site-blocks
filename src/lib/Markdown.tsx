import ReactMarkdown, { type Components } from "react-markdown";
import { cn } from "./cn";

/**
 * Shared markdown renderer for prose-style blocks.
 *
 * STRUCTURE ONLY (see CONVENTIONS.md): semantic elements + minimal structural
 * classes (type size for hierarchy, foreground/muted text, list + spacing).
 * No fonts, weight, radius, borders, decoration, or hover — the visual prose
 * style lives in each client repo's block override. Raw HTML is NOT enabled
 * (no rehype-raw) so untrusted markdown stays safe.
 */
const components: Components = {
  h2: ({ children }) => <h2 className="mt-10 mb-4 text-2xl text-foreground">{children}</h2>,
  h3: ({ children }) => <h3 className="mt-8 mb-3 text-xl text-foreground">{children}</h3>,
  p: ({ children }) => <p className="my-4 text-base text-muted-foreground">{children}</p>,
  ul: ({ children }) => <ul className="my-4 list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>,
  ol: ({ children }) => <ol className="my-4 list-decimal space-y-2 pl-6 text-muted-foreground">{children}</ol>,
  li: ({ children }) => <li>{children}</li>,
  a: ({ href, children }) => {
    const isAbsolute = typeof href === "string" && /^https?:\/\//i.test(href);
    return (
      <a href={href} className="underline" {...(isAbsolute ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  },
  strong: ({ children }) => <strong>{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
  blockquote: ({ children }) => <blockquote className="my-6 pl-4 text-muted-foreground">{children}</blockquote>,
  hr: () => <hr className="my-8" />,
  code: ({ children }) => <code className="text-sm">{children}</code>,
};

export function Markdown({ children, className }: { children: string; className?: string }) {
  if (!children) return null;
  return (
    <div className={cn(className)}>
      <ReactMarkdown components={components}>{children}</ReactMarkdown>
    </div>
  );
}

export default Markdown;
