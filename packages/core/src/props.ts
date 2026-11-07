type Props = Record<string, unknown>;

function chain(previous: unknown, next: unknown): unknown {
  if (typeof previous === "function" && typeof next === "function") {
    return (...args: unknown[]) => {
      previous(...args);
      next(...args);
    };
  }
  return next;
}

export function mergeProps(...parts: Props[]): Props {
  const merged: Props = {};
  for (const part of parts) {
    for (const [key, value] of Object.entries(part)) {
      if (key === "className") {
        merged[key] = [merged[key], value].filter(Boolean).join(" ");
        continue;
      }
      merged[key] = chain(merged[key], value);
    }
  }
  return merged;
}
