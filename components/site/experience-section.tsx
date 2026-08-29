import { Section } from "@/components/site/section";

const experience = [
  { year: "2026", title: "KyroFeedback", detail: "Product / Engineering" },
  { year: "2026", title: "KyroCMS", detail: "Product / Engineering" },
  { year: "2026", title: "JUClasses", detail: "Product / Engineering" },
];

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience">
      <div className="space-y-0">
        {experience.map((item) => (
          <div
            key={item.title}
            className="grid gap-4 border-t border-white/10 py-6 first:border-t-0 first:pt-0 md:grid-cols-[120px_1fr_200px] md:items-start"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#8d857d]">{item.year}</p>
            <h3 className="text-xl font-medium tracking-[-0.04em] text-[#f4efe9]">
              {item.title}
            </h3>
            <p className="text-sm uppercase tracking-[0.16em] text-[#a29b93] md:text-right">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
