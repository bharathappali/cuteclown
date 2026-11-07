import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { bundleAsync } from "lightningcss";

const here = dirname(fileURLToPath(import.meta.url));
const entry = join(here, "../src/index.css");
const outDir = join(here, "../dist");

export async function buildCss() {
  const result = await bundleAsync({
    filename: entry,
    minify: true,
    sourceMap: true,
  });
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.css"), result.code);
  writeFileSync(join(outDir, "index.css.map"), result.map);
  return result.code.length;
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const bytes = await buildCss();
  process.stdout.write(`css: wrote ${bytes} bytes\n`);
}
