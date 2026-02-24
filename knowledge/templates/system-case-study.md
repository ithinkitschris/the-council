# Template: System Case Study

Documentation for a system, pipeline, or tool. Explains what it is, why it exists, how it works, and why it was built that way. Uses the system documentation register: third-person, tool-as-subject. Not a developer reference manual. A case study of the thinking behind the system.

## When to Use

When you need to explain a system to someone who wants to understand the purpose and design, not maintain the code. Internal tooling case studies, feature documentation, pipeline overviews. The reader should walk away understanding the system's intent and the reasoning behind its design.

## Shape

### Frontmatter

```yaml
---
title: [System Name]
date: [YYYY-MM-DD]
updated: [YYYY-MM-DD]
tags: [relevant, tags]
status: [current, deprecated, experimental]
order: [sort position, if the project uses ordered collections]
---
```

### Opening Paragraph (no header)

What the system is, in one paragraph. Lead with the thing itself, not context or preamble.

> Calibration mode overlays inline review controls onto the normal chat interface, allowing each of the twin's responses to be approved, commented on, or rewritten in place. It turns passive observation into active shaping: the owner reviews AI-generated responses against their own standards and corrects where needed.

### What It Is For

The problem this system solves. Why it exists. What was missing before it was built. Brief. Do not over-motivate.

### How It Works

The mechanics, described from the system's perspective. The system does things. Decisions were made. Components interact. Keep technical references light: name systems and components where it adds context, but skip file paths, code blocks, JSON schemas, and environment variable tables. If someone needs that level of detail, they are in the codebase, not the documentation page.

### Supporting Concepts (optional)

Subsystems, personas, pipeline stages, or concepts that need their own explanation. Use descriptive headers. "Visitor personas," "From session to knowledge," "The staging pipeline."

### How It Evolved (optional)

Brief arc if the system went through significant redesign. What it was, what changed, why. Only include if the evolution adds understanding.

### Design Decisions

Rationale for important choices, narrated not tabled. "The system uses X instead of Y because Z." Prose, not bullet-point lists of choices. If a decision had real trade-offs, name both sides.

## Worked Example (abbreviated)

```markdown
---
title: Calibration Pipeline
date: 2026-02-18
updated: 2026-02-20
tags: [calibration, voice-shaping, governance]
status: current
order: 1
---

The calibration pipeline turns review sessions into lasting behavioral
changes. When the site owner reviews the digital twin's responses in
calibration mode, their approvals, corrections, and rewrites feed into a
structured pipeline that updates the twin's knowledge base.

## What calibration solves

A digital twin that cannot be corrected is a liability. Without
calibration, the twin's behavior drifts based on whatever patterns the
model defaults to. Calibration provides a governed channel for the owner
to shape behavior deliberately, with each change staged and reviewed
before it takes effect.

## The review loop

Calibration mode overlays inline controls onto each response in the chat
interface. The owner can approve a response, flag it with a comment, or
rewrite it entirely. Each action generates a structured annotation that
the pipeline processes after the session ends.

## From session to knowledge

After a calibration session closes, the pipeline processes all
annotations into candidate knowledge updates. Approved responses
reinforce existing patterns. Corrections and rewrites generate proposed
changes to the behavioral layer. Nothing reaches the live system without
passing through Heimdall, the governance gatekeeper.

## Why inline, not batch

The system reviews responses inline during conversation rather than in a
separate batch review interface. The reasoning: context matters.
Evaluating a response in the flow of conversation, with the preceding
exchange visible, produces better judgments than reviewing responses in
isolation. The trade-off is that calibration sessions take longer than
batch review would, but the quality of corrections is higher.
```

## Notes

- Headers describe content, not generic categories. "From session to knowledge" not "Pipeline Stages."
- No code blocks, no JSON, no file paths in the body. Name systems and components, do not reference their implementation.
- Design decisions in prose, not tables. Narrate the reasoning.
- Match depth to complexity. A simple feature might be 40 lines. A multi-stage pipeline might be 80.
