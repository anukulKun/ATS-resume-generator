# Codex Setup

Codex is the first supported AI runner for this repo.

Official references:

- OpenAI Codex CLI getting started: https://help.openai.com/en/articles/11096431
- OpenAI Codex CLI repository: https://github.com/openai/codex

## Install Codex

```bash
npm install -g @openai/codex
```

Check it installed:

```bash
codex --version
```

## Use Codex With ATS Resume Generator

Open Terminal or Command Prompt in the `ATS-resume-generator` folder.

Run:

```bash
codex
```

Then ask it to use this repository:

```text
Read AGENTS.md and help me set up ATS Resume Generator.
```

After setup, you can paste a job posting and ask:

```text
Use ATS Resume Generator to evaluate this job and tell me whether it is worth applying.
```

## What Codex Should Read

| Task | Files |
|------|-------|
| General rules | `AGENTS.md` + `AGENT_INSTRUCTIONS.md` |
| Job evaluation | `modes/_shared.md` + `modes/oferta.md` |
| PDF generation | `modes/_shared.md` + `modes/pdf.md` |
| Company scan | `modes/_shared.md` + `modes/scan.md` |
| Tracker status | `modes/tracker.md` |

Codex should reuse the existing files. It should not create a new workflow.


