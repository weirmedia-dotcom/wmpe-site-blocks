# @weirmedia/blocks — conventions

## Structure, not styling (core principle)

This is the **agnostic core** block library. Blocks here are **STRUCTURE ONLY** —
content slots and semantic layout. Visual identity (fonts, colour, radius, shadow,
borders, spacing rhythm, aspect ratios, animation, hover) lives in each **client
repo's `components/blocks-overrides/`**, produced by claude.ai/design.

A core block must read like a neutral wireframe — **never like any client**. If you
adapt a block from a client's bespoke kit, you import that client's look. Don't.
Author core blocks structure-first.

## One skeleton per block

Each block exports ONE component: `index.tsx` = `{ default: Default }`. **No styled
variants in core.** WCE may emit `props.variant: "centered"` etc. — those resolve
against the CLIENT override (`override[variant] ?? override.default`); in core they
harmlessly fall back to `default` (see `BlockRenderer`). Variant *styling* is the
client's job, not the core's.

## The contract is the value

Keep the content types in `src/types.ts` **stable** — that is what WCE generates
against, the dashboard CMS edits, and every client override must accept. Only the
*render* goes minimal. Never change a block's content shape to simplify its render.

## Allowed (structure)

- Semantic tags: `Section`/`Container`, `h2`/`h3`, `p`, `ul`/`li`, `a`, `img`, `table`.
- Layout: `flex`, `grid`, `grid-cols-*`, `gap-*`, `space-y-*`, `items-*`, `justify-*`;
  the `Section` (vertical rhythm) and `Container` (max-width) primitives.
- Type **size** for hierarchy only: `text-sm` / `text-base` / `text-lg` / `text-xl` /
  `text-2xl` / `text-3xl`.
- Text colour: ONLY `text-foreground` (primary) and `text-muted-foreground` (secondary).
- Images: `w-full h-auto`; `bg-muted` ONLY as a neutral empty-image placeholder.
- Content-supplied colour (swatch / chip `hex`) rendered via inline `style={{...}}` —
  that is DATA, keep it.
- Accessibility: `alt`, real links, list semantics, heading hierarchy.

## Banned (styling → client repo)

`font-heading`/`font-body` (any font-family), font-weight (`font-bold`/`-semibold`/
`-medium`), `tracking-*`/decorative `leading-*`, `rounded-*`, `shadow-*`, `ring-*`,
decorative `border-*`/`divide-*`, `bg-*` (except the `bg-muted` image placeholder),
gradients (`from-`/`to-`/`via-`), `aspect-*` ratios, `transition`/`animate`/`duration`,
`hover:`/`focus*:` decorative states, `opacity-*`, the `Button`/`Card` ui wrappers
(use a plain `<a>` / `<div>`), decorative lucide icons.

The `_no-raw-color` test bans hex + named palettes. This convention extends it: keep
core blocks structural — no decorative styling at all.
