export function createSpringBudget(limit: number) {
  const active = new Set<string>();
  return {
    get size() {
      return active.size;
    },
    acquire(id: string) {
      if (active.has(id)) {
        return true;
      }
      if (active.size >= limit) {
        return false;
      }
      active.add(id);
      return true;
    },
    release(id: string) {
      active.delete(id);
    },
  };
}
