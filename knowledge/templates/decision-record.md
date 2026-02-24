# Template: Decision Record

Lightweight documentation for a design decision that does not warrant a full build log entry. Captures the choice, the reasoning, and what was considered. Useful for decisions that happen between sessions, during conversations, or at moments where the "why" matters more than the "how."

## When to Use

When a significant choice was made and you want to capture the reasoning before it fades. Architecture decisions, technology choices, scope changes, design trade-offs. Not for trivial decisions (variable naming, minor refactors). The threshold: would someone later ask "why did we do it this way?"

## Shape

### Frontmatter

```yaml
---
title: [Decision in plain language]
date: [YYYY-MM-DD]
status: [accepted, superseded, reconsidering]
tags: [relevant, tags]
---
```

### Context

What prompted this decision. Where things stood. What pressure or constraint made the choice necessary. Two to four sentences.

### Decision

What was decided, stated directly. One to two sentences.

### Rationale

Why this choice over the alternatives. The reasoning, in prose. What mattered most. What trade-offs were accepted. This is the section that matters most; spend the words here.

### Alternatives Considered

What else was on the table and why it was not chosen. Brief. Not a full comparison matrix. Just enough to show the decision was considered, not reflexive.

### Consequences

What follows from this decision. What it enables. What it constrains. What future decisions it shapes.

## Worked Example

```markdown
---
title: Council experts provide methodology, projects provide scope
date: 2026-02-21
status: accepted
tags: [architecture, council, documentation]
---

## Context

The documentation agent in the portfolio project works well but is
tightly coupled to that project's file structure, entry format, and
rendering system. Moving to The Council means making documentation
expertise reusable across projects.

## Decision

Council experts own the craft (methodology, standards, templates).
Projects provide a brief (audience, scope, format, owned files). The
expert applies its methodology to whatever the brief describes.

## Rationale

The alternative was building a monolithic documentation agent that tries
to handle every project's specifics internally. That does not scale and
violates the PKG boundary: project-specific details are not knowledge
about Chris, they are operational context. Separating methodology from
scope keeps the expert reusable and the boundary clean. Projects know
their own needs better than a generic agent could.

## Alternatives Considered

- **Monolithic expert**: one agent that adapts to any project without a
  brief. Rejected because it would either be too generic to be useful or
  would accumulate project-specific knowledge that does not belong in
  the Council.
- **Template-only approach**: no behavioral directive, just templates
  projects fill in. Rejected because templates alone do not carry
  methodology, writing standards, or voice register guidance.

## Consequences

Every project that uses the Documentation Expert needs to write a brief.
This is a small upfront cost that pays off in consistent, high-quality
documentation calibrated to that project's needs. It also means the
expert's behavioral directive stays clean and reusable.
```

## Notes

- Keep it short. A decision record is 30 to 60 lines, not a full entry.
- The rationale section carries the weight. Do not skimp on it.
- Use "accepted" for current decisions, "superseded" when a later decision replaces this one, "reconsidering" when revisiting.
