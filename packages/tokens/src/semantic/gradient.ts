import { primitiveColor } from "../primitives/color.ts";
import type { CuteTheme } from "../theme.ts";

export const semanticGradient: CuteTheme["gradient"] = {
  from: primitiveColor.gradient.from,
  to: primitiveColor.gradient.to,
  angleText: "90deg",
  angleFill: "135deg",
  solidFallback: "#5A3A86",
  ink: "#FFFFFF",
};
