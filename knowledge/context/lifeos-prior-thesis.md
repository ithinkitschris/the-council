# LifeOS — Prior Thesis Context

> **Purpose:** Full context on LifeOS, Chris's prior thesis direction, imported from `lifeos` so The Council has complete awareness of where the thesis has been.
>
> **Source repo:** `/Users/chris/Documents/GitHub/lifeos/`
>
> **Status:** Pivoted away from on 2026-02-21. LifeOS concepts carry forward into The Council's thesis framing. Not abandoned — folded in.

---

## 1. What LifeOS Was

**Title:** Bargaining with the Future: Agency, Automation and the OS of 2030

**One-line:** A speculative design thesis envisioning an intent-based, context-aware operating system for 2030, exploring how AI augmentation can preserve human agency.

**Setting:** 2030. Near-future. Not science fiction. Believable extrapolation.

**Framing:** This was a portfolio piece for the design industry, not an academic research paper. Executed with full creative conviction. Apple product marketing as the design reference. The committee was irrelevant to creative decisions.

---

## 2. The Core Thesis

**Opening Statement:**
> The app paradigm was designed for a simpler information world — discrete tasks, deliberate navigation, a user with time and attention to manage their own context. It was sufficient then. Today's information environment is continuous, multimodal, and relentless — and the paradigm is increasingly unsuitable for it. We adapted. Our operating systems didn't.
>
> This thesis envisions LifeOS — an intent-based, context-aware operating system for 2030 designed to augment human intelligence and capability by closing the gap between context and assistance. But in designing it, a harder question emerges: a system capable enough to genuinely augment you is also capable enough to quietly replace you.

**Goal:** Augment human intelligence and capability — extend what people can do and think, not replace them.

**Problem Statement:** The app paradigm (introduced 2007) is insufficient for today's information environment. It's not broken — it can't keep up. AI and LLMs are augmenting us, but the current paradigm still requires the user to initiate, prompt, and manage. The burden of orchestration remains human.

**The Central Paradox:** A system capable enough to genuinely augment you is also capable enough to quietly replace you. You stop navigating because the system navigates for you. You stop deciding because the system anticipates your decisions. The augmentation becomes substitution — invisibly, gradually, without your explicit consent.

**The Thesis Does Not Resolve This Tension.** It holds it honestly. Convenience and control are not zero-sum — that dichotomy is a design failure — but the tension does not disappear with good design.

---

## 3. Chris's Own Words on the Thesis

From the positioning transcript (Feb 2026):

- "It is about envisioning how the user experience would be for a context-aware, multimodal intent-based operating system that shifts away from the app paradigm."
- "If this could be pushed forward into a more 'proactive' and 'context-aware' paradigm where AI proactively provides information and assists us based on context and intent instead of having us to prompt them, this is a significant step forward."
- "This is for the design industry as a portfolio piece, 100%. Do not consider the SVA committee one bit."
- On the dystopia tension: "Yes, the dystopia tension is my thesis, you are on the money for that."
- On his role: "My role actually is both [visionary and critic]... through the process I've learnt and experienced that this future is actually a really uncomfortable one."

---

## 4. Core Interaction Architecture

### Domain-Mode-Intent Framework [LOCKED]

The fundamental interaction-level design decision:

```
Life Domain → Mode → Intent → UI
     ↓          ↓        ↓       ↓
  Category   Stance   Action  Interface
```

| Concept | Definition | Who Controls |
|---------|------------|-------------|
| **Life Domain** | Category of human activity | User-defined |
| **Mode** | Fluid, contextual stance within a domain | Orchestrator (auto-entry) |
| **Intent** | Bounded action within current mode | User (explicit selection) |
| **UI** | Dynamically generated interface | Orchestrator |

**Key principles:**
- Modes are fluid — emerge from domain + situation intersection, NOT a fixed list
- Modes are never user-selected (though users can always exit)
- Intents are always user-selected (never auto-executed)
- Available intents are constrained by current mode
- This separation is the core mechanism for preserving agency

### Seven Life Domains [LOCKED]

1. **Navigation & Mobility** — Travel, spatial awareness, movement
2. **Communication & Connection** — Relationships, social coordination, presence
3. **Entertainment & Media** — Content, news, cultural participation
4. **Life Management** — Logistics, finances, scheduling, admin
5. **Work & Career** — Professional tasks, collaboration, development
6. **Health & Wellness** — Physical health, mental wellbeing, rest, recovery
7. **Personal Fulfillment** — Creative expression, learning, skill development, meaning-making

### Three-Layer Attention Model [LOCKED]

| Layer | Definition | Visibility |
|-------|------------|------------|
| **Center** | Primary focus of current stance | Active display |
| **Periphery** | Available but de-emphasized | Indicated, not displayed |
| **Silence** | Held until contextually appropriate | Hidden |

Every piece of information exists in exactly one layer at any moment. Layer assignment is mode-specific. This is calm technology in practice.

### Provider-Orchestrator-Intent Flow [LOCKED]

**Traditional:** User → App Selection → App Interface → Service

