import { expect, test } from "vitest";
import { nearestSnap, rubberBand } from "./bounds.ts";

test("rubber-band leaves in-bounds values and compresses the overflow", () => {
  expect(rubberBand(40, 0, 100)).toBe(40);
  const past = rubberBand(160, 0, 100);
  expect(past).toBeGreaterThan(100);
  expect(past).toBeLessThan(160);
});

test("nearest snap picks the closest point", () => {
  expect(nearestSnap(42, [0, 40, 80])).toBe(40);
  expect(nearestSnap(70, [0, 40, 80])).toBe(80);
});
