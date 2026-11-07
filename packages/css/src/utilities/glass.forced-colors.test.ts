import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("forced-colors glass uses system colors and drops the blur", () => {
  const css = readFileSync(new URL("./glass.css", import.meta.url), "utf8");
  const block = css.slice(css.indexOf("@media (forced-colors: active)"));
  expect(block).toContain("background: Canvas");
  expect(block).toContain("color: CanvasText");
  expect(block).toContain("backdrop-filter: none");
});
