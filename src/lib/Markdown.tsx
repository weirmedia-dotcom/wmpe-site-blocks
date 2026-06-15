import ReactMarkdown, { type Components } from "react-markdown";
import { cn } from "./cn";

/**
 * Shared markdown renderer for prose-style blocks.
 *
 * Styles every element with shadcn CSS-var Tailwind classes (no
 * @tailwindcss/typography). Raw HTML is intentionally NOT enabled
 * (no rehype-raw) so untrusted markdown stays safe.
 */
const components: Components = {
  h2: ({ children }) => (
    <h2 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mt-10 mb-4 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-heading text-xl font-semibold text-foreground mt-8 mb-3 tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-base leading-relaxed text-muted-foreground my-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 my-4 space-y-2 text-muted-foreground marker:text-primary/60">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 my-4 space-y-2 text-muted-foreground marker:text-primary/60 marker:font-medium">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  a: ({ href, children }) => {
    const isAbsolute = typeof href === "string" && /^https?:\/\//i.test(href);
    return (
      <a
        href={href}
        className="text-primary underline underline-offset-4 decoration-primary/40 transition-opacity hover:opacity-80"
        {...(isAbsolute ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  },
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-border pl-4 italic text-muted-foreground my-6">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-8 border-border" />,
  code: ({ children }) => (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
      {children}
    </code>
  ),
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
