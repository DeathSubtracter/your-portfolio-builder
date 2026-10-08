import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PageFrame } from "@/components/PageFrame";
import { PixelItem, type ItemKind } from "@/components/PixelItem";
import { ResumeButton } from "@/components/ResumeButton";
import { about, profile, interfaceCopy } from "@/data/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ky Hoang" },
      {
        name: "description",
        content:
          "Meet Ky Hoang, a Data Science student and aspiring software engineer at UC Berkeley.",
      },
      { property: "og:title", content: "About — Ky Hoang" },
      { property: "og:description", content: "Read Ky Hoang's story." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <PageFrame title="About Me" variant="profile">
      <div className="profile-layout">
        <aside className="profile-sidebar">
          <div className="portrait-area">
            <PixelItem kind="portrait" />
            <span>{interfaceCopy.photoNote}</span>
          </div>
          <h2 className="profile-name">{profile.name}</h2>
          <div className="profile-emblem">
            <PixelItem kind="crystal" />
            <span>UC BERKELEY</span>
          </div>
          <dl className="profile-metadata">
            {about.metadata.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="profile-tags">
            {about.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="profile-actions">
            <ResumeButton />
            <MinecraftButton external={profile.linkedin || undefined} disabled={!profile.linkedin}>
              LinkedIn
            </MinecraftButton>
          </div>
        </aside>
        <div className="profile-content">
          <section className="bio-panel">
            <p>{about.paragraph}</p>
          </section>
          <section className="right-now">
            <header>
              <h2>Right now</h2>
              <small>{interfaceCopy.sampleNote}</small>
            </header>
            <div className="now-list">
              {about.current.map((item, index) => (
                <div className="now-entry" key={item.label}>
                  <MinecraftButton
                    className="now-row"
                    onClick={() => setOpen(open === index ? null : index)}
                    selected={open === index}
                  >
                    <span className="item-slot">
                      <PixelItem kind={item.icon as ItemKind} />
                    </span>
                    <span className="now-copy">
                      <small>{item.label}</small>
                      <strong>{item.value}</strong>
                    </span>
                    <span className="now-indicator">{open === index ? "−" : "+"}</span>
                  </MinecraftButton>
                  {open === index && <p className="now-detail">{item.detail}</p>}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageFrame>
  );
}
