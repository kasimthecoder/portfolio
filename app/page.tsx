import { AboutSection } from "@/components/site/about-section";
import { ContactSection } from "@/components/site/contact-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { Hero } from "@/components/site/hero";
import { ProjectsSection } from "@/components/site/projects-section";
import { ScrollReveals } from "@/components/site/scroll-reveals";
import { SkillsSection } from "@/components/site/skills-section";
import { StructuredData } from "@/components/site/structured-data";
import { navigation, profile, projects, skillGroups } from "@/lib/data";

export default function Home() {
  return (
    <div className="portfolio">
      <StructuredData />
      <ScrollReveals />
      <Hero name={profile.name} location={profile.location} email={profile.email} />
      <main id="main-content">
        <ProjectsSection projects={projects} />
        <ExperienceSection />
        <AboutSection about={profile.about} location={profile.location} />
        <SkillsSection groups={skillGroups} />
        <ContactSection email={profile.email} github={profile.github} linkedin={profile.linkedin} />
      </main>
      <footer className="wrap footer">
        <a className="wordmark" href="#top" aria-label="KS. — Kasim Saifi, back to top">KS<span className="accent">.</span></a>
        <nav className="footer-links" aria-label="Footer navigation">
          {navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
        <span className="mono">© {new Date().getFullYear()} Kasim Saifi</span>
      </footer>
    </div>
  );
}
