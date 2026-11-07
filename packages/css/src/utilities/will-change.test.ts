import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("gesture class opts into a temporary transform layer", () => {
  const css = readFileSync(new URL("./will-change.css", import.meta.url), "utf8");
  expect(css).toContain(".cc-will-change");
  expect(css).toContain("will-change: transform");
});
