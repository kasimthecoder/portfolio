import { Section } from "@/components/site/section";
import type { PortfolioProject } from "@/lib/data";

type ProjectsSectionProps = { projects: PortfolioProject[] };

function ProjectVisual({ name, number }: { name: string; number: number }) {
  const isFeedback = /feedback/i.test(name);
  const isCms = /cms/i.test(name);
  return (
    <div className={`project-visual visual-${number}`} role="img" aria-label={`Editorial visual study for ${name}, based on its project description`}>
      <div className="project-visual-inner">
        <p className="visual-kicker mono">{name}</p>
        <p className="visual-big">{isFeedback ? <>Make room<br />for feedback.</> : isCms ? <>Content,<br />with structure.</> : <>A clearer view<br />of the week.</>}</p>
        <div className="visual-lines" aria-hidden="true"><span /><span /><span /></div>
        <div className={isFeedback ? "visual-columns" : "visual-timetable"} aria-hidden="true">
          {Array.from({ length: isFeedback ? 2 : 8 }, (_, index) => <span key={index} />)}
        </div>
      </div>
      <span className="visual-label mono">Visual study · {String(number).padStart(2, "0")}</span>
    </div>
  );
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const prioritized = ["KyroFeedback", "KyroCMS", "JUClasses"];
  const sorted = [...projects].sort((a, b) => {
    const aIndex = prioritized.indexOf(a.name);
    const bIndex = prioritized.indexOf(b.name);
    return (aIndex < 0 ? 99 : aIndex) - (bIndex < 0 ? 99 : bIndex);
  });

  return (
    <Section id="work" index="01" title="Selected work" note="Independent projects, each shaped around a practical need and a clear way to use it.">
      {sorted.map((project, index) => (
        <article className="project" key={project.id ?? project.name}>
          <ProjectVisual name={project.name} number={index + 1} />
          <div className="project-copy">
            <p className="project-meta"><span className="number">{String(index + 1).padStart(2, "0")}</span><span>{/classes/i.test(project.name) ? "Education · Scheduling" : /cms/i.test(project.name) ? "Developer tools · CMS" : /feedback/i.test(project.name) ? "Product tools · Feedback" : "Product engineering"}</span></p>
            <h3>{project.name}</h3>
            <p className="project-description">{project.description}</p>
            {project.stack.length ? <p className="project-stack mono">{project.stack.join(" · ")}</p> : null}
            {project.links?.live || project.links?.github ? (
              <div className="project-links">
                {project.links.live ? <a href={project.links.live} target="_blank" rel="noreferrer">Visit project <span aria-hidden="true">↗</span></a> : null}
                {project.links.github && !project.links.github.endsWith("/kasimthecoder") ? <a href={project.links.github} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a> : null}
              </div>
            ) : null}
          </div>
        </article>
      ))}
    </Section>
  );
}
