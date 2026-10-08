import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PageFrame } from "@/components/PageFrame";
import { projects } from "@/data/portfolio";
import { PixelItem, type ItemKind } from "@/components/PixelItem";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Ky Hoang" },
      { name: "description", content: "Software projects by Ky Hoang, presented as saved worlds." },
      { property: "og:title", content: "Projects — Ky Hoang" },
      { property: "og:description", content: "Explore Ky Hoang's software projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [selected, setSelected] = useState(0);
  const project = projects[selected];
  return (
    <PageFrame
      title="Select Project"
      actions={
        <>
          {project?.demo && <MinecraftButton external={project.demo}>Open Project</MinecraftButton>}
          {project?.github && <MinecraftButton external={project.github}>GitHub</MinecraftButton>}
          <MinecraftButton to="/">Back</MinecraftButton>
        </>
      }
    >
      <div className="world-list" role="listbox" aria-label="Projects">
        {projects.map((item, index) => (
          <MinecraftButton
            key={item.id}
            role="option"
            selected={selected === index}
            onClick={() => setSelected(index)}
            className="world-row"
          >
            <span className={`world-icon world-icon-${index}`}>
              <PixelItem kind={(["compass", "chart", "book", "tree"] as ItemKind[])[index]} />
            </span>
            <span className="world-copy">
              <strong>{item.title}</strong>
              <small>{item.date} · Sample project</small>
              <span>{item.description}</span>
              <span className="tag-row">{item.technologies.join(" · ")}</span>
            </span>
            <span className="world-status">{item.status}</span>
          </MinecraftButton>
        ))}
      </div>
    </PageFrame>
  );
}
