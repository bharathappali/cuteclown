import { expect, test } from "vitest";
import { density } from "./density.ts";

test("compact density is tighter than comfortable", () => {
  expect(density.compact).toBeLessThan(density.comfortable);
});
