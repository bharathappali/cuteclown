import { expect, test } from "vitest";
import { clownSoft } from "../themes/clownSoft.ts";
import { emitThemeJson } from "./json.ts";

test("JSON tokens round-trip the custom property names", () => {
  const parsed = JSON.parse(emitThemeJson(clownSoft.light)) as Record<string, string>;
  expect(parsed["--cc-color-surface"]).toBe(clownSoft.light.color.surface);
  expect(JSON.parse(JSON.stringify(parsed))).toEqual(parsed);
});
