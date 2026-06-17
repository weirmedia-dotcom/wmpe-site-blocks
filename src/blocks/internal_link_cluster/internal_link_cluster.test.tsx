import { render, screen } from "@testing-library/react";
import internal_link_cluster from "@/blocks/internal_link_cluster";

const links = [
  { label: "Roller Blinds", href: "/roller-blinds" },
  { label: "Cellular Shades", href: "/cellular-shades" },
  { label: "Custom Drapery", href: "/drapery" },
];

test("default renders a nav with every link", () => {
  render(<internal_link_cluster.default links={links as any} />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  for (const { label, href } of links) {
    expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", href);
  }
});
