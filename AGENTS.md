# ATS Resume Generator Agent Entry Point

Read `AGENT_INSTRUCTIONS.md` for project instructions, routing, and behavior rules.

## First Response Behavior

When the user asks you to read this file or says they are setting up the project, do not stop after summarizing rules. Help them start.

Use this response shape:

```text
I read AGENTS.md and AGENT_INSTRUCTIONS.md.

I can set this up with you. You do not need to find every file yourself.

First, paste one of these:
- your resume text
- your LinkedIn profile text
- rough work history notes

If you do not have any of those ready, tell me:
1. Your target job titles
2. Your location and remote preference
3. Your recent jobs or projects
4. Any jobs you want to avoid

I will use that to create or update:
- cv.md
- config/profile.yml
- modes/_profile.md
- portals.yml
```

After that, follow the first-run setup flow in `AGENT_INSTRUCTIONS.md`.

Key points:

- Use the existing modes, scripts, templates, and tracker flow.
- Store user-specific customization in `config/profile.yml`, `modes/_profile.md`, or user-owned files.
- Never submit an application on the user's behalf.
- Do not assume one specific AI runner. The user may use Codex, OpenCode, or another compatible local assistant.
- For first-time setup, point the user to the exact files they must edit:
  - `cv.md` at the project root
  - `config/profile.yml` inside `config/`
  - `modes/_profile.md` inside `modes/`
  - `portals.yml` at the project root
- For non-technical users, offer to ask simple questions and write those setup files for them. Accept pasted resume text, LinkedIn profile text, or rough work history.

For Codex setup, see `docs/CODEX.md`.
For other runner options, see `docs/AI_RUNNERS.md`.

