# Developer guide

This is a React + TypeScript portfolio using TanStack Start and Vite. You can edit it directly; you do not need Lovable or AI to make normal changes. The cleanup preserves the existing design and content.

## A few React terms

- **Component:** a function that returns part of the interface. Names such as `MinecraftButton` begin with capitals. `<MinecraftButton>Back</MinecraftButton>` uses that component.
- **JSX:** HTML-like markup inside `.tsx` files. Use `className` instead of HTML's `class`. Curly braces insert JavaScript values: `{profile.name}`.
- **Props:** inputs passed to a component, similar to method parameters in Java. For example, `to="/projects"` gives a button its destination.
- **State:** a value that can change while the page runs. `useState` stores the selected project, an open About detail, or the music volume. Its setter updates the screen.
- **TypeScript:** JavaScript with type checks. `.ts` contains code/data; `.tsx` can also contain JSX. Types describe allowed values and are not displayed on the site.
- **CSS:** controls appearance. `.main-menu` selects an element whose `className` includes `main-menu`. `:hover` means mouse-over; `:active` means pressed; `:focus-visible` means keyboard focus.

## Where things live

| Location                                                               | Purpose                                                           |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------- |
| `src/routes/index.tsx`                                                 | Homepage structure, menu destinations, splash selection, footer   |
| `src/routes/projects.tsx`, `experience.tsx`, `about.tsx`, `skills.tsx` | Structure and interactions for each content page                  |
| `src/routes/__root.tsx`                                                | Persistent app shell, panorama, music, metadata, error screens    |
| `src/components/`                                                      | The seven shared Minecraft components                             |
| `src/data/portfolio.ts`                                                | Personal content, links, splash sayings, soundtrack settings      |
| `src/styles/`                                                          | CSS grouped by purpose, described below                           |
| `src/styles.css`                                                       | Small CSS entry point importing those groups in order             |
| `src/assets/`                                                          | Imported font, texture, and panorama assets; license/source notes |
| `public/`                                                              | Files served at fixed URLs, including the supplied MP3            |
| `src/test/`                                                            | Route and shared-control tests                                    |

The five URLs are `/`, `/projects`, `/experience`, `/about`, and `/skills`. There is no separate Resume route; Resume opens the URL in `profile.resume`.

## Homepage layout and title

Edit **`src/styles/homepage.css`** for homepage sizes and spacing. Common settings are at the top, inside `.home-shell`:

```css
--home-title-width: 280;
--home-menu-width: 200;
--home-button-height: 20;
--home-button-text-size: 9;
--home-menu-gap: 3.5;
```

These numbers are multiplied by `--menu-unit`, a responsive pixel size derived from the viewport. For example, changing the button height from `20` to `22` makes it 10% taller. `clamp()` keeps a size between a minimum and maximum; `min()` chooses the smaller value; `dvh` is a percentage of the current viewport height. The `@media` sections near the bottom adjust narrow or short screens, so check those when changing mobile sizes.

- `.wordmark-wrap` controls title position and width.
- `.main-menu` controls menu position and width.
- `.secondary-menu` controls the Skills/Resume row spacing.
- `.splash` controls yellow text size, position, tilt, and animation. The existing homepage selects `splashPhrases[1]` in `index.tsx`; array indexes start at zero.
- `.home-footer` controls the footer.

**`src/components/PortfolioTitle.tsx`** draws the stone letters as SVG paths. Change its CSS size for normal scaling; edit the `letters` paths only to change the artwork. Its gradients, extrusion, and cracks intentionally stay source-rendered and sharp. The available letter shapes cover the current name and “PORTFOLIO”; a completely different name might need additional shapes.

## Buttons, colors, and other pages

