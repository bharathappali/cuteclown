/** Raw palette. Semantic text colors may be darker than these fills so contrast holds. */
export const primitiveColor = {
  pastel: {
    periwinkle: "#9FA1FF",
    pink: "#F9B2D7",
    butter: "#FFF0BE",
    mint: "#D9F9DF",
  },
  accent: {
    periwinkle: "#6E70E8",
    pink: "#D9619F",
  },
  gradient: {
    from: "#7F81F2",
    to: "#D97AAE",
  },
  ink: {
    light: { primary: "#24255A", secondary: "#4B4D84", tertiary: "#6C6E9E" },
    dark: { primary: "#EEEDFF", secondary: "#C9C9EE", tertiary: "#A3A4D2" },
  },
  status: {
    light: { ok: "#22A55B", warn: "#E59A12", error: "#E5484D", stale: "#9A9CBF" },
    dark: { ok: "#3DD47F", warn: "#F5B840", error: "#FF6B70", stale: "#7D7FA8" },
  },
  background: { light: "#F7F6FC", dark: "#14152B" },
} as const;
