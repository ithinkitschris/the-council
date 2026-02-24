# Pattern: Project Documentation Brief

How projects consume Hermes, the Council's Documentation Expert.

## The Separation

Hermes provides methodology: voice registers, writing rules, structure principles, formatting standards, templates. He knows HOW to document.

Projects provide scope: what to document, who reads it, where files live, what format entries follow, any project-specific conventions. The project knows WHAT to document.

This separation keeps the expert reusable. The same methodology applies to a portfolio build log, an open source project's contributor docs, or an internal tool's process records. Only the brief changes.

## How It Works

1. **Project writes a brief.** A document defining the project's documentation needs. Use the template at `knowledge/templates/project-brief.md` as a starting point. The brief covers audience, content types, owned files, entry format, and any project-specific details.

2. **Expert is invoked with the brief.** The system prompt combines PKG voice, the expert's behavioral directive, and the project brief:

```javascript
import { assembleSystemPrompt } from 'src/lib/knowledge.js';

const systemPrompt = assembleSystemPrompt({
  agentName: 'hermes',
  voice: 'documentation',
  includePersonality: true,
  additionalContext: projectBrief
});
```

3. **The expert applies methodology to scope.** It uses its writing rules, formatting standards, and voice register guidance to produce documentation shaped by the project's brief.

## What Goes in the Brief

At minimum:
- **Audience**: who reads this, what they should understand
- **Content types**: what kinds of documents, which voice register each uses
- **Owned files**: where documentation lives

See `knowledge/templates/project-brief.md` for the full template with all optional sections.

## Example: Portfolio AI-Flow

The portfolio project (`nextjs-boilerplate`) currently has a tightly coupled documentation agent. After migration, its documentation layer would become a thin brief:

**From the Council (shared across all projects):**
- Process documentation register (first-person, reflective)
- System documentation register (third-person, tool-as-subject)
- Writing rules (narrate most, AI collaboration woven in, specificity, length discipline)
- Formatting rules (em-dash ban, code block discipline, no emojis)
- Build log entry template
- System case study template

**From the project brief (specific to the portfolio):**
- Audience: hiring managers, design peers, researchers
- Content types: session entries (process register) and site functions (system register)
- Owned files: `docs/ai-flow-documentation/entries/*.md`, `functions/*.md`, index, loader, renderer
- Entry format: frontmatter with title/date/session/tags/commits, `:::transcript` blocks
- Screenshot storage: `public/docs/ai-flow-documentation/screenshots/`
- Reference implementations: Session 8, calibration-pipeline.md
- Documentation protocol: the step-by-step creation workflow

Everything that was in the boilerplate's 190-line behavioral file is now either in the Council expert (universal methodology) or in the project brief (project-specific scope). Nothing is lost. The expert just became reusable.

## Where the Brief Lives

The brief's location depends on how the project invokes the expert:

- **As a Claude Code agent**: the brief lives in `.claude/agents/hermes.md` or a similar agent definition file. The agent reads it before starting work.
- **Via the Council API**: the brief is loaded from a file and passed as `additionalContext` to `assembleSystemPrompt()`.
- **As a symlinked reference**: the brief lives alongside the project's own directive files, referencing the Council's methodology.

The delivery mechanism is not yet formalized. What matters now is that the separation between methodology and scope is clean, and the brief pattern is established.
