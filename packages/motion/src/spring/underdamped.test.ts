import { expect, test } from "vitest";
import { underdampedAt } from "./underdamped.ts";

const omega0 = 12;
const zeta = 0.7;

test("underdamped position and velocity match the initial conditions at t=0", () => {
  const sample = underdampedAt(0, 4, -2, 10, omega0, zeta);
  expect(sample.x).toBeCloseTo(4, 8);
  expect(sample.v).toBeCloseTo(-2, 6);
});

test("underdamped motion settles on the target", () => {
  const sample = underdampedAt(8, 0, 0, 1, omega0, zeta);
  expect(sample.x).toBeCloseTo(1, 3);
  expect(Math.abs(sample.v)).toBeLessThan(0.01);
});
