import { expect, test } from "vitest";
import { criticalAt } from "./critical.ts";
import { overdampedAt } from "./overdamped.ts";
import { underdampedAt } from "./underdamped.ts";

test("critical and overdamped samples match their initial conditions", () => {
  expect(criticalAt(0, 2, 3, 0, 8).x).toBeCloseTo(2, 8);
  expect(criticalAt(0, 2, 3, 0, 8).v).toBeCloseTo(3, 6);
  expect(overdampedAt(0, 2, 3, 0, 8, 1.4).x).toBeCloseTo(2, 8);
  expect(overdampedAt(0, 2, 3, 0, 8, 1.4).v).toBeCloseTo(3, 5);
});

test("the underdamped solution stays near the critical solution as zeta approaches 1", () => {
  const omega0 = 10;
  const t = 0.25;
  const near = underdampedAt(t, 0, 1, 1, omega0, 0.999);
  const critical = criticalAt(t, 0, 1, 1, omega0);
  expect(near.x).toBeCloseTo(critical.x, 2);
  expect(near.v).toBeCloseTo(critical.v, 1);
});
