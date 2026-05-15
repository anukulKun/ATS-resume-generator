# Architecture

ATS Resume Generator is a local job-search helper built around markdown files, YAML configuration, and small Node.js scripts.

It is not tied to one AI runner. Any compatible local AI assistant can use the project if it reads `AGENTS.md` and `AGENT_INSTRUCTIONS.md`.

## Main Flow

1. The user provides a job URL or job description.
2. The AI runner reads the shared mode files and the user's private files.
3. ATS Resume Generator evaluates fit, gaps, compensation, and posting legitimacy.
4. It writes a report to `reports/`.
5. It can generate a tailored CV PDF in `output/`.
6. It writes a tracker TSV file in `batch/tracker-additions/`.
7. `scripts/merge-tracker.mjs` merges tracker additions into `data/applications.md`.

## Data Flow

```text
cv.md                         -> user CV
config/profile.yml            -> user goals and preferences
modes/_profile.md             -> user-specific role framing
portals.yml                   -> companies to scan
starter-kit/                  -> files new users copy during setup
templates/cv-template.html    -> PDF layout
templates/states.yml          -> tracker status values
scripts/                      -> Node helper commands
```

## Important Folders

| Folder | Purpose |
|--------|---------|
| `starter-kit/` | First-time setup files users copy |
| `modes/` | Instructions for each ATS Resume Generator task |
| `templates/` | PDF layout and tracker status files |
| `scripts/` | Node helper commands |
| `data/` | Private tracker data |
| `reports/` | Private evaluation reports |
| `output/` | Private generated PDFs |
| `batch/` | Optional batch prompt and tracker additions |

## Pipeline Integrity

| Script | Purpose |
|--------|---------|
| `scripts/doctor.mjs` | Beginner-friendly setup check |
| `scripts/merge-tracker.mjs` | Merges tracker TSV additions |
| `scripts/verify-pipeline.mjs` | Checks tracker consistency |
| `scripts/dedup-tracker.mjs` | Removes duplicate company/role entries |
| `scripts/normalize-statuses.mjs` | Maps status aliases to canonical values |
| `scripts/cv-sync-check.mjs` | Checks CV/profile setup consistency |

