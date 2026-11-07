export type LayerTarget = {
  addEventListener(
    type: string,
    listener: (event: {
      key?: string;
      target?: EventTarget | null;
      preventDefault?: () => void;
    }) => void,
  ): void;
  removeEventListener(
    type: string,
    listener: (event: {
      key?: string;
      target?: EventTarget | null;
      preventDefault?: () => void;
    }) => void,
  ): void;
};

export type Layer = {
  id: string;
  element?: { contains: (node: Node) => boolean };
  onDismiss: () => void;
};

type LayerEvent = { key?: string; target?: EventTarget | null; preventDefault?: () => void };

export function createLayerStack(target: LayerTarget) {
  const layers: Layer[] = [];

  function dismissTop() {
    const top = layers.pop();
    top?.onDismiss();
    if (layers.length === 0) {
      unbind();
    }
  }

  function onKey(event: LayerEvent) {
    if (event.key !== "Escape" || layers.length === 0) {
      return;
    }
    event.preventDefault?.();
    dismissTop();
  }

  function onPointer(event: LayerEvent) {
    const top = layers[layers.length - 1];
    const node = event.target;
    if (!top?.element || node == null || top.element.contains(node as Node)) {
      return;
    }
    dismissTop();
  }

  function bind() {
    target.addEventListener("keydown", onKey);
    target.addEventListener("pointerdown", onPointer);
  }

  function unbind() {
    target.removeEventListener("keydown", onKey);
    target.removeEventListener("pointerdown", onPointer);
  }

  return {
    get depth() {
      return layers.length;
    },
    push(layer: Layer) {
      if (layers.length === 0) {
        bind();
      }
      layers.push(layer);
      return () => {
        const index = layers.indexOf(layer);
        if (index >= 0) {
          layers.splice(index, 1);
        }
        if (layers.length === 0) {
          unbind();
        }
      };
    },
    dismissTop,
  };
}
