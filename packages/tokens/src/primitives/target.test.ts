import { expect, test } from "vitest";
import { targetSize } from "./target.ts";

test("pointer targets are 24 and 44 CSS pixels", () => {
  expect(targetSize.minTargetFine).toBe(24);
  expect(targetSize.minTargetCoarse).toBe(44);
});
