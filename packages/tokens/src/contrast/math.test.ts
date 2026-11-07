import { expect, test } from "vitest";
import { contrastRatio } from "./math.ts";

test("black on white is 21:1", () => {
  expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 5);
  expect(contrastRatio("#FFFFFF", "#000000")).toBeCloseTo(21, 5);
});
