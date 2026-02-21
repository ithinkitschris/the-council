# The Council

A multi-agent augmentation system powered by a Personal Knowledge Graph.

MFA Thesis — Chris Lim, 2026

---

## What is this?

The Council is a multi-agent AI system where specialized agents draw from a shared Personal Knowledge Graph (PKG) to provide deep, context-aware augmentation. Each agent has distinct capabilities and behavioral directives, but all share canonical knowledge about the user.

Built on the **PKG > Host > Directive** framework:
- **PKG** — Pure knowledge, consumer-agnostic, version-controlled ([chris-pkg](https://github.com/ithinkitschris/chris-pkg))
- **Host** — This repo. Reads from the PKG, adds agent-specific behavior.
- **Directive** — Per-agent behavioral instructions in `knowledge/directive/`

## Setup

```bash
git clone https://github.com/ithinkitschris/the-council.git
cd the-council
cp .env.example .env.local    # Configure PKG_PATH and ANTHROPIC_API_KEY
npm install
npm run fetch-pkg             # Symlink chris-pkg
```

## Project Structure

```
scripts/fetch-pkg.js          PKG bootstrapper
knowledge/directive/          Per-agent behavioral files
src/lib/knowledge.js          PKG + directive loaders
agents/                       Agent definitions
thesis/                       Thesis structure and documentation
docs/process/                 Process documentation
```

## Thesis

See [thesis/structure.md](thesis/structure.md) for the thesis framework and [thesis/pivot-workshop.md](thesis/pivot-workshop.md) for the decision history behind this project.
