#!/usr/bin/env node
/**
 * fetch-pkg.js — Wire up chris-pkg before build/dev
 *
 * Local dev (PKG_PATH set): symlinks knowledge/pkg -> local chris-pkg clone.
 *   Edits to chris-pkg are reflected instantly without restarting dev.
 *
 * Vercel (CHRIS_PKG_TOKEN set): clones ithinkitschris/chris-pkg via GitHub PAT.
 *
 * Neither set: exits with an error (knowledge/pkg won't exist).
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Load .env.local if present (so PKG_PATH / CHRIS_PKG_TOKEN are available)
const envLocalPath = path.join(ROOT, '.env.local');
if (fs.existsSync(envLocalPath)) {
  for (const line of fs.readFileSync(envLocalPath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = val;
  }
}

const PKG_DIR = path.join(ROOT, 'knowledge', 'pkg');
const TMP_DIR = path.join(ROOT, '.pkg-clone-tmp');
const pkgPath = process.env.PKG_PATH;
const token = process.env.CHRIS_PKG_TOKEN;

// -- Local dev: symlink to local chris-pkg clone --
if (pkgPath) {
  if (fs.existsSync(PKG_DIR)) execSync(`rm -rf "${PKG_DIR}"`);
  fs.symlinkSync(pkgPath, PKG_DIR);
  console.log(`[fetch-pkg] Symlinked knowledge/pkg -> ${pkgPath}`);
  process.exit(0);
}

// -- Vercel: clone via GitHub PAT --
if (!token) {
  console.error('[fetch-pkg] Neither PKG_PATH nor CHRIS_PKG_TOKEN is set — cannot load PKG.');
  process.exit(1);
}

try {
  console.log('[fetch-pkg] Cloning ithinkitschris/chris-pkg...');

  if (fs.existsSync(TMP_DIR)) execSync(`rm -rf "${TMP_DIR}"`);

  const repoUrl = `https://x-access-token:${token}@github.com/ithinkitschris/chris-pkg.git`;
  execSync(`git clone --depth=1 "${repoUrl}" "${TMP_DIR}"`, { stdio: 'inherit' });
  execSync(`rm -rf "${TMP_DIR}/.git"`);

  if (fs.existsSync(PKG_DIR)) execSync(`rm -rf "${PKG_DIR}"`);
  fs.renameSync(TMP_DIR, PKG_DIR);

  console.log('[fetch-pkg] chris-pkg cloned successfully.');
} catch (err) {
  if (fs.existsSync(TMP_DIR)) execSync(`rm -rf "${TMP_DIR}"`);
  console.error('[fetch-pkg] Clone failed:', err.message);
  process.exit(1);
}
