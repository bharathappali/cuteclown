import { expect, test } from "vitest";
import { semanticColorDark } from "./color.dark.ts";
import { semanticColorLight } from "./color.light.ts";

test("dark semantic colors use the same keys as light", () => {
  expect(Object.keys(semanticColorDark).sort()).toEqual(Object.keys(semanticColorLight).sort());
  expect(semanticColorDark.surface).toBe("#14152B");
});
