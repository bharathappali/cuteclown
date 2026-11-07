import { readFileSync } from "node:fs";
import { expect, test } from "vitest";
import { workspaceProjects } from "../vitest.workspace.ts";

test("pnpm workspace includes packages and apps", () => {
  const yaml = readFileSync(new URL("../pnpm-workspace.yaml", import.meta.url), "utf8");
  expect(yaml).toContain("packages/*");
  expect(yaml).toContain("apps/*");
});

test("vitest workspace discovers package and app projects", () => {
  expect(workspaceProjects).toEqual(["packages/*", "apps/*"]);
});
