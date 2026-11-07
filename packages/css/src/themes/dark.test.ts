import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("dark theme is scoped to the dark attribute", () => {
  const css = readFileSync(new URL("./dark.css", import.meta.url), "utf8");
  expect(css).toContain("clown-soft.dark.css");
  const tokens = readFileSync(new URL("./clown-soft.dark.css", import.meta.url), "utf8");
  expect(tokens).toContain('[data-cc-theme="dark"]');
});
