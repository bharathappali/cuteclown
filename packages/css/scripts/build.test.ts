import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { buildCss } from "./build.mjs";

test("lightningcss writes a non-empty stylesheet", async () => {
  const bytes = await buildCss();
  expect(bytes).toBeGreaterThan(100);
  const css = readFileSync(new URL("../dist/index.css", import.meta.url), "utf8");
  expect(css.length).toBeGreaterThan(100);
});
