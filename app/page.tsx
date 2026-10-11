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
    <div className="portfolio">
      <Hero name={profile.name} location={profile.location} email={profile.email} />
      <main>
        <ProjectsSection projects={projects} />
        <ExperienceSection />
        <AboutSection about={profile.about} location={profile.location} />
        <SkillsSection skills={skills} />
        <ContactSection email={profile.email} github={profile.github} linkedin={profile.linkedin} />
      </main>
      <footer className="wrap footer">
        <a className="wordmark" href="#top" aria-label="Kasim Saifi, back to top">KS<span className="accent">.</span></a>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a>
        </nav>
        <span className="mono">© {new Date().getFullYear()} Kasim Saifi</span>
      </footer>
    </div>
  );
}
