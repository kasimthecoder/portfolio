import { Section } from "@/components/site/section";

type AboutSectionProps = {
  about: string;
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <Section id="about" label="About">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="space-y-6">
          <h3 className="max-w-4xl text-3xl font-light leading-[1.02] tracking-[-0.06em] text-[#f4efe9] sm:text-4xl lg:text-6xl">
            I build digital products that feel quiet, fast, and unmistakably clear.
          </h3>
          <p className="max-w-2xl text-base leading-8 text-[#c7c0b8] sm:text-lg">
            {about}
          </p>
        </div>

        <div className="space-y-3">
          <div className="rounded-[22px] border border-white/10 bg-white/[0.02] p-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-[#a29b93]">Currently</p>
            <p className="mt-4 text-xl font-medium text-[#f4efe9]">Building full-stack products</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {[
              { label: "Focus", value: "Product engineering + UX" },
              { label: "Stack", value: "Next.js / Node.js / PostgreSQL" },
              { label: "Approach", value: "Simple systems. Clear interfaces." },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[18px] border border-white/10 bg-white/[0.02] p-4"
              >
                <p className="text-[10px] uppercase tracking-[0.18em] text-[#a29b93]">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-medium text-[#f4efe9]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
