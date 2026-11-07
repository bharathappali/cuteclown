import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("base layout uses logical properties", () => {
  const css = readFileSync(new URL("./logical.css", import.meta.url), "utf8");
  expect(css).toContain("inset-inline");
  expect(css).toContain("padding-inline");
  expect(css).not.toMatch(/\bleft\s*:/);
  expect(css).not.toMatch(/\bright\s*:/);
});
