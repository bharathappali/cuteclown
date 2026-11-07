// @vitest-environment jsdom
import { expect, test } from "vitest";
import { createRovingTabIndex } from "./rovingTabIndex.ts";

test("arrow keys move the roving tabindex", () => {
  const items = ["One", "Two", "Three"].map((label) => {
    const button = document.createElement("button");
    button.textContent = label;
    document.body.append(button);
    return button;
  });
  const roving = createRovingTabIndex(items);
  expect(items.map((item) => item.tabIndex)).toEqual([0, -1, -1]);
  roving.onKeyDown(new KeyboardEvent("keydown", { key: "ArrowRight" }));
  expect(roving.index).toBe(1);
  expect(items.map((item) => item.tabIndex)).toEqual([-1, 0, -1]);
  expect(document.activeElement).toBe(items[1]);
  for (const item of items) {
    item.remove();
  }
});
