import { expect, test } from "vitest";
import { semanticColorHighContrast } from "./color.highContrast.ts";

test("high contrast uses solid black ink on white", () => {
  expect(semanticColorHighContrast.surface).toBe("#FFFFFF");
  expect(semanticColorHighContrast.border).toBe("#000000");
  expect(semanticColorHighContrast.textPrimary).toBe("#000000");
});
