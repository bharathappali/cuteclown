import { expect, test } from "vitest";
import { semanticFocusLight } from "./focus.ts";

test("focus ring is at least 2px", () => {
  expect(Number.parseFloat(semanticFocusLight.width)).toBeGreaterThanOrEqual(2);
});
