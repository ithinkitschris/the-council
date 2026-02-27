# LifeOS Platform v2: Architecture Handoff

**Date:** 2026-02-26
**Authors:** Chris + Athena (fourth advising session)
**Purpose:** Re-architect lifeos from a world-building dashboard into a first-person design research instrument, integrated with the PKG under PKG > Host > Directive. The platform itself is a thesis artifact of equal weight to the LifeOS visual design system.

---

## The Shift

v1 was a speculative design workbench built around Marcus Chen, a synthetic user defined in 8 YAML files. It served its purpose: the world canon was established, the interaction frameworks were locked, scenarios were drafted.

v2 replaces Marcus with Chris. The platform becomes a simulation engine for first-person design research. Chris sits inside LifeOS scenarios powered by his own PKG, experiences them, and captures findings that become the thesis evidence.

**The platform is a thesis artifact.** The methodology (PKG-powered simulation, first-person testing, structured findings capture) is not supplementary to the visual design of LifeOS. It is co-equal. The thesis has two designed artifacts: the research platform that surfaces the tensions, and the LifeOS visual system that responds to them. The platform demonstrates the rigor. The visual design demonstrates the craft. Both are presented at the defense. Both must be designed with intention.

---

## Architecture: PKG > Host > Directive

The same framework as the Council, with the Directive layer serving a different purpose.

```
PKG (chris-pkg)              Same PKG. Symlinked in. ~11,000 lines of governed markdown.
    |                        Identity, thinking, values, voice, positions, context.
    v
Host (lifeos)       Reads PKG. Adds WORLD.md canon + simulation infrastructure.
    |                        Express backend, scenario engine, findings capture.
    v
Directive (per vignette)     Behavioral layer for the simulation, not an agent.
                             What situation to stage, what LifeOS behaviors to generate,
                             what tensions to surface, which simulation mode to run.
```

### What this means concretely

- **PKG** provides who the user is. The scenario engine draws on Chris's real identity, relationships, behaviors, values, and context to generate LifeOS interactions that feel personal, not generic. This is what makes first-person design research possible: the system knows you.

- **Host** provides how LifeOS works. WORLD.md is the locked canon: Domain-Mode-Intent, Center/Periphery/Silence, constitutional framework, device ecosystem. The Express backend serves the simulation. The dashboard is the research interface.

- **Directive** provides what to simulate. Each vignette file specifies the scenario setup, the LifeOS behaviors to stage, the tensions to surface, and the research questions. Vignettes are the equivalent of Council behavioral directives, but for scenarios rather than agents.

---

## PKG Integration

### Setup (mirrors the Council)

1. Use `fetch-pkg.js` pattern: symlink chris-pkg into `knowledge/pkg/` (gitignored)
2. Create `src/lib/knowledge.js` adapted from the Council's knowledge loader
3. Environment: `PKG_PATH` in `.env.local` for local dev

### Knowledge Loader

Adapt the Council's `assembleSystemPrompt()` for two simulation contexts:

```javascript
// Simulation prompt assembly
export function assembleSimulationPrompt({
  mode,           // 'immersive' or 'reflective'
  vignette,       // parsed vignette YAML
  worldCanon,     // WORLD.md content
  additionalContext = '',
}) {
  const sections = [];

  // 1. World canon (how LifeOS works)
  sections.push(worldCanon);

  // 2. PKG Core (who the user is)
  sections.push(loadPKGCore());

  // 3. PKG Personality (positions, context, behavioral patterns)
  sections.push(loadPKGPersonality());

  // 4. Simulation directive (what to simulate)
  sections.push(buildSimulationDirective(mode, vignette));

  // 5. Additional context (session-specific)
  if (additionalContext) sections.push(additionalContext);

  return sections.filter(Boolean).join('\n\n---\n\n');
}
```

### What replaces Marcus's YAML files

