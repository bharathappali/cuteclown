export type StyleTarget = { style: { setProperty(name: string, value: string): void } };

type Scheduler = (callback: () => void) => void;

export function createThemeApplier(schedule: Scheduler) {
  let pending = new Map<string, string>();
  let queued = false;
  let target: StyleTarget | undefined;

  return function applyTheme(element: StyleTarget, variables: Record<string, string>) {
    target = element;
    for (const [name, value] of Object.entries(variables)) {
      pending.set(name, value);
    }
    if (queued) {
      return;
    }
    queued = true;
    schedule(() => {
      queued = false;
      const batch = pending;
      pending = new Map();
      const node = target;
      if (!node) {
        return;
      }
      for (const [name, value] of batch) {
        node.style.setProperty(name, value);
      }
    });
  };
}
