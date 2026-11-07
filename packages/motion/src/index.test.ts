import { expect, test } from "vitest";
import * as motion from "./index.ts";

test("public motion exports cover springs, gestures, and preferences", () => {
  expect(Object.keys(motion).sort()).toEqual(
    [
      "MockClock",
      "Spring",
      "animateSpring",
      "createDrag",
      "createScheduler",
      "createSpringBudget",
      "createVelocityTracker",
      "criticalAt",
      "dampingFromBounce",
      "degradeBudget",
      "flipInvert",
      "microPresets",
      "nearestSnap",
      "omegaFromResponse",
      "overdampedAt",
      "prefersReducedMotion",
      "resolveLowEnd",
      "rubberBand",
      "springFromDurationBounce",
      "systemClock",
      "tweenNumber",
      "underdampedAt",
    ].sort(),
  );
});
