import { blogPosts, profile, projects, skills } from "@/lib/portfolio";
import { prisma } from "@/lib/prisma";

export type PortfolioProject = {
  id?: string;
  name: string;
  description: string;
  stack: string[];
};

export type PortfolioData = {
  profile: typeof profile;
  skills: string[];
  projects: PortfolioProject[];
  blogPosts: typeof blogPosts;
};

export async function getPortfolioData(): Promise<PortfolioData> {
  if (!process.env.DATABASE_URL) {
    return {
      profile,
      skills,
      projects,
      blogPosts,
    };
  }

  try {
    const [storedProfile, storedSkills, storedProjects] = await Promise.all([
      prisma.profile.findFirst({
        orderBy: { updatedAt: "desc" },
      }),
      prisma.skill.findMany({
        orderBy: [{ order: "asc" }, { name: "asc" }],
      }),
      prisma.project.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      }),
    ]);

    return {
      profile: storedProfile ?? profile,
      skills: storedSkills.length ? storedSkills.map((skill) => skill.name) : skills,
      projects: storedProjects.length ? storedProjects : projects,
      blogPosts,
    };
  } catch {
    return {
      profile,
      skills,
      projects,
      blogPosts,
    };
  }
}

export async function getDashboardData() {
  if (!process.env.DATABASE_URL) {
    return {
      isDatabaseReady: false,
      profile,
      skills: skills.map((name, index) => ({ id: name, name, order: index })),
      projects: projects.map((project, index) => ({
        id: project.name,
        ...project,
        order: index,
      })),
    };
  }

  try {
    const [storedProfile, storedSkills, storedProjects] = await Promise.all([
      prisma.profile.findFirst({
        orderBy: { updatedAt: "desc" },
      }),
      prisma.skill.findMany({
        orderBy: [{ order: "asc" }, { name: "asc" }],
      }),
      prisma.project.findMany({
        orderBy: [{ order: "asc" }, { createdAt: "desc" }],
      }),
    ]);

    return {
      isDatabaseReady: true,
      profile: storedProfile ?? profile,
      skills: storedSkills,
      projects: storedProjects,
    };
  } catch {
    return {
      isDatabaseReady: false,
      profile,
      skills: skills.map((name, index) => ({ id: name, name, order: index })),
      projects: projects.map((project, index) => ({
        id: project.name,
        ...project,
        order: index,
      })),
    };
  }
}
