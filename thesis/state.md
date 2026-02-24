# Thesis State

Last updated: 2026-02-24
Updated by: Chris + Athena (initial population)

---

## Deadline

MFA thesis defense: approximately late April 2026.
Time remaining: roughly 8-9 weeks as of this document's creation.

---

## Current Thesis Argument

**Core claim:** Current AI augmentation is shallow because it is context-poor. Investing in building a structured, governed, version-controlled Personal Knowledge Graph — and deploying it across multiple AI surfaces — reveals what augmentation looks like when it goes deep. The act of building this system, and what it surfaces about knowledge, governance, and agency, is the thesis.

**Supporting evidence:**
- The PKG exists and works: ~11,000 lines, 4-tier architecture, Heimdall governance, deployed in production at ithinkitschris.com
- The portfolio twin proves PKG-driven conversational AI at real scale
- The Council demonstrates multi-agent PKG reuse with separation of knowledge from behavior
- The pivot from LifeOS speculation to building is itself evidence: building surfaces tensions that speculation cannot

**Known gaps:**
- The Council's web layer does not yet exist — the design craft contribution is undemonstrated
- Process documentation is sparse; the "honest account" deliverable needs more
- The governance model is articulated as principles but its mechanisms need more concrete demonstration beyond Heimdall staging

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
- Status: Early. Architecture defined, knowledge loader implemented, one expert deployed (Hermes).
- Council members: Hermes (Documentation Expert), Athena (Thesis Advisor — created 2026-02-24)
- What it demonstrates: Multi-agent PKG reuse. Separation of knowledge from behavior from capability. Stateful expert pattern (new with Athena).
- What it does NOT yet demonstrate: Web layer. Multiple experts in practice. Interaction design.
- Strength: Architecture is sound. Needs to be built out.

---

## Key Decisions Made

1. **Pivot from LifeOS to building** (2026-02-21) — LifeOS was genuine work but the spark shifted. Building reveals what speculation cannot. The pivot narrative IS the thesis arc. See `thesis/pivot-workshop.md`.

2. **PKG > Host > Directive as the architecture** — Knowledge stays in the PKG, behavior lives in directives, the host assembles them. Hard boundary between the two. This separation is the first architectural contribution.

3. **Hermes provides methodology, projects provide scope** — The expert creation pattern. Reuse without coupling. See `docs/patterns/project-brief.md`.

4. **Greek pantheon for Council agents, Norse for PKG** — Clean separation between the knowledge layer (Norse, primordial, Heimdall) and the operational layer (Greek, active, Council members). The mythology mirrors the actual architecture.

5. **Athena uses conversational voice + behavioral shaping** — Not essay voice as the PKG Host Responsibility Matrix suggests. Athena is a collaborative partner, not an essay writer. The advisory register is behavioral, not linguistic. PKG matrix should be updated through Heimdall.

6. **Stateful expert pattern** — Athena introduces a new Council pattern: experts that maintain curated state documents (thesis/state.md) as persistent memory across sessions. Different from stateless experts like Hermes.

---

## Open Questions

1. **Generalizability** — The strongest objection. What does anyone else take from a system Chris built for himself? The answer is the architecture and governance model, but this needs to be explicitly argued.

2. **Web layer scope** — The Council needs a web interface that demonstrates design craft. How ambitious? What interaction patterns does it explore? This decision shapes how much time remains for everything else.

3. **Process documentation** — How much is enough? The thesis format is "substantial built artifacts + process documentation." The process docs are currently sparse. When is there enough to constitute the deliverable?

4. **Thesis writing itself** — When does the building stop and the writing start? Or are they concurrent? What is the written form of this thesis?

5. **The Council's demonstrated capability** — Currently two experts. How many are needed to demonstrate "multi-agent augmentation"? What does the minimum viable Council look like for the thesis?

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
- What's missing: Mechanism detail. The principles are clear but the mechanisms need deeper documentation. The "constitutional rules derived from user-articulated values" is mentioned but not fully demonstrated.
- Strength: Developing. The argument is sound but needs more concrete illustration.

### First-person design research as method
- Claim: Building the system for yourself and reflecting on what the building reveals is a legitimate and valuable research method. You learn things about augmentation and agency that speculation cannot surface.
- Evidence so far: The pivot workshop documents exactly this — LifeOS couldn't interrogate what it takes to build the knowledge layer, so we built it.
- What's missing: More reflection. The honest account of what building revealed. This is the "process documentation" deliverable.
- Strength: Strong in concept, needs more content.

---

## Timeline Reality

### Must complete (thesis is incomplete without these)
- Council web layer with genuine design craft (interaction design, visual design, information architecture)
- Multiple Council experts demonstrating multi-agent capability
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
- Web layer: this is both the most design-craft-demonstrating deliverable AND the most time-consuming. Time allocation needs to be decided.
- Written thesis: with two months left and significant building still to do, when does writing happen?

---

## Athena's Developing Positions

*This section starts empty. Positions appear here as they are earned through advising sessions — always marked with when they emerged and what evidence supports them. Chris reviews and can push back on any position. Positions are informed perspectives, not fixed conclusions.*

*(No positions yet. This is Athena's first day.)*
