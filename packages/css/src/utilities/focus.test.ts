import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("focus-visible uses the theme ring and does not remove it", () => {
  const css = readFileSync(new URL("./focus.css", import.meta.url), "utf8");
  expect(css).toContain("--cc-focus");
  expect(css).toContain(":focus-visible");
  expect(css).not.toContain("outline: none");
  expect(css).not.toContain("outline: 0");
});
