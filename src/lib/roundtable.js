/**
 * Roundtable — Multi-Agent Debate Orchestrator for The Council
 *
 * Runs strategic questions through a hybrid debate process:
 *   Phase 1: Parallel first takes (all agents respond independently)
 *   Phase 2: Rebuttal round (each agent sees all first takes, responds)
 *   Phase 3: Synthesis (three modes — moderator, guided, raw)
 *
 * Synthesis modes:
 *   - 'moderator': Echo synthesizes the debate into a consolidated response
 *   - 'guided': Generates synthesis prompts for Chris based on key tensions
 *   - 'raw': Returns the full debate transcript for Chris to synthesize himself
 *
 * Usage:
 *   import { runRoundtable } from 'src/lib/roundtable.js';
 *
 *   const result = await runRoundtable({
 *     question: 'Should the thesis foreground governance or augmentation?',
 *     agents: ['athena', 'prometheus'],
 *     synthesisMode: 'moderator',
 *   });
 */

import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { assembleSystemPrompt } from './knowledge.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');

const DEFAULT_MODEL = 'claude-sonnet-4-20250514';

/**
 * Load an agent's additional context (state documents, briefs) if it exists.
 * Follows the same conventions as the agent spec invocation examples.
 */
function loadAgentContext(agentName) {
  const contextPaths = {
    athena: 'thesis/state.md',
    prometheus: 'priorities/state.md',
  };

  const relativePath = contextPaths[agentName];
  if (!relativePath) return '';

  const fullPath = path.join(ROOT, relativePath);
  try {
    return fs.readFileSync(fullPath, 'utf-8');
  } catch {
    return '';
  }
}

/**
 * Call a single agent with a prompt and return the response text.
 */
async function callAgent(client, { systemPrompt, userMessage, model }) {
  const response = await client.messages.create({
    model: model || DEFAULT_MODEL,
    max_tokens: 2048,
    system: systemPrompt,
    messages: [{ role: 'user', content: userMessage }],
  });

  return response.content
    .filter(block => block.type === 'text')
    .map(block => block.text)
    .join('\n');
}

/**
 * Format a single agent's take for inclusion in the rebuttal context.
 */
function formatTake(agentName, text) {
  const displayName = agentName.charAt(0).toUpperCase() + agentName.slice(1);
  return `## ${displayName}'s Position\n\n${text}`;
}

/**
 * Format the complete debate transcript.
 */
function formatTranscript({ question, firstTakes, rebuttals, agents }) {
  const sections = [];

  sections.push(`# Council Roundtable\n\n**Question:** ${question}\n\n**Participants:** ${agents.map(a => a.charAt(0).toUpperCase() + a.slice(1)).join(', ')}`);

  sections.push('---\n\n# Phase 1: First Takes');
  for (const agentName of agents) {
    if (firstTakes[agentName]) {
      sections.push(formatTake(agentName, firstTakes[agentName]));
    }
  }

  sections.push('---\n\n# Phase 2: Rebuttals');
  for (const agentName of agents) {
    if (rebuttals[agentName]) {
      sections.push(formatTake(agentName, rebuttals[agentName]));
    }
  }

  return sections.join('\n\n');
}

// --- Phase 1: Parallel First Takes ---

async function runFirstTakes(client, { question, agents, agentContexts, model }) {
  const tasks = agents.map(async (agentName) => {
    const systemPrompt = assembleSystemPrompt({
      agentName,
      voice: 'conversational',
      includePersonality: true,
      additionalContext: agentContexts[agentName] || '',
    });

    const userMessage = `You are participating in a Council Roundtable — a structured debate among multiple Council experts on a strategic question. This is Phase 1: your independent first take.\n\nProvide your perspective on this question based on your expertise and role. Be substantive and specific. Take a clear position.\n\n**Question:** ${question}`;

    const response = await callAgent(client, { systemPrompt, userMessage, model });
    return { agentName, response };
  });

  const results = await Promise.all(tasks);

  const firstTakes = {};
  for (const { agentName, response } of results) {
    firstTakes[agentName] = response;
  }
  return firstTakes;
}

// --- Phase 2: Rebuttals ---

async function runRebuttals(client, { question, agents, firstTakes, agentContexts, model }) {
  const tasks = agents.map(async (agentName) => {
    const otherTakes = agents
      .filter(a => a !== agentName)
      .map(a => formatTake(a, firstTakes[a]))
      .join('\n\n');

    const systemPrompt = assembleSystemPrompt({
      agentName,
      voice: 'conversational',
      includePersonality: true,
      additionalContext: agentContexts[agentName] || '',
    });

    const userMessage = `You are participating in a Council Roundtable — Phase 2: Rebuttals.\n\nYou have already given your first take on this question. Now you have read the other experts' positions. Respond to them: where do you agree, where do you disagree, what did they miss, what did they surface that shifts your thinking?\n\nBe direct. Name specific points of agreement and disagreement. If another expert changed your mind on something, say so explicitly.\n\n**Question:** ${question}\n\n**Your first take:**\n${firstTakes[agentName]}\n\n**Other experts' positions:**\n${otherTakes}`;

    const response = await callAgent(client, { systemPrompt, userMessage, model });
    return { agentName, response };
  });

  const results = await Promise.all(tasks);

  const rebuttals = {};
  for (const { agentName, response } of results) {
    rebuttals[agentName] = response;
  }
  return rebuttals;
}

// --- Phase 3: Synthesis ---

/**
 * Moderator synthesis: Echo reads the full debate and produces a consolidated response.
 */
