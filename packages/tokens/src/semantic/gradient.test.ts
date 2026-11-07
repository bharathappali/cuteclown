import { expect, test } from "vitest";
import { semanticGradient } from "./gradient.ts";

test("gradient text has an opaque fallback", () => {
  expect(semanticGradient.solidFallback).toMatch(/^#[0-9A-F]{6}$/);
  expect(semanticGradient.ink).toBe("#FFFFFF");
});
