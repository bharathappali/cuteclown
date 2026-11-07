# Contributing to CuteClown

Thanks for helping build CuteClown. This guide covers the rules that keep the project original, accessible, and reviewable.

## Priorities

1. **Accessibility** — WCAG 2.2 AA is non-negotiable. Visual or motion choices that conflict with accessibility must adapt.
2. **Responsiveness** — layout and performance both matter (container-aware UI, fast input feedback).
3. Everything else (aesthetics, motion polish) comes after those two.

Accessibility regressions are treated as high priority.

## Clean-room policy

CuteClown is a **clean-room** codebase. Do **not** copy, port, translate, or closely paraphrase code, CSS, docs, or API designs from other libraries, tutorials, or Q&A sites.

**Allowed:** public concepts implemented independently (WAI-ARIA patterns, CSS custom properties, cascade layers, damped-spring math, published algorithms).

**Not allowed:** lifting structure or naming from other UI / headless / motion / chart libraries in a way that reproduces their APIs or implementation.

Core packages ship with **zero runtime dependencies**. Dev dependencies should stay on permissive licenses (MIT, Apache-2.0, BSD, ISC) unless maintainers agree otherwise.

See `NOTICE` for the originality declaration.

## Plan-first workflow

Non-trivial changes should be planned before implementation. Maintainers track work in local planning docs; for contributors, open an issue or discussion first when the change is large (new package, new composite widget, public API shape, theming contract).

Small fixes (typos, obvious bugs, test hardening) do not need a plan.

## Commits

- Sign commits: `git commit -sS` (Signed-off-by **and** GPG/SSH signing as configured for this repo).
- Use [Conventional Commits](https://www.conventionalcommits.org/) (`feat(scope): …`, `fix(scope): …`, `docs: …`, etc.).
- Keep commits atomic: one logical change that leaves the tree buildable and tests green.
- Do **not** add AI or tool co-author trailers (`Co-authored-by:` for bots/agents, “Generated with …”, and similar).

## Pull requests

- Describe what changed and why.
- Confirm the clean-room checkbox in the PR template.
- Include tests with behavior changes (unit, adapter behavior, and accessibility checks where relevant).
- Call out a11y impact: keyboard, focus, names/roles/states, contrast, reduced motion / transparency / contrast preferences.

## Code of conduct

Be respectful. Harassment or hostile behavior is not welcome. See `CODE_OF_CONDUCT.md` when present.

## License

By contributing, you agree that your contributions are licensed under the Apache License 2.0 (see `LICENSE`).
