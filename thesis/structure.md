# Thesis Structure

## Opening Statement

AI is already augmenting human intelligence. But the current interaction model — generic chat interfaces, session-based context, no persistent knowledge about the user — treats every person identically. The augmentation is broad but shallow. What happens when you go deep? When you invest in building a comprehensive, structured representation of who you are — your identity, thinking patterns, values, voice, knowledge boundaries — and deploy it across multiple AI systems?

This thesis explores that question through building. A Personal Knowledge Graph (PKG) formalizing the designer's own identity. A Council of specialized AI agents drawing from that knowledge. A governance model for maintaining human authorship over machine-readable self-representation. And an honest account of what the process reveals about augmentation, agency, and the uncomfortable intimacy of teaching machines who you are.

---

## Goal

To augment human intelligence and capability — to extend what people can do and think, not to replace them. This goal is both the positive vision the thesis pursues and the source of its central design paradox.

---

## Problem Statement

Current AI augmentation is context-poor. Large language models are capable but generic — they know nothing about the specific human they're assisting unless told, repeatedly, per session. The burden of context falls entirely on the user: explaining who they are, what they're working on, how they think, what they value. Every session starts from zero.

This isn't a capability gap — it's a design gap. The knowledge infrastructure for persistent, personal AI augmentation doesn't exist as a designed artifact. What would it look like to take it seriously? To treat personal knowledge not as prompt engineering but as a structured, governed, version-controlled system that multiple AI surfaces can draw from?

---

## Context

The designer spent a year exploring this territory from the speculative end — designing LifeOS, a conceptual operating system for 2030 that assumed deep personal context and explored the agency-automation tensions that arise from it. That work identified the paradox, the governance questions, and the design principles. But it also revealed a gap: LifeOS assumed a robust personal knowledge layer existed without interrogating what it takes to build one, govern one, or live with one.

This thesis picks up where that gap was identified. Instead of speculating further, it builds.

---

## Paradox

A system that knows you deeply enough to genuinely augment you is one that can also represent you without you. The more accurately your PKG captures who you are, the more capable AI agents become at acting on your behalf — and the more critical it becomes that you maintain authorship over that representation.

Formalizing yourself for machines is an act of augmentation that requires constant governance to prevent it from becoming an act of delegation.

---

## Narrative Arc

Chris began by designing LifeOS — a speculative operating system that augments human capability. Through that process, he identified the core tensions: augmentation can become substitution, convenience can erode agency, and the system's knowledge about you is what makes it both powerful and dangerous.

He then asked: what would happen if instead of speculating about these tensions, I actually built them? What if I formalized myself into a machine-readable knowledge graph and constructed AI agents that draw from it? What would I learn about augmentation and agency that speculation couldn't teach me?

The pivot from speculating to building — and what the building revealed — is the thesis.

---

## Approach

This thesis explores human-AI augmentation through first-person design research: building, deploying, and reflecting on a PKG-driven augmentation system.

1. **The PKG** — A comprehensive Personal Knowledge Graph formalizing identity, thinking patterns, values, voice, positions, and context into a structured, governed knowledge system

2. **The Council** — A multi-agent augmentation system where specialized AI agents (each with distinct capabilities and behavioral directives) draw from the shared PKG to provide deep, context-aware assistance

3. **The Governance Model** — A framework for maintaining human authorship: knowledge staging, gatekeeper review, tunable agent proactivity, constitutional rules derived from user-articulated values

4. **The Process Documentation** — An honest account of decisions, tensions, and surprises encountered through building — what the act of formalizing yourself for machines reveals

---

## Core Tension

The thesis does not resolve the augmentation-agency tension. It holds it honestly. The PKG makes augmentation deeper and more personal — and that depth is precisely what demands rigorous governance. Building the system surfaces the tension in ways that speculation cannot.

---

## Design Principles

**Carried over from LifeOS:**
1. Augment, don't replace
2. Automation must be reversible, explainable, and auditable
3. Freedom through explicit trade-offs (tunable proactivity)
4. No punishment, no shame, no dead ends
5. Convenience and control are not zero-sum

**New:**
6. Knowledge is the foundation, not the AI
7. Governance is a first-class design concern, not an afterthought

---

## Contributions

1. **PKG > Host > Directive as an architectural framework** for personal AI augmentation — separating knowledge from behavior from capability, enabling reuse without coupling

2. **A governance model for machine-readable self-representation** — staging mechanisms, gatekeeper agents, constitutional rules, tunable proactivity — demonstrated through working artifacts

3. **The design narrative itself** — the evolution from speculative designer to builder, and what the building process revealed about augmentation, agency, and authorship that theory alone could not surface

---

## Deliverables

1. **The PKG** — A comprehensive, structured personal knowledge graph (~11,000+ lines, 4-tier architecture, governance model)

2. **The Council** — A multi-agent augmentation system with designed interface (CLI core + web layer showcasing interaction design, visual design, and information architecture)

3. **The Portfolio Twin** — A deployed, production proof of concept demonstrating PKG-driven conversational AI (ithinkitschris.com)

4. **Process Documentation** — Design decisions, tensions, governance evolution, and honest reflection on the building process
