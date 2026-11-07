import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { expect, test } from "vitest";
import { writeTokenArtifacts } from "./build-tokens.ts";

test("writes theme css and json", () => {
  const dir = mkdtempSync(join(tmpdir(), "cuteclown-tokens-"));
  writeTokenArtifacts(dir);
  expect(readFileSync(join(dir, "clown-soft.light.css"), "utf8")).toContain("--cc-color-surface");
  expect(readFileSync(join(dir, "clown-soft.dark.json"), "utf8")).toContain(
    "--cc-color-text-primary",
  );
});
