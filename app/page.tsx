import { AboutSection } from "@/components/site/about-section";
import { BlogSection } from "@/components/site/blog-section";
import { ContactSection } from "@/components/site/contact-section";
// import { ExperienceSection } from "@/components/site/experience-section";
import { Hero } from "@/components/site/hero";
import { ProjectsSection } from "@/components/site/projects-section";
import { SkillsSection } from "@/components/site/skills-section";
import { getPortfolioData } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { profile, skills, projects, blogPosts } = await getPortfolioData();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[700px] px-6 py-8 sm:px-8 sm:py-12">
        <div className="animate-fade-in">
          <Hero
            name={profile.name}
            title={profile.title}
            location={profile.location}
          />
          <AboutSection about={profile.about} />
          <SkillsSection skills={skills} />
          <ProjectsSection projects={projects} />
          {/* <BlogSection posts={blogPosts} /> */}
          {/* <ExperienceSection /> */}
          <ContactSection
            email={profile.email}
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </div>
      </div>
    </main>
  );
}
