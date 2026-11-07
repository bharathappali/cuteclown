import { expect, test } from "vitest";
import { tsupPreset } from "./tsup-preset.ts";

test("tsup preset emits ESM declarations and source maps for ES2022", () => {
  expect(tsupPreset.format).toEqual(["esm"]);
  expect(tsupPreset.dts).toBe(true);
  expect(tsupPreset.sourcemap).toBe(true);
  expect(tsupPreset.target).toBe("es2022");
  expect(tsupPreset.clean).toBe(true);
});
