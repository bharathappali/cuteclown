import { expect, test } from "vitest";
import { degradeBudget, resolveLowEnd } from "./device.ts";

test("an override wins over the device heuristic and shrinks the spring budget", () => {
  expect(resolveLowEnd({ hardwareConcurrency: 8 }, true)).toBe(true);
  expect(resolveLowEnd({ hardwareConcurrency: 2 }, false)).toBe(false);
  expect(resolveLowEnd({ saveData: true })).toBe(true);
  expect(degradeBudget(8, true)).toBe(4);
  expect(degradeBudget(8, false)).toBe(8);
});
