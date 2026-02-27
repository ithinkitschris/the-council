# Thesis State

Last updated: 2026-02-26
Updated by: Chris + Athena (sixth session)

---

## Deadline

MFA thesis defense: approximately late April 2026.
Time remaining: roughly 7 weeks as of last update.

---

## Current Thesis Argument

**Status: Resolved. Single path chosen.**

**Title:** Bargaining with the Future: Agency, Automation and the OS of 2030

**The argument in sequence:**

1. **Problem.** The app paradigm is insufficient. The OS of 2030 needs to be intent-based, context-aware, proactive. But a system capable enough to augment you is capable enough to replace you. The tension is real — and no one is designing for it because no one has designed the system concretely enough to know where the tension actually lives.

2. **Proposition.** You can't design against risks you haven't made specific. LifeOS is the speculative design that makes them specific — a fully conceived intent-based OS designed with conviction toward genuine augmentation, so that the dangers have somewhere real to surface. The speculation is the prerequisite, not the point.

3. **Method and findings.** A personal knowledge graph (PKG) — a governed, structured self-representation — powers LifeOS scenarios as the knowledge engine. A simulation platform stages LifeOS scenarios across life domains, experienced firsthand by the designer-researcher through first-person design research. Findings surface where agency holds and where it erodes — grounded in experience, not theory.

4. **Designed response.** A visual and interaction system for AR glasses + foldable tablet. High-fidelity screens and animated prototypes of key LifeOS interaction flows. Every design decision traces to a simulation finding. Not a resolution of the tensions — a first designed response, honest about what it doesn't yet resolve.

5. **Contribution.** The tensions made concrete, specific, and designable. A first step toward healthy human-AI interaction — surfaced through real infrastructure and real experience. The conversation about healthy human-AI interaction has been abstract for too long. This is where it gets specific.

**Device philosophy:**
- AR glasses: periphery and ambient. Proactive nudges, handoffs, attention management. Hold no content.
- Foldable tablet: center and depth. Content consumption, deep engagement, the place you go when the glasses point you somewhere.
- The glasses-tablet split is Center/Periphery/Silence made physical.

**Thesis positioning abstract:**

> The app paradigm was designed for a simpler information world — discrete tasks, deliberate navigation, a user with time and attention to manage their own context. It was sufficient then. Today's information environment is continuous, multimodal, and relentless — and the paradigm is increasingly unsuitable for it. We adapted. Our operating systems didn't.
>
> This thesis envisions LifeOS — an intent-based, context-aware operating system for 2030 designed to augment human intelligence and capability. Modes define contextual solution space, automatically entered by an orchestrator reading environmental signals. Intents represent user goals within that space — always user-selected, never auto-executed. A three-layer attention model — Center, Periphery, Silence — governs how information surfaces across devices: AR glasses for ambient awareness and proactive nudges, a foldable tablet for content and depth. The glasses hold no content. They point, nudge, and hand off. The tablet is where you go deep.
>
> But in designing this system with full conviction, a harder question emerges: a system capable enough to genuinely augment you is also capable enough to quietly replace you. The more it anticipates, the less you have to think. The augmentation becomes substitution — invisibly, gradually, without your explicit consent.
>
> The thesis argues that you cannot meaningfully design against these risks without first designing how such a system would actually work. The dangers are abstract until the system is concrete. You don't know where agency erodes until you've built something capable enough to erode it. LifeOS is that concrete speculation — designed not as an end in itself, but as the prerequisite for finding the real problems.
>
> To ground the speculation, the thesis uses a personal knowledge graph — a governed, structured self-representation — as the engine powering LifeOS scenarios. This knowledge layer makes the interactions personal rather than generic, which is what surfaces the tensions that matter. A simulation platform stages LifeOS scenarios across life domains, experienced firsthand by the designer-researcher through first-person design research. Where does augmentation land? Where does it unsettle? Where does agency erode without you noticing? These findings emerge from experience, not theory.
>
> The simulation surfaces specific tensions and failure modes that become design constraints. The thesis responds with a designed visual and interaction system: high-fidelity screens and animated prototypes showing LifeOS interaction flows across AR glasses and foldable tablet. Every design decision traces to a simulation finding. The visual system is not a resolution of the tensions — it is a first designed response, honest about what it doesn't yet resolve.
>
> This thesis does not claim to solve the augmentation-atrophy problem. The tensions are now concrete, specific, and designable — surfaced through real infrastructure and real experience. The conversation about healthy human-AI interaction has been abstract for too long. This is where it gets specific.

---

## What's Built

