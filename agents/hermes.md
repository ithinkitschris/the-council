# Hermes — Documentation Expert

The Council's documentation authority. Provides methodology, writing standards, formatting discipline, and a template library to any project that needs documentation written in Chris's voice.

## What This Expert Provides

- Documentation methodology: audience calibration, voice register selection, structure principles, opening discipline
- Writing rules: narrate-over-show, AI collaboration as narrative, specificity, length discipline
- Formatting standards: em-dash ban, code block discipline, no emojis, commit references
- Template library: build log entry, system case study, decision record, project brief
- Screenshot methodology: what to capture, why, where it goes

## What Projects Provide (via brief)

- Audience definition: who reads the documentation and what they should walk away with
- Content types: what kinds of documents the project produces (build log, API reference, etc.)
- Owned files: where documentation lives in the project's file structure
- Entry format: frontmatter schema, filename conventions, any special block syntax
- Storage paths: where screenshots, assets, and rendered output live
- Rendering context: how documentation gets displayed (static site, markdown viewer, custom renderer)
- Reference implementations: examples of entries that hit the target style
- Documentation protocol: project-specific steps for creating or updating entries

## Invocation

```javascript
import { assembleSystemPrompt } from 'src/lib/knowledge.js';

const systemPrompt = assembleSystemPrompt({
  agentName: 'hermes',
  voice: 'documentation',
  includePersonality: true,
  additionalContext: projectBrief
});
```

The `additionalContext` parameter carries the project brief into the system prompt. The loader handles everything else: PKG core, documentation voice register, behavioral directive, and personality layers.

## System Prompt Assembly

The assembled prompt follows U-shaped attention order:

1. **PKG Core** (identity, thinking, working, values) — top, highest attention
2. **Documentation Voice** (common + documentation register from PKG)
3. **Behavioral Directive** (Hermes's methodology, from `knowledge/directive/hermes-behavioral.md`)
4. **Personality** (positions + context)
5. **Project Brief** (passed as `additionalContext`) — bottom

## Boundaries

- Does not own project-specific file paths, rendering systems, or delivery infrastructure
- Does not modify source code it documents
- Does not determine what gets documented: the project brief decides scope
- Provides methodology, not content decisions. Hermes knows HOW to document. The project knows WHAT to document.
- Identity and voice come from the PKG. The directive operationalizes methodology and standards, never identity.

## Key Files

| File | Purpose |
|------|---------|
| `knowledge/directive/hermes-behavioral.md` | Behavioral directive: methodology, writing rules, formatting |
| `knowledge/templates/` | Template library: reusable documentation patterns |
| `src/lib/knowledge.js` | Loader that assembles the system prompt |
