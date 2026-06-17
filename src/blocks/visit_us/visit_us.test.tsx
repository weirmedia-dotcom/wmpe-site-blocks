import { render, screen } from "@testing-library/react";
import visit_us from "@/blocks/visit_us";

const content = {
  heading: "Visit our showroom",
  eyebrow: "Find us",
  address: ["123 Main St", "Smiths Falls, ON"],
  phone: "(613) 555-1234",
  email: "hello@example.com",
  hours: [
    { days: "Mon–Fri", time: "9–5" },
    { days: "Sat", time: "10–4" },
  ],
  cta_label: "Get directions",
  cta_href: "/directions",
  map_embed: "https://maps.example.com/embed",
};

test("default renders heading, address lines and hours", () => {
  render(<visit_us.default {...(content as any)} />);
  expect(screen.getByText(content.heading)).toBeInTheDocument();
  for (const line of content.address) expect(screen.getByText(line)).toBeInTheDocument();
  for (const h of content.hours) {
    expect(screen.getByText(h.days)).toBeInTheDocument();
    expect(screen.getByText(h.time)).toBeInTheDocument();
  }
});

test("phone renders as a tel: link", () => {
  render(<visit_us.default {...(content as any)} />);
  const tel = screen.getByRole("link", { name: content.phone });
  expect(tel).toHaveAttribute("href", "tel:6135551234");
});

test("email renders as a mailto: link", () => {
  render(<visit_us.default {...(content as any)} />);
  const mail = screen.getByRole("link", { name: content.email });
  expect(mail).toHaveAttribute("href", "mailto:hello@example.com");
});

test("cta renders as a link", () => {
  render(<visit_us.default {...(content as any)} />);
  expect(screen.getByRole("link", { name: content.cta_label })).toHaveAttribute("href", "/directions");
});
