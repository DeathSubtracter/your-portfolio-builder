import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageFrame } from "@/components/PageFrame";
import { experience } from "@/data/portfolio";

export const Route = createFileRoute("/experience")({ head: () => ({ meta: [
  { title: "Experience — Ky Hoang" }, { name: "description", content: "Ky Hoang's education and software engineering experience." },
  { property: "og:title", content: "Experience — Ky Hoang" }, { property: "og:description", content: "Ky Hoang's education and experience." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ExperiencePage });

function ExperiencePage() {
  const [selected, setSelected] = useState(0);
  return <PageFrame title="Join Experience">
    <div className="server-list" role="listbox" aria-label="Experience">
      {experience.map((item, index) => <button type="button" key={item.organization} role="option" aria-selected={selected === index} onClick={() => setSelected(index)} className="server-row">
        <span className="server-icon">{item.organization.slice(0, 2).toUpperCase()}</span>
        <span className="server-copy"><strong>{item.role}</strong><b>{item.organization}</b><span>{item.description}</span><small>{item.dates} · {item.location}</small></span>
        <span className="ping"><b>▂▄▆</b>{item.ping}</span>
      </button>)}
    </div>
  </PageFrame>;
}