| Marcus (v1) | Chris's PKG (v2) | Notes |
|---|---|---|
| `identity.yaml` | `pkg/core/identity.md` + `pkg/context/life.md` | Prose, not structured fields |
| `relationships.yaml` | `pkg/context/interpersonal.md` + `pkg/context/personal-life.md` | No priority scores; richness instead |
| `behaviors.yaml` | `pkg/context/behavioral.md` + `pkg/core/working.md` | Patterns, not schedules |
| `health.yaml` | *(not in PKG)* | Simulate from vignette context |
| `calendar.yaml` | *(not in PKG)* | Simulate from vignette context |
| `constitution/values.yaml` | `pkg/core/values.md` + `pkg/positions/*.md` | Prose convictions, not ranked floats |
| `communications.yaml` | `pkg/context/interpersonal.md` | Conversation patterns |
| `digital-history.yaml` | `pkg/context/personal-life.md` | Technology relationship |

**Key difference:** Marcus had structured data (wake_time: "07:00", automation_preference: 0.75). The PKG is rich prose. The LLM doesn't need structured fields; it needs context. The PKG provides richer context than YAML ever could. Specific situational data (biometrics, calendar, weather) moves to vignette context.

---

## Two Simulation Modes

### Immersive (Wizard-of-Oz)

The LLM *is* LifeOS. It generates system outputs directly: morning briefs, mode activations, intent suggestions, notifications, triage decisions. Chris experiences them and reacts.

**System prompt structure:**
```
[WORLD.md — how LifeOS works, locked canon]
[PKG — who Chris is]
[Vignette context — time, location, sensor data, situation]

You are LifeOS, a personal operating system in 2030. You are interacting with
Chris. Generate your outputs as the system would present them: briefings,
notifications, mode transitions, intent suggestions, triage decisions.

Follow the world canon precisely. Use the PKG to personalize every interaction.
Present information according to the Center/Periphery/Silence model.

When Chris responds, continue the interaction naturally. If he resists a
suggestion, respect it. If he asks why something was triaged, explain using
constitutional reasoning. You are the system. Be the system.
```

**Use for:** Scenarios where the visceral "what does this feel like" matters. Morning briefing. Real-time recontextualization. Subway navigation. The moments where agency erosion is felt, not analyzed.

### Reflective (Facilitated)

The LLM narrates what LifeOS would do, then interviews Chris about his reactions. Facilitator, not performer.

**System prompt structure:**
```
[WORLD.md — how LifeOS works, locked canon]
[PKG — who Chris is]
[Vignette context — time, location, sensor data, situation]

You are a research facilitator helping Chris experience a LifeOS scenario.
Narrate what the system would do at each step, grounding every action in the
world canon and his PKG. After each significant system action, pause and ask:

- How does this land?
- What feels right? What feels off?
- Where do you feel agency? Where does it feel like the system decided for you?
- What would you want instead?

Surface the design tensions specified in the vignette. Do not resolve them.
Hold them open for Chris to sit with.
```

**Use for:** Scenarios where analytical depth matters. Post-conversation reflection. Preparing for a specific person. The moments where the *thinking about* the experience produces the finding.

---

## Vignette Format (v2)

Replaces the current scenario YAML. Each vignette is a complete simulation specification.

