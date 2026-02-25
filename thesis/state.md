# Thesis State

Last updated: 2026-02-24
Updated by: Chris + Athena (second session)

---

## Deadline

MFA thesis defense: approximately late April 2026.
Time remaining: roughly 8 weeks as of last update.

---

## Current Thesis Argument

**Status: Fork. Two live paths. No choice made yet.**

**Shared foundation across both paths:**
The augmentation-atrophy tension is real and demonstrable — the same capabilities that make deeply personal AI beneficial are the ones that could erode the human agency they're meant to support. The PKG/Council is the working infrastructure that makes either path possible. The thesis contribution must live in interaction design decisions, not in the infrastructure itself.

**Path 1: Designing augmentation without atrophy**
Core question: What does a proper AI-native interaction with a personal OS look like when it's designed specifically to augment the user — not replace their thinking?
Artifact: The Council's interaction layer, designed and built as a live response to that question.
Framing: Fully grounded in 2026. No speculative wrapper.
Finding: Emerges from the design decisions themselves — what it takes to build augmentation that preserves agency.

**Path 2: PKG as WoZ prototype of LifeOS interaction scenarios**
Core question: What happens when people actually experience proactive, context-aware AI operating at the depth LifeOS imagined?
Artifact: PKG/Council as lo-fi wizard-of-oz prototype of 2-3 specific LifeOS interaction modes. Hi-fi screens and animated video as the designed vision those tests inform.
Framing: 2026 infrastructure used to test a 2030 vision. The arc — envisioned, built toward, tested, found.
Finding: Real human reactions to deeply personal proactive AI. What testing reveals that speculation couldn't.

**What both paths share:**
- PKG/Council as the working foundation
- Augmentation-atrophy as the central tension
- IxD as the discipline — the contribution is designed experience, not architecture
- Positioning goal: "he thinks about the future" + "he actually builds" + "he has a philosophy"

**Strongest unanswered objection:**
"This is personal to you. What is the generalizable contribution? You built a system for yourself — what does anyone else take from this?"
The answer exists in principle (PKG > Host > Directive as a reusable architecture; governance model as transferable framework) but is not yet fully argued or demonstrated in writing.

---

## What's Built

### PKG (chris-pkg)
- Status: Production. ~11,000 lines, 27 markdown files.
- Architecture: 4-tier (Core > Positions > Context > Reference). Heimdall governance agent. Staging mechanism. Surface responsibility matrix.
- What it demonstrates: Knowledge-behavior separation. Tiered loading. Version-controlled self-representation. Governance in practice.
- Strength: Proven. Deployed. The foundation everything else draws from.

### Portfolio Twin (nextjs-boilerplate)
- Status: Deployed at ithinkitschris.com.
- What it demonstrates: PKG-driven conversational AI. First host built on the framework. Proves the architecture works in production.
- Strength: Real users, real conversations, live proof of concept.

### The Council (this repo)
- Status: Early. Architecture defined, knowledge loader implemented, agents deployed (Hermes, Athena).
- Council members: Hermes (Documentation Expert), Athena (Thesis Advisor)
- What it demonstrates: Multi-agent PKG reuse. Separation of knowledge from behavior from capability. Stateful expert pattern.
- What it does NOT yet demonstrate: Web layer. Interaction design. The designed experience layer that constitutes the thesis contribution.
- Strength: Architecture is sound. The infrastructure exists. The design work is ahead.

---

## Key Decisions Made

1. **Pivot from LifeOS to building** (2026-02-21) — LifeOS was genuine work but the spark shifted. Building reveals what speculation cannot. The pivot narrative IS the thesis arc. See `thesis/pivot-workshop.md`.

2. **PKG > Host > Directive as the architecture** — Knowledge stays in the PKG, behavior lives in directives, the host assembles them. Hard boundary between the two. This separation is the first architectural contribution.

3. **Hermes provides methodology, projects provide scope** — The expert creation pattern. Reuse without coupling. See `docs/patterns/project-brief.md`.

4. **Greek pantheon for Council agents, Norse for PKG** — Clean separation between the knowledge layer (Norse, primordial, Heimdall) and the operational layer (Greek, active, Council members). The mythology mirrors the actual architecture.

5. **Athena uses conversational voice + behavioral shaping** — Not essay voice as the PKG Host Responsibility Matrix suggests. Athena is a collaborative partner, not an essay writer. The advisory register is behavioral, not linguistic. PKG matrix should be updated through Heimdall.

6. **Stateful expert pattern** — Athena introduces a new Council pattern: experts that maintain curated state documents (thesis/state.md) as persistent memory across sessions. Different from stateless experts like Hermes.

7. **LifeOS as static design artifact: abandoned** (2026-02-24) — The execution (Figma screens, animated mockups, marketing website) was serving the design vision flex, not the thesis argument. Dropped. The LifeOS *argument* — augmentation-atrophy tension, the inseparability of benefit and danger in deeply personal AI — remains available to either path.

8. **PKG/Council confirmed as thesis vehicle** (2026-02-24) — The built infrastructure positions better for AI-native product design than static mockups. But the thesis contribution is not the infrastructure. It must be the designed interaction experience — which does not yet exist.

