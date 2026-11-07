export function createRovingTabIndex(items: readonly HTMLElement[], initial = 0) {
  let index = Math.min(Math.max(initial, 0), Math.max(0, items.length - 1));

  function apply() {
    items.forEach((item, itemIndex) => {
      item.tabIndex = itemIndex === index ? 0 : -1;
    });
  }

  apply();
  return {
    get index() {
      return index;
    },
    onKeyDown(event: KeyboardEvent) {
      if (items.length === 0) {
        return;
      }
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        index = (index + 1) % items.length;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        index = (index - 1 + items.length) % items.length;
      } else {
        return;
      }
      event.preventDefault();
      apply();
      items[index]?.focus();
    },
  };
}
