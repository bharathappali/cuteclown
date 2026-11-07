# CuteClown

CuteClown is an open-source UI framework for web apps, dashboards, admin tools, and marketing pages. The first proof is a fluid, glass-like observability-style dashboard built only from these primitives, using generic example data.

Accessibility and responsiveness come before appearance. Components target WCAG 2.2 AA, keep a visible focus ring, and honor reduced motion, reduced transparency, higher contrast, and forced colors. Layouts are mobile-first and adapt with container queries.

The same behavior is implemented for plain CSS and JavaScript, React, and Vue from a shared core.

## Packages

| Package              | Role                                       |
| -------------------- | ------------------------------------------ |
| `@cuteclown/tokens`  | Design tokens, themes, and contrast checks |
| `@cuteclown/css`     | Base and component styles                  |
| `@cuteclown/motion`  | Spring motion                              |
| `@cuteclown/core`    | Framework-agnostic behavior                |
| `@cuteclown/vanilla` | Plain JavaScript bindings                  |
| `@cuteclown/react`   | React bindings                             |
| `@cuteclown/vue`     | Vue 3 bindings                             |

`@cuteclown/charts` is a private stub for a later phase.

## Apps

- `apps/playground` — Vite sandbox (`pnpm --filter @cuteclown/playground dev`)
- `apps/docs` — documentation site (`pnpm --filter @cuteclown/docs dev`)

## Develop

```bash
pnpm install
pnpm lint
pnpm test
pnpm --filter @cuteclown/tokens build
pnpm --filter @cuteclown/css build
```

Node.js 20+ and pnpm 9+ are required. See `CONTRIBUTING.md` for the clean-room policy, accessibility expectations, and signed commits.
