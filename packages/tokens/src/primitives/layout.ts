export const breakpoint = {
  xs: 320,
  sm: 640,
  md: 960,
  lg: 1200,
  xl: 1440,
} as const;

export const containerSize = {
  narrow: 320,
  medium: 640,
  wide: 960,
} as const;

/** Overlay layers. Modal sits above tooltip and toast. */
export const zIndex = {
  base: 0,
  sticky: 10,
  tooltip: 40,
  toast: 50,
  modal: 60,
} as const;
