import { expect, test } from "vitest";
import { animateSpring } from "./animate.ts";
import { MockClock } from "./clock.ts";
import { createScheduler } from "./scheduler.ts";
import { Spring } from "./spring/Spring.ts";

test("a spring settles once and then stops scheduling", () => {
  const frames: Array<() => void> = [];
  const scheduler = createScheduler(
    (flush) => {
      frames.push(flush);
      return frames.length;
    },
    () => undefined,
  );
  const clock = new MockClock();
  const spring = new Spring({ x: 0, v: 0, target: 1, response: 0.18, bounce: 0 });
  let updates = 0;
  let settles = 0;
  const stop = animateSpring(spring, {
    scheduler,
    clock,
    onUpdate() {
      updates += 1;
    },
    onSettle() {
      settles += 1;
    },
  });

  for (let frame = 0; frame < 400 && settles === 0; frame += 1) {
    clock.advance(16);
    const flush = frames.shift();
    flush?.();
  }

  expect(settles).toBe(1);
  expect(updates).toBeGreaterThan(1);
  expect(spring.x).toBeCloseTo(1, 2);
  const queued = frames.length;
  clock.advance(16);
  frames.shift()?.();
  expect(settles).toBe(1);
  expect(frames.length).toBeLessThanOrEqual(queued);
  stop();
});
