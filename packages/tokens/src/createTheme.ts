import type { CuteTheme } from "./theme.ts";

type Plain = Record<string, unknown>;

function isPlain(value: unknown): value is Plain {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function merge<T>(base: T, overrides: unknown): T {
  if (!isPlain(overrides)) {
    return base;
  }
  const output: Plain = { ...(base as Plain) };
  for (const key of Object.keys(overrides)) {
    const next = overrides[key];
    if (next === undefined) {
      continue;
    }
    const current = output[key];
    output[key] = isPlain(next) && isPlain(current) ? merge(current, next) : next;
  }
  return output as T;
}

function freeze<T>(value: T): T {
  if (isPlain(value)) {
    for (const key of Object.keys(value)) {
      freeze(value[key]);
    }
    return Object.freeze(value);
  }
  return value;
}

export function createTheme({
  extends: base,
  overrides,
}: {
  extends: CuteTheme;
  overrides?: unknown;
}): CuteTheme {
  return freeze(merge(structuredClone(base), overrides));
}
