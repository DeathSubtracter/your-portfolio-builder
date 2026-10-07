import { Github, Linkedin } from "lucide-react";
import type { ReactNode } from "react";
import panorama from "@/assets/voxel-panorama.jpg";
import { MinecraftButton } from "./MinecraftButton";

export function GameBackdrop({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <main className={`game-shell ${dark ? "game-shell-dark" : ""}`} style={{ backgroundImage: `url(${panorama})` }}>{children}</main>;
}

export function PageFrame({ title, children, actions }: { title: string; children: ReactNode; actions?: ReactNode }) {
  return (
    <GameBackdrop dark>
      <div className="page-frame">
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
      <a href="#" aria-label="GitHub placeholder" onClick={(event) => event.preventDefault()}><Github /></a>
      <a href="#" aria-label="LinkedIn placeholder" onClick={(event) => event.preventDefault()}><Linkedin /></a>
    </div>
  );
}