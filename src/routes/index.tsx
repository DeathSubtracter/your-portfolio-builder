import { createFileRoute } from "@tanstack/react-router";
import { MinecraftButton } from "@/components/MinecraftButton";
import { GameBackdrop, SocialDock } from "@/components/PageFrame";
import { profile, splashPhrases } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Ky Hoang — Software Engineering Portfolio" },
    { name: "description", content: "The Minecraft-inspired software engineering portfolio of UC Berkeley Data Science student Ky Hoang." },
    { property: "og:title", content: "Ky Hoang — Software Engineering Portfolio" },
    { property: "og:description", content: "Explore Ky Hoang's projects, experience, skills, and story through a game-inspired portfolio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  const splash = splashPhrases[1];
  return (
    <GameBackdrop>
      <div className="title-screen">
        <header className="wordmark-wrap">
          <div className="wordmark" aria-label="Ky Hoang Portfolio">
            <span>KY HOANG</span>
            <strong>PORTFOLIO</strong>
          </div>
          <span className="splash">{splash}</span>
          <p>{profile.subtitle} · {profile.direction}</p>
        </header>

        <nav className="main-menu" aria-label="Portfolio menu">
          <MinecraftButton to="/projects">Projects</MinecraftButton>
          <MinecraftButton to="/experience">Experience</MinecraftButton>
          <MinecraftButton to="/about">About Me</MinecraftButton>
          <div className="secondary-menu">
            <MinecraftButton to="/skills">Skills</MinecraftButton>
            <MinecraftButton onClick={() => alert("Resume coming soon — add your PDF in the portfolio content file.")}>Resume</MinecraftButton>
          </div>
        </nav>
      </div>
      <SocialDock />
      <div className="version">Portfolio v1.0</div>
    </GameBackdrop>
  );
}
