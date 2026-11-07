import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { findDistDirs, loadBudgets } from "./check-size.mjs";

test("loads the Phase 1 gzip budgets", () => {
  const budgets = loadBudgets(
    readFileSync(new URL("./size-budgets.json", import.meta.url), "utf8"),
  );
  expect(budgets.tokensAndBaseCssGzip).toBe(12 * 1024);
  expect(budgets.motionGzip).toBe(4 * 1024);
  expect(budgets.coreGzip).toBe(2 * 1024);
  expect(budgets.componentJsGzip).toBe(2 * 1024);
  expect(budgets.componentCssGzip).toBe(2 * 1024);
  expect(budgets.adapterOverheadGzip).toBe(1024);
});

test("rejects a budget file missing a required key", () => {
  expect(() => loadBudgets('{"motionGzip":4096}')).toThrow(/tokensAndBaseCssGzip/);
});

test("skips when a tree has no dist directories", () => {
  expect(findDistDirs("/tmp/cuteclown-size-check-empty")).toEqual([]);
});