```yaml
id: morning-prioritization
title: "Morning Prioritization Briefing"
status: active
created_at: "2026-02-26"

simulation:
  mode: immersive  # or reflective
  creativity: balanced  # grounded | balanced | exploratory | provocative

setting:
  date: "Wednesday, October 16, 2030"
  time: "7:14 AM"
  location: "Chris's apartment, NYC"
  lifeos_mode: restore  # the LifeOS mode active at scenario start
  device: foldable-tablet  # primary device in this scenario

context:
  # Situational data the LLM needs (replaces Marcus's structured YAML)
  biometrics:
    sleep_duration: "6.2 hours (below 7.5h target)"
    sleep_quality: "0.68 (below average)"
    hrv: "38ms (below 45 average, elevated stress)"
    resting_hr: "65 bpm (slightly above baseline)"
  calendar:
    - "9:00 AM — Studio hours at SVA"
    - "2:00 PM — Thesis advisor meeting (Prof. TBD)"
    - "6:30 PM — Dinner with Emma (protected)"
  pending:
    - "Unread text from Emma, sent 11:47 PM last night"
    - "Thesis draft section due in 4 days"
    - "3 unread emails (2 newsletters, 1 from classmate about group project)"
  environment:
    weather: "52F, overcast, rain likely afternoon"
    commute: "L train, 25 min to SVA, no delays"

tensions_to_surface:
  - id: asking-paradox
    description: "The system has biometric data suggesting poor sleep and elevated stress. Does it tell Chris what it knows, or ask how he feels?"
  - id: priority-autonomy
    description: "The system suggests a priority order for the day based on deadlines and patterns. At what point does suggestion become decision?"
  - id: relationship-presence
    description: "Emma's unread text. The system knows dinner is tonight. How much does it contextualize the relationship vs. just showing the message?"

research_questions:
  - "Where does the morning briefing cross from helpful to presumptuous?"
  - "Does the system's knowledge of your biometrics change how you interpret its suggestions?"
  - "At what point does priority suggestion feel like a decision made for you?"

pkg_focus:
  # Which PKG domains are most relevant (for prompt optimization)
  - core/identity
  - core/values
  - context/life
  - context/behavioral
  - positions/technology  # for the augmentation-agency lens
```

---

## Findings Capture

### During Simulation: Real-Time Reactions

A panel alongside the simulation conversation. Chris types observations as they occur. Each entry is:

```json
{
  "id": "rxn_1709001234567",
  "timestamp": "2026-02-26T14:23:45Z",
  "vignette_id": "morning-prioritization",
  "simulation_turn": 3,
  "simulation_context": "LifeOS just suggested reordering my morning to prioritize thesis draft",
  "reaction": "This felt presumptuous. I know the draft is due but I wanted to handle Emma's text first. The system optimized for deadline, I would have optimized for relationship.",
  "tags": ["agency-eroded", "relationship-presence", "priority-autonomy"],
  "tension_id": "priority-autonomy"
}
```

**Tags vocabulary** (extensible):
- `agency-held` — felt in control, system supported without overriding
- `agency-eroded` — felt like the system decided for me
- `surprising` — didn't expect this behavior
- `uncomfortable` — the interaction felt wrong in a way worth examining
- `delightful` — the interaction felt genuinely helpful
- `design-tension` — surfaced a tension worth designing for
- `augmentation-landed` — the system genuinely made me more capable
- `substitution-crept` — the system started replacing my thinking

### After Simulation: Structured Reflection

The platform generates reflection prompts based on what happened. The LLM reads the simulation transcript + real-time reactions and produces 3-5 targeted questions.

Example (generated, not hardcoded):
> "You flagged the priority reordering as 'agency-eroded' and noted you would have handled Emma's text first. The system optimized for your thesis deadline. Is the issue that it reordered at all, or that it didn't account for your relationship values? What would a system that understood both look like?"

Reflections are stored alongside the simulation transcript and reactions. Together, these three layers (transcript, reactions, reflections) form the evidence base for thesis findings.

---

## What Stays, What Goes, What Gets Built

### Stays (preserve and adapt)
- `WORLD.md` — locked canon, untouched
- `backend/api/server.js` — Express skeleton
- `backend/api/routes/llm.js` — scenario generation endpoint (rewrite prompt assembly)
- `backend/config/llm-config.yaml` — model config (update models)
- Streaming SSE infrastructure — already built for digital twin, reuse for simulation
- Prompt caching pattern — already implemented, critical for cost efficiency
- Creativity modes — grounded/balanced/exploratory/provocative (useful for simulation)
- `backend/data/scenarios/` — format evolves to vignettes but the CRUD pattern stays
- `backend/data/world/` — world YAML files stay (domains, devices, modes, etc.)

