"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import {
  clearDashboardSession,
  createDashboardSession,
  isDashboardAuthenticated,
  verifyDashboardPassword,
} from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function value(formData: FormData, key: string) {
  return String(formData.get(key) ?? "").trim();
}

function numberValue(formData: FormData, key: string) {
  const parsed = Number(value(formData, key));
  return Number.isFinite(parsed) ? parsed : 0;
}

function stackValue(formData: FormData) {
  return value(formData, "stack")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function revalidatePortfolio() {
  revalidatePath("/");
  revalidatePath("/dashboard");
}

async function requireDashboardAuth() {
  if (!(await isDashboardAuthenticated())) {
    redirect("/dashboard/login");
  }
}

export async function login(formData: FormData) {
  const password = value(formData, "password");

  if (!(await verifyDashboardPassword(password))) {
    redirect("/dashboard/login?error=1");
  }

  await createDashboardSession();
  redirect("/dashboard");
}

export async function logout() {
  await clearDashboardSession();
  redirect("/dashboard/login");
}

export async function updateProfile(formData: FormData) {
  await requireDashboardAuth();

  if (!process.env.DATABASE_URL) {
    return;
  }

  await prisma.profile.upsert({
    where: { id: "main" },
    update: {
      name: value(formData, "name"),
      title: value(formData, "title"),
      location: value(formData, "location"),
      about: value(formData, "about"),
      email: value(formData, "email"),
      github: value(formData, "github"),
      linkedin: value(formData, "linkedin"),
    },
    create: {
      id: "main",
      name: value(formData, "name"),
      title: value(formData, "title"),
      location: value(formData, "location"),
      about: value(formData, "about"),
      email: value(formData, "email"),
      github: value(formData, "github"),
      linkedin: value(formData, "linkedin"),
    },
  });

  revalidatePortfolio();
}

export async function createSkill(formData: FormData) {
  await requireDashboardAuth();

  if (!process.env.DATABASE_URL) {
    return;
  }

  const name = value(formData, "name");

  if (!name) {
    return;
  }

  await prisma.skill.upsert({
    where: { name },
    update: {
      order: numberValue(formData, "order"),
    },
    create: {
      name,
      order: numberValue(formData, "order"),
    },
  });

  revalidatePortfolio();
}

export async function deleteSkill(formData: FormData) {
  await requireDashboardAuth();

  if (!process.env.DATABASE_URL) {
    return;
  }

  await prisma.skill.delete({
    where: { id: value(formData, "id") },
  });

  revalidatePortfolio();
}

export async function createProject(formData: FormData) {
  await requireDashboardAuth();

  if (!process.env.DATABASE_URL) {
    return;
  }

  const name = value(formData, "name");
  const description = value(formData, "description");

  if (!name || !description) {
    return;
  }

  await prisma.project.create({
    data: {
      name,
      description,
      stack: stackValue(formData),
      order: numberValue(formData, "order"),
    },
  });

  revalidatePortfolio();
}

export async function deleteProject(formData: FormData) {
  await requireDashboardAuth();

  if (!process.env.DATABASE_URL) {
    return;
  }

  await prisma.project.delete({
    where: { id: value(formData, "id") },
  });

  revalidatePortfolio();
}
