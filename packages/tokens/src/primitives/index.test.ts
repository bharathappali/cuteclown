import { expect, test } from "vitest";
import { primitiveColor, radius, springPreset, targetSize } from "./index.ts";

test("primitives barrel re-exports the core scales", () => {
  expect(primitiveColor.background.dark).toBe("#14152B");
  expect(radius.sm).toBe(8);
  expect(springPreset.snappy.response).toBeGreaterThan(0);
  expect(targetSize.minTargetCoarse).toBe(44);
});
