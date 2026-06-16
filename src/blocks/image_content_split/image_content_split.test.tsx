import { render } from "@testing-library/react";
import image_content_split from "./index";

const content = {
  image: { src: undefined, alt: "Freshly painted living room" },
  heading: "Transform Your Space",
  body: "Our team handles every detail from prep to final coat.",
  cta_label: "Get a quote",
  cta_href: "/contact",
};

test.each(Object.keys(image_content_split))("variant %s renders heading and body", (v) => {
  const C = (image_content_split as any)[v];
  const { unmount } = render(<C {...content} props={{ variant: v }} />);
  expect(document.body.textContent).toContain(content.heading);
  expect(document.body.textContent).toContain(content.body);
  expect(document.body.textContent).toContain(content.cta_label);
  unmount();
});

test("image_content_split.default and image-right both exist", () => {
  expect(image_content_split.default).toBeTruthy();
  expect(image_content_split["image-right"]).toBeTruthy();
});
