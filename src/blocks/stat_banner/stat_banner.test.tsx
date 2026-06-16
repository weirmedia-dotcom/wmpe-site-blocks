import { render } from "@testing-library/react";
import stat_banner from "./index";

const content = {
  heading: "Falls Decor by the numbers",
  items: [
    { number: "57", label: "Years in Smiths Falls" },
    { number: "2,000+", label: "Colours in stock" },
    { number: "Same day", label: "Custom mixing" },
    { number: "100%", label: "Canadian-made paints" },
  ],
};

test.each(Object.keys(stat_banner))("variant %s renders all stats", (v) => {
  const C = (stat_banner as any)[v];
  const { unmount } = render(<C {...content} props={{ variant: v }} />);
  for (const item of content.items) {
    expect(document.body.textContent).toContain(item.number);
    expect(document.body.textContent).toContain(item.label);
  }
  unmount();
});

test("stat_banner has default, dark, accent variants", () => {
  expect(stat_banner.default).toBeTruthy();
  expect(stat_banner.dark).toBeTruthy();
  expect(stat_banner.accent).toBeTruthy();
});
