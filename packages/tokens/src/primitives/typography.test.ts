import { expect, test } from "vitest";
import { bodyMinPx, fontFeature, fontStack, typeScalePx, typeScaleRem } from "./typography.ts";

test("body size is at least 12.5px and scales convert to rem", () => {
  expect(bodyMinPx).toBeGreaterThanOrEqual(12.5);
  expect(typeScalePx.body).toBeGreaterThanOrEqual(bodyMinPx);
  expect(typeScaleRem.body).toMatch(/rem$/);
  expect(fontFeature.tabularNums).toBe("tabular-nums");
  expect(fontStack.mono).toContain("ui-monospace");
});
