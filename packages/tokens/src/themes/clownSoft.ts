import { accordionToken } from "../component/accordion.ts";
import { bentoToken } from "../component/bento.ts";
import { buttonToken } from "../component/button.ts";
import { cardToken } from "../component/card.ts";
import { chipToken } from "../component/chip.ts";
import { progressToken } from "../component/progress.ts";
import { staleBadgeToken } from "../component/staleBadge.ts";
import { statTileToken } from "../component/statTile.ts";
import { tooltipToken } from "../component/tooltip.ts";
import { fontStack } from "../primitives/typography.ts";
import {
  semanticAmbianceDark,
  semanticAmbianceHighContrast,
  semanticAmbianceLight,
} from "../semantic/ambiance.ts";
import { semanticColorDark } from "../semantic/color.dark.ts";
import { semanticColorHighContrast } from "../semantic/color.highContrast.ts";
import { semanticColorLight } from "../semantic/color.light.ts";
import {
  semanticFocusDark,
  semanticFocusHighContrast,
  semanticFocusLight,
} from "../semantic/focus.ts";
import { semanticGradient } from "../semantic/gradient.ts";
import {
  semanticSurfaceDark,
  semanticSurfaceHighContrast,
  semanticSurfaceLight,
} from "../semantic/surface.ts";
import type { CuteTheme, ThemeId } from "../theme.ts";

const component: CuteTheme["component"] = {
  cardRadius: cardToken.radius,
  buttonPaddingInline: buttonToken.paddingInline,
  buttonPaddingBlock: buttonToken.paddingBlock,
  chipRadius: chipToken.radius,
  accordionDuration: accordionToken.duration,
  progressHeight: progressToken.height,
  tooltipRadius: tooltipToken.radius,
  bentoGap: bentoToken.gap,
  statValueSize: statTileToken.valueSize,
  staleBadgeSize: staleBadgeToken.size,
};

const font: CuteTheme["font"] = {
  body: fontStack.body,
  heading: fontStack.heading,
  label: fontStack.label,
  mono: fontStack.mono,
};

export function clownSoftBase(id: ThemeId): CuteTheme {
  if (id === "clown-soft-dark") {
    return {
      id,
      color: semanticColorDark,
      surface: semanticSurfaceDark,
      focus: semanticFocusDark,
      gradient: semanticGradient,
      ambiance: semanticAmbianceDark,
      font,
      component,
    };
  }
  if (id === "clown-soft-high-contrast") {
    return {
      id,
      color: semanticColorHighContrast,
      surface: semanticSurfaceHighContrast,
      focus: semanticFocusHighContrast,
      gradient: { ...semanticGradient, solidFallback: "#000000", ink: "#FFFFFF" },
      ambiance: semanticAmbianceHighContrast,
      font,
      component,
    };
  }
  return {
    id,
    color: semanticColorLight,
    surface: semanticSurfaceLight,
    focus: semanticFocusLight,
    gradient: semanticGradient,
    ambiance: semanticAmbianceLight,
    font,
    component,
  };
}

export const clownSoft = {
  light: clownSoftBase("clown-soft-light"),
  dark: clownSoftBase("clown-soft-dark"),
  highContrast: clownSoftBase("clown-soft-high-contrast"),
} as const;
