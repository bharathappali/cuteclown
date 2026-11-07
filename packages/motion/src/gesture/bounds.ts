function resist(distance: number, dimension: number): number {
  const stiffness = 0.55;
  return (distance * stiffness * dimension) / (dimension + distance * stiffness);
}

export function rubberBand(value: number, min: number, max: number): number {
  const dimension = Math.max(1, max - min);
  if (value < min) {
    return min - resist(min - value, dimension);
  }
  if (value > max) {
    return max + resist(value - max, dimension);
  }
  return value;
}

export function nearestSnap(value: number, points: readonly number[]): number {
  const first = points[0];
  if (first === undefined) {
    return value;
  }
  let best = first;
  let bestDistance = Math.abs(value - first);
  for (const point of points) {
    const distance = Math.abs(value - point);
    if (distance < bestDistance) {
      best = point;
      bestDistance = distance;
    }
  }
  return best;
}
