import { Section } from "@/components/site/section";

type SkillsSectionProps = {
  skills: string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groups = [
    { label: "Frontend", items: skills.filter((skill) => ["React", "Next.js", "Svelte", "HTML", "CSS", "Tailwind CSS", "UI Systems"].includes(skill)) },
    { label: "Backend", items: skills.filter((skill) => ["Node.js", "Python", "PostgreSQL", "Prisma", "Product Engineering"].includes(skill)) },
    { label: "Languages", items: skills.filter((skill) => ["JavaScript", "TypeScript", "Python"].includes(skill)) },
  ];

  return (
    <Section id="skills" label="Skills">
      <div className="grid gap-8 md:grid-cols-3">
        {groups.map((group) => (
          <div key={group.label} className="space-y-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#a29b93]">{group.label}</p>
            <p className="text-base leading-7 text-[#c7c0b8]">
              {group.items.join(" · ")}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
