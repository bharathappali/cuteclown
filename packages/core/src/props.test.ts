import { expect, test } from "vitest";
import { mergeProps } from "./props.ts";

test("mergeProps calls every onClick and joins class names", () => {
  const order: string[] = [];
  const props = mergeProps(
    { className: "cc-button", onClick: () => order.push("a") },
    { className: "is-pressed", onClick: () => order.push("b"), type: "button" },
  );
  (props.onClick as () => void)();
  expect(order).toEqual(["a", "b"]);
  expect(props.className).toBe("cc-button is-pressed");
  expect(props.type).toBe("button");
});
