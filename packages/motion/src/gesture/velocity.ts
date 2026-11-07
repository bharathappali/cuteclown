export type VelocitySample = { t: number; x: number; y: number };

export function createVelocityTracker(windowMs = 100) {
  const samples: VelocitySample[] = [];

  return {
    add(sample: VelocitySample) {
      samples.push(sample);
      const cutoff = sample.t - windowMs;
      while (samples.length > 2 && (samples[0]?.t ?? 0) < cutoff) {
        samples.shift();
      }
    },
    velocity() {
      if (samples.length < 2) {
        return { x: 0, y: 0 };
      }
      let weight = 0;
      let vx = 0;
      let vy = 0;
      for (let index = 1; index < samples.length; index += 1) {
        const previous = samples[index - 1];
        const next = samples[index];
        if (!previous || !next) {
          continue;
        }
        const dt = next.t - previous.t;
        if (dt <= 0) {
          continue;
        }
        const sampleWeight = index;
        vx += ((next.x - previous.x) / dt) * sampleWeight;
        vy += ((next.y - previous.y) / dt) * sampleWeight;
        weight += sampleWeight;
      }
      if (weight === 0) {
        return { x: 0, y: 0 };
      }
      return { x: (vx / weight) * 1000, y: (vy / weight) * 1000 };
    },
    reset() {
      samples.length = 0;
    },
  };
}
