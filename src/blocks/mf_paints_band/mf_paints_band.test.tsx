import { render, screen } from "@testing-library/react";
import mf_paints_band from "./index";

const content = {
  paint_can: "/img/mf-proline.jpg",
  chips: ["#1F5C46", "#C2683F"],
  eyebrow: "MF Paints",
  heading: "MF Proline — the trade standard",
  body: "Engineered in Canada for professional painters and demanding interiors.",
  points: ["High hide formula", "Spray or roll application", "Seamless touch-ups"],
  cta_label: "Explore MF Proline",
  cta_href: "/mf-paints-brand-authority/what-is-mf-proline",
};

test("default renders eyebrow, heading, body, points and CTA", () => {
  render(<mf_paints_band.default {...(content as any)} />);
  expect(screen.getByText(content.eyebrow)).toBeInTheDocument();
  expect(screen.getByText(content.heading)).toBeInTheDocument();
  expect(screen.getByText(content.body)).toBeInTheDocument();
  for (const p of content.points) {
    expect(screen.getByText(p)).toBeInTheDocument();
  }
  expect(screen.getByText(content.cta_label)).toBeInTheDocument();
});

test("default renders the paint can image with heading as alt", () => {
  render(<mf_paints_band.default {...(content as any)} />);
  expect(screen.getByAltText(content.heading)).toBeInTheDocument();
});
