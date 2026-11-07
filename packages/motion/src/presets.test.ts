import { expect, test } from "vitest";
import { microPresets } from "./presets.ts";

test("every micro-interaction has a reduced-motion variant with no travel", () => {
  for (const preset of Object.values(microPresets)) {
    expect(preset.travel).toBe(1);
    expect(preset.reducedMotion.travel).toBe(0);
    expect(preset.reducedMotion.bounce).toBe(0);
  }
});
