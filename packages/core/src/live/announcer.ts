export type Politeness = "polite" | "assertive";

export function createAnnouncer(doc: Document = document): {
  announce: (message: string, politeness?: Politeness) => void;
  dispose: () => void;
} {
  const nodes = {
    polite: doc.createElement("div"),
    assertive: doc.createElement("div"),
  };
  for (const [politeness, node] of Object.entries(nodes) as Array<[Politeness, HTMLDivElement]>) {
    node.dataset.ccAnnouncer = politeness;
    node.setAttribute("aria-live", politeness);
    node.setAttribute("aria-atomic", "true");
    doc.body.append(node);
  }
  return {
    announce(message, politeness = "polite") {
      const node = nodes[politeness];
      node.textContent = "";
      node.textContent = message;
    },
    dispose() {
      nodes.polite.remove();
      nodes.assertive.remove();
    },
  };
}
