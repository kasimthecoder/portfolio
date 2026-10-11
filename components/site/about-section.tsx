import { Section } from "@/components/site/section";

type AboutSectionProps = { about: string; location: string };

export function AboutSection({ about, location }: AboutSectionProps) {
  return (
    <Section id="about" index="03" title="About" note="A little about the person behind the work.">
      <div className="about-grid">
        <div>
          <p className="about-lead">A developer who cares as much about what a product does as how it feels to use.</p>
          <p className="about-text">{about}</p>
        </div>
        <dl className="about-aside">
          <dt className="mono">Based in</dt><dd>{location}</dd>
          <dt className="mono">Working across</dt><dd>Product thinking, interface design and full-stack engineering</dd>
          <dt className="mono">Interested in</dt><dd>Useful software with a considered point of view</dd>
        </dl>
      </div>
    </Section>
  );
}
