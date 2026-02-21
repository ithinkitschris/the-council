# The Council

> A multi-agent augmentation system powered by a Personal Knowledge Graph.

## What This Is

The Council is Chris Lim's MFA thesis project: a multi-agent AI augmentation system where specialized agents draw from a shared Personal Knowledge Graph (PKG) to provide deep, context-aware assistance. Each Council member has distinct capabilities and behavioral directives, but all share the same canonical knowledge about Chris.

This is the second host built on the PKG > Host > Directive framework. The first (the portfolio digital twin at ithinkitschris.com) proved the architecture. The Council scales it.

## The Thesis

This project explores human-AI augmentation through first-person design research. The core question: how can the design of AI augmentation systems — their knowledge architecture, governance models, and interaction patterns — preserve human agency while delivering genuinely useful capabilities?

The thesis structure lives in `thesis/structure.md`. The pivot workshop that led here is in `thesis/pivot-workshop.md`.

---

## Architecture: PKG > Host > Directive

```
PKG (chris-pkg)              Pure knowledge. Consumer-agnostic. Version-controlled.
    |                        Identity, thinking, values, voice, positions, context.
    v                        ~11,000 lines. 4-tier loading. Governed by Heimdall.
Host (this repo)             The Council. Reads from PKG, adds its own directives.
    |
    v
Directive (per agent)        Behavioral layer. Role, response patterns, operational rules.
                             Lives in knowledge/directive/{agent}-behavioral.md
```

### What goes in the PKG (chris-pkg)
- Identity, thinking patterns, values, voice
- Positions on design, technology, career, personal topics
- Life context, interpersonal patterns, behavioral patterns
- Pure knowledge only. No "you are" directives. No scenario-response pairs.

### What goes in Directives (this repo)
- Role definition ("You are a Council member that...")
- Response patterns and length rules
- Behavioral instructions and scenarios
- Agent-specific operational framing

### Never cross the boundary
- Directive files must not contain identity/knowledge content (that's PKG)
- PKG must not contain behavioral instructions (that's directive)

---

## Key File Paths

```
the-council/
  CLAUDE.md                        <- This file
  package.json                     <- Project config
  scripts/fetch-pkg.js             <- PKG bootstrapper (symlink or clone)
  knowledge/
    pkg/                           <- Symlinked from chris-pkg (GITIGNORED)
    directive/                     <- Per-agent behavioral files
      {agent-name}-behavioral.md
  src/
    lib/knowledge.js               <- PKG + directive loaders
  agents/                          <- Agent definitions (future)
  thesis/
    structure.md                   <- New thesis structure
    pivot-workshop.md              <- Decision history and rationale
  docs/
    process/                       <- Ongoing process documentation
```

---

## Development

### Setup
```bash
cp .env.example .env.local         # Set PKG_PATH and ANTHROPIC_API_KEY
npm install
npm run fetch-pkg                  # Symlink chris-pkg into knowledge/pkg/
```

### PKG Integration
- **Local dev**: Set `PKG_PATH` in `.env.local` to your local chris-pkg clone. `fetch-pkg.js` creates a symlink. Edits to chris-pkg reflect instantly.
- **Production**: Set `CHRIS_PKG_TOKEN` (GitHub PAT). `fetch-pkg.js` clones at build time.
- **Never commit** `knowledge/pkg/` — it's gitignored.

### Adding a Council Member
1. Create `knowledge/directive/{agent-name}-behavioral.md` with the agent's behavioral instructions
2. Use `assembleSystemPrompt({ agentName: '{agent-name}' })` from `src/lib/knowledge.js` to build the system prompt
3. The loader handles PKG tier assembly automatically (U-shaped attention order)

### System Prompt Assembly Order
1. Core PKG (identity, thinking, working, values) — top, highest attention
2. Voice layer (common + conversational/essay/documentation)
3. Host directive (agent-specific behavioral instructions)
4. Positions + context — bottom

---

## Design Principles

1. **Augment, don't replace** — every capability should make Chris more capable, not less
2. **Automation must be reversible, explainable, and auditable** — Heimdall governance, staging mechanism, changelog
3. **Freedom through explicit trade-offs** — tunable proactivity, not all-or-nothing
4. **No punishment, no shame, no dead ends** — every state has an exit
5. **Convenience and control are not zero-sum** — good design delivers both
6. **Knowledge is the foundation, not the AI** — the PKG is what makes augmentation personal
7. **Governance is a first-class design concern** — not an afterthought

---

## For Claude: Working Style

- **Build with conviction.** This is a thesis project — quality and craft matter.
- **Respect the PKG boundary.** Knowledge lives in chris-pkg, behavior lives in directives.
- **Document the process.** Decisions, tensions, and surprises belong in `docs/process/`.
- **Think systemically.** Every agent affects the whole Council ecosystem.
- **Seek the tension.** The augmentation-agency paradox is the thesis. Surface it, don't avoid it.
