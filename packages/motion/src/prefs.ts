export type MediaQueryListLike = { matches: boolean };

export function prefersReducedMotion(match: (query: string) => MediaQueryListLike): boolean {
  return match("(prefers-reduced-motion: reduce)").matches;
}