### Goes (remove)
- `backend/data/knowledge-graph/` — Marcus Chen's entire YAML PKG
- `backend/data/constitution/` — Marcus's constitutional values (replaced by PKG)
- `backend/api/routes/context.js` — Marcus's PKG endpoints (replaced by knowledge loader)
- `prototypes/kg-browser/` — Marcus KG explorer
- `prototypes/kg-chat/` — Marcus KG chat
- `prototypes/knowledge-graph/` — Marcus graph visualization
- `prototypes/timeline/` — Marcus timeline browser
- `prototypes/digital-twin/` — Chris's twin (the real twin lives at ithinkitschris.com)
- `docs/pkg-chris.md`, `docs/pkg-chris-full.md` — replaced by actual PKG symlink
- `dashboard/src/app/pkg/` — Marcus PKG viewer page
- `dashboard/src/app/timeline/` — Marcus timeline page
- `dashboard/src/app/claude-history/` — conversation history browser (superseded by findings)

### Gets Built (new)
1. **PKG integration layer** — `fetch-pkg.js`, `src/lib/knowledge.js`, symlink setup
2. **Simulation engine** — new `/api/simulation` routes for immersive and reflective modes
3. **Vignette management** — CRUD for v2 vignette format, stored in `data/vignettes/`
4. **Findings capture** — real-time reaction API + post-session reflection generator
5. **Simulation UI** — the core research interface: run a vignette, experience it, capture reactions
6. **Findings browser** — review findings by vignette, by tension, by tag, across sessions
7. **CLAUDE.md v2** — rewritten for the new platform purpose and PKG integration

---

## Dashboard: Three Roles, One Artifact

The dashboard is not just a tool. It is a designed artifact of the thesis, presented alongside the LifeOS visual system at the defense. It serves three roles:

1. **Research instrument** — run simulations, capture findings, generate reflections
2. **World reference** — the canon, the frameworks, the mechanics of LifeOS (what v1 already does well)
3. **Knowledge transparency** — what the PKG contains, what's loaded, how it feeds each simulation

The third role matters for the thesis argument. LifeOS should let the user see what the system knows about them. The dashboard practicing that same principle, showing what PKG content powers the simulation, is the methodology embodying the thesis values. Not a feature. Coherence.

### Design Approach: Evolve Through Use

The dashboard starts functional and improves through each simulation session. Each run reveals what the interface needs to be. The design evolves from genuine research need, not speculative UI planning.

This evolution is itself documentable process: the research instrument being refined through the research it conducts. Thesis evidence of iterative design methodology.

Start with clean, minimal UI. Let the simulation sessions teach you what the dashboard needs to become.

### Information Architecture

**Simulate**
- Simulation Runner — select a vignette, run it (immersive or reflective), capture reactions in real-time
- Post-Session Reflection — structured reflection prompts after each run

**Vignettes**
- Vignette Library — browse, create, edit vignettes

**Findings**
- By Vignette — all findings from a specific scenario
- By Tension — findings grouped by design tension (across vignettes)
- By Tag — findings filtered by reaction tags
- Session Log — chronological view of all simulation runs and findings

**World**
- World Canon — WORLD.md viewer and key frameworks reference
- Life Domains — the seven domain definitions
- Mode-Intent Framework — reference visualization
- Device Ecosystem — AR glasses + foldable tablet reference

**Knowledge**
- PKG Overview — what's loaded, tier structure, file summary
- PKG Content — browseable view of what the system knows (identity, values, positions, context)
- Simulation Context — for each run, what PKG content + vignette context was assembled into the prompt

### Simulation Runner

Two-panel layout:
- **Left: Simulation conversation.** The LifeOS interaction (immersive) or the facilitated narration (reflective). Streaming text, turn by turn.
- **Right: Reaction capture.** Text input for observations. Tag selector. Linked to current simulation turn. Previous reactions visible above as a running log.

After the simulation ends, the right panel transitions to the structured reflection prompts.

---

## Implementation Sequence

### Phase 1: Foundation (do first)
1. Create v2 branch
2. Strip Marcus: remove his PKG files, constitution, Marcus-specific routes and dashboard pages
3. Set up PKG symlink and knowledge loader
4. Verify PKG loads correctly with a simple status endpoint

