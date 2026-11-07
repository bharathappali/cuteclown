import { expect, test } from "vitest";
import { createSpringBudget } from "./budget.ts";

test("springs past the cap are refused until one releases", () => {
  const budget = createSpringBudget(2);
  expect(budget.acquire("a")).toBe(true);
  expect(budget.acquire("b")).toBe(true);
  expect(budget.acquire("c")).toBe(false);
  expect(budget.size).toBe(2);
  budget.release("a");
  expect(budget.acquire("c")).toBe(true);
});
