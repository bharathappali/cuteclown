import { elevation } from "../primitives/elevation.ts";
import { glass } from "../primitives/glass.ts";
import type { CuteTheme } from "../theme.ts";

export const semanticSurfaceLight: CuteTheme["surface"] = {
  raisedShadow: elevation.light.shadow2,
  insetShadow: `inset 0 1px 2px rgba(70,72,150,0.12), ${elevation.light.shadow1}`,
  glassFill: `rgba(255,255,255,${glass.opacity.default})`,
  glassBlur: `${glass.blur}px`,
  glassSaturate: String(glass.saturate),
  glassBorder: "rgba(255,255,255,0.85)",
};

export const semanticSurfaceDark: CuteTheme["surface"] = {
  raisedShadow: elevation.dark.shadow2,
  insetShadow: elevation.dark.shadow1,
  glassFill: "rgba(30,31,62,0.55)",
  glassBlur: `${glass.blur}px`,
  glassSaturate: String(glass.saturate),
  glassBorder: "rgba(255,255,255,0.12)",
};

export const semanticSurfaceHighContrast: CuteTheme["surface"] = {
  raisedShadow: "none",
  insetShadow: "none",
  glassFill: "#FFFFFF",
  glassBlur: "0px",
  glassSaturate: "1",
  glassBorder: "#000000",
};
