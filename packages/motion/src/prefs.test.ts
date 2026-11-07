import { expect, test } from "vitest";
import { prefersReducedMotion } from "./prefs.ts";

test("reduced motion follows the injected media query", () => {
  expect(prefersReducedMotion(() => ({ matches: true }))).toBe(true);
  expect(prefersReducedMotion(() => ({ matches: false }))).toBe(false);
});
