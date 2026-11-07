// @vitest-environment jsdom
import { expect, test } from "vitest";
import { createAnnouncer } from "./announcer.ts";

test("announce writes polite and assertive live text", () => {
  const announcer = createAnnouncer();
  announcer.announce("Saved");
  announcer.announce("Error", "assertive");
  expect(document.querySelector("[data-cc-announcer='polite']")?.textContent).toBe("Saved");
  expect(document.querySelector("[data-cc-announcer='assertive']")?.getAttribute("aria-live")).toBe(
    "assertive",
  );
  expect(document.querySelector("[data-cc-announcer='assertive']")?.textContent).toBe("Error");
  announcer.dispose();
  expect(document.querySelector("[data-cc-announcer]")).toBeNull();
});
