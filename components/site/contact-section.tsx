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
      <div className="space-y-5">
        <p className="text-base leading-7 text-white/75">
          For freelance work, collaboration, or project discussions, reach out
          through any of the links below.
        </p>
        <address className="flex flex-col items-start gap-3 not-italic sm:flex-row sm:flex-wrap sm:gap-x-6">
          <Button asChild variant="link">
            <a href={`mailto:${email}`}>{email}</a>
          </Button>
          <Button asChild variant="link">
            <a href={github}>GitHub</a>
          </Button>
          <Button asChild variant="link">
            <a href={linkedin}>LinkedIn</a>
          </Button>
        </address>
      </div>
    </Section>
  );
}
