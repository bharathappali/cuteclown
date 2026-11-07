import { expect, test } from "vitest";
import { Spring } from "./Spring.ts";

test("one hundred springs retarget and settle without becoming NaN", () => {
  const springs = Array.from({ length: 100 }, (_, index) => {
    return new Spring({
      x: index,
      v: 0,
      target: index,
      response: 0.2,
      bounce: index % 5 === 0 ? 0.4 : 0.05,
    });
  });

  for (let frame = 0; frame < 120; frame += 1) {
    for (const [index, spring] of springs.entries()) {
      if (frame % 20 === 0) {
        spring.setTarget(Math.sin(frame / 10 + index) * 40);
      }
      spring.step(1 / 60);
      expect(Number.isFinite(spring.x)).toBe(true);
      expect(Number.isFinite(spring.v)).toBe(true);
    }
  }

  for (let frame = 0; frame < 500; frame += 1) {
    for (const spring of springs) {
      spring.step(1 / 60);
    }
  }

  for (const spring of springs) {
    expect(Number.isNaN(spring.x)).toBe(false);
    expect(spring.settled).toBe(true);
  }
});
