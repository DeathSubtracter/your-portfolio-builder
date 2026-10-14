import { createFileRoute } from "@tanstack/react-router";
import { MinecraftButton } from "@/components/MinecraftButton";
import { GameBackdrop, SocialDock } from "@/components/PageFrame";
import { profile, splashPhrases, portfolioHead } from "@/data/portfolio";
import { ResumeButton } from "@/components/ResumeButton";
import titleAsset from "@/assets/minecraft-title.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => portfolioHead("home"),
  component: Index,
});

function Index() {
  const splash = splashPhrases[1];
  return (
    <GameBackdrop className="home-shell">
      <div className="title-screen">
        <header className="wordmark-wrap">
          <h1 className="portfolio-title" aria-label={`${profile.name} Portfolio`}>
            <img
              src={titleAsset.url}
              alt=""
              width={1920}
              height={455}
              draggable={false}
            />
          </h1>
          <span className="splash">{splash}</span>
        </header>

        <nav className="main-menu" aria-label="Portfolio menu">
          <MinecraftButton to="/projects">Projects</MinecraftButton>
          <MinecraftButton to="/experience">Experience</MinecraftButton>
          <MinecraftButton to="/about">About Me</MinecraftButton>
          <div className="secondary-menu">
            <MinecraftButton to="/skills">Skills</MinecraftButton>
            <ResumeButton />
          </div>
        </nav>
        <p className="home-introduction">{profile.introduction}</p>
      </div>
      <footer className="home-footer">
        <div className="home-footer-controls">
          <SocialDock />
          <span className="version">Portfolio v1.0</span>
        </div>
        <p className="home-profile">
          {profile.subtitle}
          <br />
          {profile.graduation}
        </p>
      </footer>
    </GameBackdrop>
  );
}
