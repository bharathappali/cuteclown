import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("reset stays inside the reset layer", () => {
  const css = readFileSync(new URL("./reset.css", import.meta.url), "utf8");
  expect(css).toContain("@layer cc.reset");
  expect(css).not.toContain(".cc-");
});
