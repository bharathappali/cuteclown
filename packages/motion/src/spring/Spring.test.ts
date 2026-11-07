import { expect, test } from "vitest";
import { Spring } from "./Spring.ts";

test("retarget keeps the current position and velocity", () => {
  const spring = new Spring({ x: 2, v: 4, target: 0, response: 0.3, bounce: 0.2 });
  spring.step(0.016);
  const x = spring.x;
  const v = spring.v;
  spring.setTarget(10);
  expect(spring.x).toBe(x);
  expect(spring.v).toBe(v);
  expect(spring.target).toBe(10);
});

test("a spring settles inside the distance and velocity thresholds", () => {
  const spring = new Spring({ x: 0, v: 0, target: 1, response: 0.2, bounce: 0 });
  for (let frame = 0; frame < 240 && !spring.settled; frame += 1) {
    spring.step(1 / 60);
  }
  expect(spring.settled).toBe(true);
  expect(spring.x).toBeCloseTo(1, 2);
});
