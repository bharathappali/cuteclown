import { expect, test } from "vitest";
import { Spring } from "../spring/Spring.ts";
import { createDrag } from "./drag.ts";
import { createVelocityTracker } from "./velocity.ts";

test("drag tracks the pointer one to one and releases into spring velocity", () => {
  const spring = new Spring({ x: 0, v: 0, target: 0, response: 0.3, bounce: 0 });
  const drag = createDrag({ spring, tracker: createVelocityTracker() });
  drag.pointerDown(0, 10);
  drag.pointerMove(16, 30);
  expect(spring.x).toBe(20);
  expect(spring.v).toBe(0);
  drag.pointerUp(32, 50);
  expect(spring.x).toBe(40);
  expect(spring.v).toBeCloseTo(1250, 3);
  expect(spring.target).toBe(40);
});
