import type { ReactNode } from "react";
import panorama from "@/assets/classic-panorama.jpg";
import { profile } from "@/data/portfolio";
import { MinecraftButton } from "./MinecraftButton";
import { PixelItem } from "./PixelItem";

export function GameBackdrop({ children, dark = false, className = "" }: { children: ReactNode; dark?: boolean; className?: string }) {
  return <main className={`game-shell ${dark ? "game-shell-dark" : ""} ${className}`} style={{ backgroundImage: `url(${panorama})` }}>{children}</main>;
}

export function PageFrame({ title, children, actions, variant = "list" }: { title: string; children: ReactNode; actions?: ReactNode; variant?: "list" | "enchant" | "profile" }) {
  return (
    <GameBackdrop dark>
      <div className={`page-frame page-frame-${variant}`}>
        <h1 className="screen-title">{title}</h1>
        <section className="menu-viewport">{children}</section>
        <div className="action-bar">{actions ?? <MinecraftButton to="/">Back</MinecraftButton>}</div>
      </div>
      <SocialDock />
    </GameBackdrop>
  );
}

export function SocialDock() {
  return (
    <div className="social-dock" aria-label="Social links">
      <a href={profile.github || undefined} aria-disabled={!profile.github} title={profile.github ? "GitHub" : "GitHub link not added yet"} aria-label="GitHub" target="_blank" rel="noreferrer"><PixelItem kind="github" /></a>
      <a href={profile.linkedin || undefined} aria-disabled={!profile.linkedin} title={profile.linkedin ? "LinkedIn" : "LinkedIn link not added yet"} aria-label="LinkedIn" target="_blank" rel="noreferrer"><PixelItem kind="linkedin" /></a>
    </div>
  );
}
