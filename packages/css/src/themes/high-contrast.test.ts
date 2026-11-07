import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("high contrast strengthens borders for the more-contrast attribute and media query", () => {
  const css = readFileSync(new URL("./high-contrast.css", import.meta.url), "utf8");
  expect(css).toContain("@media (prefers-contrast: more)");
  expect(css).toContain("--cc-color-border: #000000");
  const tokens = readFileSync(new URL("./clown-soft.high-contrast.css", import.meta.url), "utf8");
  expect(tokens).toContain('[data-cc-contrast="more"]');
});
