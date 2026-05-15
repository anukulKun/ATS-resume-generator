# Optional Batch Processing

Most users do not need batch processing. Use the normal `/ATS Resume Generator` flow first.

Batch processing is for people who already have a list of job URLs and want to evaluate several of them with the same ATS Resume Generator logic.

## Files

| File or folder | Purpose |
|----------------|---------|
| `batch-prompt.md` | Instructions for one batch worker |
| `tracker-additions/` | Temporary TSV tracker rows |
| `logs/` | Optional local logs |

## How to Use the Concept

1. Put job URLs in a simple list.
2. Evaluate each job using the normal ATS Resume Generator evaluation mode.
3. Save each tracker row as a TSV file in `batch/tracker-additions/`.
4. Run `node scripts/merge-tracker.mjs` when finished.

This repository no longer includes an advanced shell runner. That keeps the beginner setup smaller and easier to understand.

