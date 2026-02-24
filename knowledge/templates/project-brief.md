# Template: Project Brief

The meta-template. Defines a project's documentation needs so the Council Documentation Expert knows what to produce. Every project that calls on the expert should have one of these.

## When to Use

When setting up documentation for a new project or migrating an existing documentation workflow to use the Council expert. Write the brief once, update it as the project evolves.

## Shape

### Project Context

What this project is, in one to two sentences. Enough for the expert to understand the domain. Not a full project description.

### Audience

Who reads the documentation this project produces. What they should walk away understanding. This calibrates the expert's register, depth, and technicality.

### Content Types

What kinds of documents the project produces. Each content type should specify:
- What it is (build log entries, API docs, system overviews, etc.)
- Which voice register applies (process or system)
- Which template to use (or a custom format)

### Owned Files

Where documentation lives in the project file structure. File paths, directory conventions, naming patterns.

### Entry Format

The specific format entries follow. Frontmatter schema (fields, types, conventions), filename convention, any special syntax (collapsible blocks, custom markdown extensions).

### Storage and Assets

Where screenshots, images, and other assets live. Naming conventions for asset files.

### Rendering Context

How documentation gets displayed, if relevant. Loader details, rendering system, any constraints the renderer imposes on markdown syntax.

### Reference Implementations

Specific entries or documents that hit the target style. The expert reads these to calibrate.

### Documentation Protocol

Project-specific steps for creating or updating documentation. What to read first, what to create, what to update, what to suggest.

## Worked Example

```markdown
# Documentation Brief: Portfolio AI-Flow

## Project Context

A personal portfolio site (nextjs-boilerplate) with a living build log
documenting the AI-assisted development process.

## Audience

Hiring managers, design peers, and researchers in AI-assisted
development. They should walk away understanding that every piece of the
AI-flow was thought through. A genuine work log that happens to be
public.

## Content Types

**Session entries** — chronological build log. Process documentation
register (first-person, reflective). Uses the build log entry template.

**Site functions** — system case studies of internal tooling. System
documentation register (third-person, tool-as-subject). Uses the system
case study template.

## Owned Files

- `docs/ai-flow-documentation/index.md` — master index
- `docs/ai-flow-documentation/entries/*.md` — session entries
- `docs/ai-flow-documentation/functions/*.md` — site function docs
- `app/lib/aiflowdocs.js` — the loader
- `app/ai-flow-documentation/page.js` — server component
- `app/ai-flow-documentation/AIFlowClient.js` — client component

## Entry Format

**Session entries:**
Filename: `YYYY-MM-DD-slug.md`
Frontmatter: title, date, session (sequential number), tags, commits
Transcript at end in `:::transcript` collapsible block

**Site functions:**
Filename: `slug.md`
Frontmatter: title, date, updated, tags, status, order

## Storage and Assets

Screenshots in `public/docs/ai-flow-documentation/screenshots/`
Naming: `session-N-descriptive-slug.png`

## Rendering Context

- `gray-matter` for YAML frontmatter parsing
- Entries sorted newest-first by session number
- Functions sorted ascending by order field
- Custom `renderMarkdown()` handles bold, inline code, links, headings,
  tables, code blocks, lists, blockquotes, images
- `:::transcript` blocks rendered as collapsible sections

## Reference Implementations

Session 8 (`2026-02-20-style-config-pattern.md`) for entries.
`calibration-pipeline.md` for site functions.

## Documentation Protocol

1. Read PKG voice reference and documentation behavioral directive
2. Determine next session number from latest entry
3. Create entry in `docs/ai-flow-documentation/entries/`
4. Update index table in `docs/ai-flow-documentation/index.md`
5. Suggest 2-4 screenshots; wait for user to provide before referencing
```

## Notes

- The brief is a living document. Update it when the project's documentation needs change.
- Not every section is required. A simple project might only need audience, content types, and owned files.
- The worked example above shows what the portfolio project's brief would look like. Your project will look different.
