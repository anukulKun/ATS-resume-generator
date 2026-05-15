# ATS Resume Generator - Your AI Job Search Helper

ATS Resume Generator helps you turn your resume into a job-specific ATS-friendly resume. It can read a job post, compare it with your background, tell you if the job is worth applying to, create a tailored PDF resume, and keep a private job tracker on your computer.

You do not need to understand the folders first. Start an AI chat in this project, ask it to read the setup guide, and paste your resume, LinkedIn text, or rough work history. The AI can create the setup files for you and ask simple follow-up questions when something is missing.

You can use Codex, Claude Code, VS Code chat, OpenCode, or another AI assistant that can read and edit files in this folder. This project is not locked to one AI company.

## What It Does

- Reviews a job posting and tells you if it is a strong match
- Scores the job so you can avoid wasting time on poor fits
- Helps tailor your resume for that job
- Creates a PDF resume
- Tracks jobs privately on your computer
- Can scan company career pages if you add a company list
- Helps prepare interview notes and follow-up drafts

## What It Does Not Do

- It does not apply to jobs for you
- It does not send emails for you
- It does not message recruiters for you
- It does not upload your files publicly

You stay in control. Always read the output before using it.

## How You Use It

The normal flow is:

1. Download this project.
2. Install the required tools.
3. Start your AI assistant inside this folder.
4. Tell it to read `AGENTS.md` and `docs/AGENT_SETUP.md`.
5. Paste your resume, LinkedIn profile text, or rough work history.
6. Let the AI create your private setup files.
7. Paste a job post or job link.
8. Review the score, tailored resume, and PDF in the `output/` folder.

The beginner examples already exist in:

```text
starter-kit/
```

Those examples are only starting points. Your real personal files are created here:

- `cv.md` in the main project folder
- `config/profile.yml` inside the `config/` folder
- `modes/_profile.md` inside the `modes/` folder
- `portals.yml` in the main project folder

If you do not want to edit files yourself, paste your information in the AI chat and ask it to build those files for you.

## Install These First

You need three things:

1. Node.js
2. An AI assistant, such as Codex, Claude Code, VS Code chat, or OpenCode
3. Playwright, which creates PDF files

This usually takes 15 to 20 minutes the first time.

## 1. Install Node.js

Go to:

```text
https://nodejs.org
```

Download the version marked **LTS** and install it.

Check it worked:

```bash
node --version
```

Any version 18 or higher is fine.

## 2. Choose Your AI Assistant

Pick one assistant. The project works with any assistant that can read and edit files in this folder.

### Option 1 - Codex

Install Codex:

```bash
npm install -g @openai/codex
```

Check it worked:

```bash
codex --version
```

Official Codex reference:

```text
https://help.openai.com/en/articles/11096431
```

### Option 2 - Claude Code

Start Claude Code inside this project folder and ask it:

```text
Read AGENTS.md and docs/AGENT_SETUP.md. Help me set up ATS Resume Generator.
```

### Option 3 - VS Code Chat

Open this project folder in VS Code. In chat, ask:

```text
Read AGENTS.md and docs/AGENT_SETUP.md. Help me set up ATS Resume Generator. Ask me for my resume or work history and create the setup files.
```

### Option 4 - OpenCode or Another AI Assistant

Start your AI assistant inside the `ATS-resume-generator` folder and ask it to read:

```text
AGENTS.md
AGENT_INSTRUCTIONS.md
docs/AGENT_SETUP.md
```

Those files explain how to use ATS Resume Generator safely.

## 3. Download ATS Resume Generator

Easiest way:

1. Click the green **Code** button on GitHub.
2. Click **Download ZIP**.
3. Unzip the file.
4. Open Terminal or Command Prompt.
5. Go into the unzipped folder.

Example:

```bash
cd Downloads/ATS-resume-generator
```

If you use Git:

```bash
git clone <paste-the-repository-url-here>
cd ATS-resume-generator
```

## 4. Install ATS Resume Generator

Inside the `ATS-resume-generator` folder, run:

```bash
npm install
```

Install the browser used for PDF creation:

```bash
npx playwright install chromium
```

Check the setup:

```bash
npm run doctor
```

If it says all checks passed, continue.

## 5. Set Up Your Personal Files

The example files are already in:

```text
starter-kit/
```

Each example shows what your real file should look like.

