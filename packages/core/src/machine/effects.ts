export function startTimer(
  delayMs: number,
  onFire: () => void,
  schedule: (fire: () => void, delayMs: number) => number,
  cancel: (id: number) => void,
): { clear: () => void } {
  let active = true;
  const id = schedule(() => {
    if (active) {
      onFire();
    }
  }, delayMs);
  return {
    clear() {
      active = false;
      cancel(id);
    },
  };
}

export function bindStateEffects(
  getState: () => string,
  subscribe: (listener: () => void) => () => void,
  effects: Record<
    string,
    { entry?: () => void; exit?: () => void; timeoutMs?: number; onTimeout?: () => void }
  >,
  schedule: (fire: () => void, delayMs: number) => number,
  cancel: (id: number) => void,
): () => void {
  let current = getState();
  let timer: { clear: () => void } | undefined;

  function enter(state: string) {
    const effect = effects[state];
    effect?.entry?.();
    if (effect?.timeoutMs !== undefined && effect.onTimeout) {
      timer = startTimer(effect.timeoutMs, effect.onTimeout, schedule, cancel);
    }
  }

  function leave(state: string) {
    timer?.clear();
    timer = undefined;
    effects[state]?.exit?.();
  }

  enter(current);
  return subscribe(() => {
    const next = getState();
    if (next === current) {
      return;
    }
    leave(current);
    current = next;
    enter(current);
  });
}
