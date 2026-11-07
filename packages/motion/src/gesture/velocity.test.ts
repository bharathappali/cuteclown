import { expect, test } from "vitest";
import { createVelocityTracker } from "./velocity.ts";

test("constant pointer motion reports a steady velocity", () => {
  const tracker = createVelocityTracker();
  for (let step = 0; step <= 4; step += 1) {
    tracker.add({ t: step * 16, x: step * 10, y: 0 });
  }
  expect(tracker.velocity().x).toBeCloseTo(625, 4);
  expect(tracker.velocity().y).toBeCloseTo(0, 4);
});
