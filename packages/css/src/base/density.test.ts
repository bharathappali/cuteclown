import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("density exposes comfortable and compact", () => {
  const css = readFileSync(new URL("./density.css", import.meta.url), "utf8");
  expect(css).toContain('[data-cc-density="comfortable"]');
  expect(css).toContain('[data-cc-density="compact"]');
});