- **`styles/minecraft-ui.css`:** shared `.mc-button` dimensions, borders, bevels, hover/pressed/disabled states, tooltips, social controls, and pixel icon styles.
- **`styles/homepage.css`:** `.home-shell .mc-button` overrides shared buttons on the homepage. Edit this rule for homepage-only changes.
- **`styles/colors.css`:** shared color variables such as `--stone`, `--splash`, `--ui-slot`, and `--item-teal`. Homepage colors such as `--home-logo-face` stay at the top of `homepage.css`. Music-specific colors stay in `music-controls.css`.
- **`styles/base.css`:** global fonts, text defaults, focus outlines, and reduced-motion support. The content-page Minecraft font URL uses Lovable's asset service; the homepage/music pixel font is bundled locally. This pass preserves both choices.
- **`styles/pages.css`:** shared `PageFrame` layout, Projects/Experience list rows, Skills inventory, About profile, and their mobile adjustments. Section comments identify each group.

CSS custom properties start with `--`. `color: var(--splash)` reads that value. More specific rules win: `.home-shell .mc-button` takes precedence over `.mc-button`. Keep the import order in `src/styles.css` unless you understand the cascade.

`MinecraftButton.tsx` chooses a router link for `to`, a new-tab link for `external`, or a native button for `onClick`. `PageFrame.tsx` supplies the content-page title and Back action. `ResumeButton.tsx` keeps a missing Resume disabled. `PixelItem.tsx` supplies the named SVG icons; search for the relevant `case` to find its artwork.

## Editing content

Edit **`src/data/portfolio.ts`**:

| Object          | Displayed content                                                     |
| --------------- | --------------------------------------------------------------------- |
| `profile`       | Name, footer, GitHub/LinkedIn links, Resume URL                       |
| `projects`      | Titles, dates, descriptions, technologies, status, demo/GitHub links  |
| `experience`    | Organizations, roles, dates, locations, descriptions, decorative ping |
| `about`         | Biography paragraph, metadata, tags, expandable current activities    |
| `skillGroups`   | Category names, icons, runes, and skills                              |
| `interfaceCopy` | Sample-content and photo-placeholder labels                           |
| `splashPhrases` | Yellow title sayings                                                  |
| `music`         | Audio URL, title, artist credit, starting volume                      |

Keep commas, quotation marks, and brackets intact. Keep project IDs unique. A few existing labels (“Sample project”, “UC BERKELEY”) and SEO descriptions remain in the route files; changing personal details may also require updating those. This cleanup did not replace any mock content. [CONTENT_EDITING.md](./CONTENT_EDITING.md) gives more detail.

Put a resume in `public/resume.pdf` and set `profile.resume` to `"/resume.pdf"`. An empty URL keeps Resume unavailable. Social links work the same way.

## Background and panorama

**`HomePanorama.tsx`** draws the six world faces in `assets/panorama/0.png` through `5.png`. `ROTATION_DURATION_MS` sets a full revolution's duration; `450_000` means 7.5 minutes. A larger number rotates more slowly.

**`styles/panorama.css`** controls blur, dimming, and the static fallback (`panorama/2.png`) used when WebGL cannot render. The canvas stays mounted in `__root.tsx`, so navigation does not restart the world. Reduced-motion settings pause rotation. Keep the six faces from the same panorama set if replacing the world; a single photograph cannot produce the same 360-degree view.

## Music, sounds, and hover/click behavior

**`MusicControl.tsx`** handles playback, hover/click opening, volume, mute, keyboard access, and loading errors. **`styles/music-controls.css`** controls the speaker button, small panel, and slider. **`music` in `portfolio.ts`** selects the supplied Sweden MP3 and starting volume (`0.25` = 25%). Playback continues across routes; browsers require a visitor action to start audible playback.

To change music, place the new file in `public/audio/`, update `music.src` to `"/audio/your-track.mp3"`, and update the title/artist/credit. Keep any applicable asset license or source information.

There are currently **no button hover/click sound effects** and no sound-effects library. To add one later, place its file in `public/audio/` and play it from an event handler in `MinecraftButton.tsx`. Use `onPointerEnter` for mouse hover and `onClick` for clicks; keep the existing navigation and selection handlers intact. Hover sound may be blocked until the visitor interacts. Music uses separate native buttons in `MusicControl.tsx`, so shared button changes do not automatically affect it. This guide describes where to extend behavior; the cleanup adds no new sounds.

For visual hover/click behavior, edit CSS `:hover`/`:active` rules. For what clicking actually does, edit the relevant route's `onClick` handler or the shared component. Preserve disabled states and keyboard focus rules.

