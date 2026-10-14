import { createFileRoute } from "@tanstack/react-router";
import { PageFrame } from "@/components/PageFrame";
import { MinecraftButton } from "@/components/MinecraftButton";
import { PixelItem } from "@/components/PixelItem";
import { useState } from "react";
import { skillGroups, interfaceCopy, portfolioHead } from "@/data/portfolio";

export const Route = createFileRoute("/skills")({ head: () => portfolioHead("skills"), component: SkillsPage });

function SkillsPage() {
  const [selected, setSelected] = useState(0);
  const group = skillGroups[selected] ?? skillGroups[0];
  return <PageFrame title="Skills" variant="enchant"><div className="enchant-shell">
    <div className="enchant-top">
      <div className="enchant-book"><h2>{interfaceCopy.enchantTitle}</h2><span className="runes" aria-hidden="true">ᔑ ⍑ ᒷ リ ᓭ ℸ ᒲ</span><PixelItem kind="book" /><p>{interfaceCopy.enchantHelper}</p></div>
      <div className="enchant-options" role="listbox" aria-label="Skill categories">{skillGroups.map((category, index) => <MinecraftButton key={category.name} className="enchant-option" role="option" label={category.name} selected={selected === index} onClick={() => setSelected(index)}><span className="item-slot"><PixelItem kind={category.icon} /></span><span className="enchant-copy"><span className="runes" aria-hidden="true">{category.runes}</span><strong>{category.name}</strong><small>{category.items.length} {interfaceCopy.skillsUnit}</small></span></MinecraftButton>)}</div>
    </div>
    <section className="skill-inventory" aria-label={`${group.name} skills`} aria-live="polite"><header><h2>{group.name}</h2></header><div className="skill-grid">{group.items.map(item => <div className="skill-slot" key={item}><span className="item-slot"><PixelItem kind={group.icon} /></span><span>{item}</span></div>)}</div></section>
  </div></PageFrame>;
}
