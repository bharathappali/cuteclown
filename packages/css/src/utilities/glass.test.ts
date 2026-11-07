import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("glass declares blur, a border, and transparency fallback", () => {
  const css = readFileSync(new URL("./glass.css", import.meta.url), "utf8");
  expect(css).toContain("backdrop-filter");
  expect(css).toContain("border:");
  expect(css).toContain("@media (prefers-reduced-transparency: reduce)");
  expect(css).toContain("@media (forced-colors: active)");
});
