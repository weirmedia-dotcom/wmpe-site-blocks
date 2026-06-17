import { render, screen } from "@testing-library/react";
import before_after from "./index";

const content = {
  before: { src: undefined, alt: "Scuffed hallway walls" },
  after: { src: undefined, alt: "Freshly painted hallway" },
  caption: "One weekend, one coat of MF Proline.",
};

test("default renders Before and After labels", () => {
  render(<before_after.default {...(content as any)} />);
  expect(screen.getByText("Before")).toBeInTheDocument();
  expect(screen.getByText("After")).toBeInTheDocument();
});

test("default exposes both image alts and the caption", () => {
  render(<before_after.default {...(content as any)} />);
  expect(screen.getByRole("img", { name: content.before.alt })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: content.after.alt })).toBeInTheDocument();
  expect(screen.getByText(content.caption)).toBeInTheDocument();
});
