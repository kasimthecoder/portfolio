import { Section } from "@/components/site/section";

type SkillsSectionProps = { groups: { label: string; items: string[] }[] };

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <Section id="skills" index="04" title="Tools & practice" note="A concise set of tools used to take products from interface to data layer.">
      <div className="skills-list">
        {groups.map((group) => (
          <div className="skill-row" data-reveal key={group.label}>
            <h3>{group.label}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