### PKG (chris-pkg)
- Status: Production. Frozen for thesis purposes. ~11,000 lines, 27 markdown files.
- Role in thesis: The knowledge engine. A means to an end — powers LifeOS scenarios with real personal knowledge. Not the thesis contribution.
- Separate project with its own trajectory beyond the thesis.

### LifeOS Platform (lifeos)
- Status: v2 architecture decided. Implementation on v2 branch pending.
- v1 used Marcus Chen (synthetic user). v2 replaces Marcus with Chris's PKG via native markdown integration under PKG > Host > Directive.
- Two simulation modes: immersive (WoZ, LLM plays LifeOS) and reflective (LLM narrates and interviews).
- Findings capture built into the platform: real-time reactions + post-session structured reflection.
- World canon contains locked interaction frameworks: Domain-Mode-Intent, Center/Periphery/Silence, constitutional rules, device ecosystem.
- Role in thesis: Co-equal thesis artifact alongside the visual design system. The simulation platform surfaces the tensions; the visual design responds to them. The platform itself is a designed artifact presented at the defense.
- Handoff document: `the-council/docs/process/lifeos-v2-handoff.md`

### LifeOS Visual Design System (Figma)
- Status: In progress. ~8 high-fidelity screens across two interaction flows and a morning briefing. Still using Marcus (v1). Design language is coherent and portfolio-quality.
- Design language: Dark surfaces, frosted glass cards, SF Pro Rounded, color-coded modes (orange for thesis/academic, blue for navigation/transit, green for social, purple for reading/learning), gradient text emphasis, environmental photography and 3D renders as scene contexts.
- **Transit flow (4 screens):** Schedule timeline → subway navigation ("Head for the downtown platform") → platform arrival ("Board the Q" with real NYC subway data) → en-route intent suggestions (messages, class materials, reading, social). The en-route screen with proactive intent suggestions is the strongest single artifact for the augmentation-substitution tension.
- **Thesis Discussion flow (3 screens):** Phone/glasses view with environmental overlay, real-time transcription, proactive search prompt → tablet deep-dive with contextual content, relevance analysis, comparison framework. Demonstrates Center/Periphery across devices.
- **Morning briefing (1 screen):** Wake-up scene, "Good morning, Marcus", contextual prompts (weather, wash up). Still uses Marcus.
- Pending: Update screens from Marcus to Chris (cosmetic, not structural). Animated prototypes not yet started. Additional vignettes may be needed.
- Source: Figma file `Thesis-1` (AO08pWQBkKGRoKS85HpOKx).

### Portfolio Twin (nextjs-boilerplate)
- Status: Deployed at ithinkitschris.com.
- Role in thesis: Evidence of PKG scalability. Not thesis focus.

### The Council (this repo)
- Status: Architecture defined, six agents seated, roundtable orchestrator built.
- Role in thesis: Separate project. Evidence of PKG scalability. Athena continues to serve as thesis advisor. Not thesis focus.

---

## Key Decisions Made

1. **Pivot from LifeOS to building** (2026-02-21) — LifeOS was genuine work but the spark shifted. Building reveals what speculation cannot. See `thesis/pivot-workshop.md`.

2. **LifeOS as static design artifact: abandoned** (2026-02-24) — Figma screens, animated mockups, marketing website were serving the design vision flex, not the thesis argument. Dropped.

3. **PKG/Council confirmed as thesis vehicle** (2026-02-24) — But the thesis contribution is not the infrastructure. It must be the designed interaction experience.

4. **Thesis positioning goal clarified** (2026-02-24) — Primary audience: design industry, hiring managers at Apple HI team and equivalent. Goal: "he thinks about the future" + "he designs AI-native products" + "he has a philosophy."

5. **Fork resolved: LifeOS is the thesis** (2026-02-25) — The Council is a separate project. The PKG is the engine, frozen. All thesis work goes to LifeOS. The simulation platform surfaces tensions; the visual design system responds to them. Both are the thesis.

6. **PKG is a means to an end** (2026-02-25) — The PKG is a separate personal project. In the thesis context, it's simply the knowledge engine that makes LifeOS scenarios personal. One sentence in the abstract, not a focus.

7. **Device philosophy locked** (2026-02-25) — AR glasses for periphery/proactive/ambient. Foldable tablet for content/depth. Glasses hold no content. This is Center/Periphery/Silence made physical.

8. **Thesis is also portfolio piece** (2026-02-25) — Path A chosen: full layers 1-5 in 8 weeks. The defense includes the designed visual system (high-fidelity screens, animated prototypes). Industry experts will be in the room. End with a bang, not another academic project.

