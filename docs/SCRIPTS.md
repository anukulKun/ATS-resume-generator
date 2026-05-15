# Scripts

These commands are optional helpers. Most users only need `npm run doctor`.

## Setup Check

```bash
npm run doctor
```

Checks whether Node.js, dependencies, Playwright, fonts, and project folders are ready.

## Generate a PDF

```bash
npm run pdf -- input.html output.pdf
```

Used by ATS Resume Generator after a job has been reviewed.

## Scan Job Pages

```bash
npm run scan
```

Uses `portals.yml` to look for matching jobs on configured company career pages.

## Merge Tracker Rows

```bash
npm run merge
```

Merges temporary tracker rows from `batch/tracker-additions/` into `data/applications.md`.

## Check Tracker Data

```bash
npm run verify
```

Checks tracker status names, report links, and common data problems.

## Clean Tracker Data

```bash
npm run normalize
npm run dedup
```

Normalizes status names and removes duplicate company/role entries.

## Check a Job Link

```bash
npm run liveness -- https://example.com/job/123
```

Checks whether a job posting appears to still be live.

## Direct Script Paths

All Node helper scripts live in `scripts/`.

Example:

```bash
node scripts/merge-tracker.mjs
```

