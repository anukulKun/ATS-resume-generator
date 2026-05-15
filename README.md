# ATS Resume Generator - Your AI Job Search Helper

ATS Resume Generator helps you judge jobs before you apply. It can review a job posting, compare it with your CV, create a tailored PDF CV, and keep a private tracker of jobs you have looked at.

It runs on your computer. You choose the AI runner. The first setup path in this README uses Codex, but ATS Resume Generator is not locked to one AI provider.

## What It Does

- Reviews a job posting and tells you if it is a strong match
- Scores the job so you can avoid wasting time on poor fits
- Helps tailor your CV for that job
- Creates a PDF CV
- Tracks jobs privately on your computer
- Can scan company career pages if you add a company list
- Helps prepare interview notes and follow-up drafts

## What It Does Not Do

- It does not apply to jobs for you
- It does not send emails for you
- It does not message recruiters for you
- It does not upload your files publicly

You stay in control. Always read the output before using it.

## Install These First

You need three things:

1. Node.js
2. An AI runner, such as Codex
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

## 2. Choose Your AI Runner

ATS Resume Generator can work with different terminal AI tools.

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

### Option 2 - OpenCode or Another Local AI Runner

Start your AI runner inside the `ATS-resume-generator` folder and ask it to read:

```text
AGENTS.md
AGENT_INSTRUCTIONS.md
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

## 5. Copy the Starter Files

All first-time setup files are in one folder:

```text
starter-kit/
```

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

Now edit these copied files with your real information:

- `cv.md` at the project root - your resume text
- `config/profile.yml` inside the `config/` folder - your job search settings
- `modes/_profile.md` inside the `modes/` folder - extra notes about your goals and preferences
- `portals.yml` at the project root - companies and job boards to scan

## 6. Start Your AI Runner

If you use Codex, run this inside the `ATS-resume-generator` folder:

```bash
codex
```

Then type:

```text
Read AGENTS.md and help me set up ATS Resume Generator.
```

The AI runner should first check the four setup files above. If they are missing or still full of example text, ask it:

```text
Help me fill in cv.md, config/profile.yml, modes/_profile.md, and portals.yml.
```

To review a job, paste the job link or job description and ask:

```text
Use ATS Resume Generator to evaluate this job and tell me if it is worth applying.
```

## Common Tasks

Ask your AI runner:

```text
Evaluate this job: [paste job link or description]
```

```text
Create a tailored PDF CV for the last job.
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
  starter-kit/        First-time setup files to copy
  config/             Your private profile goes here
  modes/              Instructions the AI runner reads
  scripts/            Helper commands used by npm scripts
  templates/          PDF layout and tracker status files
  data/               Private job tracker data
  reports/            Private job review reports
  output/             Generated PDF CVs
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

### `codex` is not found

Install Codex:

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

### Something else is broken

Run:

```bash
npm run doctor
```

## Privacy

Your CV, profile, reports, tracker, and PDFs stay in private files on your computer.

When you ask an AI runner to use your CV or profile, that AI runner may send the text to its provider. Check the privacy policy for the AI tool you choose.

## License

MIT. You can use, change, and share this project.


