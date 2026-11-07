import { expect, test } from "vitest";
import { createLayerStack, type LayerTarget } from "./stack.ts";

function fakeTarget() {
  const listeners = new Map<
    string,
    (event: { key?: string; target?: EventTarget | null; preventDefault?: () => void }) => void
  >();
  const target: LayerTarget = {
    addEventListener(type, listener) {
      listeners.set(type, listener);
    },
    removeEventListener(type) {
      listeners.delete(type);
    },
  };
  return { target, listeners };
}

test("Escape and an outside pointer dismiss only the top layer", () => {
  const { target, listeners } = fakeTarget();
  const stack = createLayerStack(target);
  const dismissed: string[] = [];
  const inner = { nodeType: 1 };
  const outside = { nodeType: 1 };
  const shell = { contains: (node: Node) => node === inner };
  stack.push({ id: "base", element: shell, onDismiss: () => dismissed.push("base") });
  stack.push({ id: "top", element: shell, onDismiss: () => dismissed.push("top") });
  listeners.get("keydown")?.({ key: "Escape", preventDefault() {} });
  expect(dismissed).toEqual(["top"]);
  expect(stack.depth).toBe(1);
  listeners.get("pointerdown")?.({ target: inner as unknown as EventTarget });
  expect(dismissed).toEqual(["top"]);
  listeners.get("pointerdown")?.({ target: outside as unknown as EventTarget });
  expect(dismissed).toEqual(["top", "base"]);
  expect(stack.depth).toBe(0);
  expect(listeners.has("keydown")).toBe(false);
});
