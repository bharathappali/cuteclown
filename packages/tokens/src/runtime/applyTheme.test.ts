import { expect, test } from "vitest";
import { createThemeApplier } from "./applyTheme.ts";

test("applies queued custom properties once per frame", () => {
  const frames: Array<() => void> = [];
  const writes: string[] = [];
  const applyTheme = createThemeApplier((callback) => {
    frames.push(callback);
  });
  const element = { style: { setProperty: (name: string) => writes.push(name) } };
  applyTheme(element, { "--cc-color-surface": "#fff" });
  applyTheme(element, { "--cc-color-text-primary": "#000" });
  expect(frames).toHaveLength(1);
  expect(writes).toEqual([]);
  frames[0]?.();
  expect(writes).toEqual(["--cc-color-surface", "--cc-color-text-primary"]);
});
