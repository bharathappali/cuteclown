// @vitest-environment jsdom
import { expect, test } from "vitest";
import { createFocusScope } from "./FocusScope.ts";

test("Tab cycles inside the scope and dispose restores focus", () => {
  const opener = document.createElement("button");
  opener.textContent = "Open";
  const dialog = document.createElement("div");
  const first = document.createElement("button");
  const last = document.createElement("button");
  first.textContent = "First";
  last.textContent = "Last";
  dialog.append(first, last);
  document.body.append(opener, dialog);
  opener.focus();

  const scope = createFocusScope(dialog);
  expect(document.activeElement).toBe(first);
  last.focus();
  last.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", bubbles: true }));
  expect(document.activeElement).toBe(first);
  first.dispatchEvent(new KeyboardEvent("keydown", { key: "Tab", shiftKey: true, bubbles: true }));
  expect(document.activeElement).toBe(last);
  scope.dispose();
  expect(document.activeElement).toBe(opener);
  opener.remove();
  dialog.remove();
});
