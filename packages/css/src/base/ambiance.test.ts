import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("ambiance pauses for reduced motion and goes solid for reduced transparency", () => {
  const css = readFileSync(new URL("./ambiance.css", import.meta.url), "utf8");
  expect(css).toContain("@media (prefers-reduced-motion: reduce)");
  expect(css).toContain("animation-play-state: paused");
  expect(css).toContain("@media (prefers-reduced-transparency: reduce)");
  expect(css).toContain("background-image: none");
});
