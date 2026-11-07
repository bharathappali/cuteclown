import { expect, test } from "vitest";
import { clownSoft, createTheme, createThemeApplier, validateThemeContrast } from "./index.ts";

test("public token exports cover themes, contrast, and theme application", () => {
  expect(Object.keys(clownSoft).sort()).toEqual(["dark", "highContrast", "light"]);
  expect(typeof createTheme).toBe("function");
  expect(typeof createThemeApplier).toBe("function");
  expect(validateThemeContrast(clownSoft.light)).toEqual([]);
});
