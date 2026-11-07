export type MachineSnapshot<T> = {
  state: string;
  context: T;
  matches: (state: string) => boolean;
};

export function createSnapshot<T>(state: string, context: T): MachineSnapshot<T> {
  return {
    state,
    context,
    matches: (expected) => expected === state,
  };
}
