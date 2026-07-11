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
