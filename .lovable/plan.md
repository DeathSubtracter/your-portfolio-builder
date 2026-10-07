# Minecraft-inspired portfolio plan

## Goal
Create a personal portfolio that closely evokes a classic Minecraft start screen while remaining an original, professional portfolio. It will use editable sample content until your real biography, roles, projects, and links are ready.

## Experience
- Open on a full-screen, gently moving block-world panorama with a custom pixel-art portfolio wordmark, rotating splash line, version label, and compact disclaimer.
- Center the familiar stacked menu: **Experience**, **Projects**, and **About Me**.
- Add the secondary **Blog** and **Skills** destinations shown in the screenshots, alongside GitHub and LinkedIn links.
- Open each portfolio destination as a separate shareable page, retaining the game-screen framing and a clear “Back” control.
- Recreate the tactile menu feel with sharp beveled buttons, pixel typography, keyboard focus, hover/press states, and restrained screen transitions.
- Use original imagery, textures, wordmark treatment, sounds, and copy rather than extracting Minecraft assets or duplicating the reference site.

## Pages
### Main menu `/`
- Custom portfolio logo and changing splash phrase.
- Primary navigation to Experience, Projects, and About Me.
- Secondary navigation to Blog and Skills, plus small icon links for sample GitHub and LinkedIn profiles.
- Sound and settings controls anchored along the bottom edge.

### Experience `/experience`
- A compact résumé timeline matching the screenshot: dates and location at left, role details at right, separated by fine rules.
- Each role shows organization, title, dates, location, and concise achievement bullets.
- Add small skill tags beneath each role and keep the content in a dark translucent viewport over the panorama.

### Projects `/projects`
- A searchable world/server-list-inspired collection of sample projects.
- Each project includes a thumbnail, status, stack, summary, and buttons for case study, live preview, or source where applicable.
- Support selected-row highlighting, project status indicators, result count, and the screenshot’s **Open**, **GitHub**, **Cancel**, and **Back** action row.
- Content gracefully handles projects without every optional link.

### About Me `/about`
- A profile panel closely following the screenshot: portrait, nameplate, personal facts, résumé/contact buttons, and a short biography.
- A “Right now” inventory list for editable current interests such as listening, watching, wearing, and eating.

### Blog `/blog`
- A searchable post list with thumbnail, title, excerpt, date, category, result count, and **Open Article** action.
- Include one editable sample article and a separate article detail view so the flow is complete.

### Skills `/skills`
- An enchanting-table-inspired layout with four selectable skill categories and pixel-art tool/book icons.
- Show the selected category’s skills as an inventory-style grid with an applied-skill count.

## Sound and settings
- Add original ambient audio and subtle menu click/selection sounds; playback begins only after user interaction to respect browser rules.
- Provide a persistent mute button and volume control.
- Add a settings panel for music, sound effects, animation reduction, and panorama motion.
- Match the compact Options dialog shown in the screenshots, including volume, next-track, motion mode, and Done controls.
- Remember settings in the visitor’s browser; no account or database is needed.
- Respect system reduced-motion preferences and keep all navigation usable with keyboard, touch, and screen readers.

## Content editing
- Keep sample portfolio data in one clearly organized content module so names, roles, project details, skills, and links can be replaced without redesigning pages.
- Label all invented content as sample copy and avoid publishing fake contact details.
- Include sensible empty states for sections not yet populated.

## Visual and responsive direction
- Desktop closely mirrors the centered 16:9 game-menu composition from the reference.
- Inner pages use the screenshot’s darkened shared panorama, narrow top title, large bordered content viewport, bottom action bar, and persistent sound/settings icons.
- Mobile preserves the logo and menu hierarchy, enlarges touch targets, and crops the panorama intentionally rather than shrinking the entire interface.
- Use a pixel display face for interface labels with a readable sans-serif fallback for longer portfolio copy.
- Keep square corners, hard shadows, stone-like neutral controls, a natural green/sky panorama, and no generic rounded-card styling.

## Technical details
- Build with the existing React and TanStack routing setup.
- Create dedicated routes for Experience, Projects, About, Blog, Skills, and blog article details, with unique search/social metadata for each.
- Build reusable menu, page-frame, audio-control, settings-panel, and portfolio-entry pieces.
- Store visitor preferences locally and keep all portfolio content static for fast loading.
- Generate or create original visual assets sized for desktop and mobile; optimize images and audio before shipping.
- Verify desktop and mobile layouts, keyboard navigation, sound persistence, reduced motion, all links, and each route’s direct-load behavior.

## Planned result
A polished, responsive Minecraft-homage portfolio with a working main menu, five complete sample-content sections, an article view, original game-like visuals and audio, and settings visitors can control.
