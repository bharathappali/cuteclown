export function tweenNumber(from: number, to: number, progress: number, decimals = 0): number {
  const t = Math.min(1, Math.max(0, progress));
  const value = from + (to - from) * t;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}
