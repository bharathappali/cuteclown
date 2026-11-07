import { expect, test } from "vitest";
import { conversationTone } from "./conversation.ts";

test("conversation tones cover user, thinking, tool, and reply", () => {
  expect(Object.keys(conversationTone)).toEqual(["user", "thinking", "tool", "reply"]);
  expect(conversationTone.user.background).toBe("#E7E7FF");
});
