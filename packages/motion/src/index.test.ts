import { expect, test } from "vitest";
import { MockClock, Spring, underdampedAt } from "./index.ts";

test("motion exports the clock, solver, and spring", () => {
  expect(new MockClock().now()).toBe(0);
  expect(underdampedAt(0, 1, 0, 1, 8, 0.5).x).toBeCloseTo(1, 6);
  expect(new Spring().settled).toBe(true);
});
