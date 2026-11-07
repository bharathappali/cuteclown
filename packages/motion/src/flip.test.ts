import { expect, test } from "vitest";
import { flipInvert } from "./flip.ts";

const first = { left: 10, top: 20, width: 100, height: 40 };
const last = { left: 30, top: 26, width: 50, height: 40 };

test("FLIP invert travels from the last rect back to the first", () => {
  expect(flipInvert(first, last)).toEqual({ x: -20, y: -6, scaleX: 2, scaleY: 1 });
});

test("reduced motion skips the travel", () => {
  expect(flipInvert(first, last, true)).toEqual({ x: 0, y: 0, scaleX: 1, scaleY: 1 });
});
