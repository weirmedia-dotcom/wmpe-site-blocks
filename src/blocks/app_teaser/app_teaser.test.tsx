import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import app_teaser from "@/blocks/app_teaser";
import { AppTeaserCard } from "@/blocks/app_teaser/AppTeaserCard";

const content = {
  image: "/visualizer.webp",
  image_alt: "Colour visualizer",
  eyebrow: "Colour visualizer",
  heading: "See your colour before you commit.",
  subhead: "Try any shade on a room.",
  cta_label: "Try it now",
  cta_href: "/tools/visualizer",
};

test("default renders eyebrow, heading, subhead and cta label", () => {
  render(<app_teaser.default {...(content as any)} />);
  expect(screen.getByText("Colour visualizer")).toBeInTheDocument();
  expect(screen.getByText("See your colour before you commit.")).toBeInTheDocument();
  expect(screen.getByText("Try any shade on a room.")).toBeInTheDocument();
  expect(screen.getByText("Try it now")).toBeInTheDocument();
});

test("default renders the screenshot with its alt text", () => {
  render(<app_teaser.default {...(content as any)} />);
  expect(screen.getByAltText("Colour visualizer")).toBeInTheDocument();
});

test("without onActivate it links to cta_href", () => {
  render(<app_teaser.default {...(content as any)} />);
  expect(screen.getByRole("link")).toHaveAttribute("href", "/tools/visualizer");
});

test("with onActivate it renders a dialog-opening button instead of a link", () => {
  const onActivate = vi.fn();
  render(<AppTeaserCard {...(content as any)} onActivate={onActivate} />);
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
  const btn = screen.getByRole("button");
  expect(btn).toHaveAttribute("aria-haspopup", "dialog");
  fireEvent.click(btn);
  expect(onActivate).toHaveBeenCalledTimes(1);
});

test("image is optional", () => {
  const { image, ...rest } = content;
  render(<AppTeaserCard {...(rest as any)} />);
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
  expect(screen.getByText("See your colour before you commit.")).toBeInTheDocument();
});
