import { Section } from "@/components/site/section";
import type { Project } from "@/lib/data";

type ProjectsSectionProps = { projects: Project[] };

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <Section id="work" index="01" title="Selected work" note="Independent products built around practical needs and clear ways to use them.">
      <div className="projects-list">
        {projects.map((project) => (
          <article className="project" data-reveal key={project.id}>
            <div className="project-heading">
              <p className="project-meta mono"><span className="number">{project.number}</span><span>{project.category}</span></p>
              <h3>{project.title}</h3>
              {project.status ? <p className="project-status mono">{project.status}</p> : null}
            </div>
            <div className="project-copy">
              <p className="project-description">{project.description}</p>
              {project.highlights?.length ? (
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              ) : null}
              <p className="project-stack mono"><span className="visually-hidden">Technologies: </span>{project.technologies.join(" · ")}</p>
              {project.liveUrl || project.githubUrl ? (
                <div className="project-links">
                  {project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a> : null}
                  {project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a> : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
