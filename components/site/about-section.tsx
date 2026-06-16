import { Section } from "@/components/site/section";

type AboutSectionProps = {
  about: string;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about" label="About">
      <div className="space-y-5 text-base leading-7 text-white/75">
        <p>{about}</p>
        <p>
          My work is centered on clear systems, strong user experience, and
          practical technical decisions that stay maintainable as products grow.
        </p>
      </div>
    </Section>
  );
}
