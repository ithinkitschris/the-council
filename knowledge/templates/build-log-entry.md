# Template: Build Log Entry

Process documentation for a single work session. Captures what happened, what was tried, what was figured out, and how AI collaboration shaped the work. Uses the process documentation register: first-person, reflective, experiential.

## When to Use

Any time you need to document a work session, sprint, or focused iteration. Build logs, session journals, development diaries. The reader should feel like they are following along as the work happened.

## Shape

### Frontmatter

Define fields that make sense for your project. Common fields:

```yaml
---
title: [Punchy tagline, not a description]
date: [YYYY-MM-DD]
session: [sequential number, if your project uses session numbering]
tags: [relevant, tags]
commits:
  - "hash: commit message"
---
```

Projects customize this. Some need version numbers, some need linked issues, some need status fields. The frontmatter schema belongs in the project brief, not here.

### Opening

Context and goal in natural prose. Where things stood coming into the session, what prompted the work. Not a formal goal statement. The reader should know what prompted this and roughly where it is headed within two to three sentences.

> I'd been running into the same friction for a few sessions now. Every time I wanted to tune a visual value in ChatBottomBar, a spring rate, an opacity, a blur amount, I had two bad options: prompt Claude and wait for a round-trip, or dig through 500+ lines of JSX to find the number myself.

### Body

Chronological narrative following the session timeline. Natural headers mark topic shifts based on what was being worked on, not analytical categories.

Structure emerges from the work:

```
## [What was being worked on]

[What happened, what was tried, what was figured out.
AI collaboration woven into narrative naturally.
Technical details narrated, code shown only when essential.]

## [Next natural topic shift]

[Continue following the timeline.]
```

### Closing (optional)

Some sessions benefit from a brief reflection. Others just end when the work ends. Do not force a conclusion. If there is a natural stopping point with something worth noting, include it.

### Transcript (optional)

If the project includes full AI session transcripts, place them at the end in a collapsible block. The specific syntax depends on the project's rendering system.

## Worked Example (abbreviated)

```markdown
---
title: AI-Generated Code, Human Tuned Styling
date: 2026-02-20
session: 8
tags: [config-pattern, visual-tuning, developer-experience]
commits:
  - "a1b2c3d: extract STYLES config from ChatBottomBar"
---

# AI-Generated Code, Human Tuned Styling, Session 8

The friction had been building for a few sessions. Tuning a single
visual value meant either prompting Claude and waiting for a round-trip,
or scrolling through hundreds of lines of JSX to find the right number.
Neither was great for the kind of fast iteration that visual tuning
demands.

## Separating structure from feel

The idea was simple: pull every tunable visual value into a single
config object at the top of the file. Claude suggested extracting it to
a separate file entirely, but I pushed back. The whole point was reducing
friction in the tuning loop. Opening a second file adds friction. One
file, one scroll.

## The config boundary question

The harder question was what belongs in the config and what stays inline.
The test was simple: would I ever want to change this value while tuning
the feel of the component? If yes, it goes in the config. If no, it
stays inline. Border radius, yes. Flex direction, no.

---

:::transcript
## Full Session Transcript
[Complete exchange]
:::
```

## Notes

- Titles stay punchy. "AI-Generated Code, Human Tuned Styling" not "Building the Style Config Pattern."
- Depth matches significance. A focused iteration might be 50 lines. A major refactor might be 120+.
- Default to tighter. If a paragraph does not add understanding, cut it.
