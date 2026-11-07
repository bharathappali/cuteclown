import { expect, test } from "vitest";
import { semanticAmbianceLight } from "./ambiance.ts";

test("ambiance has four corner fields", () => {
  expect(Object.keys(semanticAmbianceLight)).toEqual(["periwinkle", "butter", "pink", "mint"]);
  expect(semanticAmbianceLight.mint).toContain("radial-gradient");
});
