export type Clock = {
  now(): number;
};

export const systemClock: Clock = {
  now: () => performance.now(),
};

export class MockClock implements Clock {
  #time = 0;

  now(): number {
    return this.#time;
  }

  advance(ms: number): void {
    this.#time += ms;
  }
}
