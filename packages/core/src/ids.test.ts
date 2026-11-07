import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { createId, resetIds } from "./ids.ts";

test("ids are unique and the generator does not touch window or document", () => {
  const source = readFileSync(new URL("./ids.ts", import.meta.url), "utf8");
  expect(source).not.toMatch(/\bwindow\b/);
  expect(source).not.toMatch(/\bdocument\b/);
  resetIds();
  const first = createId("field");
  const second = createId("field");
  expect(first).not.toBe(second);
  expect(first.startsWith("field-")).toBe(true);
});
