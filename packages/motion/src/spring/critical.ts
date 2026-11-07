import type { Sample } from "./underdamped.ts";

/** Closed-form critically damped spring (ζ = 1). */
export function criticalAt(
  t: number,
  x0: number,
  v0: number,
  target: number,
  omega0: number,
): Sample {
  const A = x0 - target;
  const B = v0 + omega0 * A;
  const decay = Math.exp(-omega0 * t);
  const x = target + (A + B * t) * decay;
  const v = (B - omega0 * (A + B * t)) * decay;
  return { x, v };
}
