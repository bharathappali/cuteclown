import { expect, test } from "vitest";
import { MockClock } from "./clock.ts";

test("MockClock advances only when asked", () => {
  const clock = new MockClock();
  expect(clock.now()).toBe(0);
  clock.advance(16);
  clock.advance(16);
  expect(clock.now()).toBe(32);
});
