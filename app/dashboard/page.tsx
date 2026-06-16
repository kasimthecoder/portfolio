import Link from "next/link";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

import {
  createProject,
  createSkill,
  deleteProject,
  deleteSkill,
  logout,
  updateProfile,
} from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { isDashboardAuthenticated, isDashboardAuthConfigured } from "@/lib/auth";
import { getDashboardData } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Dashboard | Kasim Saifi",
  robots: {
    index: false,
    follow: false,
  },
};

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-[0.16em] text-white/45">
        {label}
      </span>
      {children}
    </label>
  );
}

export default async function DashboardPage() {
  if (!isDashboardAuthConfigured() || !(await isDashboardAuthenticated())) {
    redirect("/dashboard/login");
  }

  const { isDatabaseReady, profile, projects, skills } = await getDashboardData();

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto w-full max-w-[820px] px-6 py-8 sm:px-8 sm:py-12">
        <div className="animate-fade-in space-y-16">
          <header className="space-y-5">
            <nav className="flex gap-5 text-sm text-white/60">
              <Link href="/" className="hover:text-white">
                Portfolio
              </Link>
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>
              <form action={logout}>
                <button type="submit" className="hover:text-white">
                  Logout
                </button>
              </form>
            </nav>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
                Dashboard
              </h1>
              <p className="max-w-2xl text-base leading-7 text-white/65">
                Manage portfolio profile, skills, and projects from Postgres
                through Prisma.
              </p>
              {!isDatabaseReady ? (
                <p className="text-sm leading-6 text-white/45">
                  Database is not connected yet. Add `DATABASE_URL`, run
                  `bun run db:migrate`, then use these forms.
                </p>
              ) : null}
            </div>
          </header>

          <section aria-labelledby="profile-heading" className="space-y-6">
            <h2 id="profile-heading" className="text-xl font-medium">
              Profile
            </h2>
            <form action={updateProfile} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <Input name="name" defaultValue={profile.name} required />
                </Field>
                <Field label="Title">
                  <Input name="title" defaultValue={profile.title} required />
                </Field>
                <Field label="Location">
                  <Input
                    name="location"
                    defaultValue={profile.location}
                    required
                  />
                </Field>
                <Field label="Email">
                  <Input
                    name="email"
                    type="email"
                    defaultValue={profile.email}
                    required
                  />
                </Field>
                <Field label="GitHub">
                  <Input name="github" defaultValue={profile.github} required />
                </Field>
                <Field label="LinkedIn">
                  <Input
                    name="linkedin"
                    defaultValue={profile.linkedin}
                    required
                  />
                </Field>
              </div>
              <Field label="About">
                <Textarea name="about" defaultValue={profile.about} required />
              </Field>
              <div>
                <Button type="submit">Save profile</Button>
              </div>
            </form>
          </section>

          <section aria-labelledby="skills-heading" className="space-y-6">
            <h2 id="skills-heading" className="text-xl font-medium">
              Skills
            </h2>
            <form action={createSkill} className="grid gap-5 sm:grid-cols-[1fr_90px_auto]">
              <Field label="Skill">
                <Input name="name" placeholder="React" required />
              </Field>
              <Field label="Order">
                <Input name="order" type="number" defaultValue={0} />
              </Field>
              <div className="flex items-end">
                <Button type="submit">Add skill</Button>
              </div>
            </form>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="grid grid-cols-[1fr_auto] items-center gap-4"
                >
                  <p className="text-sm text-white/75">{skill.name}</p>
                  <form action={deleteSkill}>
                    <input type="hidden" name="id" value={skill.id} />
                    <Button type="submit" variant="link">
                      Delete
                    </Button>
                  </form>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="projects-heading" className="space-y-6">
            <h2 id="projects-heading" className="text-xl font-medium">
              Projects
            </h2>
            <form action={createProject} className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-[1fr_90px]">
                <Field label="Project name">
                  <Input name="name" placeholder="Commerce Platform" required />
                </Field>
                <Field label="Order">
                  <Input name="order" type="number" defaultValue={0} />
                </Field>
              </div>
              <Field label="Description">
                <Textarea name="description" required />
              </Field>
              <Field label="Stack">
                <Input
                  name="stack"
                  placeholder="Next.js, TypeScript, PostgreSQL"
                  required
                />
              </Field>
              <div>
                <Button type="submit">Add project</Button>
              </div>
            </form>
            <div className="space-y-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="grid gap-3 sm:grid-cols-[1fr_auto]"
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium">{project.name}</h3>
                    <p className="text-sm leading-6 text-white/65">
                      {project.description}
                    </p>
                    <p className="text-xs leading-5 text-white/45">
                      {project.stack.join(" / ")}
                    </p>
                  </div>
                  <form action={deleteProject}>
                    <input type="hidden" name="id" value={project.id} />
                    <Button type="submit" variant="link">
                      Delete
                    </Button>
                  </form>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
