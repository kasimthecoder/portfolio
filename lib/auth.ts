import { createHash, timingSafeEqual } from "node:crypto";

import { cookies } from "next/headers";

const COOKIE_NAME = "dashboard_session";

function dashboardPassword() {
  return process.env.DASHBOARD_PASSWORD;
}

function sessionSecret() {
  return process.env.DASHBOARD_SESSION_SECRET ?? dashboardPassword();
}

function digest(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

function secureCompare(a: string, b: string) {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);

  return aBuffer.length === bBuffer.length && timingSafeEqual(aBuffer, bBuffer);
}

export function isDashboardAuthConfigured() {
  return Boolean(dashboardPassword());
}

export async function isDashboardAuthenticated() {
  const secret = sessionSecret();

  if (!secret) {
    return false;
  }

  const cookieStore = await cookies();
  const session = cookieStore.get(COOKIE_NAME)?.value;

  return Boolean(session && secureCompare(session, digest(secret)));
}

export async function verifyDashboardPassword(password: string) {
  const expected = dashboardPassword();

  if (!expected) {
    return false;
  }

  return secureCompare(digest(password), digest(expected));
}

export async function createDashboardSession() {
  const secret = sessionSecret();

  if (!secret) {
    return;
  }

  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, digest(secret), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/dashboard",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearDashboardSession() {
  const cookieStore = await cookies();

  cookieStore.delete(COOKIE_NAME);
}
