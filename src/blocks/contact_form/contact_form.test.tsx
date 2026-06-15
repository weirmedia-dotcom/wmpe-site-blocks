import { render, screen, within } from "@testing-library/react";
import contact_form from "@/blocks/contact_form";

const content = {
  intro:
    "Tell us about your windows and we'll be in touch within one business day.",
  fields: ["Name", "Email", "Phone", "Message"],
};

test.each(Object.keys(contact_form))(
  "contact_form variant %s renders an accessible labelled form",
  (v) => {
    const C = (contact_form as any)[v];
    const { container } = render(<C {...content} props={{ variant: v }} />);

    // a real <form> element exists
    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();

    // each field has an accessible labelled control bound by id
    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument();

    // email field is type=email
    expect(screen.getByLabelText(/Email/)).toHaveAttribute("type", "email");

    // a submit button exists
    const submit = screen.getByRole("button", { name: /send message/i });
    expect(submit).toHaveAttribute("type", "submit");
  }
);

// kebab keys extracted to consts for direct assertions
const TwoColumn = contact_form["two-column"];
const SplitIntro = contact_form["split-intro"];

test("contact_form Message field renders a textarea", () => {
  const { container } = render(<TwoColumn {...content} />);
  const message = within(container).getByLabelText(/Message/);
  expect(message.tagName.toLowerCase()).toBe("textarea");
});

test("contact_form split-intro uses the intro heading", () => {
  render(<SplitIntro {...content} />);
  expect(
    screen.getByRole("heading", { name: /tell us about your windows/i })
  ).toBeInTheDocument();
});

test("contact_form exposes default", () => {
  expect(contact_form.default).toBeTruthy();
});
