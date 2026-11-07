import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("light theme imports the generated token sheet", () => {
  const css = readFileSync(new URL("./light.css", import.meta.url), "utf8");
  expect(css).toContain('@import "./clown-soft.light.css"');
  const tokens = readFileSync(new URL("./clown-soft.light.css", import.meta.url), "utf8");
  expect(tokens).toContain("--cc-color-surface");
});
