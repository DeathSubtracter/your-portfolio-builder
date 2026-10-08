import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PixelItem } from "@/components/PixelItem";
import { useState } from "react";
import { skillGroups, interfaceCopy } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Ky Hoang" },
      {
        name: "description",
        content: "Programming languages, tools, and technical foundations used by Ky Hoang.",
      },
      { property: "og:title", content: "Skills — Ky Hoang" },
      { property: "og:description", content: "Explore Ky Hoang's technical inventory." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  const [selected, setSelected] = useState(0);
  const group = skillGroups[selected] ?? skillGroups[0];
  return (
    <PageFrame title="Skills" variant="enchant">
      <div className="enchant-shell">
        <div className="enchant-top">
          <div className="enchant-book">
            <h2>{interfaceCopy.enchantTitle}</h2>
            <span className="runes" aria-hidden="true">
              ᔑ ⍑ ᒷ リ ᓭ ℸ ᒲ
            </span>
            <PixelItem kind="book" />
            <p>{interfaceCopy.enchantHelper}</p>
          </div>
          <div className="enchant-options" role="listbox" aria-label="Skill categories">
            {skillGroups.map((category, index) => (
              <MinecraftButton
                key={category.name}
                className="enchant-option"
                role="option"
                selected={selected === index}
                onClick={() => setSelected(index)}
              >
                <span className="item-slot">
                  <PixelItem kind={category.icon} />
                </span>
                <span className="enchant-copy">
                  <span className="runes" aria-hidden="true">
                    {category.runes}
                  </span>
                  <strong>{category.name}</strong>
                  <small>{category.items.length} enchantments</small>
                </span>
                <span className="enchant-level">{index + 1}</span>
              </MinecraftButton>
            ))}
          </div>
        </div>
        <section className="skill-inventory" aria-label={`${group.name} skills`} aria-live="polite">
          <header>
            <h2>{group.name}</h2>
            <small>{group.items.length} applied</small>
          </header>
          <div className="skill-grid">
            {group.items.map((item) => (
              <div className="skill-slot" key={item} tabIndex={0}>
                <span className="item-slot">
                  <PixelItem kind="book" />
                </span>
                <span>{item}</span>
                <span className="mc-tooltip" role="tooltip">
                  {item} · Working knowledge
                </span>
              </div>
            ))}
          </div>
          <span className="sample-note">{interfaceCopy.sampleNote}</span>
        </section>
      </div>
    </PageFrame>
  );
}
