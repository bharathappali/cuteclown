import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("cascade layers are declared in order", () => {
  const css = readFileSync(new URL("./layers.css", import.meta.url), "utf8");
  expect(css).toContain("@layer cc.reset, cc.base, cc.components, cc.utilities, cc.overrides;");
});
