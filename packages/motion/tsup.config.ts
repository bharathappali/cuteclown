import { defineConfig } from "tsup";
import { tsupPreset } from "../../scripts/tsup-preset.ts";

export default defineConfig({
  entry: ["src/index.ts"],
  ...tsupPreset,
});
