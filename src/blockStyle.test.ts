import { describe, it, expect } from "vitest";
import { blockAttrs, collectBlockCss, hasAnyBlockStyle } from "./blockStyle";

describe("blockAttrs", () => {
  it("empty when unstyled", () => expect(blockAttrs(undefined, 0)).toEqual({}));
  it("vars + data-blk", () =>
    expect(blockAttrs({ vars: { "--primary": "1 2% 3%" } }, 4)).toEqual({ "data-blk": "b4", style: { "--primary": "1 2% 3%" } }));
});
describe("collectBlockCss", () => {
  it("scopes to data-blk", () =>
    expect(collectBlockCss([{ style: { css: "a{b:c}" } }])).toContain('[data-blk="b0"]{ a{b:c} }'));
  it("strips </style> from css to guard against tag breakout", () => {
    expect(collectBlockCss([{ style: { css: "a{}</style><script>" } }])).not.toContain("</style>");
  });
});
describe("hasAnyBlockStyle", () => {
  it("detects style", () => expect(hasAnyBlockStyle([{}, { style: { css: "x" } }])).toBe(true));
});

describe("sizes", () => {
  it("emits scoped font-size rules + counts as styled", () => {
    expect(collectBlockCss([{ style: { sizes: { headline: 100 } } }])).toContain('[data-blk="b0"] :is(h1,h2,h3){font-size:100px}');
    expect(hasAnyBlockStyle([{ style: { sizes: { body: 20 } } }])).toBe(true);
    expect(blockAttrs({ sizes: { headline: 100 } }, 1)["data-blk"]).toBe("b1");
  });
});

describe("colors", () => {
  it("emits scoped color rules + counts styled", () => {
    expect(collectBlockCss([{ style: { colors: { headline: "1 2% 3%" } } }])).toContain('[data-blk="b0"] :is(h1,h2,h3){color:hsl(1 2% 3%)}');
    expect(hasAnyBlockStyle([{ style: { colors: { body: "0 0% 0%" } } }])).toBe(true);
  });
});
