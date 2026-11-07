import { expect, test } from "vitest";
import { semanticSurfaceHighContrast, semanticSurfaceLight } from "./surface.ts";

test("surface tokens cover raised, inset, and glass", () => {
  expect(Object.keys(semanticSurfaceLight).sort()).toEqual([
    "glassBlur",
    "glassBorder",
    "glassFill",
    "glassSaturate",
    "insetShadow",
    "raisedShadow",
  ]);
  expect(semanticSurfaceHighContrast.raisedShadow).toBe("none");
  expect(semanticSurfaceHighContrast.glassBlur).toBe("0px");
});
