import { expect, test } from "vitest";
import { primitiveColor } from "./color.ts";

test("primitive palette keeps the reference hues", () => {
  expect(primitiveColor.pastel.periwinkle).toBe("#9FA1FF");
  expect(primitiveColor.pastel.pink).toBe("#F9B2D7");
  expect(primitiveColor.pastel.butter).toBe("#FFF0BE");
  expect(primitiveColor.pastel.mint).toBe("#D9F9DF");
  expect(primitiveColor.accent.periwinkle).toBe("#6E70E8");
  expect(primitiveColor.accent.pink).toBe("#D9619F");
  expect(primitiveColor.ink.light.primary).toBe("#24255A");
  expect(primitiveColor.ink.dark.primary).toBe("#EEEDFF");
  expect(primitiveColor.status.light.ok).toBe("#22A55B");
  expect(primitiveColor.status.dark.error).toBe("#FF6B70");
  expect(primitiveColor.background.light).toMatch(/^#[0-9A-F]{6}$/);
});
