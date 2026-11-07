import { expect, test } from "vitest";
import { glass } from "./glass.ts";

test("glass blur and opacity increase from soft to strong", () => {
  expect(glass.blurStrong).toBeGreaterThan(glass.blur);
  expect(glass.opacity.strong).toBeGreaterThan(glass.opacity.default);
  expect(glass.saturate).toBe(1.6);
});
