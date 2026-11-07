import { expect, test } from "vitest";
import { clownSoft } from "./clownSoft.ts";

test("Clown Soft exposes stable theme ids", () => {
  expect(clownSoft.light.id).toBe("clown-soft-light");
  expect(clownSoft.dark.id).toBe("clown-soft-dark");
  expect(clownSoft.highContrast.id).toBe("clown-soft-high-contrast");
});
