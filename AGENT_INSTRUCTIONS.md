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

Read `docs/project/DATA_CONTRACT.md` for the full contract. Read `docs/AGENT_SETUP.md` for the beginner-friendly setup script.

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

When the user says "read AGENTS.md", "help me set this up", or similar, do not only summarize these rules. Start onboarding immediately. The user should not have to understand the folder structure before getting help.

Recommended first response:

```text
I read the setup instructions. I can set this up with you.

Paste your resume, LinkedIn profile text, existing CV, or rough work history here.

If you do not have that ready, answer these:
1. What job titles are you targeting?
2. Where do you want to work? Remote, hybrid, onsite, or specific cities?
3. What recent jobs, projects, or skills should your CV highlight?
4. What kinds of jobs should we avoid?

I will use your answers to create or update cv.md, config/profile.yml, modes/_profile.md, and portals.yml.
```

Also tell the user:

```text
The example files are already in starter-kit/. You can look there if you want, but you can also just paste your information here and I will build the real files for you.
```

Before evaluating, scanning, or generating PDFs, check whether the basics exist:

1. `cv.md`
2. `config/profile.yml`
3. `modes/_profile.md`
4. `portals.yml`

These files are user setup files. They are intentionally ignored by Git because they can contain private personal data.

If any required file is missing, guide the user through setup instead of continuing. Do not make a non-technical user hunt through folders first. Offer to create or update the setup files for them.

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

Default first-run behavior:

1. Copy any missing starter files.
2. Ask the user for their information in chat.
3. Accept pasted resume text, LinkedIn profile text, an existing CV, or rough notes.
4. Write the user's answers into the correct private setup files.
5. Run `npm run doctor`.
6. Show the user which files were created or updated.

Ask simple questions, one small group at a time:

- "Paste your resume, LinkedIn profile text, or rough work history here."
- "What job titles are you targeting?"
- "Where do you want to work? Remote, hybrid, onsite, or specific cities?"
- "What salary range or contract rate do you want?"
- "What kinds of jobs should we avoid?"
- "Which companies or job boards do you want to scan? You can also say 'use the example list for now.'"

If the user pastes a resume or LinkedIn text, use it to build `cv.md`. Do not invent missing experience, dates, education, employers, numbers, credentials, or links. If something important is missing, ask a follow-up question or leave a clear placeholder.

Create or update these files:

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

