import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("reduced motion zeros travel and fade instead of only a duration", () => {
  const css = readFileSync(new URL("./motion-prefs.css", import.meta.url), "utf8");
  expect(css).toContain("@media (prefers-reduced-motion: reduce)");
  expect(css).toContain("--cc-motion-travel: 0");
  expect(css).toContain("--cc-motion-fade: 0");
  expect(css).not.toContain("animation-duration: 0");
});
