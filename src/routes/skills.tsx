import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";
import { skillGroups } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({ head: () => ({ meta: [
  { title: "Skills — Ky Hoang" }, { name: "description", content: "Programming languages, tools, and technical foundations used by Ky Hoang." },
  { property: "og:title", content: "Skills — Ky Hoang" }, { property: "og:description", content: "Explore Ky Hoang's technical inventory." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: SkillsPage });

function SkillsPage() {
  return <PageFrame title="Inventory"><div className="inventory-panel">
    <div className="avatar-block"><div className="pixel-avatar">KH</div><span>Ky Hoang</span></div>
    <div className="inventory-content">{skillGroups.map(group => <section key={group.name}><h2>{group.name}</h2><div className="slot-grid">{group.items.map(item => <div className="inventory-slot" tabIndex={0} key={item.name}><span>{item.icon}</span><div role="tooltip"><strong>{item.name}</strong><small>Working knowledge</small></div></div>)}</div></section>)}</div>
  </div></PageFrame>;
}