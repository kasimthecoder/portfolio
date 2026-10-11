import { Section } from "@/components/site/section";

const steps = [
  { title: "Understand", text: "Start with the people using it and the problem they need solved." },
  { title: "Shape", text: "Give the product a clear structure before adding complexity." },
  { title: "Build", text: "Connect considered interfaces with dependable systems underneath." },
  { title: "Improve", text: "Ship, learn from use, and make the next version more useful." },
];

export function ExperienceSection() {
  return (
    <Section id="approach" index="02" title="How I build" note="A product-minded approach, from understanding the need to improving what ships.">
      <div className="approach-grid">
        {steps.map((step, index) => (
          <article key={step.title} className="approach-step">
            <span className="step-no">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
