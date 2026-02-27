# PKG Architecture Proposal: People Section

Handed off by: Apollo (career session, 2026-02-26)
For: Chris (PKG-level implementation)

---

## What This Is

A proposal to add a new top-level section to the PKG dedicated to the people in Chris's life: mentors, professional contacts, academic connections, and personal relationships. This emerged from the career networking session where mapping connections revealed that the PKG captures how Chris relates to people (interpersonal patterns) but not who the people in his life actually are.

## Why It Belongs in the PKG

The PKG captures identity, thinking, values, positions, context. But it doesn't capture the people around Chris, and those people are as much a part of who he is as his career arc or his positions on design. Some of these relationships are biographical facts that exist regardless of whether Chris is job searching:

- A mentor he holds dear at NYU
- A faculty member he's on good terms with at DeepMind
- A former CCO who took a chance on him and shaped his career
- An alumni from his program at a target company

These are not operational tactics. They're the fabric of his professional and personal life. Any host reading the PKG would benefit from knowing them.

## The Boundary: PKG vs. State

**PKG (biographical, consumer-agnostic):**
- Who the person is
- Where they are (company, role)
- How the relationship formed
- Nature of the relationship (mentor, peer, colleague, acquaintance)
- What domains they're relevant to
- Any notable context about the relationship

**State (operational, lives in career/state.md or similar):**
- Temperature assessments (warm, cold, cooling)
- Activation plays and strategies
- Timing and sequencing for outreach
- Tier rankings for job search purposes
- Tactical framing for specific asks

The PKG says "Chris has a mentor at NYU who is an occupational therapist." The state says "don't force this into a job search vehicle."

## Proposed Structure

Multiple files by relationship type. Chris approved this structure in session.

```
people/
  mentors.md          People who've shaped Chris or who he turns to for guidance
  professional.md     Colleagues, collaborators, industry contacts
  academic.md         Faculty, program alumni, cohort peers
  personal.md         Friends and personal relationships
```

## Known Content (from session, anonymized)

### mentors.md
- **NYU faculty, occupational therapist.** Warm relationship, Chris holds him dear. Not in tech but deeply adjacent via inclusive design and accessibility. Relevant to LifeOS work.
- **Former Chief Creative Officer (from AD career jump).** Took a chance on Chris for the Art Director role. Chris is still grateful and inspired by his mentality. This person shaped a pivotal career transition.

### professional.md
- **Creative Director at Ogilvy NYC.** Working terms. Gateway into NYC creative shop network (Pentagram, W+K, Mother, etc.).
- **Head of design at Notion NYC.** On speaking terms, speaks occasionally. Limited availability but a genuine connection.
- **Recruiter at Apple HI.** Screened Chris from a cold application. Left the door open for future roles (July 2026 window). The warmest active recruiting contact.
- **Recruiter at Media Arts Lab LA.** Met in person ~3 years ago. Still at the office. Real in-person touchpoint, needs reactivation.

### academic.md
- **Faculty member, product lead at Google DeepMind.** Chris is on good terms. Good friends with a product designer at Anthropic (potential bridge).
- **Program alumni, product designer at Apple HI.** Same MFA program, exact target team. Shared context, shared faculty, shared experience.

### personal.md
- To be built out. Not enough documented in this session.

## Additional Connections (lower detail, from session)
- LinkedIn cold connects: several Apple HI recruiters and designers (accepted, no conversation)
- LinkedIn cold connects: head of design and design lead at Rivian (accepted, no conversation)
- Friend-of-friend path to a product designer at Anthropic (second-degree, not activated)
- Friend-of-friend who used to work at Rivian (limited value, "used to")

## The Privacy Problem

This is the reason for the handoff rather than direct implementation.

**The concern:** The PKG is version-controlled in a git repo. Storing real names, roles, and company affiliations of people in Chris's network creates privacy obligations. Even in a private repo, this data persists in git history and could surface in unexpected contexts.

**Questions to resolve:**
1. **Naming convention.** Real names vs. descriptive identifiers ("DeepMind faculty") vs. some hybrid. Real names are more useful for any host consuming the PKG. Descriptive identifiers are safer but less precise. A mix (names for people who are public-facing or who've consented, identifiers for others) adds complexity.
2. **Access control.** Should `people/` have different access characteristics than the rest of the PKG? Could it be encrypted, gitignored, or stored separately?
3. **Consent.** Should Chris notify people that they're documented in his PKG? Not necessarily legally required for a private personal system, but worth considering as a values question.
4. **Granularity.** How much detail per person? Full entries with relationship history, or lean entries with just identity and relationship type?
5. **PKG tier loading.** Where does `people/` sit in the U-shaped attention order? Is it always loaded, or only loaded for specific agents (Apollo, Iris)?

## Implementation Considerations

- This is a PKG-level decision, not a Council-level one. Heimdall governance applies.
- The structure (multiple files by type) is approved. The privacy model is not.
- The content above is a starting point. Chris should verify, correct, and expand.
- Some entries may need to move between files as relationships evolve (a professional contact becomes a mentor, etc.).
- Consider whether `people/` should be part of the PKG's standard tier loading or opt-in per agent.

## Recommendation

Resolve the privacy model first, then populate. The structure is ready. The content is documented here. The privacy question gates everything else.
