import { Section } from "@/components/site/section";
import type { PortfolioProject } from "@/lib/data";

type ProjectsSectionProps = {
  projects: PortfolioProject[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="work" label="Work">
      <div className="space-y-0">
        {projects.map((project) => (
          <article
            key={project.id ?? project.name}
            className="border-t border-white/10 py-8 transition-colors duration-300 first:border-t-0 first:pt-0"
          >
            <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  {project.links?.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-2xl font-medium tracking-[-0.06em] text-[#f4efe9] transition-colors duration-300 hover:text-white sm:text-3xl"
                    >
                      <span>{project.name}</span>
                      <span className="text-base text-[#a29b93] transition-colors duration-300 hover:text-white">
                        ↗
                      </span>
                    </a>
                  ) : (
                    <h2 className="text-2xl font-medium tracking-[-0.06em] text-[#f4efe9] sm:text-3xl">
                      {project.name}
                    </h2>
                  )}

                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8d857d]">
                    2026
                  </span>
                </div>

                <p className="max-w-2xl text-base leading-7 text-[#c7c0b8]">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 lg:text-right">
                <div className="flex flex-wrap gap-2 lg:justify-end">
                  {project.stack.map((item) => (
                    <span
                      key={`${project.name}-${item}`}
                      className="text-[10px] uppercase tracking-[0.18em] text-[#8d857d]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {project.highlights && (
              <ul className="mt-6 space-y-3 text-sm leading-6 text-[#c7c0b8]">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#d3a97f]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
