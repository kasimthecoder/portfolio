import { Button } from "@/components/ui/button";
import { Section } from "@/components/site/section";

type ContactSectionProps = {
  email: string;
  github: string;
  linkedin: string;
};

export function ContactSection({
  email,
  github,
  linkedin,
}: ContactSectionProps) {
  return (
    <Section id="contact" label="Contact">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div className="space-y-5">
          <h3 className="max-w-3xl text-3xl font-light leading-[1.02] tracking-[-0.06em] text-[#f4efe9] sm:text-4xl lg:text-6xl">
            Have a product worth building?
          </h3>
          <p className="max-w-xl text-base leading-8 text-[#c7c0b8] sm:text-lg">
            For freelance work, collaboration, or product thinking, I&apos;d be happy to connect.
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <Button
            asChild
            className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#f6f2ec] transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]"
          >
            <a href={`mailto:${email}`}>Let&apos;s talk</a>
          </Button>

          <address className="flex flex-wrap items-center gap-x-5 gap-y-2 not-italic text-[10px] uppercase tracking-[0.18em] text-[#d9d1c5]">
            <a href={`mailto:${email}`} className="transition-colors duration-300 hover:text-white">
              Email
            </a>
            <a href={github} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-white">
              GitHub
            </a>
            <a href={linkedin} target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-white">
              LinkedIn
            </a>
          </address>
        </div>
      </div>
    </Section>
  );
}
