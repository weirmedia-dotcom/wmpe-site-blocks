import { readFileSync } from "node:fs";
import { render, screen } from "@testing-library/react";
import landing_page from "@/blocks/landing_page";
import { SAMPLE } from "@/blocks/landing_page/sample";
import type { LandingPageContent } from "@/types";

const L = landing_page.default;
const page = (c: LandingPageContent) => render(<L {...(c as any)} />).container;

test("renders every part it is given, in page order, the hero's h1 the only h1", () => {
  const c = page(SAMPLE);
  expect(c.querySelectorAll("h1")).toHaveLength(1);
  expect(c.querySelector("h1")!.textContent).toBe("Furnace Repair You Can Book Today");
  expect([...c.querySelectorAll("[data-part]")].map((e) => e.getAttribute("data-part"))).toEqual(["hero", "proof", "benefits", "process", "faq", "service_area", "form", "links", "closing"]);
});

test("every text of the content is on the page: nothing dropped", () => {
  const c = page(SAMPLE);
  const texts: string[] = [];
  const walk = (v: unknown, key = ""): void => {
    if (typeof v === "string") { if (key !== "href" && key !== "kind") texts.push(v); }
    else if (Array.isArray(v)) v.forEach((x) => walk(x, key));
    else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, k);
  };
  walk(SAMPLE);
  expect(texts.length).toBeGreaterThan(30);
  for (const t of texts) expect(c.textContent, t).toContain(t);
});

test("the hero button and the closing button link to their targets; the trust line shows", () => {
  page(SAMPLE);
  expect(screen.getByText("Book a repair").closest("a")!.getAttribute("href")).toBe("#contact");
  expect(screen.getByText("Book now").closest("a")!.getAttribute("href")).toBe("#contact");
  expect(screen.getByText("Licensed and insured technicians")).toBeInTheDocument();
});

test("proof is a quotation with its author, when it has one", () => {
  const c = page({ sections: [SAMPLE.sections![0]] });
  expect(c.querySelectorAll("blockquote")).toHaveLength(2);
  expect(c.querySelectorAll("cite")).toHaveLength(1);
  expect(screen.getByText("A customer").tagName).toBe("CITE");
});

test("questions use native details and summary", () => {
  const c = page({ sections: [SAMPLE.sections![3]] });
  expect(c.querySelectorAll("details")).toHaveLength(3);
  expect(c.querySelectorAll("summary")).toHaveLength(3);
});

test("the form part puts a client renderer's slot after its heading and intro, at #contact", () => {
  const c = page({ form: SAMPLE.form, formSlot: <form data-testid="slot" /> });
  const section = c.querySelector('[data-part="form"]')!;
  expect(section.getAttribute("id")).toBe("contact");
  expect(section.textContent).toContain("Book your repair");
  expect(section.contains(screen.getByTestId("slot"))).toBe(true);
});

test("the lower half of a page (links and closing) has no h1", () => {
  const c = page({ links: SAMPLE.links, closing: SAMPLE.closing });
  expect(c.querySelectorAll("h1")).toHaveLength(0);
  expect(screen.getByText("Furnace replacement").closest("a")!.getAttribute("href")).toBe("/furnace-replacement");
});

test("empty content renders only the wrapper", () => {
  const c = page({});
  expect(c.querySelectorAll("[data-part]")).toHaveLength(0);
});

test("structure only: no weight, radius, shadow, border, background, eyebrow or drop cap in the source", () => {
  const src = readFileSync("src/blocks/landing_page/Default.tsx", "utf8");
  expect(src).not.toMatch(/\bfont-(bold|semibold|medium|heading|body)\b|rounded-|shadow-|\bborder-|\bbg-|eyebrow|kicker|first-letter|initial-letter|drop-?cap|h-px/);
});
