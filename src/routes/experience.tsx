import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageFrame } from "@/components/PageFrame";
import { experience, portfolioHead } from "@/data/portfolio";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PixelItem } from "@/components/PixelItem";

export const Route = createFileRoute("/experience")({ head: () => portfolioHead("experience"), component: ExperiencePage });

function ExperiencePage() {
  const [selected, setSelected] = useState(0);
  return <PageFrame title="Join Experience">
    <div className="server-list" role="listbox" aria-label="Experience">
      {experience.map((item, index) => <MinecraftButton key={item.id} role="option" label={`${item.role} at ${item.organization}`} selected={selected === index} onClick={() => setSelected(index)} className="server-row">
        <span className="server-icon"><PixelItem kind={item.icon} /></span>
        <span className="server-copy"><strong>{item.role}</strong><b>{item.organization}</b><small>{[item.dates, item.location].filter(Boolean).join(" · ")}</small><span>{item.description}</span></span>
      </MinecraftButton>)}
    </div>
  </PageFrame>;
}
