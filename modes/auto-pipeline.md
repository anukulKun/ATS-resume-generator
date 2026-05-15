# Mode: Auto Pipeline

Use this when the user pastes a job link or job description without asking for a specific task.

## Goal

Run the normal ATS Resume Generator flow:

1. Read the job posting.
2. Evaluate whether the job is worth applying to.
3. Save a report in `reports/`.
4. Create a tailored CV PDF if the user wants one.
5. Add a tracker row through the normal tracker flow.

## Step 1 - Read the Job Posting

If the user pasted a full job description, use that text.

If the user pasted a URL:

1. Use browser automation if available.
2. Use a normal web fetch if the page is simple.
3. If the page cannot be read, ask the user to paste the job description.

Do not guess job requirements that are not visible.

## Step 2 - Evaluate the Job

Use:

- `modes/_shared.md`
- `modes/oferta.md`

The report must include the job summary, match score, strengths, gaps, risks, recommendation, interview notes, and posting legitimacy check.

## Step 3 - Save the Report

Save the report as:

```text
reports/{number}-{company-slug}-{YYYY-MM-DD}.md
```

## Step 4 - Create the PDF CV

Use `modes/pdf.md`.

The supported PDF path is the HTML-to-PDF flow:

```bash
node scripts/generate-pdf.mjs input.html output.pdf
```

## Step 5 - Update the Tracker

Write one TSV row to `batch/tracker-additions/`.

Then run:

```bash
node scripts/merge-tracker.mjs
```

Do not edit `data/applications.md` directly unless you are only updating the status or notes for an existing row.

## If Something Fails

Continue with the steps that still work.

Tell the user exactly what failed and what they can do next.

