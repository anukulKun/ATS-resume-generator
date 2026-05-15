# Data Contract

This document defines which files belong to the user and which files belong to the shared system.

## User Layer

These files contain private data or personal customization. Do not commit real versions of these files.

| File | Purpose |
|------|---------|
| `cv.md` | User CV in markdown |
| `config/profile.yml` | User identity, goals, salary range, location, and preferences |
| `modes/_profile.md` | User-specific role framing and writing style |
| `portals.yml` | User's customized company list |
| `writing-samples/*` | User writing samples |
| `data/*` | Private tracker data |
| `reports/*` | Private evaluation reports |
| `output/*` | Generated PDFs |
| `jds/*` | Saved job descriptions |

## System Layer

These files are safe to share and update.

| File | Purpose |
|------|---------|
| `AGENTS.md` | Entry point for AI runners |
| `AGENT_INSTRUCTIONS.md` | Shared agent behavior and routing rules |
| `modes/*` | Task instructions |
| `starter-kit/*` | First-time setup files users copy |
| `templates/*` | PDF layout and tracker status files |
| `scripts/*.mjs` | Utility scripts |
| `batch/*` | Optional batch prompt and tracker additions structure |
| `docs/*` | Documentation |
| `fonts/*` | Self-hosted fonts |
| `VERSION` | Current version number |
| `docs/project/DATA_CONTRACT.md` | This file |

## The Rule

If a file is in the user layer, do not overwrite it during updates and do not commit real user data.

If a file is in the system layer, keep it generic. Do not add one person's career story, email address, salary, CV, or job search data.
