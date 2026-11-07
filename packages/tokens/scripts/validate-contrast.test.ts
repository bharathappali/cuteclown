import { expect, test } from "vitest";
import { contrastGateErrors } from "./validate-contrast.ts";

test("the contrast gate is clean for the default themes", () => {
  expect(contrastGateErrors()).toEqual([]);
});
