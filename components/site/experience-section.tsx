import { Section } from "@/components/site/section";

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience">
      <article className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-medium tracking-normal">
            Freelance Full Stack Developer
          </h2>
          <p className="text-sm text-white/50">Independent / Remote</p>
        </div>
        <p className="text-base leading-7 text-white/75">
          I help clients design, develop, and ship web applications from concept
          to production, including frontend interfaces, backend APIs,
          performance work, and responsive layouts.
        </p>
      </article>
    </Section>
  );
}
