export const spacing = [4, 8, 12, 16, 20, 24, 32] as const;

export const radius = {
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  pill: 999,
} as const;

export function pxToRem(px: number): string {
  return `${px / 16}rem`;
}
