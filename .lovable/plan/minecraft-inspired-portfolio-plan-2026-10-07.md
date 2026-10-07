# Minecraft-inspired portfolio plan

## Goal

Create a personal software-engineering portfolio for **Ky Hoang**, a **Data Science student at UC Berkeley** and **aspiring software engineer**.

The site should closely evoke the visual language and feel of **Minecraft Java Edition menus**, while using original implementation, imagery, textures, wordmark treatment, and copy rather than extracting proprietary Minecraft assets or directly duplicating another portfolio site.

The interface should feel like an **actual game menu first and a portfolio second**. Avoid obvious modern web-design conventions unless necessary.

The site should be visually polished, memorable, fast, responsive, and easy to maintain.

---

## Core priorities

Build the site in this order of importance:

1. **Homepage visual fidelity and polish**
2. **Projects page**
3. **Experience page**
4. **About Me page**
5. **Skills page**
6. **Resume, GitHub, and LinkedIn access**
7. **Mobile responsiveness and final polish**
8. Optional enhancements only after the core experience is complete

Do not sacrifice polish on the homepage or Projects page in order to add unnecessary features.

---

## Experience

- Open on a full-screen, gently moving block-world panorama with a custom pixel-art portfolio wordmark, rotating splash line, version label, and minimal footer attribution if needed.
- Center a familiar Minecraft-style stacked menu with:
  - **Projects**
  - **Experience**
  - **About Me**
- Place **Skills** and **Resume** as smaller secondary actions beneath the primary menu.
- Include small GitHub and LinkedIn links or icons without making them visually dominant.
- Open each portfolio destination as a separate shareable route while retaining the game-screen framing and a clear Minecraft-style **Back** control.
- Recreate the tactile menu feel with sharp beveled buttons, hard shadows, pixel typography, keyboard focus states, hover states, pressed states, and restrained screen transitions.
- Preserve the visual logic of Minecraft Java Edition menus instead of inventing excessive new gamified UI.
- Avoid making the site feel like a generic pixel-art website, dashboard, or modern portfolio with a Minecraft skin placed on top.

---

## Pages

### Main menu `/`

This is the most important screen and should receive the highest level of visual polish.

- Custom pixel-art **KY HOANG** portfolio logo or wordmark.
- Rotating Minecraft-style splash phrase.
- Small subtitle communicating:
  - Data Science @ UC Berkeley
  - Aspiring Software Engineer
- Primary stacked menu:
  - **Projects**
  - **Experience**
  - **About Me**
- Secondary smaller actions:
  - **Skills**
  - **Resume**
- Small GitHub and LinkedIn links near the bottom of the interface.
- Optional small version-style label in one corner.
- Minimal attribution/footer text only if needed; do not place a prominent disclaimer in the main composition.
- Preserve the authentic centered game-menu composition rather than introducing a conventional navbar.

Possible rotating splash phrases can include playful software-related lines such as:

- Now with fewer segfaults!
- Data Structures Included!
- 100% more bugs!
- Java-powered!
- Built with questionable commit messages!

These should remain subtle and easy to replace.

---

### Projects `/projects`

This is the most important inner page and should receive nearly as much polish as the homepage.

Use a **Minecraft saved-world selection screen** as the core metaphor.

Each project entry should support:

- Project title
- Short description
- Technologies used
- Date or development period
- Project screenshot or thumbnail
- GitHub link if available
- Live demo link if available
- Optional project status
- Clear selected-row state

Interaction should feel similar to selecting a saved Minecraft world.

Include a bottom action row such as:

- **Open Project**
- **GitHub**
- **Back**

Only display actions that actually exist for the selected project.

Do **not** implement project search in V1 unless there are enough projects for search to be genuinely useful.

Projects should be driven from one centralized content file or data structure so they can easily be replaced or reordered later.

Gracefully handle projects that do not have screenshots, demos, or GitHub links.

Avoid fake complexity. The page should feel polished and authentic rather than overloaded.

---

### Experience `/experience`

Use a **Minecraft multiplayer server browser** as the visual metaphor.

Each experience entry should resemble a server listing and include:

- Organization
- Role
- Location if relevant
- Dates
- Short description
- Optional status-style indicator

Example entries may later include:

