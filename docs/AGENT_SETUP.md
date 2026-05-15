# Agent Setup Guide

This file is for any AI assistant helping a new user set up ATS Resume Generator.

The user may not know where files are or what YAML, Markdown, Git, Node.js, or a terminal means. Keep the setup simple. Ask for information in normal language and write the files for them when possible.

## What To Do First

When the user says "read AGENTS.md", "set this up", "I am new", or something similar, respond like this:

```text
I can set this up with you. You do not need to find every file yourself.

First, paste one of these:
- your resume text
- your LinkedIn profile text
- rough work history notes

If you do not have any of those ready, tell me:
1. What job titles do you want?
2. Where do you want to work? Remote, hybrid, onsite, or specific cities?
3. What recent jobs, projects, skills, or education should I include?
4. What salary range or contract rate do you want?
5. What kinds of jobs should we avoid?

I will use your answers to create or update the setup files.
```

Do not only summarize rules. Start helping the user.

## Files The User Needs

The examples are in:

```text
starter-kit/
```

The real user files are:

| Real file | Where it is | What it means |
|-----------|-------------|---------------|
| `cv.md` | Main project folder | The user's resume text |
| `config/profile.yml` | `config/` folder | Job search settings such as target role, location, salary, and preferences |
| `modes/_profile.md` | `modes/` folder | Plain-English notes about goals, strengths, dealbreakers, and work style |
| `portals.yml` | Main project folder | Companies or job boards to scan |

If a real file is missing, copy the matching example first:

| Example file | Copy to |
|--------------|---------|
| `starter-kit/cv-example.md` | `cv.md` |
| `starter-kit/profile.example.yml` | `config/profile.yml` |
| `starter-kit/profile-notes.template.md` | `modes/_profile.md` |
| `starter-kit/portals.example.yml` | `portals.yml` |

## What To Ask For

Ask for a resume, LinkedIn text, existing CV, or rough notes first.

If information is missing, ask short follow-up questions:

- What job titles are you targeting?
- What location do you want?
- Are you open to remote, hybrid, or onsite work?
- What salary range or hourly rate do you want?
- Which skills should the resume highlight?
- Which industries, roles, or companies should we avoid?
- Which companies or job boards should `portals.yml` scan?

Do not invent missing experience, employers, dates, links, degrees, certificates, numbers, or achievements. Ask the user or leave a clear placeholder.

## How To Finish Setup

After creating or updating the four setup files, run:

```bash
npm run doctor
```

If it passes, tell the user they can paste a job description or job link.

Use this simple next step:

```text
Setup is ready. Paste a job link or job description, and I will evaluate it against your resume.
```

## How Job Evaluation Works

When the user pastes a job:

1. Read the job post.
2. Compare it with `cv.md`, `config/profile.yml`, and `modes/_profile.md`.
3. Tell the user if it is worth applying.
4. Create a tailored resume.
5. Generate or help generate a PDF in `output/`.
6. Track the job using the existing tracker flow.

Always remind the user to review the tailored resume before submitting it.

## Supported AI Assistants

This project can be used with any assistant that can read and edit files in this folder, including:

- Codex
- Claude Code
- VS Code chat assistants
- OpenCode
- other local AI coding assistants

The assistant brand is not the important part. The important part is reading `AGENTS.md`, `AGENT_INSTRUCTIONS.md`, this file, and the relevant files in `modes/`.
