import type { LandingPageContent } from "../../types";

/** Generic landing page copy for tests and the story. No client name, place, number or domain: this package is public. */
export const SAMPLE: LandingPageContent = {
  hero: {
    h1: "Furnace Repair You Can Book Today",
    subheading: "Licensed technicians find the fault, explain it, and fix it with the price agreed first.",
    primary_cta: { label: "Book a repair", href: "#contact" },
    trust_line: "Licensed and insured technicians",
  },
  sections: [
    { kind: "proof", heading: "What customers say", items: [{ text: "Fixed the same day and explained everything.", author: "A customer" }, { text: "Fair price, tidy work." }] },
    { kind: "benefits", heading: "Why people call us", items: [
      { title: "Price agreed first", body: "You know the price before any work begins." },
      { title: "Licensed technicians", body: "Every visit is done by a licensed technician." },
      { title: "Work guaranteed", body: "Repairs carry a written guarantee." },
    ] },
    { kind: "process", heading: "How a repair works", items: [
      { title: "Book a time", body: "Pick a time that suits you." },
      { title: "We diagnose", body: "The technician finds the fault and explains it." },
      { title: "We fix it", body: "The repair is done with the price you agreed." },
    ] },
    { kind: "faq", heading: "Questions", items: [
      { question: "Do you charge to diagnose?", answer: "You are told the diagnostic price when you book." },
      { question: "Which brands do you service?", answer: "The common furnace brands. Tell us yours when you book." },
      { question: "Is the work guaranteed?", answer: "Yes, every repair carries a written guarantee." },
    ] },
    { kind: "service_area", heading: "Where we work", body: "We serve homeowners across the region." },
  ],
  form: { heading: "Book your repair", intro: "Tell us what is wrong and we will confirm a time." },
  links: [{ anchor: "Furnace replacement", href: "/furnace-replacement" }, { anchor: "Maintenance plans", href: "/maintenance" }],
  closing: { heading: "Ready for heat that just works?", body: "Book a repair with a licensed technician.", button: "Book now", href: "#contact" },
};
