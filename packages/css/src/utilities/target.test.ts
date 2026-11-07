import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("coarse pointers get a 44px hit area", () => {
  const css = readFileSync(new URL("./target.css", import.meta.url), "utf8");
  expect(css).toContain("@media (pointer: coarse)");
  expect(css).toContain("min-height: 44px");
});
