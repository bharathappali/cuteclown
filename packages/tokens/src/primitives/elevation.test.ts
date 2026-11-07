import { expect, test } from "vitest";
import { elevation } from "./elevation.ts";

test("elevation exposes light and dark shadow pairs", () => {
  expect(elevation.light.shadow1).toContain("70,72,150");
  expect(elevation.light.shadow2).toContain("18px 48px");
  expect(elevation.dark.shadow1).toContain("0,0,0");
  expect(Object.keys(elevation.light)).toEqual(["shadow1", "shadow2"]);
});
