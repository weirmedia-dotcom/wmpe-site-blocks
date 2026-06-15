import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}

const PALETTE =
  "red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone";

test("block sources use no hardcoded hex or named palette colors", () => {
  const files = walk("src/blocks").filter(
    (f) => /\.tsx?$/.test(f) && !f.includes(".test.") && !f.includes(".stories."),
  );
  const bad: string[] = [];
  for (const f of files) {
    const s = readFileSync(f, "utf8");
    if (/#[0-9a-fA-F]{3,8}\b/.test(s)) bad.push(`${f}: hex`);
    const re = new RegExp(
      `\\b(?:bg|text|border|ring|from|to|via|fill|stroke|decoration|outline|divide|ring-offset)-(?:${PALETTE})-\\d{2,3}\\b`,
    );
    if (re.test(s)) bad.push(`${f}: palette`);
  }
  expect(bad).toEqual([]);
});
