export type DeviceHints = { hardwareConcurrency?: number; saveData?: boolean };

export function resolveLowEnd(hints: DeviceHints, override?: boolean): boolean {
  if (typeof override === "boolean") {
    return override;
  }
  if (hints.saveData) {
    return true;
  }
  return (hints.hardwareConcurrency ?? 8) <= 4;
}

export function degradeBudget(limit: number, lowEnd: boolean): number {
  if (!lowEnd) {
    return limit;
  }
  return Math.max(1, Math.floor(limit / 2));
}