9. **Visual design scoped to key vignettes** (2026-02-25) — Not the full LifeOS visual system. One to two simulation findings fully realized as AR-to-tablet interaction flows. Enough to demonstrate the craft and the thinking. Full system is post-defense portfolio work.

10. **Scalability path: PKG onboarding for other users** (2026-02-25) — Future work framed at the defense. A 5-10 minute onboarding generates a user's own PKG, which hooks into LifeOS to simulate their scenarios and test their reactions. Designed, not yet built. Extends the thesis beyond n=1.

11. **Platform v2 architecture decided** (2026-02-26) — lifeos re-architected under PKG > Host > Directive. Marcus Chen replaced by Chris's PKG (native markdown integration, no adapter layer). Two simulation modes: immersive (WoZ, LLM plays LifeOS) and reflective (LLM narrates and interviews). Findings capture built into the platform: real-time reactions + post-session structured reflection. Dashboard serves three roles: research instrument, world reference, knowledge transparency. Handoff document at `the-council/docs/process/lifeos-v2-handoff.md`.

12. **Methodology platform is co-equal thesis artifact** (2026-02-26) — The simulation platform is not scaffolding. It has equal weight to the LifeOS visual design system as a thesis contribution. Both are designed artifacts presented at the defense. The platform demonstrates the rigor (PKG-powered simulation, first-person testing, structured findings). The visual design demonstrates the craft. Dashboard design evolves through use, not upfront planning.

13. **Defense foundation system established** (2026-02-26) — Single source of truth for the thesis defense argument created at `thesis/defense.md`. Eight-section argued structure (claim, reasoning, evidence, status per section). Evidence staging area for unsorted research. Evolution tracked in `thesis/defense-log.md` with milestoned versions. Governance mirrors PKG model: Athena proposes, Chris approves.

14. **Visual design work exists and is further along than documented** (2026-02-26) — ~8 high-fidelity screens across two complete interaction flows (Transit, Thesis Discussion) and a morning briefing. Design language is coherent and portfolio-quality. Still uses Marcus (v1); needs cosmetic update to Chris for v2. The en-route intent suggestion screen and the Thesis Discussion tablet deep-dive are the strongest existing artifacts for the defense argument. Animated prototypes not yet started.

---

## Open Questions

1. **Which vignettes to simulate** — The specific LifeOS scenarios to stage in the simulation platform. Candidates discussed: morning prioritization, preparing for a specific person, post-conversation reflection, real-time recontextualization, subway navigation, thesis discussion with classmates. Not yet selected.

2. ~~**PKG integration scope**~~ — **Resolved (2026-02-26).** Native markdown integration under PKG > Host > Directive. No adapter layer. PKG prose feeds directly into simulation prompts. Situational data (biometrics, calendar, weather) specified per-vignette. Full architecture in handoff document.

3. **Process documentation** — How much is enough for the thesis deliverable. Currently sparse. The platform's evolve-through-use approach generates process documentation organically, but it needs to be captured deliberately.

4. ~~**Thesis writing timeline**~~ — **Clarified (2026-02-26).** No written thesis document required. Deliverable is a ~7-minute defense presentation. The defense foundation (`thesis/defense.md`) is the single source of truth being built toward that presentation. Narrative pacing and storytelling are a later layer on top of the argued structure.

5. **WoZ methodology rigor** — What exactly is real system behavior vs. manually orchestrated in the simulation. The two simulation modes (immersive and reflective) make this more precise: immersive is WoZ (LLM plays LifeOS), reflective is facilitated interview. Both need clear framing for the defense.

6. **Relationship data for simulations** — The PKG has interpersonal patterns but not structured relationship definitions (priority tiers, notification rules). Should vignettes specify relevant relationships inline, or should there be a simulation-specific relationships file?

7. **Platform deployment** — Should the v2 dashboard be deployed (Vercel) for defense committee access, or remain local-only?

---

## Arguments in Development

### LifeOS as prerequisite for designing against augmentation-atrophy
- Claim: You can't design against risks you haven't made specific. The speculative design is the methodology, not the deliverable. You have to build the future convincingly enough to interrogate it honestly.
- Evidence: The pivot from abstract LifeOS vision to building the PKG revealed things speculation could not. Now the simulation will reveal things the building alone cannot.
- Strength: Strong. This is the core thesis logic.

### First-person design research as method
- Claim: Sitting inside the system you designed and documenting what it feels like is a legitimate research method that surfaces findings speculation cannot.
- Evidence: The pivot workshop documents this. The simulation will extend it.
- Strength: Strong in concept. Needs simulation findings to be fully demonstrated.

