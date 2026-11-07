import { expect, test } from "vitest";
import { tweenNumber } from "./numberTween.ts";

test("tweens 0 to 100 and rounds to the requested decimals", () => {
  expect(tweenNumber(0, 100, 0)).toBe(0);
  expect(tweenNumber(0, 100, 0.5)).toBe(50);
  expect(tweenNumber(0, 100, 1)).toBe(100);
  expect(tweenNumber(0, 1, 1 / 3, 2)).toBe(0.33);
});
