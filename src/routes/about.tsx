import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PageFrame } from "@/components/PageFrame";
import { biography } from "@/data/portfolio";

export const Route = createFileRoute("/about")({ head: () => ({ meta: [
  { title: "About — Ky Hoang" }, { name: "description", content: "Meet Ky Hoang, a Data Science student and aspiring software engineer at UC Berkeley." },
  { property: "og:title", content: "About — Ky Hoang" }, { property: "og:description", content: "Read Ky Hoang's story." },
  { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AboutPage });

function AboutPage() {
  const [page, setPage] = useState(0);
  return <PageFrame title="About Me" actions={<><MinecraftButton onClick={() => setPage(Math.max(0, page - 1))} disabled={page === 0}>Previous</MinecraftButton><MinecraftButton onClick={() => setPage(Math.min(biography.length - 1, page + 1))} disabled={page === biography.length - 1}>Next</MinecraftButton><MinecraftButton to="/">Done</MinecraftButton></>}>
    <div className="book-wrap"><article className="book-page"><h2>Ky Hoang</h2><p>{biography[page]}</p><span>Page {page + 1} of {biography.length}</span><em>— Ky</em></article></div>
  </PageFrame>;
}