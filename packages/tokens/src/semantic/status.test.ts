import { expect, test } from "vitest";
import { statusCue } from "./status.ts";

test("every status has an icon name and a text color key", () => {
  for (const cue of Object.values(statusCue)) {
    expect(cue.iconName.length).toBeGreaterThan(0);
    expect(cue.textKey).toMatch(/Text$/);
  }
});
