import Link from "next/link";

import { login } from "@/app/dashboard/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { isDashboardAuthConfigured } from "@/lib/auth";

export const metadata = {
  title: "Dashboard Login | Kasim Saifi",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

type LoginSearchParams = {
  error?: string;
};

export default async function DashboardLoginPage({
  searchParams,
}: {
  searchParams: Promise<LoginSearchParams>;
}) {
  const params = await searchParams;

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col justify-center px-6 py-12">
        <div className="animate-fade-in space-y-8">
          <header className="space-y-4">
            <Link href="/" className="text-sm text-white/60 hover:text-white">
              Portfolio
            </Link>
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-normal">
                Dashboard Login
              </h1>
              <p className="text-sm leading-6 text-white/60">
                Owner access is required to edit portfolio data.
              </p>
            </div>
          </header>

          {!isDashboardAuthConfigured() ? (
            <p className="text-sm leading-6 text-white/50">
              Set `DASHBOARD_PASSWORD` in `.env` before using the dashboard.
            </p>
          ) : (
            <LoginForm searchParams={params} />
          )}
        </div>
      </div>
    </main>
  );
}

function LoginForm({
  searchParams,
}: {
  searchParams: LoginSearchParams;
}) {
  return (
    <form action={login} className="space-y-5">
      <label className="block space-y-2">
        <span className="text-xs uppercase tracking-[0.16em] text-white/45">
          Password
        </span>
        <Input
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
      </label>
      {searchParams.error ? (
        <p className="text-sm leading-6 text-white/55">Invalid password.</p>
      ) : null}
      <Button type="submit">Enter dashboard</Button>
    </form>
  );
}
