# Setup

Start with the main [README](../README.md). It is written for first-time users and has the full step-by-step setup.

Short version:

```bash
npm install
npx playwright install chromium
npm run doctor
```

Then create your private files:

```bash
cp starter-kit/profile.example.yml config/profile.yml
cp starter-kit/profile-notes.template.md modes/_profile.md
cp starter-kit/portals.example.yml portals.yml
```

Create `cv.md` in the project root and paste your CV into it.

Then start your chosen AI runner in this folder. For Codex:

```bash
codex
```

Ask it:

```text
Read AGENTS.md and help me set up ATS Resume Generator.
```