async function synthesizeModerator(client, { transcript, question, model }) {
  const systemPrompt = assembleSystemPrompt({
    agentName: 'echo',
    voice: 'conversational',
    includePersonality: false,
  });

  const userMessage = `You are synthesizing a Council Roundtable debate.\n\nRead the full debate transcript below. Produce a synthesis that:\n1. Identifies the key points of agreement across experts\n2. Names the genuine tensions and disagreements that remain\n3. Surfaces the strongest arguments from each side\n4. Offers a consolidated perspective — not a compromise that dilutes everything, but an integration that holds the tensions productively\n\nDo not flatten disagreement. If experts genuinely disagree, say so and explain why. The synthesis should be more useful than any individual take.\n\n**Question:** ${question}\n\n---\n\n${transcript}`;

  return callAgent(client, { systemPrompt, userMessage, model });
}

/**
 * Guided synthesis: Generates structured prompts for Chris to work through.
 */
async function synthesizeGuided(client, { transcript, question, model }) {
  const systemPrompt = assembleSystemPrompt({
    agentName: 'echo',
    voice: 'conversational',
    includePersonality: false,
  });

  const userMessage = `You are preparing synthesis prompts from a Council Roundtable debate.\n\nRead the full debate transcript below. Generate 3-5 focused prompts that help Chris synthesize the debate himself. Each prompt should:\n- Target a specific tension or decision point that emerged\n- Reference the specific expert positions that create the tension\n- Be a question Chris can actually answer based on what he knows\n\nThe prompts should be ordered: start with the most fundamental tension and work toward more specific decisions. Do not answer the prompts yourself. Your job is to give Chris the right questions to think through.\n\nFormat each prompt with a brief context line (what tension it addresses) followed by the question.\n\n**Question:** ${question}\n\n---\n\n${transcript}`;

  return callAgent(client, { systemPrompt, userMessage, model });
}

/**
 * Raw synthesis: Returns the transcript as-is for Chris to read and synthesize.
 */
function synthesizeRaw({ transcript }) {
  return transcript;
}

// --- Main Entry Point ---

/**
 * Run a full Council Roundtable.
 *
 * @param {Object} options
 * @param {string} options.question - The strategic question to debate
 * @param {string[]} options.agents - Agent names to participate (e.g., ['athena', 'prometheus'])
 * @param {'moderator'|'guided'|'raw'} [options.synthesisMode='moderator'] - How to synthesize the debate
 * @param {string} [options.model] - Override the default model
 * @param {Object} [options.agentContexts] - Override auto-loaded agent contexts
 * @param {Anthropic} [options.client] - Override the Anthropic client
 * @returns {Object} { transcript, synthesis, synthesisMode, phases }
 */
export async function runRoundtable({
  question,
  agents,
  synthesisMode = 'moderator',
  model,
  agentContexts: providedContexts,
  client: providedClient,
}) {
  if (!question) throw new Error('Roundtable requires a question.');
  if (!agents || agents.length < 2) throw new Error('Roundtable requires at least 2 agents.');

  const client = providedClient || new Anthropic();

  // Load agent contexts (state documents) unless overridden
  const agentContexts = providedContexts || {};
  for (const agentName of agents) {
    if (!agentContexts[agentName]) {
      agentContexts[agentName] = loadAgentContext(agentName);
    }
  }

  // Phase 1: Parallel first takes
  const firstTakes = await runFirstTakes(client, { question, agents, agentContexts, model });

  // Phase 2: Rebuttals (parallel, each seeing others' first takes)
  const rebuttals = await runRebuttals(client, { question, agents, firstTakes, agentContexts, model });

  // Build transcript
  const transcript = formatTranscript({ question, firstTakes, rebuttals, agents });

  // Phase 3: Synthesis
  let synthesis;
  if (synthesisMode === 'moderator') {
    synthesis = await synthesizeModerator(client, { transcript, question, model });
  } else if (synthesisMode === 'guided') {
    synthesis = await synthesizeGuided(client, { transcript, question, model });
  } else {
    synthesis = synthesizeRaw({ transcript });
  }

  return {
    question,
    agents,
    synthesisMode,
    transcript,
    synthesis,
    phases: {
      firstTakes,
      rebuttals,
    },
  };
}

/**
 * Run all three synthesis modes and return results for comparison.
 * Useful for studying which synthesis approach produces the best outcomes.
 *
 * @param {Object} options - Same as runRoundtable, minus synthesisMode
 * @returns {Object} { transcript, moderator, guided, raw, phases }
 */
export async function runRoundtableComparison({
  question,
  agents,
  model,
  agentContexts: providedContexts,
  client: providedClient,
}) {
  if (!question) throw new Error('Roundtable requires a question.');
  if (!agents || agents.length < 2) throw new Error('Roundtable requires at least 2 agents.');

  const client = providedClient || new Anthropic();

  const agentContexts = providedContexts || {};
  for (const agentName of agents) {
    if (!agentContexts[agentName]) {
      agentContexts[agentName] = loadAgentContext(agentName);
    }
  }

  // Phases 1 & 2 run once
  const firstTakes = await runFirstTakes(client, { question, agents, agentContexts, model });
  const rebuttals = await runRebuttals(client, { question, agents, firstTakes, agentContexts, model });
  const transcript = formatTranscript({ question, firstTakes, rebuttals, agents });

  // All three synthesis modes (moderator and guided can run in parallel)
  const [moderator, guided] = await Promise.all([
    synthesizeModerator(client, { transcript, question, model }),
    synthesizeGuided(client, { transcript, question, model }),
  ]);
  const raw = synthesizeRaw({ transcript });

  return {
    question,
    agents,
    transcript,
    moderator,
    guided,
    raw,
    phases: {
      firstTakes,
      rebuttals,
    },
  };
}
