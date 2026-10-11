import { Section } from "@/components/site/section";
import { workSteps } from "@/lib/data";

export function ExperienceSection() {
  return (
    <Section id="approach" index="02" title="How I build" note="A product-minded approach, from understanding the need to improving what ships.">
      <div className="approach-grid">
        {workSteps.map((step, index) => (
          <article key={step.title} className="approach-step" data-reveal>
            <span className="step-no">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
