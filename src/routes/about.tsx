import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PageFrame } from "@/components/PageFrame";
import { PixelItem } from "@/components/PixelItem";
import { ResumeButton } from "@/components/ResumeButton";
import { about, profile, interfaceCopy, portfolioHead } from "@/data/portfolio";

export const Route = createFileRoute("/about")({ head: () => portfolioHead("about"), component: AboutPage });

function AboutPage() {
  const [open, setOpen] = useState<number | null>(null);
  return <PageFrame title="About Me" variant="profile">
    <div className="profile-layout"><aside className="profile-sidebar">
      <div className="portrait-area" aria-label="Decorative pixel avatar"><PixelItem kind="portrait" /></div>
      <h2 className="profile-name">{profile.name}</h2><div className="profile-emblem"><PixelItem kind="crystal" /><span>{about.emblem}</span></div>
      <dl className="profile-metadata">{about.metadata.map(row => <div key={row.label}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl>
      <div className="profile-tags">{about.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <div className="profile-actions"><ResumeButton /><MinecraftButton external={profile.linkedin}>LinkedIn</MinecraftButton></div>
    </aside><div className="profile-content"><section className="bio-panel">{about.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section><section className="right-now"><header><h2>{interfaceCopy.aboutFactsTitle}</h2></header><div className="now-list">{about.facts.map((item, index) => <div className="now-entry" key={item.label}><MinecraftButton className="now-row" label={`${item.label}: ${item.value}`} onClick={() => setOpen(open === index ? null : index)} selected={open === index}><span className="item-slot"><PixelItem kind={item.icon} /></span><span className="now-copy"><small>{item.label}</small><strong>{item.value}</strong></span><span className="now-indicator" aria-hidden="true">{open === index ? "−" : "+"}</span></MinecraftButton>{open === index && <p className="now-detail">{item.detail}</p>}</div>)}</div></section><a className="profile-email" href={`mailto:${profile.email}`}>{profile.email}</a></div></div>
  </PageFrame>;
}
