import { expect, test } from "vitest";
import { clownSoft } from "../themes/clownSoft.ts";
import { validateThemeContrast } from "./validate.ts";

test("Clown Soft themes pass AA text and boundary contrast", () => {
  expect(validateThemeContrast(clownSoft.light)).toEqual([]);
  expect(validateThemeContrast(clownSoft.dark)).toEqual([]);
  expect(validateThemeContrast(clownSoft.highContrast)).toEqual([]);
});

test("a white-on-white text pair fails validation", () => {
  const broken = {
    ...clownSoft.light,
    color: { ...clownSoft.light.color, textPrimary: "#FFFFFF" },
  };
  const errors = validateThemeContrast(broken);
  expect(errors.some((error) => error.name === "text-primary")).toBe(true);
});
