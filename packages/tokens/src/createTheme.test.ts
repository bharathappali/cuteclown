import { expect, test } from "vitest";
import { createTheme } from "./createTheme.ts";
import { clownSoftBase } from "./themes/clownSoft.ts";

test("createTheme extends a base and overrides a nested color", () => {
  const theme = createTheme({
    extends: clownSoftBase("clown-soft-light"),
    overrides: { color: { accent: "#111111" } },
  });
  expect(theme.color.accent).toBe("#111111");
  expect(theme.color.surface).toBe(clownSoftBase("clown-soft-light").color.surface);
  expect(Object.isFrozen(theme)).toBe(true);
  expect(Object.isFrozen(theme.color)).toBe(true);
});
