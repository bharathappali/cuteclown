import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("offscreen panels can skip rendering", () => {
  const css = readFileSync(new URL("./perf.css", import.meta.url), "utf8");
  expect(css).toContain("content-visibility: auto");
});
