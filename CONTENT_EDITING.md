# Updating your portfolio

Editable copy, public contacts, project details, education, and page metadata live in **`src/data/portfolio.ts`**. Pages read this file while preserving the shared Minecraft design.

## Ask Lovable

Provide exact facts and ask to update the portfolio without changing its design or navigation. Only add working destinations you supply; never infer project repositories from a GitHub username.

## Content sections

| Section | Controls |
| --- | --- |
| `profile` | Identity, education, introduction, public contact links, resume destination |
| `splashPhrases` | Decorative yellow title-screen sayings |
| `music` | Soundtrack source, credit, and starting volume |
| `projects` | Ordered projects, dates, categories, technologies, highlights, award, qualifications, and optional links |
| `experience` | Work and teaching roles, organizations, dates where confirmed, locations, descriptions |
| `skillGroups` | Supported languages, frameworks/libraries, developer tools/databases |
| `about` | Biography paragraphs, metadata, education/work/recognition items |
| `interfaceCopy` | Shared inventory headings and unavailable-resume message |
| `pageCopy` | Unique titles and descriptions used in page and social metadata |

Keep project IDs unique. Missing project links are omitted. Keep Nestwatch's synthetic-data qualification visible in every forecasting description, and preserve the project-level award and collaborative coursework context. Leave CodeAdvantage's dates unspecified until confirmed. The pixel avatar is decorative, not a photograph.

## Resume

The current **Ky Hoang Software Engineer Resume.pdf** is not yet available. Resume stays disabled until that exact current document is uploaded as a persistent website asset. Ask Lovable to store the uploaded PDF and update `profile.resume` to its persistent asset URL; do not use an old document or temporary attachment URL.

## Music

The existing soundtrack is C418's **Sweden**. Its source and official credit are selected by `music`. Playback and volume behavior remain unchanged. Hosted media should use the project's persistent asset flow when replaced.

Preview the intended branch before publishing. Content edits do not publish or merge automatically.
