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
