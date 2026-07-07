import { safeEmbedUrl } from "./safeUrl";

test("allows an https URL", () => {
  expect(safeEmbedUrl("https://maps.example.com/embed")).toBe(
    "https://maps.example.com/embed"
  );
});

test("rejects a javascript: URL", () => {
  expect(safeEmbedUrl("javascript:alert(1)")).toBeNull();
});

test("rejects a data: URL", () => {
  expect(safeEmbedUrl("data:text/html,<script>alert(1)</script>")).toBeNull();
});

test("rejects a plain http: URL", () => {
  expect(safeEmbedUrl("http://maps.example.com/embed")).toBeNull();
});

test("rejects a malformed URL", () => {
  expect(safeEmbedUrl("not a url")).toBeNull();
});

test("returns null for undefined/null/empty", () => {
  expect(safeEmbedUrl(undefined)).toBeNull();
  expect(safeEmbedUrl(null)).toBeNull();
  expect(safeEmbedUrl("")).toBeNull();
});
