import { Section } from "@/components/site/section";

type SkillsSectionProps = {
  skills: string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <Section id="skills" label="Skills">
      <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-base text-white/80 sm:grid-cols-3">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </Section>
  );
}
