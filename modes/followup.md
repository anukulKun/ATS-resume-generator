# Mode: Follow-Up Tracker

Use this mode to help the user decide when to follow up on applications and to draft messages they can review and send themselves.

Never send a message for the user.

## Inputs

- `data/applications.md`
- `data/follow-ups.md`
- `reports/`
- `config/profile.yml`
- `cv.md`

## Step 1 - Run the Cadence Script

Run:

```bash
node scripts/followup-cadence.mjs
```

Use the output to find:

- applications that need a follow-up
- applications that are still waiting
- applications that are probably cold

## Step 2 - Show the User a Simple Summary

Show:

```text
Follow-up summary for YYYY-MM-DD

Applications tracked: N
Need follow-up: N
Waiting: N
Probably cold: N
```

Then list the applications that need attention.

## Step 3 - Draft Messages

For each overdue or urgent application:

1. Read the linked report.
2. Read `cv.md` for real proof points.
3. Read `config/profile.yml` for the user's name.
4. Draft a short message.

Rules:

- Keep it professional and calm.
- Do not use "just checking in", "touching base", or "circling back".
- Lead with a real reason the user is a fit.
- Keep email drafts under 150 words.
- Keep LinkedIn drafts under 300 characters.

## Step 4 - If No Contact Is Known

Do not invent a contact.

Tell the user to add the contact manually if they have one.

Use:

```text
No contact found yet.
```

## Step 5 - Record Sent Follow-Ups

Only record a follow-up after the user says they sent it.

If `data/follow-ups.md` does not exist, create it with:

```markdown
# Follow-up History

| # | App# | Date | Company | Role | Channel | Contact | Notes |
|---|------|------|---------|------|---------|---------|-------|
```

Then add one row for the sent follow-up.

## Important

Drafting is allowed.

Sending is not allowed.
