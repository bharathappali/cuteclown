/** Shared tsup options for CuteClown packages. ESM, declarations, and source maps. */
export const tsupPreset = {
  format: ["esm"],
  dts: true,
  sourcemap: true,
  target: "es2022",
  clean: true,
} as const;
