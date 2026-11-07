import { expect, test } from "vitest";
import { durationMs, springPreset } from "./motion.ts";

test("spring presets are positive and non-spring durations stay in range", () => {
  for (const preset of Object.values(springPreset)) {
    expect(preset.response).toBeGreaterThan(0);
    expect(preset.dampingRatio).toBeGreaterThan(0);
  }
  expect(durationMs.fast).toBeGreaterThanOrEqual(150);
  expect(durationMs.slow).toBeLessThanOrEqual(320);
});
