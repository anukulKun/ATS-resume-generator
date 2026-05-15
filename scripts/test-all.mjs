#!/usr/bin/env node

/**
 * Small repo check for ATS Resume Generator.
 *
 * Usage:
 *   node scripts/test-all.mjs
 */

import { execFileSync } from 'child_process';
import { existsSync, readdirSync, readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = dirname(SCRIPT_DIR);
const SAFE_GIT_ARGS = ['-c', `safe.directory=${ROOT.replace(/\\/g, '/')}`];

let passed = 0;
let failed = 0;

function pass(message) {
  console.log(`  OK  ${message}`);
  passed++;
}

function fail(message) {
  console.log(`  FAIL ${message}`);
  failed++;
}

function run(command, args = []) {
  try {
    return execFileSync(command, args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      timeout: 30000,
    }).trim();
  } catch {
    return null;
  }
}

function exists(path) {
  return existsSync(join(ROOT, path));
}

function read(path) {
  return readFileSync(join(ROOT, path), 'utf8');
}

console.log('\nATS Resume Generator repo check\n');

console.log('1. JavaScript syntax');
for (const file of readdirSync(SCRIPT_DIR).filter((name) => name.endsWith('.mjs'))) {
  if (run('node', ['--check', join('scripts', file)]) !== null) pass(`${file} syntax is valid`);
  else fail(`${file} has a syntax error`);
}

console.log('\n2. Core scripts');
const scripts = [
  ['scripts/verify-pipeline.mjs'],
  ['scripts/normalize-statuses.mjs'],
  ['scripts/dedup-tracker.mjs'],
  ['scripts/merge-tracker.mjs'],
];

for (const [script] of scripts) {
  if (run('node', [script]) !== null) pass(`${script} runs`);
  else fail(`${script} crashed`);
}

console.log('\n3. Liveness classifier');
try {
  const { classifyLiveness } = await import(pathToFileURL(join(ROOT, 'scripts', 'liveness-core.mjs')).href);
  const expired = classifyLiveness({
    finalUrl: 'https://example.com/jobs/closed-role',
    bodyText: 'This job is no longer open.',
    applyControls: [],
  });
  const active = classifyLiveness({
    finalUrl: 'https://example.com/jobs/open-role',
    bodyText: 'Senior Product Designer. Apply for this job.',
    applyControls: ['Apply for this job'],
  });

  if (expired.result === 'expired') pass('Closed jobs are detected');
  else fail(`Closed job was marked ${expired.result}`);

  if (active.result === 'active') pass('Open jobs are detected');
  else fail(`Open job was marked ${active.result}`);
} catch (error) {
  fail(`Liveness classifier crashed: ${error.message}`);
}

console.log('\n4. Required files');
const requiredFiles = [
  'README.md',
  'AGENTS.md',
  'AGENT_INSTRUCTIONS.md',
  'docs/project/DATA_CONTRACT.md',
  'starter-kit/profile.example.yml',
  'starter-kit/portals.example.yml',
  'templates/cv-template.html',
  'templates/states.yml',
  'modes/_shared.md',
  'starter-kit/profile-notes.template.md',
  'modes/auto-pipeline.md',
  'modes/oferta.md',
  'modes/pdf.md',
  'modes/scan.md',
  'modes/tracker.md',
  'scripts/doctor.mjs',
  'scripts/generate-pdf.mjs',
  'scripts/scan.mjs',
];

for (const file of requiredFiles) {
  if (exists(file)) pass(`${file} exists`);
  else fail(`${file} is missing`);
}

console.log('\n5. Private files are ignored');
const privateFiles = [
  'cv.md',
  'config/profile.yml',
  'modes/_profile.md',
  'portals.yml',
  'data/private-test-file.txt',
  'reports/private-test-file.md',
  'output/private-test-file.pdf',
];

for (const file of privateFiles) {
  const tracked = run('git', [...SAFE_GIT_ARGS, 'check-ignore', file]);
  if (tracked) pass(`${file} is ignored`);
  else fail(`${file} is not ignored`);
}

console.log('\n6. Personal data cleanup');
const forbidden = [
  'REAL_PERSON_NAME_DO_NOT_COMMIT',
];

for (const pattern of forbidden) {
  const result = run('git', [...SAFE_GIT_ARGS, 'grep', '-I', '-n', pattern, '--', '.']);
  const realMatches = result
    ? result.split('\n').filter((line) => !line.startsWith('scripts/test-all.mjs:'))
    : [];

  if (realMatches.length === 0) pass(`No tracked "${pattern}" references`);
  else fail(`Found "${pattern}" reference`);
}

console.log('\n7. Agent instructions');
const instructions = read('AGENT_INSTRUCTIONS.md');
for (const section of ['Core Rules', 'First Run Onboarding', 'Mode Routing', 'Tracker Flow', 'Job Verification']) {
  if (instructions.includes(section)) pass(`AGENT_INSTRUCTIONS.md has ${section}`);
  else fail(`AGENT_INSTRUCTIONS.md missing ${section}`);
}

console.log('\n' + '='.repeat(48));
console.log(`${passed} passed, ${failed} failed`);

if (failed > 0) process.exit(1);

