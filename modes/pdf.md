# Mode: PDF CV

Use this mode to create a tailored PDF CV after a job has been evaluated.

## Goal

Create a clean, readable, ATS-friendly CV PDF for one job.

ATS means the software some companies use to read CVs before a person sees them.

## Inputs

Use these files:

- `cv.md`
- `config/profile.yml`
- `templates/cv-template.html`
- the job description or saved report

## Rules

- Do not invent experience, skills, numbers, companies, degrees, or links.
- Reword real experience using the language from the job posting.
- Keep the CV easy to read.
- Keep the layout single-column.
- Use normal section names such as `Professional Summary`, `Work Experience`, `Education`, `Skills`, `Projects`, and `Certifications`.
- Use the same language as the job posting unless the user asks for a different language.

## Steps

1. Read `cv.md`.
2. Read `config/profile.yml`.
3. Read the job description or saved report.
4. Pick the most relevant skills and proof points.
5. Rewrite the summary for this job.
6. Reorder bullets so the strongest matching experience comes first.
7. Fill `templates/cv-template.html`.
8. Save the filled HTML in a temporary file.
9. Run `scripts/generate-pdf.mjs`.
10. Save the final PDF in `output/`.

## PDF Command

Use:

```bash
node scripts/generate-pdf.mjs input.html output/cv-your-name-company-YYYY-MM-DD.pdf
```

Use `--format=letter` for United States and Canada jobs.

Use `--format=a4` for other locations.

## Template Placeholders

Replace placeholders in `templates/cv-template.html`, including:

| Placeholder | Meaning |
|-------------|---------|
| `{{NAME}}` | User name |
| `{{PHONE}}` | Phone number, if provided |
| `{{EMAIL}}` | Email address |
| `{{LINKEDIN_URL}}` | LinkedIn URL |
| `{{PORTFOLIO_URL}}` | Portfolio URL, if provided |
| `{{LOCATION}}` | Location |
| `{{SUMMARY_TEXT}}` | Tailored summary |
| `{{COMPETENCIES}}` | Job-matched skills |
| `{{EXPERIENCE}}` | Work experience |
| `{{PROJECTS}}` | Relevant projects |
| `{{EDUCATION}}` | Education |
| `{{CERTIFICATIONS}}` | Certifications |
| `{{SKILLS}}` | Skills |

## After Creating the PDF

Tell the user:

- where the PDF was saved
- whether it used letter or A4 format
- what they should review before submitting it
