import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("safe area reads each inset env", () => {
  const css = readFileSync(new URL("./safe-area.css", import.meta.url), "utf8");
  expect(css).toContain("env(safe-area-inset-top)");
  expect(css).toContain("env(safe-area-inset-right)");
  expect(css).toContain("env(safe-area-inset-bottom)");
  expect(css).toContain("env(safe-area-inset-left)");
});
