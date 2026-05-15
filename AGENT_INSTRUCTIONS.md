# ATS Resume Generator Agent Instructions

ATS Resume Generator helps a job seeker evaluate roles, tailor their CV, track applications, scan job boards, and prepare for interviews.

These rules apply to any AI runner the user chooses, including Codex, OpenCode, or another local coding assistant.

## Core Rules

- Reuse the existing modes, scripts, templates, and tracker flow. Do not create a second workflow for the same job.
- Keep user-specific details in `config/profile.yml`, `modes/_profile.md`, `cv.md`, `portals.yml`, or `writing-samples/`.
- Do not put personal data in shared system files such as `modes/_shared.md`, scripts, templates, or docs.
- Never invent experience, credentials, projects, numbers, employers, or links.
- Never submit an application, send an email, or message a recruiter on the user's behalf.
- Strongly discourage low-fit applications. If a job scores below 4.0/5, recommend against applying unless the user gives a clear reason to continue.

## Data Contract

Read `docs/project/DATA_CONTRACT.md` for the full contract.

User-owned files:

- `cv.md`
- `config/profile.yml`
- `modes/_profile.md`
- `portals.yml`
- `writing-samples/`
- `data/`
- `reports/`
- `output/`
- `interview-prep/`

System files:

- `modes/`
- `templates/`
- `scripts/`
- docs
- batch prompts

When the user asks to customize target roles, scoring preferences, writing style, compensation targets, location rules, or proof points, write those changes to the user-owned files.

## First Run Onboarding

Before evaluating, scanning, or generating PDFs, check whether the basics exist:

1. `cv.md`
2. `config/profile.yml`
3. `modes/_profile.md`
4. `portals.yml`

These files are user setup files. They are intentionally ignored by Git because they can contain private personal data.

If any required file is missing, guide the user through setup instead of continuing. Be concrete and beginner-friendly: tell the user the exact folder and file path to open.

Use these starter files:

| Starter file | Copy to | What the user edits there |
|--------------|---------|---------------------------|
| `starter-kit/cv-example.md` | `cv.md` | Their real CV: name, contact info, experience, education, skills |
| `starter-kit/profile.example.yml` | `config/profile.yml` | Their job search profile: target role, location, salary, preferences |
| `starter-kit/profile-notes.template.md` | `modes/_profile.md` | Plain-English notes about goals, strengths, dealbreakers, and work style |
| `starter-kit/portals.example.yml` | `portals.yml` | Companies and job boards to scan |

Windows setup commands:

```cmd
copy starter-kit\profile.example.yml config\profile.yml
copy starter-kit\profile-notes.template.md modes\_profile.md
copy starter-kit\cv-example.md cv.md
copy starter-kit\portals.example.yml portals.yml
```

Mac or Linux setup commands:

```bash
cp starter-kit/profile.example.yml config/profile.yml
cp starter-kit/profile-notes.template.md modes/_profile.md
cp starter-kit/cv-example.md cv.md
cp starter-kit/portals.example.yml portals.yml
```

After copying, tell the user to open these files in any text editor:

- `cv.md` at the project root
- `config/profile.yml` inside the `config/` folder
- `modes/_profile.md` inside the `modes/` folder
- `portals.yml` at the project root

Explain the files in plain language:

- `cv.md` is "your resume text."
- `config/profile.yml` is "your job search settings."
- `modes/_profile.md` is "extra notes about what you want and what to avoid."
- `portals.yml` is "the list of companies or job boards to scan."

Then run:

```bash
npm run doctor
```

Only continue to job evaluation after `npm run doctor` passes or after clearly explaining what is still missing.

## Mode Routing

| User intent | Mode files |
|-------------|------------|
| Raw job description or job URL | `modes/_shared.md` + `modes/auto-pipeline.md` |
| Evaluate one job | `modes/_shared.md` + `modes/oferta.md` |
| Compare jobs | `modes/_shared.md` + `modes/ofertas.md` |
| Generate a PDF CV | `modes/_shared.md` + `modes/pdf.md` |
| Scan configured portals | `modes/_shared.md` + `modes/scan.md` |
| Process pending URLs | `modes/_shared.md` + `modes/pipeline.md` |
| Application form help | `modes/_shared.md` + `modes/apply.md` |
| Tracker status | `modes/tracker.md` |
| Company research | `modes/deep.md` |
| Interview prep | `modes/interview-prep.md` |
| Training or certification review | `modes/training.md` |
| Portfolio project review | `modes/project.md` |
| Rejection pattern analysis | `modes/patterns.md` |
| Follow-up cadence | `modes/followup.md` |

Treat a pasted job description or job URL as the full pipeline unless the user asks for evaluation only.

## Tracker Flow

- Do not add new rows directly to `data/applications.md`.
- Write one TSV file per evaluation to `batch/tracker-additions/`.
- Run `node scripts/merge-tracker.mjs` after a batch of evaluations.
- You may edit existing rows in `data/applications.md` only to update status or notes.
- Do not create duplicate entries for the same company and role.

TSV format:

```text
{num}\t{date}\t{company}\t{role}\t{status}\t{score}/5\t{pdf}\t[{num}](reports/{num}-{slug}-{date}.md)\t{note}
```

## Job Verification

Do not rely only on generic web fetches to decide whether a job is live when browser automation is available.

Check:

1. Job title and description are present
2. Apply button or application form is present
3. No clear closed or expired message is shown

If browser automation is not available, mark verification as unconfirmed.

## Quality Checks

Useful commands:

```bash
npm run doctor
npm run verify
node scripts/normalize-statuses.mjs
node scripts/dedup-tracker.mjs
```

`npm run doctor` is the beginner-friendly first check. Use it when setup or dependencies look broken.

