import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("base document styles read theme tokens", () => {
  const css = readFileSync(new URL("./base.css", import.meta.url), "utf8");
  expect(css).toContain("var(--cc-color-surface)");
  expect(css).toContain("var(--cc-font-body)");
  expect(css).toContain("1rem");
});
