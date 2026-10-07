# Minecraft-inspired portfolio plan

## Goal
Create a personal software-engineering portfolio for **Ky Hoang**, a **Data Science student at UC Berkeley** and **aspiring software engineer**. It will closely evoke Minecraft Java Edition menus while using editable sample content where personal details are not yet available.

## Experience
- Open on a full-screen, gently moving block-world panorama with a custom pixel-art portfolio wordmark, rotating splash line, version label, and compact disclaimer.
- Center the familiar stacked menu: **Experience**, **Projects**, and **About Me**.
- Add secondary **Skills** and **Resume** destinations, alongside GitHub and LinkedIn links.
- Open each portfolio destination as a separate shareable page, retaining the game-screen framing and a clear “Back” control.
- Recreate the tactile menu feel with sharp beveled buttons, pixel typography, keyboard focus, hover/press states, and restrained screen transitions.
- Use original imagery, textures, wordmark treatment, sounds, and copy rather than extracting Minecraft assets or duplicating the reference site.

## Pages
### Main menu `/`
- Custom portfolio logo and changing splash phrase.
- Primary navigation to Experience, Projects, and About Me.
- Secondary navigation to Skills and Resume, plus small icon links for sample GitHub and LinkedIn profiles.
- Sound and settings controls anchored along the bottom edge.

### Experience `/experience`
- A Minecraft multiplayer-server-browser treatment for sample experience entries.
- Each server-style row shows organization, role, dates, description, and a status-style indicator.
- Keep the content in a dark textured viewport over the panorama with familiar selection and action states.

### Projects `/projects`
- A searchable world/server-list-inspired collection of sample projects.
- Each saved-world-style project includes a screenshot, title, description, technologies, date, GitHub link, and demo link.
- Support selected-row highlighting, project status indicators, result count, and the screenshot’s **Open**, **GitHub**, **Cancel**, and **Back** action row.
- Content gracefully handles projects without every optional link.

### About Me `/about`
- A Minecraft Book & Quill interface containing Ky’s short sample biography.
- Include page-turn controls and a restrained profile summary without introducing modern card styling.

### Skills `/skills`
- An enchanting-table-inspired layout with four selectable skill categories and pixel-art tool/book icons.
- Show skills as items in inventory slots with keyboard-accessible hover/focus tooltips and an applied-skill count.

### Resume `/resume`
- A simple themed screen with a prominent Resume button, concise introduction, and a clear Back action.
- Use a placeholder résumé destination until Ky supplies the real document.

## Sound and settings
- Add original ambient audio and subtle menu click/selection sounds; playback begins only after user interaction to respect browser rules.
- Provide a persistent mute button and volume control.
- Add a settings panel for music, sound effects, animation reduction, and panorama motion.
- Match the compact Options dialog shown in the screenshots, including volume, next-track, motion mode, and Done controls.
- Remember settings in the visitor’s browser; no account or database is needed.
- Respect system reduced-motion preferences and keep all navigation usable with keyboard, touch, and screen readers.

## Content editing
- Keep sample portfolio data in one clearly organized content module so roles, project details, skills, links, biography, and résumé can be replaced without redesigning pages.
- Label all invented content as sample copy and avoid publishing fake contact details.
- Include sensible empty states for sections not yet populated.

## Visual and responsive direction
- Desktop closely mirrors the centered 16:9 game-menu composition from the reference.
- Inner pages use the screenshot’s darkened shared panorama, narrow top title, large bordered content viewport, bottom action bar, and persistent sound/settings icons.
- Mobile preserves the logo and menu hierarchy, enlarges touch targets, and crops the panorama intentionally rather than shrinking the entire interface.
- Use a pixel display face for interface labels with a readable sans-serif fallback for longer portfolio copy.
- Keep square corners, hard shadows, stone-like neutral controls, a natural green/sky panorama, and no generic rounded-card styling.
- Explicitly avoid gradients, glass effects, pill buttons, oversized modern headlines, and generic dashboard or SaaS patterns.

## Technical details
- Build with the existing React and TanStack routing setup.
- Create dedicated routes for Projects, Experience, Skills, About, and Resume, with unique search/social metadata for each.
- Build reusable `MinecraftButton`, `InventorySlot`, `Tooltip`, `MenuPanel`, `Navigation`, page-frame, audio-control, settings-panel, and portfolio-entry pieces.
- Store visitor preferences locally and keep all portfolio content static for fast loading.
- Generate or create original visual assets sized for desktop and mobile; optimize images and audio before shipping.
- Implement in two passes: first polish the global design system and homepage to a high standard; then apply those foundations to complete, lighter-depth versions of every requested inner page.
- Verify desktop and mobile layouts, keyboard navigation, tooltips, sound persistence, reduced motion, all links, and each route’s direct-load behavior.

## Planned result
A polished, responsive Minecraft-homage portfolio for Ky Hoang, led by an exceptionally refined homepage and global interface system, with five working sample-content routes and visitor-controlled sound/settings.
