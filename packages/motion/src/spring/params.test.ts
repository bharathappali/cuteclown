import { expect, test } from "vitest";
import { springFromDurationBounce } from "./params.ts";
import { underdampedAt } from "./underdamped.ts";

function peak(bounce: number): number {
  const { omega0, zeta } = springFromDurationBounce(280, bounce);
  let highest = 0;
  for (let step = 0; step <= 80; step += 1) {
    highest = Math.max(highest, underdampedAt(step / 200, 0, 0, 1, omega0, zeta).x);
  }
  return highest;
}

test("a higher bounce overshoots the target more", () => {
  expect(peak(0.55)).toBeGreaterThan(peak(0.05));
  expect(peak(0.55)).toBeGreaterThan(1);
});
