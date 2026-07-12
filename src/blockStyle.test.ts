import { describe, it, expect } from "vitest";
import { blockAttrs, collectBlockCss, collectTypeCss, hasAnyBlockStyle } from "./blockStyle";

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

describe("collectTypeCss", () => {
  it("emits type-scoped rules keyed by data-blktype", () => {
    const css = collectTypeCss({ hero: { css: "padding:4rem" } });
    expect(css).toContain('[data-blktype="hero"]{ padding:4rem }');
  });
  it("emits type-scoped color + size rules", () => {
    const css = collectTypeCss({ hero: { colors: { headline: "10 20% 30%" }, sizes: { headline: 72 } } });
    expect(css).toContain('[data-blktype="hero"] :is(h1,h2,h3){color:hsl(10 20% 30%)}');
    expect(css).toContain('[data-blktype="hero"] :is(h1,h2,h3){font-size:72px}');
  });
  it("skips empty entries", () => {
    expect(collectTypeCss({ hero: {} })).toBe("");
  });
});

describe("blockAttrs blockType", () => {
  it("emits data-blktype when a type is given + forced", () => {
    expect(blockAttrs(undefined, 1, true, "hero")).toEqual({ "data-blk": "b1", "data-blktype": "hero" });
  });
});
