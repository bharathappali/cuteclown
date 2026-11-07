export type FlipRect = { left: number; top: number; width: number; height: number };

export type FlipInvert = { x: number; y: number; scaleX: number; scaleY: number };

const identity: FlipInvert = { x: 0, y: 0, scaleX: 1, scaleY: 1 };

export function flipInvert(first: FlipRect, last: FlipRect, reducedMotion = false): FlipInvert {
  if (reducedMotion || last.width === 0 || last.height === 0) {
    return identity;
  }
  return {
    x: first.left - last.left,
    y: first.top - last.top,
    scaleX: first.width / last.width,
    scaleY: first.height / last.height,
  };
}
