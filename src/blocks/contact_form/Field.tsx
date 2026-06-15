import { cn } from "@/lib/cn";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

/** slugify a field label into a safe id/name token */
export function slugify(field: string): string {
  return field
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

type Control = "textarea" | "email" | "tel" | "text";

/** derive the input control from the field label semantics */
export function controlFor(field: string): Control {
  const f = field.toLowerCase();
  if (f.includes("message") || f.includes("notes") || f.includes("comment")) return "textarea";
  if (f.includes("email")) return "email";
  if (f.includes("phone") || f.includes("tel")) return "tel";
  return "text";
}

export interface FieldProps {
  field: string;
  /** mark the control required (defaults true — contact fields are expected) */
  required?: boolean;
  className?: string;
}

/**
 * Renders a single labelled form control derived from a field string.
 * Keeps the four variants DRY — every variant composes Field.
 */
export function Field({ field, required = true, className }: FieldProps) {
  const id = slugify(field);
  const control = controlFor(field);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-foreground">
        {field}
        {required ? (
          <span aria-hidden className="ml-0.5 text-muted-foreground">
            *
          </span>
        ) : null}
      </Label>

      {control === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required}
          aria-required={required || undefined}
          rows={5}
          placeholder={`Your ${field.toLowerCase()}`}
          className={cn(
            "flex min-h-24 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          )}
        />
      ) : (
        <Input
          id={id}
          name={id}
          type={control}
          required={required}
          aria-required={required || undefined}
          autoComplete={
            control === "email" ? "email" : control === "tel" ? "tel" : undefined
          }
          placeholder={`Your ${field.toLowerCase()}`}
        />
      )}
    </div>
  );
}

export default Field;
