import { expect, test } from "vitest";
import { clownSoft } from "../themes/clownSoft.ts";
import { emitThemeCss, themeDeclarations } from "./css.ts";

test("emits unique --cc variables and can scope a theme", () => {
  const css = emitThemeCss(clownSoft.light);
  const scoped = emitThemeCss(clownSoft.dark, '[data-cc-theme="dark"]');
  expect(css).toContain("--cc-color-text-primary");
  expect(scoped.startsWith('[data-cc-theme="dark"]')).toBe(true);
  const names = [...themeDeclarations(clownSoft.light).keys()];
  expect(new Set(names).size).toBe(names.length);
});