## Adding assets

- Use **`public/`** when you want a stable URL. `public/audio/click.mp3` is requested as `/audio/click.mp3`, without `public` in the URL.
- Use **`src/assets/`** for images/fonts imported by components or CSS. In a component: `import image from "@/assets/image.png"`, then `<img src={image} alt="Description" />`.
- From a stylesheet inside `src/styles/`, use `url("../assets/image.png")`.
- Keep filenames simple and retain licenses/source notes. `src/assets/menu-assets.md` records the current artwork sources; `menu-pixel.LICENSE.txt` belongs with the bundled font.

## Run and check locally

Install Node.js 22.12 or newer in the Node 22 line (a current compatible LTS also works). Clone the repository, open its folder in a terminal, and run:

```sh
npm install
npm run dev
```

Open the local URL Vite prints. Save an edited file to see changes in the browser. Stop the server with Ctrl+C. The repository retains `bun.lock` and Lovable's `bunfig.toml`; if using Bun, run `bun install --frozen-lockfile` for the exact locked dependencies. Do not commit a second package-manager lockfile just for a local npm install.

Before committing:

```sh
npm run typecheck
npm run test
npm run lint
npm run build
```

`npm run preview` serves the production build through Nitro, using the existing Cloudflare target. It downloads Cloudflare’s Wrangler preview tool on first use; a slow first download can require running the command again. `npm run format` formats the source; formatting changes indentation, not the interface. Also check all pages, Back links, selection, Resume, and music manually in desktop/mobile views.

## Files to edit and files to leave alone

Usually edit `data/portfolio.ts`, the appropriate file in `styles/`, and occasionally a route or shared component. Make one small change, preview it, then run the checks. A Git commit saves a snapshot; a push uploads it to GitHub. Review a branch before merging into `main`.

Generally leave these alone:

- `routeTree.gen.ts`: generated from route files; never edit it by hand.
- `node_modules/`, `.output/`, `.tanstack/`, `.nitro/`, `.wrangler/`, `dist/`: installed/generated output, not source.
- `server.ts`, `start.ts`, `lib/error-*.ts`, `lib/lovable-error-reporting.ts`: active server, error reporting, and request protection.
- `vite.config.ts`, `tsconfig.json`, `vitest.config.ts`, `eslint.config.js`: tooling; change only when adjusting how the project runs or checks code.
- `.lovable/` and the Lovable block in `AGENTS.md`: editor integration and project history.
- `bun.lock`: generated dependency versions; update through package installation, not manual edits.

## Common tweaks

| Change                   | Edit                                                                            |
| ------------------------ | ------------------------------------------------------------------------------- |
| Title size               | `styles/homepage.css` → `--home-title-width`; mobile `.wordmark-wrap` overrides |
| Letter shapes/depth      | `components/PortfolioTitle.tsx` → `letters` / `LogoWord`                        |
| Menu width               | `styles/homepage.css` → `--home-menu-width`                                     |
| Homepage button height   | `styles/homepage.css` → `--home-button-height`                                  |
| Button label size        | `styles/homepage.css` → `--home-button-text-size`                               |
| Menu spacing             | `styles/homepage.css` → `--home-menu-gap`, `--home-secondary-offset`            |
| Splash position          | `styles/homepage.css` → `.home-shell .splash` and mobile overrides              |
| Splash text              | `data/portfolio.ts` → `splashPhrases`; selection in `routes/index.tsx`          |
| Shared button appearance | `styles/minecraft-ui.css` → `.mc-button` and state rules                        |
| Background/world         | `assets/panorama/` and `components/HomePanorama.tsx` imports                    |
| Rotation speed           | `components/HomePanorama.tsx` → `ROTATION_DURATION_MS`                          |
| Background blur/dimming  | `styles/panorama.css`                                                           |
| Music/starting volume    | `data/portfolio.ts` → `music`                                                   |
| Music panel              | `styles/music-controls.css`; interaction in `components/MusicControl.tsx`       |
| Portfolio text           | `data/portfolio.ts`                                                             |

Paths in this table are inside `src/`.