9. **Thesis positioning goal clarified** (2026-02-24) — Primary audience: design industry, hiring managers at Apple HI team and equivalent. Goal: "he thinks about the future" + "he designs AI-native products" + "he has a philosophy." The thesis must serve this positioning or it fails its own purpose.

---

## Open Questions

1. **Generalizability** — The strongest objection. What does anyone else take from a system Chris built for himself? The answer is the architecture and governance model, but this needs to be explicitly argued.

2. **Which path** — The fork between Path 1 (Council interaction design as thesis) and Path 2 (WoZ LifeOS prototyping as method) is the primary open question. They require different work, different timelines, different artifacts. This decision gates everything else.

3. **Process documentation** — How much is enough? The thesis format is "substantial built artifacts + process documentation." The process docs are currently sparse. When is there enough to constitute the deliverable?

4. **Thesis writing itself** — When does the building stop and the writing start? Or are they concurrent? What is the written form of this thesis?

5. **The Council's demonstrated capability** — Currently two experts. How many are needed to demonstrate "multi-agent augmentation"? What does the minimum viable Council look like for the thesis?

6. **Path 2 specific: which interactions to prototype** — If Path 2, which 2-3 LifeOS interaction modes are worth WoZ prototyping? Answers live in the existing LifeOS work (Domain-Mode-Intent, three-layer attention, proactive context-aware suggestions). Not yet identified.

---

## Arguments in Development

### PKG > Host > Directive as an architectural contribution
- Claim: Separating knowledge from behavior from capability enables reuse without coupling. Any new AI surface can draw from the same PKG without needing to duplicate or re-derive personal knowledge.
- Evidence so far: Portfolio twin and The Council both consume the PKG without modifying it. The architecture has been exercised.
- What's missing: A clear written articulation of why this separation matters — the principle, not just the practice.
- Strength: Strong. The architecture works.

### Governance model for machine-readable self-representation
- Claim: As PKG becomes more capable of representing you, the governance model that maintains your authorship over that representation becomes more critical. Heimdall staging, constitutional rules, and tunable proactivity are a designed governance response to this.
- Evidence so far: Heimdall exists and functions. Staging mechanism is implemented.
- What's missing: Mechanism detail. The principles are clear but the mechanisms need deeper documentation.
- Strength: Developing. The argument is sound but needs more concrete illustration.

### First-person design research as method
- Claim: Building the system for yourself and reflecting on what the building reveals is a legitimate and valuable research method. You learn things about augmentation and agency that speculation cannot surface.
- Evidence so far: The pivot workshop documents exactly this — LifeOS couldn't interrogate what it takes to build the knowledge layer, so we built it.
- What's missing: More reflection. The honest account of what building revealed. This is the "process documentation" deliverable.
- Strength: Strong in concept, needs more content.

---

## Timeline Reality

### Must complete (thesis is incomplete without these)
- Choose between Path 1 and Path 2 — this decision gates everything else
- Designed interaction experience (Council web layer OR WoZ LifeOS prototype, depending on path)
- Process documentation that constitutes the "honest account" deliverable
- Written thesis argument (not just structure — actual written prose)

### Should complete (strengthens the thesis significantly)
- Full documentation of the governance model's mechanisms
- Explicit argument for generalizability
- Athena sessions that produce a rich state document (the state document itself becomes evidence)

### Would be nice (enriches but not required)
- Reference tier of PKG populated with thesis chapters
- Council exposed as a deployable system others could fork
- Public-facing Athena ambassador surface

### At risk
- Path decision: every week without choosing is a week not building toward the thesis
- Written thesis: with eight weeks left and significant design work still to do, when does writing happen?
- Path 2 timeline: WoZ prototyping + user testing + hi-fi screens + video is ambitious in eight weeks. Scope must be ruthless.

---

## Athena's Developing Positions

*Positions appear here as they are earned through advising sessions — always marked with when they emerged and what evidence supports them. Chris reviews and can push back on any position. Positions are informed perspectives, not fixed conclusions.*

**Position 1: The design contribution is not the infrastructure.**
Emerged: 2026-02-24, second advising session.
Evidence: Chris could not answer "what does the Council do differently as a designed experience?" — because that layer hasn't been designed yet. The PKG architecture, Heimdall governance, and knowledge-behavior separation are impressive engineering. They are not, on their own, an IxD contribution. The thesis lives in what gets designed on top of them.
Confidence: High.

**Position 2: Path 2 has the stronger thesis structure.**
Emerged: 2026-02-24.
Evidence: Path 2 generates actual findings through user testing — real reactions to proactive personal AI. Path 1's finding must emerge purely from design decisions, which is harder to demonstrate and defend. Path 2 also serves the "thinks about the future" positioning more directly: the WoZ prototype bridges vision and reality in a way that is rare and credible.
Confidence: Developing. Chris has not chosen. This is a lean, not a conclusion. Push back if it doesn't feel right.

**Position 3: The fork may be false.**
Emerged: 2026-02-24.
Evidence: Path 1 (Council interaction design) and Path 2 (WoZ LifeOS testing) are not necessarily mutually exclusive. The Council's designed interaction layer could BE the WoZ prototype for LifeOS scenarios. Designing the Council with augmentation-without-atrophy as the explicit design question — then testing it against LifeOS scenarios — might collapse the fork into one thesis.
Confidence: Low. Speculative. Raise with Chris before assuming.
