export type ThemeId = "clown-soft-light" | "clown-soft-dark" | "clown-soft-high-contrast";

export type CuteTheme = {
  id: ThemeId;
  color: {
    surface: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    accent: string;
    border: string;
    statusOkFill: string;
    statusOkText: string;
    statusWarnFill: string;
    statusWarnText: string;
    statusCritFill: string;
    statusCritText: string;
    statusStaleFill: string;
    statusStaleText: string;
    statusInfoFill: string;
    statusInfoText: string;
    statusUnknownFill: string;
    statusUnknownText: string;
  };
  surface: {
    raisedShadow: string;
    insetShadow: string;
    glassFill: string;
    glassBlur: string;
    glassSaturate: string;
    glassBorder: string;
  };
  focus: { width: string; color: string };
  gradient: {
    from: string;
    to: string;
    angleText: string;
    angleFill: string;
    solidFallback: string;
    ink: string;
  };
  ambiance: { periwinkle: string; butter: string; pink: string; mint: string };
  font: { body: string; heading: string; label: string; mono: string };
  component: {
    cardRadius: string;
    buttonPaddingInline: string;
    buttonPaddingBlock: string;
    chipRadius: string;
    accordionDuration: string;
    progressHeight: string;
    tooltipRadius: string;
    bentoGap: string;
    statValueSize: string;
    staleBadgeSize: string;
  };
};