| Example file | Real file the AI creates | What it means |
|--------------|--------------------------|---------------|
| `starter-kit/cv-example.md` | `cv.md` | Your resume text |
| `starter-kit/profile.example.yml` | `config/profile.yml` | Your job search settings |
| `starter-kit/profile-notes.template.md` | `modes/_profile.md` | Extra notes about your goals, strengths, and jobs to avoid |
| `starter-kit/portals.example.yml` | `portals.yml` | Companies or job boards to scan |

### Easiest Way

Start your AI assistant and paste this:

```text
Read AGENTS.md and docs/AGENT_SETUP.md.

I am a new user. Please set up ATS Resume Generator for me.
Ask me simple questions.
If I paste my resume, LinkedIn profile, or rough work history, use it to create:
- cv.md
- config/profile.yml
- modes/_profile.md
- portals.yml

If anything is missing, ask me for it.
```

Then paste one of these:

- your resume text
- your LinkedIn profile text
- rough notes about your jobs, projects, skills, education, and target roles

The AI should ask for missing details such as:

- job titles you want
- location and remote preference
- salary range or contract rate
- industries or jobs you want to avoid
- companies or job boards you want to scan

### Manual Way

If you prefer to copy the examples yourself, use these commands.

Mac or Linux:

```bash
cp starter-kit/profile.example.yml config/profile.yml
cp starter-kit/profile-notes.template.md modes/_profile.md
cp starter-kit/cv-example.md cv.md
cp starter-kit/portals.example.yml portals.yml
```

Windows Command Prompt:

```cmd
copy starter-kit\profile.example.yml config\profile.yml
copy starter-kit\profile-notes.template.md modes\_profile.md
copy starter-kit\cv-example.md cv.md
copy starter-kit\portals.example.yml portals.yml
```

After copying, open the real files and replace the example text with your information. You can also ask the AI assistant to do this for you.

## 6. Start Your AI Assistant

If you use Codex, run this inside the `ATS-resume-generator` folder:

```bash
codex
```

Then type:

```text
Read AGENTS.md and docs/AGENT_SETUP.md. Help me set up ATS Resume Generator.
```

The AI assistant should check the four setup files and help you fill them in. You can paste your resume, LinkedIn profile text, or rough work history directly into the chat.

If you already have a resume, use:

```text
Here is my resume. Please turn it into cv.md and ask me any missing setup questions:

[paste your resume here]
```

If you do not have a resume ready, use:

```text
I do not have a resume ready. Ask me questions about my work history and build the setup files for me.
```

After setup passes, paste a job link or job description and ask:

```text
Use ATS Resume Generator to evaluate this job and tell me if it is worth applying.
```

The AI will compare the job with your resume and profile. It should give you a score, explain the match, and create a tailored resume. PDF files are saved in:

```text
output/
```

## Common Tasks

Ask your AI assistant:

```text
Evaluate this job: [paste job link or description]
```

```text
Create a tailored PDF resume for the last job.
```

```text
Show my job tracker.
```

```text
Scan the companies in portals.yml for new jobs.
```

```text
Help me prepare interview questions for this role.
```

## Folder Structure

```text
ATS-resume-generator/
  starter-kit/        Example files for first-time setup
  config/             Your private job search settings go here
  modes/              Instructions the AI assistant reads
  scripts/            Helper commands used by npm scripts
  templates/          PDF layout and tracker status files
  data/               Private job tracker data
  reports/            Private job review reports
  output/             Generated PDF resumes
  docs/               Extra help and project policy docs
  batch/              Optional tracker import files
  fonts/              Fonts used for PDFs
```

Your private files are ignored by Git:

- `cv.md`
- `config/profile.yml`
- `modes/_profile.md`
- `portals.yml`
- `data/`
- `reports/`
- `output/`

## Troubleshooting

### `node` is not found

Install Node.js from:

```text
https://nodejs.org
```

### Your AI assistant is not found

Install or open the AI assistant you chose. For Codex:

```bash
npm install -g @openai/codex
```

### PDF creation does not work

Run:

```bash
npx playwright install chromium
```

### ATS Resume Generator does not know enough about you

Check that these files exist and are filled in:

- `cv.md`
- `config/profile.yml`
- `modes/_profile.md`

Or paste your resume or work history into your AI assistant and ask it to create those files.

### Something else is broken

Run:

```bash
npm run doctor
```

## Privacy

Your resume, profile, reports, tracker, and PDFs stay in private files on your computer.

When you ask an AI assistant to use your resume or profile, that assistant may send the text to its provider. Check the privacy policy for the AI tool you choose.

## License

MIT. You can use, change, and share this project.