### Phase 2: Simulation Engine
5. Build vignette format and CRUD routes
6. Build simulation prompt assembly (immersive + reflective)
7. Build `/api/simulation/run` endpoint with SSE streaming
8. Port one existing scenario (morning wakeup) to v2 vignette format as proof of concept

### Phase 3: Research Interface
9. Build Simulation Runner UI (two-panel: conversation + reactions)
10. Build real-time reaction capture API and UI
11. Build post-session reflection generator
12. Build Findings browser (by vignette, by tension, by tag)

### Phase 4: Polish and Vignette Design
13. Design the thesis vignettes (1-2, fully specified)
14. Run simulation sessions, capture findings
15. Update CLAUDE.md for v2

---

## CLAUDE.md v2 Outline

The current CLAUDE.md is built around Marcus and the world-building dashboard. The v2 CLAUDE.md should establish:

1. **What this platform is** — a first-person design research instrument for the LifeOS thesis
2. **PKG > Host > Directive** — the architectural framework, same as the Council
3. **Session initialization** — load WORLD.md + PKG before any substantive work
4. **Two simulation modes** — immersive (WoZ) and reflective (facilitated)
5. **Vignette format** — the specification for scenario files
6. **Working principles** — scope discipline, findings over infrastructure, the platform is the stage not the performance

---

## Resolved Questions

1. **Vignette chaining** — No requirement for chaining vignettes into a continuous day. Each vignette is self-contained and reproducible. Outside of scope.

2. **Vignette context data** — Context is specified per-vignette in the YAML. No persistent simulation state layer. Each vignette carries its own situational data (biometrics, calendar, weather, pending items).

3. **Dashboard purpose** — The dashboard is both a research tool and a design artifact. It serves three roles: research instrument, world reference, and knowledge transparency layer. Its design evolves through use, not upfront planning.

4. **Methodology weight** — The simulation methodology is co-equal with the LifeOS visual design in thesis contribution. Both are designed artifacts presented at the defense.

## Open Questions for Implementation

1. **Relationship data** — The PKG has interpersonal patterns but not structured relationship definitions (priority tiers, notification rules). For simulation, should vignettes specify relevant relationships inline, or should there be a simulation-specific relationships file that translates PKG interpersonal patterns into LifeOS-legible relationship data?

2. **Dashboard deployment** — v1 mirrors `backend/data/` to `dashboard/data/` for Vercel deployment. Does v2 need this? The research instrument could be local-only. But if the dashboard is a thesis artifact, deploying it for the defense committee to access could be valuable.

3. **Findings export** — The findings capture system stores reactions and reflections as JSON. For the written thesis, these need to be synthesized into prose arguments. Should the platform have an export/summary view that helps bridge raw findings to thesis writing?

---

## Key Decisions Log

| Decision | Date | Rationale |
|---|---|---|
| Path B: Native PKG integration, no adapter layer | 2026-02-26 | PKG prose is richer than YAML ever could be. The LLM needs context, not structured fields. |
| Hybrid simulation: immersive + reflective modes | 2026-02-26 | Different research questions need different modes. Immersive for visceral experience, reflective for analytical depth. |
| Findings capture: real-time reactions + post-session reflection | 2026-02-26 | The transcript alone isn't evidence. Documented reactions to the transcript are. |
| Dashboard as thesis artifact | 2026-02-26 | The methodology platform has equal weight to the LifeOS visual design. Both are designed, both are presented. |
| Evolve dashboard design through use | 2026-02-26 | No front-loaded design sprint. Each simulation session reveals what the interface needs. The evolution is itself process documentation. |
| No vignette chaining | 2026-02-26 | Outside of scope. Each vignette is self-contained. |

---

*This document is the handoff artifact. It lives in `the-council/docs/process/` because the architectural decision was made here, with Athena. The implementation happens in `lifeos` on the v2 branch.*