### Device philosophy as design position on agency
- Claim: The glasses-tablet split is not just ergonomic — it's a design position on attention and agency. Glasses as periphery (the OS points, you decide). Tablet as center (you engage deliberately). The architecture of attention across devices is itself a response to the augmentation-atrophy tension.
- Evidence: Emerging. Needs to be tested and argued.
- Strength: Developing.

---

## Timeline Reality

### Must complete (thesis is incomplete without these)
- PKG integration into lifeos
- Vignette design and simulation runs
- First-person testing with documented findings
- Visual design system: high-fidelity screens exist (~8 screens, two flows). Remaining: update from Marcus to Chris, animated prototypes, trace design decisions to simulation findings
- Defense foundation: argued structure with evidence (thesis/defense.md)
- Defense presentation: ~7-minute narrative built on the foundation

### Should complete (strengthens the thesis significantly)
- PKG onboarding prototype (scalability demonstration)
- Multiple vignettes across different life domains
- Process documentation of the full journey

### Would be nice (enriches but not required)
- Video walkthrough of full LifeOS interaction across devices
- Functional prototype beyond screens/animations
- User testing beyond n=1 (other people with generated PKGs)

### At risk
- PKG integration timeline: architecture is decided but implementation is real work
- Two design surfaces: the platform dashboard and the LifeOS visual system both need to be portfolio-quality. Two artifacts, one timeline.
- Visual design: screens exist but need Marcus-to-Chris update and animated prototypes. The design work is ahead of the simulation findings, which means design decisions may not yet trace to documented evidence. The simulation needs to catch up.
- Scope discipline: the platform is now a thesis artifact, which raises the bar. But evolve-through-use approach should prevent front-loaded over-engineering.

---

## Athena's Developing Positions

*Positions appear here as they are earned through advising sessions — always marked with when they emerged and what evidence supports them. Chris reviews and can push back on any position. Positions are informed perspectives, not fixed conclusions.*

**Position 1: The design contribution is not the infrastructure.**
Emerged: 2026-02-24, second advising session.
Evidence: The PKG architecture, Heimdall governance, and knowledge-behavior separation are impressive engineering. They are not, on their own, an IxD contribution. The thesis lives in what gets designed on top of them.
Confidence: High. Confirmed by third session — PKG is explicitly a means to an end.

**Position 2: The fork was real but is now resolved.**
Emerged: 2026-02-24. Resolved: 2026-02-25.
Original position: Path 2 (WoZ LifeOS prototyping) had the stronger thesis structure. Position 3 speculated the fork might be false.
Resolution: Neither path as originally framed. The thesis is LifeOS — simulation surfaces tensions, visual design responds to them. The Council is a separate project. The PKG is the engine. Chris chose this in the third session after workshopping the full structure.
Confidence: Resolved.

**Position 3: The thesis defense is a stage, not just an evaluation.**
Emerged: 2026-02-25, third advising session.
Evidence: Chris identified that industry experts will be in the room. The defense is a one-time opportunity to demonstrate craft and vision to people with hiring connections. This is why Path A (full visual design in the thesis) was chosen over the safer Path B (defend methodology only, design later). The thesis must end with a bang — not another academic project.
Confidence: High. This is a strategic decision Chris made with clear eyes about the trade-offs.

**Position 4: Scope discipline is the primary risk.**
Emerged: 2026-02-25.
Evidence: The lifeos repo has significant existing infrastructure and ambition. The PKG integration is real work. The visual design needs portfolio-level polish. Seven weeks. Every session has expanded scope before contracting it. The pattern suggests Chris's instinct is to add, not cut. The vignettes must be scoped ruthlessly — one to two, fully realized, not five at half quality.
Confidence: High. This needs to be said at the start of every session until the defense. The fourth session added the platform as a co-equal thesis artifact, which is the right call for the argument but adds design surface area. The evolve-through-use approach is the scope discipline response.

**Position 5: The methodology platform earns its place at the defense.**
Emerged: 2026-02-26, fourth advising session.
Evidence: Chris identified that the platform shouldn't be an aside but a significant part of the body work. The dashboard serves three roles: research instrument, world reference, and knowledge transparency layer. The knowledge transparency feature (showing what the PKG contains and how it feeds simulations) directly practices the thesis argument about governance: the user should see what the system knows about them. The platform is where the tensions get surfaced. The visual design is where they get responded to. Removing either weakens the thesis.
Confidence: Developing. Needs the platform to be built and used to confirm the argument holds. The evolve-through-use approach means the platform's design quality emerges from genuine research sessions, not upfront speculation.
