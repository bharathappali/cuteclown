import { expect, test } from "vitest";
import { pxToRem, radius, spacing } from "./space.ts";

test("spacing is the 4 through 32 scale and radii include a pill", () => {
  expect(spacing).toEqual([4, 8, 12, 16, 20, 24, 32]);
  expect([...spacing]).toEqual([...spacing].sort((a, b) => a - b));
  expect(radius.xl).toBe(24);
  expect(radius.pill).toBe(999);
  expect(pxToRem(16)).toBe("1rem");
});
