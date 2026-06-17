"use client";

import * as React from "react";
import type { BlockComponent, ColourVisualizerContent } from "../../types";
import { Section } from "../../primitives/Section";
import { Container } from "../../primitives/Container";
import { Card } from "../../ui/card";
import { Scan } from "lucide-react";

const Default: BlockComponent<ColourVisualizerContent> = ({
  image,
  swatches = [],
  eyebrow,
  heading,
  subhead,
}) => {
  const [sel, setSel] = React.useState(0);
  const [showOriginal, setShowOriginal] = React.useState(false);

  const active = swatches[sel];
  const tint = !showOriginal && active ? active.hex : undefined;

  return (
    <Section className="bg-background">
      <Container>
        {(eyebrow || heading || subhead) && (
          <div className="mb-10 max-w-2xl">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <Scan className="h-4 w-4" aria-hidden />
                {eyebrow}
              </span>
            )}
            {heading && (
              <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
                {heading}
              </h2>
            )}
            {subhead && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {subhead}
              </p>
            )}
          </div>
        )}

        <div className="grid items-start gap-6 lg:grid-cols-[1.7fr_1fr] lg:gap-8">
          {/* Image stage with colour overlay */}
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-muted shadow-sm">
              {image && (
                <img
                  src={image}
                  alt={heading ?? "Colour visualizer"}
                  className="block h-full w-full object-cover"
                />
              )}
              {tint && (
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply transition-opacity"
                  style={{ backgroundColor: tint }}
                  aria-hidden
                />
              )}

              {/* Selected-colour chip */}
              <div className="absolute left-4 top-4 flex items-center gap-3 rounded-full border border-border bg-card/90 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur-sm">
                <span
                  className="h-8 w-8 rounded-full ring-1 ring-inset ring-border"
                  style={{ backgroundColor: active ? active.hex : undefined }}
                />
                <span className="flex flex-col leading-tight">
                  <span className="text-sm font-semibold text-card-foreground">
                    {showOriginal ? "Original" : active?.name ?? "Pick a colour"}
                  </span>
                  <span className="font-mono text-[0.6875rem] text-muted-foreground">
                    {showOriginal ? "Before" : (active?.hex ?? "").toUpperCase()}
                  </span>
                </span>
              </div>

              {/* Compare toggle */}
              <div className="absolute inset-x-3 bottom-3 flex justify-end">
                <button
                  type="button"
                  onMouseDown={() => setShowOriginal(true)}
                  onMouseUp={() => setShowOriginal(false)}
                  onMouseLeave={() => setShowOriginal(false)}
                  onTouchStart={() => setShowOriginal(true)}
                  onTouchEnd={() => setShowOriginal(false)}
                  className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-card/90 px-3.5 text-sm font-semibold text-foreground shadow-sm backdrop-blur-sm transition-colors hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  Hold to compare
                </button>
              </div>
            </div>
          </div>

          {/* Swatch rail */}
          <Card className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-heading text-base font-semibold tracking-tight text-card-foreground">
                Colours
              </span>
              <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                {swatches.length} shades
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {swatches.map((s, i) => {
                const isActive = sel === i && !showOriginal;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => {
                      setSel(i);
                      setShowOriginal(false);
                    }}
                    aria-pressed={isActive}
                    className={`flex items-center gap-2.5 rounded-xl border p-2 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-primary bg-primary/5"
                        : "border-border bg-background hover:border-primary/40 hover:bg-muted/50"
                    }`}
                  >
                    <span
                      className="h-9 w-9 shrink-0 rounded-lg ring-1 ring-inset ring-border"
                      style={{ backgroundColor: s.hex }}
                    />
                    <span className="min-w-0 truncate text-sm font-semibold text-foreground">
                      {s.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default Default;
