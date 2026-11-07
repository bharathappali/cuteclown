import { expect, test } from "vitest";
import { breakpoint, zIndex } from "./layout.ts";

test("breakpoints ascend and modal stacks above tooltip", () => {
  const widths = Object.values(breakpoint);
  expect(widths).toEqual([...widths].sort((a, b) => a - b));
  expect(zIndex.modal).toBeGreaterThan(zIndex.tooltip);
  expect(zIndex.toast).toBeGreaterThan(zIndex.tooltip);
});
