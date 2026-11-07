import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("gradient text falls back under forced colors", () => {
  const typeCss = readFileSync(new URL("./typography.css", import.meta.url), "utf8");
  const gradientCss = readFileSync(new URL("./gradient-text.css", import.meta.url), "utf8");
  expect(typeCss).toContain(".cc-text-body");
  expect(gradientCss).toContain("@media (forced-colors: active)");
  expect(gradientCss).toContain("color: CanvasText");
});
