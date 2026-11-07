const tabbableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

function tabbables(root: HTMLElement): HTMLElement[] {
  return [...root.querySelectorAll<HTMLElement>(tabbableSelector)].filter(
    (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1,
  );
}

export function createFocusScope(root: HTMLElement): { dispose: () => void } {
  const previous = root.ownerDocument.activeElement;
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key !== "Tab") {
      return;
    }
    const items = tabbables(root);
    const first = items[0];
    const last = items[items.length - 1];
    if (!first || !last) {
      event.preventDefault();
      return;
    }
    const active = root.ownerDocument.activeElement;
    if (event.shiftKey && (active === first || !root.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !root.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  };
  root.addEventListener("keydown", onKeyDown);
  tabbables(root)[0]?.focus();
  return {
    dispose() {
      root.removeEventListener("keydown", onKeyDown);
      if (previous instanceof HTMLElement) {
        previous.focus();
      }
    },
  };
}