**LifeOS:** Provider → Information Integrity → Orchestrator → Intent → User

Providers cannot directly reach users. All information flows through integrity verification and constitutional filtering. This is why apps become obsolete: when the orchestrator can determine context, surface relevant capabilities, generate purpose-built interfaces, and filter manipulation — the app as intermediary is unnecessary.

### Dashboard: The Neutral Clearing [LOCKED]

Timeline visualization with Past / Present / Future zones. Always accessible, never mode-locked. The visible escape hatch. Builds trust through retrospective verification.

---

## 5. System Architecture: Multi-Model Cooperation Stack [LOCKED]

No single model does everything. Intelligence is distributed:

**The Orchestrator** — Central hub. Routes tasks, synthesizes information, makes presentation decisions. Only component that touches everything.

**Perception Layer ("The Senses")**
- Vision-Language Models: raw data → text/embeddings
- World Models: intuition about physics/time, predicts what happens next
- Perception & Grounding: bridges VLM + world model into coherent "current state"

**Cognition & Safety Stack ("The Brain")**
- System 1 (Fast): On-device, quick tasks, privacy-first
- System 2 (Slow): Cloud-based, complex planning, multi-step reasoning
- Safety: The Kill Switch — no plan executes without passing through safety

**Personal Context ("Memory & Values")**
- Personal Knowledge Graph: long-term memory with provenance tracking
- Personal Constitution: user-articulated rules constraining behavior
- Privacy: data retention, redaction, deletion, access control

**Information Integrity ("The Library")**
- External Provider Data: raw feeds with business models and agendas
- Verification & Provenance: deepfake detection, source auth, fact-checking
- Constitutional Filtering: aligns data with user values
- Information Augmentation (RAG): synthesizes personalized responses

---

## 6. Device Ecosystem: Two-Tier Model [LOCKED]

**Information Interfaces:**
- Foldable Tablet — Core. Dual mode (folded/unfolded). Runs orchestrator. Primary interaction surface. Center-layer content.

**Peripheral Interfaces (sense and output, never orchestrate):**
- Neural Smartwatch — Biometric sensing (HRV, skin conductance), haptic-first, peripheral awareness
- Glass (AR) — Just-in-time ambient perception, visual context, AR overlays that dissolve
- Earphones — Audio awareness, whispered summaries, ultra-loose coupling

**Principle:** Peripheral devices sense and output; they never orchestrate. Only information interfaces have sufficient context to orchestrate safely.

---

## 7. Constitutional Framework [LOCKED]

1. Users articulate values through conversation and structured prompts
2. System probes with scenarios to clarify value boundaries
3. Values translated into operational rules
4. Rules inform triage decisions, mode behavior, provider filtering
5. Conflicts between values surfaced for user resolution
6. Values refined through real-world testing

---

## 8. Mode Definitions

Five canonical modes defined with full activation triggers, confidence thresholds, triage rules, and constraints:

**Navigation** — Active transit. Low exit friction. Center: route/ETA. Silence: social/news.
**Focus** — Deep work. Medium exit friction. 90-min default. Distraction detection. Only Emma in periphery.
**Social** — Present with others. Minimal digital. Everything silenced except genuine emergency.
**Rest** — Downtime/recovery. Wind-down features, blue light reduction. Blocks work and email.
**Work** — Professional tasks. Meeting prep, end-of-day summary. Blocks entertainment/social scrolling.

Modes are fluid — these five are canonical examples, but countless contextual modes can emerge (e.g., "Thesis Discussion," "Morning Commute," "Creative Session").

---

## 10. The Detailed Scenario: Thesis Discussion — Learning in Real-Time

The richest interaction design artifact. Marcus Chen in a thesis discussion where an unfamiliar term ("tokenized stocks") is mentioned. Demonstrates:

**Passive Intents (orchestrator-initiated, no user action):**
1. Session Recording & Transcription — auto-capture with speaker identification
2. Unfamiliar Term Detection — cross-references against PKG, creates learning bookmark
3. Communication Triage & Batch Hold — holds all messages except emergency tier
4. Reference & Resource Aggregation — captures papers/articles mentioned, builds bibliography

**Active Intents (user-selected, bounded):**
1. "What are Tokenized Stocks?" — Full educational experience: definition, visual breakdown, real example, key concepts, video explainer, contextual relevance, sources. Bounded with "Mark Complete."
2. "Quick Context" — 10-second understanding. 2 sentences + visual. Auto-dismisses.
3. "Connection to My Thesis" — Orchestrator analyzes parallels to Marcus's own work.
4. "Surface My Knowledge" — Contribution support with talking points from PKG.

**Generated UI for educational intent:** Purpose-built, not a browser. Header with exit + context chip + progress indicator. Progressive disclosure. Sources with provenance. Clear completion. Not infinite.

**Design tensions surfaced:**
- Passive vs. active intent boundary (helpful automation vs. creeping paternalism)
- Presence vs. learning tradeoff (immediate understanding vs. staying in the moment)
- Provider integration without direct access (protective vs. paternalistic)
- Bounded experience design (completion vs. curiosity)
- Just-in-time vs. systematic learning

