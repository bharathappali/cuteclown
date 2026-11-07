import { expect, test } from "vitest";
import { semanticColorLight } from "./color.light.ts";

const keys = [
  "surface",
  "textPrimary",
  "textSecondary",
  "textTertiary",
  "accent",
  "border",
  "statusOkText",
  "statusWarnText",
  "statusCritText",
] as const;

test("light semantic colors cover text, surface, border, and status text", () => {
  for (const key of keys) {
    expect(semanticColorLight[key]).toMatch(/^#[0-9A-F]{6}$/);
  }
  expect(semanticColorLight.statusOkText).not.toBe(semanticColorLight.statusOkFill);
  expect(semanticColorLight.statusWarnText).not.toBe(semanticColorLight.statusWarnFill);
});
