<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep editable portfolio copy in `src/data/portfolio.ts` so personal content is never scattered across route components.
- Reuse the shared Minecraft-style primitives and `PageFrame` for visual consistency across all portfolio routes.
- Use shared source-rendered pixel item icons and named data-driven item variants so every screen has one cohesive icon vocabulary.
- Keep unavailable external actions disabled and use the shared Resume control so missing content never opens a native dialog.