- Apple
- UC Berkeley
- Teaching/tutoring experience
- Future internships or technical work

Server-like visual indicators can be used sparingly for personality, but the professional information must remain easy to read.

The page should use:

- Dark textured viewport
- Selectable rows
- Clear highlighted state
- Bottom action bar
- Minecraft-style Back button

Do not make the metaphor so strong that recruiters struggle to understand the actual experience.

---

### About Me `/about`

Use a **Minecraft Book & Quill** interface.

Include Ky’s biography in a book-style reading experience.

The content can eventually cover:

- UC Berkeley / Data Science background
- Software engineering goals
- Technical interests
- Personal background
- Selected hobbies or interests

Allow page-turn controls if the content requires multiple pages.

Keep this screen visually restrained and readable.

Avoid introducing modern card components, profile dashboards, or excessive statistics.

A small profile element may be included if it naturally fits the Minecraft aesthetic.

---

### Skills `/skills`

Use a **Minecraft inventory-inspired interface** for V1.

Skills should appear as items in inventory slots with Minecraft-style hover/focus tooltips.

Possible groups include:

- Languages
- Frameworks / libraries
- Developer tools
- Coursework / CS fundamentals

Examples may later include:

- Java
- Python
- Swift
- SQL
- React
- Git
- Data structures
- Algorithms

Do **not** build an elaborate enchanting-table system, skill leveling mechanic, or multiple complicated skill categories in V1.

The primary goal is a clean, memorable skills screen that visually fits the rest of the site.

More advanced enchanting-table interactions can be considered later as a V2 enhancement.

---

## Resume

Do not create a dedicated `/resume` page for V1 unless a strong visual concept emerges naturally.

Instead:

- Add a Minecraft-style **Resume** button on the homepage.
- Open or download the supplied resume PDF directly.
- Use a placeholder destination until the real resume is provided.
- Make it easy to replace the resume file without redesigning the site.

If a dedicated resume page is later added, it should serve a clear purpose rather than existing only because every other destination has a route.

---

## GitHub and LinkedIn

- Include both as subtle persistent or homepage-accessible actions.
- They should visually match the Minecraft interface.
- Do not use generic modern social-media buttons.
- Use placeholders until real links are provided.
- Avoid publishing fake URLs or contact information.

---

## Sound and settings

Do **not** implement ambient music, menu sound effects, audio controls, volume settings, or a full Options panel in V1.

These features are optional V2 polish only.

The initial site should prioritize:

- Visual fidelity
- Smooth interaction
- Responsive behavior
- Fast loading
- Strong content presentation

If audio is added later, it should begin only after user interaction and include a persistent mute control.

---

## Content editing

Keep all editable portfolio content in one clearly organized content module or small set of centralized data files.

This should include:

- Experience entries
- Projects
- Skills
- Biography
- Social links
- Resume path
- Splash phrases

Avoid scattering hard-coded personal content throughout components.

Use sample content where details are missing, but clearly label invented material as placeholder/sample content in the code.

Do not publish fake contact details or invented professional achievements.

Include sensible empty states when sections are not yet populated.

---

## Visual direction

The site should closely evoke **Minecraft Java Edition menu interfaces**.

Key visual characteristics:

- Full-screen block-world panorama or original Minecraft-like landscape backdrop
- Dark overlays where appropriate
- Pixel typography
- Square corners
- Hard shadows
- Beveled rectangular buttons
- Stone-like gray interface controls
- Dark bordered content viewports
- Pixel-style tooltips
- Natural sky/landscape color palette
- Strong centered menu composition
- Subtle texture and depth
- Restrained transitions

Explicitly avoid:

- Glassmorphism
- Frosted panels
- Rounded SaaS cards
- Pill buttons
- Large modern marketing typography
- Gradient-heavy design
- Generic dashboards
- Generic Tailwind component styling
- Excessive animation
- Neon cyberpunk styling
- Modern portfolio navbars unless absolutely necessary

Do not invent Minecraft-like UI merely for novelty.

Prefer faithful, restrained interpretation of familiar Minecraft menu conventions.

---

## Responsive behavior

### Desktop

Desktop should closely preserve a centered **16:9 game-menu composition**.

Inner pages should use:

