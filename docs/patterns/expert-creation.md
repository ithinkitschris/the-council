# Pattern: Creating a Council Expert

The onboarding flow for a new Council member. Established through the creation of Athena (Thesis Advisor) on 2026-02-24 — the second expert after Hermes (Documentation Expert).

This pattern captures the questions to answer, the files to create, and the decisions to make. It is a flow, not a checklist. The workshop conversation is as important as the artifacts it produces.

---

## Step 1: Identity Workshop

Start with a conversation. Before writing a single file, establish:

**Role and need.** What does this expert do that no other Council member does? What is the gap it fills? Be specific — "writing assistant" and "thesis advisor" are different gaps with different implications for the behavioral directive.

**Relationship.** What is the dynamic between this expert and Chris? Peer? Authority? Tool? The relationship shapes the voice, the push-back style, the level of autonomy the expert should have.

**Core capability.** What does the expert actually produce or provide? Methodology, state tracking, advising, creative output, research? This determines whether the expert is stateless (like Hermes: receives a brief, applies methodology, produces output) or stateful (like Athena: maintains evolving awareness, earns positions over time).

**Naming.** Choose a Greek figure whose archetype maps to the expert's role. The archetype should carry meaning — Hermes (messenger, hermeneutics, carrier of knowledge between realms) for documentation; Athena (wisdom, strategy, craft) for thesis advising. The name is the expert's identity in the Council ecosystem.

---

## Step 2: Behavioral Parameters

Define how the expert behaves before writing the directive:

**Push-back style.** Does this expert challenge? If so, how hard and in what style? Direct and blunt? Firm but constructive? Socratic? A documentation expert does not push back — it serves the brief. A thesis advisor must push back or it has no value.

**Voice energy.** What is the felt sense of talking with this expert? Late-night whiteboard? Sharp creative director? Precise technical advisor? This is not the PKG voice (that is fixed) but the behavioral texture the expert brings to that voice.

**Intellectual stance.** Does the expert have opinions? If so, are they fixed or earned over time? Some experts are pure methodology appliers. Others develop informed perspectives. Know which this one is before writing the directive.

**Audience.** Who talks to this expert? Just Chris? External visitors? Faculty? The answer determines whether audience adaptation belongs in the directive.

---

## Step 3: Boundary Check

The hardest part. Before writing the directive, clarify what stays in the PKG and what belongs in the directive.

**PKG territory:** identity, thinking patterns, values, voice mechanics (vocabulary, sentence structure, what to reach for), positions on design/technology/career/personal topics, life context.

**Directive territory:** role definition, behavioral patterns (when to push back, how to frame challenges, how to engage), operational rules (what the expert owns vs. what projects provide), methodology, audience adaptation.

**The test:** If a piece of content describes WHO Chris is, it belongs in the PKG. If it describes HOW this expert operates, it belongs in the directive. When in doubt, ask: could this content apply to a different expert using the same PKG? If yes, it is PKG territory. If no, it is directive territory.

**Voice register.** Which PKG voice register does this expert use: conversational, essay, or documentation? Or does it need a new register (a PKG decision, not a Council decision)? Note: behavioral shaping within an existing register is always directive territory. Adding a new register requires a PKG governance decision through Heimdall.

**State tracking.** Does this expert need to maintain state across sessions? If yes, decide: what state, where it lives (a curated document), who can update it (propose/approve cycle), and how it is loaded (additionalContext).

---

## Step 4: File Creation

Three files for every expert:

**1. `knowledge/directive/{name}-behavioral.md`**

Opens with role definition: "You are [Name], the Council's [role]..." Establishes what the PKG provides, what the expert provides, what the project/user provides.

Sections vary by expert, but always include:
- The expert's core methodology or advisory approach
- Specific behavioral patterns (what to do in which situations)
- Audience rules if multiple audiences exist
- Boundaries: what the expert does NOT do

**2. `agents/{name}.md`**

The public interface. Covers:
- One-line tagline
- What the expert provides
- What projects/users provide (if applicable)
- Invocation code
- System prompt assembly order
- State management (if stateful)
- Boundaries
- Key files table

**3. Supporting files (if needed)**

Stateful experts need a state document. The state document captures what code artifacts cannot: evolving intellectual state, strategic priorities, developing positions. It lives in a logical location (`thesis/state.md` for Athena), is passed as `additionalContext`, and is co-authored by the expert and Chris.

---

## Step 5: Infrastructure Check

Before calling the expert functional:

**Does `knowledge.js` need changes?** Almost certainly not. The `assembleSystemPrompt({ agentName, voice, additionalContext })` pattern handles most cases. The calling code is responsible for loading and passing any state documents or briefs.

**Are new PKG voice registers needed?** If behavioral shaping within an existing register is not sufficient, a new register requires a PKG decision through Heimdall. This is a governance action, not a Council action.

**Is `additionalContext` sufficient?** For stateful experts, the calling code reads the state document and passes it. For experts with project briefs, the calling code reads the brief and passes it. Both work with the existing loader.

---

## Step 6: CLAUDE.md Integration

After creating the files:

- Add the expert to the Key File Paths section (agents, directive)
- Add any supporting files (state documents, new pattern files)
- Update the naming convention note with the new Council member
- Add any new architectural patterns introduced (stateful experts, new loading patterns)

---

## Step 7: Process Documentation

Write `docs/process/{name}-creation.md` documenting the specific creation. Record:
- The workshop decisions and why they were made
- Any design tensions (voice register, PKG boundary questions, scope decisions)
- New patterns introduced by this expert
- What was learned that applies to future expert creations

The process doc is not just a record — it is the material for the thesis's "honest account" deliverable. Build it with that in mind.

---

## The Council's Current Members

| Agent | Name | Role | Type |
|-------|------|------|------|
| `hermes` | Hermes | Documentation Expert | Stateless |
| `athena` | Athena | Thesis Advisor | Stateful |
| `apollo` | Apollo | Career & Communications Expert | Stateful |
| `iris` | Iris | Personal Communications & Social Expert | Stateful |
