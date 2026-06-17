import { render, screen } from "@testing-library/react";
import image_content_split from "./index";

const content = {
  image: { src: undefined, alt: "Freshly painted living room" },
  heading: "Transform Your Space",
  body: "Our team handles every detail from prep to final coat.",
  cta_label: "Get a quote",
  cta_href: "/contact",
};

test("default renders heading, body and CTA", () => {
  render(<image_content_split.default {...(content as any)} />);
  expect(screen.getByText(content.heading)).toBeInTheDocument();
  expect(screen.getByText(content.body)).toBeInTheDocument();
  const cta = screen.getByRole("link", { name: content.cta_label });
  expect(cta).toHaveAttribute("href", content.cta_href);
});

test("default exposes the image alt (placeholder when no src)", () => {
  render(<image_content_split.default {...(content as any)} />);
  expect(screen.getByRole("img", { name: content.image.alt })).toBeInTheDocument();
});

test("default omits the CTA when no cta_label", () => {
  const { container } = render(
    <image_content_split.default {...({ ...content, cta_label: undefined } as any)} />,
  );
  expect(container.querySelector("a")).toBeNull();
});
