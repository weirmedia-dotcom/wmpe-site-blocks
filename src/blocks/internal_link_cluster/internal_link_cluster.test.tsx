import { render, screen } from "@testing-library/react";
import internal_link_cluster from "@/blocks/internal_link_cluster";

const links = [
  { label: "Roller Blinds", href: "/roller-blinds" },
  { label: "Cellular Shades", href: "/cellular-shades" },
  { label: "Custom Drapery", href: "/drapery" },
];

test.each(Object.keys(internal_link_cluster))(
  "internal_link_cluster variant %s renders every link with correct href",
  (v) => {
    const C = (internal_link_cluster as any)[v];
    render(<C links={links} props={{ variant: v }} />);
    for (const { label, href } of links) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute("href", href);
    }
  }
);

test("internal_link_cluster exposes default", () => {
  expect(internal_link_cluster.default).toBeTruthy();
});
