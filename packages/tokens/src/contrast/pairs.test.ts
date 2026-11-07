import { expect, test } from "vitest";
import { contrastPairs } from "./pairs.ts";

test("contrast schema includes text, focus, and the gradient card", () => {
  const names = contrastPairs.map((pair) => pair.name);
  expect(names).toContain("text-primary");
  expect(names).toContain("focus");
  expect(names).toContain("gradient-card");
});
