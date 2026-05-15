# AI Runner Options

ATS Resume Generator is just files, templates, and scripts. You can use it with different AI coding assistants.

## Option 1 - Codex

Use Codex if you want the first supported setup path.

```bash
npm install -g @openai/codex
codex
```

Then type:

```text
Read AGENTS.md and help me set up ATS Resume Generator.
```

Reference:

```text
https://help.openai.com/en/articles/11096431
```

## Option 2 - OpenCode or Another Local Agent

Use this if you already prefer another terminal AI tool.

Start your tool in the `ATS-resume-generator` folder and ask it:

```text
Read AGENTS.md and AGENT_INSTRUCTIONS.md. Help me evaluate jobs using the existing ATS Resume Generator modes and scripts.
```

The important part is not the brand of tool. The important part is that it reads:

- `AGENTS.md`
- `AGENT_INSTRUCTIONS.md`
- `modes/_shared.md`
- the task-specific file in `modes/`

## Provider Keys

Some AI runners need an API key. Others let you sign in through a browser.

ATS Resume Generator does not require one fixed provider. Use the account or API key required by your chosen runner.


