import { profile, projects } from "@/lib/data";
import { HOME_URL } from "@/lib/seo";

const personId = `${HOME_URL}#person`;
const websiteId = `${HOME_URL}#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: HOME_URL,
      name: "Kasim Saifi",
      inLanguage: "en-IN",
      publisher: { "@id": personId },
      about: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": `${HOME_URL}#profilepage`,
      url: HOME_URL,
      name: "Kasim Saifi — Full-Stack Developer & Product Builder",
      description:
        "A full-stack developer and product builder creating practical software products and thoughtful digital experiences.",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      inLanguage: "en-IN",
    },
    {
      "@type": "Person",
      "@id": personId,
      name: "Kasim Saifi",
      url: HOME_URL,
      jobTitle: profile.title,
      email: `mailto:${profile.email}`,
      sameAs: [profile.github, profile.linkedin],
      subjectOf: projects.map((project) => ({
        "@id": `${HOME_URL}#${project.id}`,
      })),
    },
    ...projects.map((project) => ({
      "@type": "SoftwareApplication",
      "@id": `${HOME_URL}#${project.id}`,
      name: project.title,
      description: project.description,
      url: project.liveUrl,
      applicationCategory: project.category,
      featureList: project.highlights,
      creator: { "@id": personId },
      isPartOf: { "@id": websiteId },
    })),
  ],
};

export function StructuredData() {
  const json = JSON.stringify(structuredData).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
