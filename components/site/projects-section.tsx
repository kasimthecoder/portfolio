import { Section } from "@/components/site/section";
import type { PortfolioProject } from "@/lib/data";

type ProjectsSectionProps = {
  projects: PortfolioProject[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="projects" label="Projects">
      <div className="space-y-10">
        {projects.map((project) => (
          <article key={project.id ?? project.name} className="space-y-2">
            <h2 className="text-xl font-medium tracking-normal">{project.name}</h2>
            <p className="text-base leading-7 text-white/70">
              {project.description}
            </p>
            <p className="text-sm leading-6 text-white/50">
              {project.stack.join(" / ")}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
