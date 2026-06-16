import { render } from "@testing-library/react";
import before_after from "./index";

const content = {
  before: { src: undefined, alt: "Scuffed hallway walls" },
  after: { src: undefined, alt: "Freshly painted hallway" },
  caption: "One weekend, one coat of MF Proline.",
};

test.each(Object.keys(before_after))("variant %s renders before and after labels", (v) => {
  const C = (before_after as any)[v];
  const { unmount } = render(<C {...content} props={{ variant: v }} />);
  expect(document.body.textContent).toContain("Before");
  expect(document.body.textContent).toContain("After");
  unmount();
});

test("before_after.default exists", () => {
  expect(before_after.default).toBeTruthy();
});
