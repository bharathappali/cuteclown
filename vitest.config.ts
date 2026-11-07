import { existsSync, readdirSync } from "node:fs";
import { defineConfig } from "vitest/config";
import { workspaceProjects } from "./vitest.workspace.ts";

/** Skip package/app globs until those directories contain projects. */
function existingProjectGlobs(globs: readonly string[]): string[] {
  return globs.filter((glob) => {
    const dir = glob.replace(/\/\*$/, "");
    if (!existsSync(dir)) {
      return false;
    }
    return readdirSync(dir).some((name) => !name.startsWith("."));
  });
}

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: "root",
          include: ["scripts/**/*.test.ts"],
        },
      },
      ...existingProjectGlobs(workspaceProjects),
    ],
    passWithNoTests: true,
  },
});
