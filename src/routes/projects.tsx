import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PageFrame } from "@/components/PageFrame";
import { projects, interfaceCopy, portfolioHead } from "@/data/portfolio";
import { PixelItem } from "@/components/PixelItem";

export const Route = createFileRoute("/projects")({ head: () => portfolioHead("projects"), component: ProjectsPage });

function ProjectsPage() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return <PageFrame title="Select Project" actions={<>{project?.demo && <MinecraftButton external={project.demo}>Open Project</MinecraftButton>}{project?.github && <MinecraftButton external={project.github}>GitHub</MinecraftButton>}<MinecraftButton to="/">Back</MinecraftButton></>}>
    <div className="world-list" role="listbox" aria-label="Projects">
      {projects.map((item, index) => <MinecraftButton key={item.id} role="option" label={`${item.title}, ${item.date}, ${item.category}`} selected={selected === index} onClick={() => setSelected(index)} className="world-row">
        <span className={`world-icon world-icon-${index}`}><PixelItem kind={item.icon} /></span>
        <span className="world-copy"><strong>{item.title}</strong><small>{item.date} · {item.category}</small><span>{item.description}</span><span className="tag-row">{item.technologies.join(" · ")}</span></span>
      </MinecraftButton>)}
    </div>
    {project && <section className="project-detail" aria-label={`${project.title} highlights`} aria-live="polite">
      <h2>{project.title} · {interfaceCopy.projectHighlightsTitle}</h2>
      {project.award && <p className="project-award"><span>{interfaceCopy.projectAwardLabel}: </span>{project.award}</p>}
      {project.qualification && <p className="project-qualification">{project.qualification}</p>}
      <ul>{project.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
    </section>}
  </PageFrame>;
}