---

## 11. Marcus Chen — Synthetic User

Fully specified Personal Knowledge Graph for scenario testing. 28-year-old design student at SVA, West Village NYC.

**Identity:** Thoughtful, creative, occasionally anxious. Direct and warm communication. Deliberate decision-maker. Automation preference: 75%.

**Key relationships:**
- Emma Zhao (partner, highest priority, always surface)
- Mom (weekly calls, high priority)
- Sarah Chen (thesis peer, high priority during thesis work)
- Prof. Martinez (thesis advisor, values theoretical rigor)

**Behavioral patterns:** Peak cognitive 9am-12pm and 2:30-5pm. Deep work sessions 90-120min. Low context-switching tolerance. Stress signature: sleep disruption, exercise skip, social withdrawal.

**Full day timeline (Oct 14, 2030):** 13 mode-based segments from morning restore through wind-down, with detailed orchestrator context, intents, periphery management, and a plot event (impromptu professor conversation).

---

## 12. Planned Deliverables (LifeOS era)

1. **Marketing website** — Apple-style product pages. What LifeOS does for you, not how.
2. **High-fidelity frames** — Visual design of key interactions.
3. **Animated video flow mockups** — Motion-designed walkthroughs.
4. **Lo-to-mid fidelity functional prototypes** — Testing specific interactions.

---

## 14. Intended Contributions (LifeOS era)

1. **Mode-Intent as interaction architecture** — Framework for context-adaptive, intent-driven systems where modes define space and intents represent user goals. Applications become obsolete.
2. **LifeOS as speculative design artifact** — Fully-realized near-future system making the augmentation-agency paradox visible and debatable at the level of specific design decisions.
3. **The design narrative itself** — Evolution from visionary to critic through the act of designing.

---

## 15. The Pivot (2026-02-21)

**From:** LifeOS — speculative design of a 2030 AI OS
**To:** Building a robust PKG and PKG-driven capabilities (The Council) as a lived exploration of human augmentation

**What transfers cleanly (~40%):**
- Goal: "Augment human intelligence and capability" — identical
- Paradox: same, arguably stronger when formalizing yourself into a PKG
- Narrative arc: gets STRONGER — LifeOS becomes Act 1, Council becomes Act 2
- Core tension: "does not resolve, holds honestly" — same, now lived
- 5 of 7 design principles carry over
- Constitutional framework concept → PKG governance
- Contribution #3: the design narrative

**What does not transfer (~60%):**
- Problem statement (app paradigm → different problem)
- Domain-Mode-Intent Framework (LifeOS-specific interaction architecture)
- Three-Layer Attention Model (OS information display)
- Provider Integration Model (apps becoming obsolete)
- Device Ecosystem (speculative hardware)
- Multi-Model Cooperation Stack (speculative 2030 architecture)
- Marcus Chen (replaced by Chris himself)
- Most deliverables

**The narrative bridge:**
> Through designing LifeOS, I discovered that the hardest problem in AI augmentation isn't the AI — it's the knowledge layer. A system can only augment you to the depth that it knows you. LifeOS assumed a deeply personalized PKG existed but never interrogated what it takes to build one, govern one, or live with one.

**Critical concern identified during pivot:** Chris's design craft is quintessentially him. The Council's web interface MUST be designed with the same ambition as LifeOS's multimodal concepts. If done right, craft demonstrated through a working system > craft demonstrated through concept mockups. But it must be intentional.

---

## 16. Prototypes Built

### Knowledge Graph Browser (`prototypes/kg-browser/`)
React + Vite app for exploring Marcus Chen's PKG. Real-time search, collapsible sections, sidebar navigation.

### Digital Twin Chatbot (`prototypes/digital-twin/`)
Conversational interface. React + Vite frontend, Express backend. Loads PKG as system prompt. Claude Haiku with prompt caching.

### Timeline Visualization (`prototypes/timeline/`)
Visual representation of past/present/future modes.

### Knowledge Graph Chat (`prototypes/kg-chat/`)
Lightweight chat interface for context exploration.

### World Dashboard (`dashboard/`)
Next.js dashboard (18 pages) for managing world canon, editing modes, exploring scenarios.

---

## 17. File Reference

Key files in `lifeos/`:
```
WORLD.md                                         World canon (799 lines)
CLAUDE.md                                        Platform instructions
docs/lifeos-thesis-feb-18.md                     Thesis positioning
docs/thesis-positioning-transcript.md            Chris's direct responses
docs/thesis-pivot-workshop.md                    Pivot decision & rationale
backend/data/world/thesis.yaml                   Thesis definition
backend/data/world/system-architecture.yaml      Multi-model stack
backend/data/world/devices.yaml                  Device ecosystem
backend/data/world/provider-integration.yaml     Provider flow
backend/data/world/domains/                      Life domain definitions
backend/data/world/open-questions.yaml           Unresolved design questions
backend/data/modes/mode-definitions.yaml         Mode specs with triggers
backend/data/knowledge-graph/                    Marcus Chen PKG (9 files)
backend/data/scenarios/                          Design scenario collections
```
