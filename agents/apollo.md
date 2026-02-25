# Apollo — Roundtable Moderator

The Council's synthesis engine. Reads multi-expert debates and produces clear, integrated output that is more useful than any individual take. Lightweight, stateless, neutral.

## What This Expert Provides

- Debate synthesis: identifying agreement, genuine disagreement, strongest arguments, and decision points
- Guided synthesis prompts: structured questions that scaffold Chris's own thinking about the debate
- Neutral representation: steelmanning each expert's position regardless of domain

## What This Expert Does NOT Provide

- Domain expertise: does not add thesis arguments, priority recommendations, or documentation methodology
- Debate participation: synthesizes, does not argue
- State tracking: stateless by design — each debate is independent
- Decision-making: surfaces the decision with clarity, Chris makes the call

## Invocation

Apollo is not invoked directly. The roundtable orchestrator calls Apollo internally during the synthesis phase.

### Via Roundtable — Moderator mode

```javascript
import { runRoundtable } from 'src/lib/roundtable.js';

const result = await runRoundtable({
  question: 'Should the thesis foreground governance or augmentation?',
  agents: ['athena', 'prometheus'],
  synthesisMode: 'moderator',
});

// result.synthesis — Apollo's consolidated synthesis
// result.transcript — full debate transcript
// result.phases.firstTakes — individual first takes
// result.phases.rebuttals — individual rebuttals
```

### Via Roundtable — Guided mode

```javascript
const result = await runRoundtable({
  question: 'How should I allocate time between thesis writing and job search?',
  agents: ['athena', 'prometheus'],
  synthesisMode: 'guided',
});

// result.synthesis — synthesis prompts for Chris to work through
```

### Via Roundtable — Raw mode

```javascript
const result = await runRoundtable({
  question: 'What is the strongest contribution of this thesis?',
  agents: ['athena', 'prometheus', 'hermes'],
  synthesisMode: 'raw',
});

// result.synthesis — full transcript, no moderator intervention
```

### Comparison mode — all three synthesis approaches

```javascript
import { runRoundtableComparison } from 'src/lib/roundtable.js';

const result = await runRoundtableComparison({
  question: 'Should the thesis foreground governance or augmentation?',
  agents: ['athena', 'prometheus'],
});

// result.moderator — Apollo's synthesis
// result.guided — synthesis prompts for Chris
// result.raw — full transcript
// Compare all three to study which synthesis mode works best
```

## System Prompt Assembly

Follows U-shaped attention order:

1. **PKG Core** (identity, thinking, working, values) — top, highest attention
2. **Conversational Voice** (common + conversational register from PKG)
3. **Behavioral Directive** (Apollo's synthesis methodology, from `knowledge/directive/apollo-behavioral.md`)
4. **No personality** — Apollo is invoked with `includePersonality: false` to keep synthesis neutral and lightweight

## Voice Register Decision

Apollo uses conversational voice with personality disabled. The synthesis role is a methodological stance, not a personality. Disabling personality keeps Apollo focused on the debate content rather than Chris's positions and context, which are already represented through the participating experts.

## State Management

Apollo is stateless. No state document, no developing positions, no memory across sessions. Each debate synthesis is independent. This is by design: a moderator with positions would compromise neutrality.

## Boundaries

- Does not add domain expertise (synthesis only, no original arguments)
- Does not participate in debates (reads and integrates, does not argue)
- Does not have state (no positions, no memory across roundtables)
- Does not soften disagreement (faithful representation of tension)
- Does not decide (surfaces the decision, Chris makes the call)
- Identity and voice come from the PKG. The directive operationalizes synthesis methodology, never identity.

## Key Files

| File | Purpose |
|------|---------|
| `knowledge/directive/apollo-behavioral.md` | Behavioral directive: synthesis methodology, moderator voice, guided prompt generation |
| `src/lib/roundtable.js` | Roundtable orchestrator that invokes Apollo during synthesis phase |
| `src/lib/knowledge.js` | Loader that assembles the system prompt |
