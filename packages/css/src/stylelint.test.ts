import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { expect, test } from "vitest";
import stylelint from "stylelint";

const configFile = join(dirname(fileURLToPath(import.meta.url)), "../.stylelintrc.cjs");

test("stylelint rejects a class outside the cc- prefix", async () => {
  const result = await stylelint.lint({
    code: ".foo { color: red; }",
    configFile,
  });
  expect(result.errored).toBe(true);
});

test("stylelint accepts cc- classes in the package sources", async () => {
  const files = ["utilities/glass.css", "components/card.css", "reset.css"].map((file) =>
    join(dirname(fileURLToPath(import.meta.url)), file),
  );
  const result = await stylelint.lint({ files, configFile });
  expect(result.errored).toBe(false);
  expect(readFileSync(files[1], "utf8")).toContain(".cc-card");
});
