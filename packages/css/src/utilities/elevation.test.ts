import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("elevation uses raised and inset data attributes", () => {
  const css = readFileSync(new URL("./elevation.css", import.meta.url), "utf8");
  expect(css).toContain('[data-elevation="raised"]');
  expect(css).toContain('[data-elevation="inset"]');
  expect(css).toContain("box-shadow: none");
});
