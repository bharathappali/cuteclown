import { expect, test } from "vitest";
import { accordionToken } from "./accordion.ts";
import { chipToken } from "./chip.ts";
import { progressToken } from "./progress.ts";
import { tooltipToken } from "./tooltip.ts";

test("chip, accordion, progress, and tooltip tokens export", () => {
  expect(chipToken.radius).toContain("rem");
  expect(accordionToken.duration).toBe("240ms");
  expect(progressToken.height).toContain("rem");
  expect(tooltipToken.radius).toContain("rem");
});
