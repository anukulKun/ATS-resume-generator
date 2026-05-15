# Batch Mode

Batch mode is optional. Most users should evaluate jobs one at a time with `/ATS Resume Generator`.

Use batch mode only when the user already has a list of job URLs and understands that each job still needs an honest evaluation, tailored CV, and tracker entry.

## Goal

Evaluate multiple jobs with the same standards used by the normal ATS Resume Generator flow:

1. Read the job description.
2. Compare it to `cv.md`, `config/profile.yml`, and `modes/_profile.md`.
3. Create a report in `reports/`.
4. Generate a tailored PDF in `output/` when appropriate.
5. Write a TSV tracker addition in `batch/tracker-additions/`.
6. Run `node scripts/merge-tracker.mjs` after the batch.

## Files

| Path | Purpose |
|------|---------|
| `batch/batch-prompt.md` | Self-contained worker prompt |
| `batch/tracker-additions/` | TSV rows waiting to be merged |
| `batch/logs/` | Optional local logs |

## Rules

- Never submit applications for the user.
- Never invent experience or metrics.
- Do not add tracker rows directly to `data/applications.md`.
- Keep one TSV file per evaluated job.
- Stop and ask the user before continuing if a job requires a login, payment, or sensitive personal information.

