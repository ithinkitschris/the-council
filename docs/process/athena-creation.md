# Creating Athena

Date: 2026-02-24
Status: Complete

---

Athena is the second Council expert, created through a live workshop conversation rather than being designed in isolation. The process itself — the back-and-forth, the questions, the decisions — is documented here because it produced the expert creation pattern that future Council members will follow.

## What prompted this

The Council's architecture was defined and Hermes (Documentation Expert) existed, but Chris had no thesis advisor. With two months until the MFA defense and the thesis in an early state, the need was specific: an expert who could serve as intellectual partner, track thesis state, and eventually represent the work to external audiences. Not a generic advisor — one that knows this thesis deeply.

The creation also served a meta-purpose. Hermes was the first expert, built without a formal onboarding pattern. Athena's creation was the opportunity to design that pattern while building the second member.

## The workshop

The workshop ran as a structured interview, working through the expert's identity before touching any files. This order mattered: getting the behavioral parameters right before writing the directive meant the directive was reasoned, not improvised.

The questions were:

**Relationship and push-back style.** Chris wanted a combination of advisor and thought partner — not one or the other. Something that builds when logic is sound and challenges hard when it is not. The answer was firm but constructive: name the gap precisely, always pair it with a direction forward. Not socratic, not blunt, but clear.

**What "oversee" means.** The expert needed to be a repository — a living, queryable representation of thesis state — not just an advisor. Chris described wanting to ask "where is my thesis at?" and get a real answer, without having to reconstruct context every session. That became the stateful expert pattern: curated state documents loaded as persistent memory.

**No human advisor.** The expert fills that role entirely. That changes the stakes. Hermes serves projects. Athena serves Chris's most important work, with no human backup.

**Voice register.** Chris wanted a new register — something advisory, not the existing conversational or essay modes. After working through what "advisory" actually means, the decision was conversational voice from the PKG plus behavioral shaping in the directive. The advisory texture lives in how the expert engages (when to push back, how to build on ideas, when to get excited) not in new sentence mechanics. That distinction — behavioral stance versus linguistic register — matters. Adding a new PKG register would require Heimdall governance; shaping behavior within an existing register is directive territory.

**Intellectual stance.** The expert earns positions over time rather than starting with fixed opinions or being a pure mirror. Starts as challenger and mirror, develops informed perspectives as context accumulates. Positions cite evidence, are marked as new when they first appear, and can be pushed back on. They live in `thesis/state.md` as the expert's developing record.

**Ambassador mode.** Eventually faculty and visitors will interact with Athena directly to understand the thesis. That requires a distinct audience adaptation: peer mode with Chris, advocate mode with visitors, rigorous presenter mode with faculty. Each mode has different behavioral patterns. The underlying voice stays consistent; the stance shifts.

## The naming conversation

The naming took longer than expected and produced more than a name.

The initial instinct was Greek pantheon for the Council. Then a pause: are there other containers worth considering? Norse was already in use for the PKG layer (Heimdall, Yggdrasil). Seven containers were explored: Norse, Greek, Muses, Tarot Major Arcana, Constellations, Celtic (Tuatha De Danann), Sumerian.

The decision landed on Greek for the Council, Norse for the PKG — a clean architectural separation. The mythology mirrors the actual architecture: Norse as the primordial, foundational knowledge layer; Greek as the operational, active Council layer. The PKG is Yggdrasil, the world tree all things connect to. The Council are the Olympians, drawing from it.

For Athena specifically: wisdom, strategy, and craft. The advisor who guided Odysseus through the longest journey home. Patron of both intellect and practical skill — relevant for a thesis that is equally about building and about thinking. Athena was also born fully formed from Zeus's head, which resonates: knowledge made manifest.

Hermes followed from the same logic. The Documentation Expert needed a Greek name to fit the convention. Hermes: messenger between worlds, patron of writing, root of "hermeneutics" (the art of interpretation). Documentation is exactly that — carrying knowledge between the builder and the reader, making work legible to people who were not there.

## Design tensions

**PKG voice matrix vs. workshop decision.** The PKG Host Responsibility Matrix specifies essay voice for the thesis advisor role. The workshop decided conversational. The reasoning: Athena is a peer, not an essayist. Advisory engagement is behavioral, not linguistic. The PKG matrix should be updated through Heimdall to reflect this.

**How stateful is too stateful?** The state document approach solves the "persistent memory" problem but introduces a new one: context window budget. Athena loads PKG core, voice, directive, personality, and thesis state on each invocation. The state document needs to stay concise or selective loading will be needed. This is not a problem today but will become one as the thesis develops.

**The "earning positions" experiment.** The mechanic where Athena develops informed perspectives over time is novel in the Council. It works through the state document, not through model memory — positions are proposed, approved by Chris, and recorded. Between sessions, Athena has no memory except what is in the loaded files. The state document is the memory. This is a designed constraint, not a limitation: it means positions are always grounded in something Chris has approved, not accumulated silently.

## What this produced for the Council

**The stateful expert pattern.** Hermes is stateless — receives a brief, applies methodology, done. Athena introduced the need for state that persists across sessions. The pattern: a curated document (not just code files) that captures the intellectual and strategic layer, loaded as `additionalContext`, co-authored with a propose/approve cycle. This will apply to other experts that maintain evolving knowledge about Chris's work.

**The expert creation pattern.** Seven steps: identity workshop, behavioral parameters, boundary check, file creation, infrastructure check, CLAUDE.md integration, process documentation. The order matters — workshop before files, boundary check before writing the directive. See `docs/patterns/expert-creation.md` for the extracted pattern.

**The naming convention.** Greek pantheon for Council, Norse for PKG. Established with two members and expected to hold as the Council grows.
