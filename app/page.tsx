import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { Hero } from "@/components/site/hero";
import { ProjectsSection } from "@/components/site/projects-section";
import { SkillsSection } from "@/components/site/skills-section";
import { getPortfolioData } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { profile, skills, projects } = await getPortfolioData();

  return (
    <main className="min-h-screen text-[#f3efe8]">
      <div className="animate-fade-in">
        <Hero
          name={profile.name}
          location={profile.location}
          email={profile.email}
        />

        <div className="mx-auto max-w-[1220px] px-4 pb-8 sm:px-6 lg:px-8">
          <AboutSection about={profile.about} />
          <ProjectsSection projects={projects} />
          <ExperienceSection />
          <SkillsSection skills={skills} />
          <ContactSection
            email={profile.email}
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </div>

        <footer className="mx-auto flex max-w-[1220px] flex-col gap-4 border-t border-white/10 px-4 py-8 text-sm text-[#b6afa3] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[#e7e0d4]">
              KASIM SAIFI
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-[#8d857d]">
              Full Stack Developer / Product Builder
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.16em] text-[#d7d0c5]">
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>

          <div className="text-xs uppercase tracking-[0.16em] text-[#8d857d]">
            © 2026 Kasim Saifi
          </div>
        </footer>
      </div>
    </main>
  );
}
