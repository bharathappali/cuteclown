import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("fluid type uses clamp", () => {
  const css = readFileSync(new URL("./fluid-type.css", import.meta.url), "utf8");
  expect(css).toContain("clamp(");
});
