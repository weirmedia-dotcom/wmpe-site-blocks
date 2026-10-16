import { render, screen } from "@testing-library/react";
import contact_form from "@/blocks/contact_form";

const content = {
  intro:
    "Tell us about your windows and we'll be in touch within one business day.",
  fields: ["Name", "Email", "Phone", "Message"],
};

test("default renders an accessible labelled form with a submit button", () => {
  const { container } = render(<contact_form.default {...(content as any)} />);

  // a real <form> element exists
  expect(container.querySelector("form")).toBeInTheDocument();

  // every field has a labelled control bound by id
  expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/)).toBeInTheDocument();

  // the message field renders a textarea
  expect(screen.getByLabelText(/Message/).tagName.toLowerCase()).toBe("textarea");

  // a submit button exists
  expect(screen.getByRole("button", { name: /send message/i })).toHaveAttribute(
    "type",
    "submit"
  );
});

test("new props absent leave the markup unchanged", () => {
  const { container } = render(<contact_form.default {...(content as any)} />);
  expect(container.innerHTML).toMatchInlineSnapshot(`"<section class="w-full py-16 md:py-24"><div class="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"><p class="text-base text-muted-foreground">Tell us about your windows and we'll be in touch within one business day.</p><form class="flex flex-col gap-4"><div class="flex flex-col gap-1"><label for="name" class="text-sm text-foreground">Name</label><input id="name" class="text-base text-foreground" type="text" name="name"></div><div class="flex flex-col gap-1"><label for="email" class="text-sm text-foreground">Email</label><input id="email" class="text-base text-foreground" type="text" name="email"></div><div class="flex flex-col gap-1"><label for="phone" class="text-sm text-foreground">Phone</label><input id="phone" class="text-base text-foreground" type="text" name="phone"></div><div class="flex flex-col gap-1"><label for="message" class="text-sm text-foreground">Message</label><textarea id="message" name="message" class="text-base text-foreground"></textarea></div><button type="submit" class="text-base text-foreground">Send message</button></form></div></section>"`);
});

test("empty hiddenFields renders no hidden inputs", () => {
  const { container } = render(<contact_form.default {...(content as any)} props={{ hiddenFields: [] }} />);
  expect(container.querySelectorAll('input[type="hidden"]')).toHaveLength(0);
});

test("heading renders a plain h2 above the form", () => {
  const { container } = render(<contact_form.default {...(content as any)} heading="Get in touch" />);
  const h2 = screen.getByRole("heading", { level: 2, name: "Get in touch" });
  expect(h2.children).toHaveLength(0);
  expect(h2.compareDocumentPosition(container.querySelector("form")!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
});

test("submit_label replaces the button text", () => {
  render(<contact_form.default {...(content as any)} submit_label="Request a quote" />);
  expect(screen.getByRole("button", { name: "Request a quote" })).toHaveAttribute("type", "submit");
  expect(screen.queryByRole("button", { name: /send message/i })).toBeNull();
});

test("props.hiddenFields render as hidden inputs inside the form", () => {
  const { container } = render(
    <contact_form.default {...(content as any)} props={{ hiddenFields: ["event_id", "fbp", "page_url"] }} />,
  );
  const hidden = container.querySelectorAll('form input[type="hidden"]');
  expect(Array.from(hidden).map((i) => i.getAttribute("name"))).toEqual(["event_id", "fbp", "page_url"]);
  expect(Array.from(hidden).every((i) => (i as HTMLInputElement).value === "")).toBe(true);
});
