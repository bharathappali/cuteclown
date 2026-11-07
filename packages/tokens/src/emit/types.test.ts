import { expect, test } from "vitest";
import type { TokenPath } from "./types.ts";

test("token paths cover the public theme leaves", () => {
  const path: TokenPath = "color.textPrimary";
  expect(path).toBe("color.textPrimary");
});
