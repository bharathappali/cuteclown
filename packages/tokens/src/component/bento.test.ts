import { expect, test } from "vitest";
import { bentoToken } from "./bento.ts";
import { staleBadgeToken } from "./staleBadge.ts";
import { statTileToken } from "./statTile.ts";

test("bento, stat, and stale tokens export", () => {
  expect(bentoToken.gap).toBe("1rem");
  expect(statTileToken.valueSize).toBe("1.625rem");
  expect(staleBadgeToken.size).toBe("1.5rem");
});
