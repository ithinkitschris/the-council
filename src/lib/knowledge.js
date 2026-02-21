/**
 * Knowledge Loader — Tiered PKG System for The Council
 *
 * PKG layout (knowledge/pkg/ — symlinked or cloned from ithinkitschris/chris-pkg):
 *   core/identity.md, core/thinking.md, core/working.md, core/values.md
 *   core/voice/common.md, core/voice/conversational.md, core/voice/essay.md
 *   positions/design.md, positions/technology.md, positions/career.md, positions/personal.md
 *   context/life.md, context/interpersonal.md, context/behavioral.md, context/personal-life.md
 *
 * Host behavioral layers (knowledge/directive/):
 *   {agent-name}-behavioral.md — per-agent behavioral instructions
 *
 * System prompt assembly order (U-shaped attention):
 *   1. Core PKG (top — highest attention)
 *   2. Voice layer
 *   3. Host directive
 *   4. Positions + context
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', '..');
const KNOWLEDGE_DIR = path.join(ROOT, 'knowledge');
const PKG_DIR = path.join(KNOWLEDGE_DIR, 'pkg');
const DIRECTIVE_DIR = path.join(KNOWLEDGE_DIR, 'directive');

function safeReadFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    console.error(`[knowledge] Failed to read ${filePath}: ${err.message}`);
    return '';
  }
}

// --- Caches ---
let cachedPKGCore = null;
let cachedPKGPersonality = null;
let cachedVoiceConversational = null;
let cachedVoiceEssay = null;
const cachedDirectives = {};

// --- Tiered PKG Loaders ---

/**
 * Tier 1: Core PKG — identity, thinking, working, values.
 * Always loaded for every agent.
 */
export function loadPKGCore() {
  if (cachedPKGCore) return cachedPKGCore;
  const files = ['identity.md', 'thinking.md', 'working.md', 'values.md'];
  cachedPKGCore = files
    .map(f => safeReadFile(path.join(PKG_DIR, 'core', f)))
    .filter(Boolean)
    .join('\n\n');
  return cachedPKGCore;
}

/**
 * Tier 2: Extended personality — positions + context.
 * Loaded for most agents; some may load selectively.
 */
export function loadPKGPersonality() {
  if (cachedPKGPersonality) return cachedPKGPersonality;
  const positionFiles = ['technology.md', 'career.md', 'design.md', 'personal.md'];
  const contextFiles = ['life.md', 'interpersonal.md', 'behavioral.md', 'personal-life.md'];
  const positions = positionFiles
    .map(f => safeReadFile(path.join(PKG_DIR, 'positions', f)))
    .filter(Boolean)
    .join('\n\n');
  const context = contextFiles
    .map(f => safeReadFile(path.join(PKG_DIR, 'context', f)))
    .filter(Boolean)
    .join('\n\n');
  cachedPKGPersonality = [positions, context].join('\n\n');
  return cachedPKGPersonality;
}

/**
 * Conversational voice layer — common.md + conversational.md.
 */
export function loadVoiceConversational() {
  if (cachedVoiceConversational !== null) return cachedVoiceConversational;
  const common = safeReadFile(path.join(PKG_DIR, 'core', 'voice', 'common.md'));
  const conversational = safeReadFile(path.join(PKG_DIR, 'core', 'voice', 'conversational.md'));
  cachedVoiceConversational = [common, conversational].filter(Boolean).join('\n\n');
  return cachedVoiceConversational;
}

/**
 * Essay voice layer — common.md + essay.md.
 */
export function loadVoiceEssay() {
  if (cachedVoiceEssay !== null) return cachedVoiceEssay;
  const common = safeReadFile(path.join(PKG_DIR, 'core', 'voice', 'common.md'));
  const essay = safeReadFile(path.join(PKG_DIR, 'core', 'voice', 'essay.md'));
  cachedVoiceEssay = [common, essay].filter(Boolean).join('\n\n');
  return cachedVoiceEssay;
}

/**
 * Documentation voice layer — common.md + documentation.md.
 */
export function loadVoiceDocumentation() {
  const common = safeReadFile(path.join(PKG_DIR, 'core', 'voice', 'common.md'));
  const docs = safeReadFile(path.join(PKG_DIR, 'core', 'voice', 'documentation.md'));
  return [common, docs].filter(Boolean).join('\n\n');
}

// --- Host Directive Loader ---

/**
 * Load a Council member's behavioral directive by agent name.
 * Reads from knowledge/directive/{agentName}-behavioral.md
 */
export function loadDirective(agentName) {
  if (cachedDirectives[agentName]) return cachedDirectives[agentName];
  const filePath = path.join(DIRECTIVE_DIR, `${agentName}-behavioral.md`);
  cachedDirectives[agentName] = safeReadFile(filePath);
  return cachedDirectives[agentName];
}

// --- System Prompt Assembly ---

/**
 * Assemble a full system prompt for a Council member.
 * Follows U-shaped attention: Core PKG (top) > Voice > Directive > Personality (bottom).
 *
 * @param {Object} options
 * @param {string} options.agentName - Name of the agent (maps to directive file)
 * @param {string} [options.voice='conversational'] - Voice register: 'conversational', 'essay', or 'documentation'
 * @param {boolean} [options.includePersonality=true] - Whether to include positions + context
 * @param {string} [options.additionalContext] - Any extra context to append
 */
export function assembleSystemPrompt({
  agentName,
  voice = 'conversational',
  includePersonality = true,
  additionalContext = '',
}) {
  const sections = [];

  // 1. Core PKG (top — highest attention)
  sections.push(loadPKGCore());

  // 2. Voice layer
  if (voice === 'essay') {
    sections.push(loadVoiceEssay());
  } else if (voice === 'documentation') {
    sections.push(loadVoiceDocumentation());
  } else {
    sections.push(loadVoiceConversational());
  }

  // 3. Host directive
  const directive = loadDirective(agentName);
  if (directive) sections.push(directive);

  // 4. Positions + context
  if (includePersonality) {
    sections.push(loadPKGPersonality());
  }

  // 5. Additional context (dynamic, per-session)
  if (additionalContext) {
    sections.push(additionalContext);
  }

  return sections.filter(Boolean).join('\n\n---\n\n');
}
