# Ijebu-Ode Grammar School — Unified Platform Demo

A working prototype of a school website built as an NYSC Community Development Service initiative by a serving corps member at Ijebu-Ode Grammar School (JOGS), Ijebu Ode, Ogun State.

**This is a static HTML/CSS demo — not a live site.** No real student or alumni data is used. All names in the directory and activity feed are fictional placeholders.

---

## Live preview

> Hosted via GitHub Pages: **[View demo →](https://YOUR-USERNAME.github.io/jogs-demo/)**
> *(Replace the URL above once you enable GitHub Pages on this repo)*

---

## What's included

| Page | File | What it shows |
|---|---|---|
| Homepage | `index.html` | Three-door layout, school stats, news |
| About | `about.html` | School history timeline from 1913, platform rationale |
| JOGSOBA Network | `alumni.html` | Alumni directory (filterable by set), mentorship board, reunions, regional chapters |
| Student Portal | `students.html` | Resource library by subject, scholarship corner, school announcements |
| Admin Console | `admin.html` | Stat tiles, alumni verification queue, announcement posting, resource approvals, activity feed |

---

## How to enable GitHub Pages (takes 2 minutes)

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Under **Source**, select `Deploy from a branch`
4. Choose `main` branch and `/ (root)` folder
5. Click **Save** — GitHub will give you a live URL within 1–2 minutes

---

## Design decisions

- **Ink navy + gold palette** — drawn from the school's own colours and the motto "Non Nobis Domine"
- **Horizon motif** — the school's tagline "Dawn of Life, Source of Light" is rendered as a literal horizon between the dark header and light body sections
- **JOGSOBA North America chapter** — the existing site at [jogsobanorthamerica.com](https://www.jogsobanorthamerica.com/) is linked as a regional chapter rather than replaced
- **Admin-first control model** — nothing goes live on the public site until a staff member approves it in the console

---

## Tech stack (demo)

Plain HTML, CSS, and vanilla JavaScript. No frameworks, no build step, no dependencies beyond Google Fonts.

The production version would be built on WordPress with custom post types for Alumni Profiles, Resources, News, and Events — giving staff a familiar CMS interface for routine updates without touching code.

---

## Built by

A serving NYSC corps member at Ijebu-Ode Grammar School, 2026.  
*"Non Nobis Domine"*
