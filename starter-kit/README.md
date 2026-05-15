# Starter Kit

These are example files for new users.

You can open this folder to see what the setup files should look like. You do not have to edit these examples directly. The easier path is to paste your resume, LinkedIn text, or rough work history into your AI assistant and ask it to create the real files for you.

## Files

| File | Copy to | What it is |
|------|---------|------------|
| `profile.example.yml` | `config/profile.yml` | Your name, goals, location, salary range, and preferences |
| `profile-notes.template.md` | `modes/_profile.md` | Optional extra notes for the AI runner |
| `cv-example.md` | `cv.md` | Example CV format |
| `portals.example.yml` | `portals.yml` | Optional company list for job scanning |

## First-Time Setup

Mac or Linux:

```bash
cp starter-kit/profile.example.yml config/profile.yml
cp starter-kit/profile-notes.template.md modes/_profile.md
cp starter-kit/portals.example.yml portals.yml
cp starter-kit/cv-example.md cv.md
```

Windows Command Prompt:

```cmd
copy starter-kit\profile.example.yml config\profile.yml
copy starter-kit\profile-notes.template.md modes\_profile.md
copy starter-kit\portals.example.yml portals.yml
copy starter-kit\cv-example.md cv.md
```

After copying, you can edit the new files yourself, or ask your AI assistant to do it with you.

Beginner-friendly prompt:

```text
Read AGENTS.md and docs/AGENT_SETUP.md.
I am a new user. Ask me simple questions and help me create cv.md, config/profile.yml, modes/_profile.md, and portals.yml.
```

If you already have a resume or LinkedIn profile text, paste it:

```text
Here is my resume or LinkedIn profile text. Please use it to fill in cv.md and ask me what is still missing:

[paste your text here]
```

The AI runner should write the answers into:

- `cv.md`
- `config/profile.yml`
- `modes/_profile.md`
- `portals.yml`
