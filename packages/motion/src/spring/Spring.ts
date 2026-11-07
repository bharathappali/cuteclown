import { criticalAt } from "./critical.ts";
import { overdampedAt } from "./overdamped.ts";
import { dampingFromBounce, omegaFromResponse } from "./params.ts";
import { underdampedAt } from "./underdamped.ts";

const settleDistance = 0.001;
const settleVelocity = 0.001;

export class Spring {
  x: number;
  v: number;
  target: number;
  readonly omega0: number;
  readonly zeta: number;

  constructor({
    x = 0,
    v = 0,
    target = 0,
    response = 0.28,
    bounce = 0.08,
  }: {
    x?: number;
    v?: number;
    target?: number;
    response?: number;
    bounce?: number;
  } = {}) {
    this.x = x;
    this.v = v;
    this.target = target;
    this.omega0 = omegaFromResponse(response);
    this.zeta = dampingFromBounce(bounce);
  }

  setTarget(target: number): void {
    this.target = target;
  }

  step(dt: number): void {
    const sample =
      this.zeta > 1
        ? overdampedAt(dt, this.x, this.v, this.target, this.omega0, this.zeta)
        : this.zeta < 1
          ? underdampedAt(dt, this.x, this.v, this.target, this.omega0, this.zeta)
          : criticalAt(dt, this.x, this.v, this.target, this.omega0);
    this.x = sample.x;
    this.v = sample.v;
  }

  get settled(): boolean {
    return Math.abs(this.x - this.target) < settleDistance && Math.abs(this.v) < settleVelocity;
  }
}
