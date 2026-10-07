# Updating your portfolio

Most personal content lives in **`src/data/portfolio.ts`**. The pages read this file; changing its content keeps the existing Minecraft design.

## The easiest way: ask Lovable

In the Lovable project, select the branch you want to edit and use a prompt like:

> Replace the mock projects with the real projects listed below. Update `src/data/portfolio.ts`, remove the “Sample project” labels for those projects, and keep the current page design, layout, and navigation. Do not invent information or change other pages.
>
> Project name: …
> Date: …
> Description: …
> Technologies: …
> GitHub URL: …
> Demo URL: …

The same approach works for your biography, education, experience, and skills. Give the exact facts you want displayed. Preview and check the result before publishing. Make sure Lovable is editing the intended branch; work on the draft review branch does not itself merge into `main`.

## Editing the file yourself

In GitHub, select your intended branch, open **src → data → portfolio.ts**, and click the pencil button to edit. Keep quotation marks, commas, and brackets intact, then commit the update to that branch. Review it in the connected preview before merging or publishing.

| Section in the file | What it controls                                                                    |
| ------------------- | ----------------------------------------------------------------------------------- |
| `profile`           | Name, homepage footer, GitHub and LinkedIn links, resume URL                        |
| `splashPhrases`     | Yellow title-screen sayings; the homepage currently selects the second entry        |
| `projects`          | Project names, dates, descriptions, technologies, status, repository and demo links |
| `experience`        | Roles, organizations, dates, locations, descriptions, decorative game “ping” text   |
| `skillGroups`       | Skills grouped into the four existing categories                                    |
| `about`             | Visible biography, metadata, tags, and “Right now” entries                          |
| `interfaceCopy`     | Shared sample-content and missing-photo labels                                      |

Keep project `id` values unique. Keep the four skill categories unless you also intend to adjust their interface. The older `biography` array is not displayed; edit `about.paragraph` for the visible bio.

For your resume, upload a PDF to `public/resume.pdf` and set `profile.resume` to `"/resume.pdf"`. Replace that PDF at the same path when you update it. Empty social/resume URLs keep the corresponding controls unavailable.

## A few things still need a small code edit

The Projects page has a hardcoded “Sample project” label, the About page has a hardcoded “UC BERKELEY” emblem, and page titles/descriptions include personal details in route metadata. When replacing the mock data or changing those facts, ask Lovable to update those specific labels too. Profile photos are currently represented by a placeholder pixel portrait.

There is no private admin page or database editor yet. For occasional portfolio updates, editing this one data file (or asking Lovable to do it) is sufficient.
