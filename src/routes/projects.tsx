import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PageFrame } from "@/components/PageFrame";
import { projects } from "@/data/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Ky Hoang" }, { name: "description", content: "Software projects by Ky Hoang, presented as saved worlds." },
    { property: "og:title", content: "Projects — Ky Hoang" }, { property: "og:description", content: "Explore Ky Hoang's software projects." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ProjectsPage,
});

function ProjectsPage() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return <PageFrame title="Select Project" actions={<><MinecraftButton disabled={!project}>Open Project</MinecraftButton><MinecraftButton disabled={!project?.github}>GitHub</MinecraftButton><MinecraftButton to="/">Back</MinecraftButton></>}>
    <div className="world-list" role="listbox" aria-label="Projects">
      {projects.map((item, index) => <button key={item.id} type="button" role="option" aria-selected={selected === index} onClick={() => setSelected(index)} className="world-row">
        <span className="world-icon">{item.icon}</span>
        <span className="world-copy"><strong>{item.title} <small>{item.date}</small></strong><span>{item.description}</span><span className="tag-row">{item.technologies.map(tag => <i key={tag}>{tag}</i>)}</span></span>
        <span className="world-status"><b>▂▄▆</b>{item.status}</span>
      </button>)}
    </div>
  </PageFrame>;
}