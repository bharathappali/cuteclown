import { expect, test } from "vitest";
import { buttonToken } from "./button.ts";
import { cardToken } from "./card.ts";

test("card radius is 24px and buttons have inline and block padding", () => {
  expect(cardToken.radius).toBe("1.5rem");
  expect(buttonToken.paddingInline).toBe("1rem");
  expect(buttonToken.paddingBlock).toBe("0.75rem");
});
