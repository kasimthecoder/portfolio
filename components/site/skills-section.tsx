import { Section } from "@/components/site/section";

type SkillsSectionProps = { skills: string[] };

export function SkillsSection({ skills }: SkillsSectionProps) {
  const groups = [
    { label: "Frontend", match: ["React", "Next.js", "Svelte", "JavaScript", "TypeScript", "Tailwind CSS", "UI Systems"] },
    { label: "Backend & data", match: ["Node.js", "Python", "PostgreSQL", "Prisma"] },
    { label: "Product & practice", match: ["Product Engineering"] },
  ].map((group) => ({ ...group, items: skills.filter((skill) => group.match.includes(skill)) })).filter((group) => group.items.length);

  return (
    <Section id="skills" index="04" title="Tools & practice" note="A concise set of tools used to take products from interface to data layer.">
      <div className="skills-list">
        {groups.map((group) => (
          <div className="skill-row" key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