- Shared panorama background
- Darkened overlay where appropriate
- Narrow page title area
- Large centered bordered viewport
- Bottom Minecraft-style action bar
- Consistent Back navigation

### Mobile

Do not simply shrink the desktop interface.

Instead:

- Preserve logo hierarchy
- Preserve the game-menu feel
- Increase touch targets where needed
- Intentionally crop the panorama
- Stack controls cleanly
- Keep text readable
- Preserve square button styling and hard visual edges
- Avoid turning the site into a conventional mobile web layout

---

## Accessibility

Support:

- Keyboard navigation
- Visible focus states
- Screen-reader-friendly labels
- Sufficient text contrast
- Touch interaction
- Reduced-motion preferences

However, accessibility improvements should **not visually transform the interface into a generic modern website**.

Preserve the intended Minecraft aesthetic while implementing accessibility correctly underneath.

---

## Technical details

- Build with the existing React and TanStack routing setup.
- Create dedicated routes for:
  - `/`
  - `/projects`
  - `/experience`
  - `/about`
  - `/skills`
- Resume can open directly from the homepage rather than requiring its own route.
- Build reusable components such as:
  - `MinecraftButton`
  - `InventorySlot`
  - `Tooltip`
  - `MenuPanel`
  - `PageFrame`
  - `Navigation`
  - `PortfolioEntry`
  - `WorldListItem`
  - `ServerListItem`
- Keep portfolio content static for fast loading.
- Avoid adding a backend, database, authentication, or Supabase unless a future feature genuinely requires it.
- Optimize images before shipping.
- Generate or create original imagery and textures sized appropriately for desktop and mobile.
- Keep component architecture understandable rather than overengineering abstractions.
- Ensure every route works when loaded directly.
- Verify all external links.
- Verify mobile and desktop layouts.
- Verify keyboard navigation.
- Verify hover and tooltip behavior.
- Respect reduced-motion preferences.

Do not over-prioritize route-specific SEO work during initial implementation. Basic metadata is sufficient for V1.

---

## Implementation strategy

Build in two major passes.

### Pass 1 — Homepage and visual system

Focus almost entirely on:

- Panorama
- Logo
- Pixel typography
- Buttons
- Hover/press states
- Menu proportions
- Spacing
- Dark overlays
- Splash text
- Overall Minecraft fidelity
- Desktop and mobile homepage behavior

Do not rush into implementing all other pages before the homepage looks exceptionally polished.

The homepage should establish the reusable design system for everything else.

### Pass 2 — Portfolio pages

After the homepage is visually strong:

1. Build Projects
2. Build Experience
3. Build About Me
4. Build Skills
5. Add Resume, GitHub, and LinkedIn
6. Polish responsive behavior
7. Fix inconsistencies and interactions

Do not add extra features simply because they are technically possible.

---

## Important design constraint

When making design decisions, prioritize this principle:

**The interface should feel like a real Minecraft game menu containing portfolio information, not a conventional portfolio website wearing a Minecraft theme.**

At the same time, professional information should remain immediately understandable to recruiters.

The design should balance:

**authentic Minecraft feel + excellent portfolio usability.**

---

## V2 ideas — do not build yet

Only consider these after the core site is complete and polished:

- Ambient music
- Menu click sounds
- Volume controls
- Minecraft-style Options menu
- Advanced enchanting-table skill interface
- Project search
- More elaborate transitions
- Achievement/Advancement page
- Interactive Minecraft-style career map
- Easter eggs
- Animated loading screens
- Keyboard shortcuts
- Additional environmental animation

These should not delay V1.

---

## Planned result

A polished, responsive Minecraft-homage portfolio for **Ky Hoang**, centered around an exceptionally refined homepage and strong Projects page.

The finished V1 should include:

- Highly polished Minecraft-inspired homepage
- Projects saved-world interface
- Experience multiplayer-server interface
- Book & Quill About page
- Inventory-style Skills page
- Direct Resume access
- GitHub and LinkedIn access
- Responsive desktop and mobile behavior
- Reusable centralized content
- Original visual assets and implementation
- No unnecessary backend
- No unnecessary feature creep

The final site should be memorable enough that a recruiter remembers it as **“the Minecraft portfolio,”** while still making Ky’s projects, experience, and software-engineering direction easy to understand.