import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

test("the bundle imports layers, themes, base, and utilities", () => {
  const css = readFileSync(new URL("./index.css", import.meta.url), "utf8");
  for (const file of [
    "layers.css",
    "reset.css",
    "themes/light.css",
    "utilities/glass.css",
    "components/card.css",
  ]) {
    expect(css).toContain(file);
  }
});
