import { navItems } from "@/lib/portfolio";

type HeroProps = {
  name: string;
  title: string;
  location: string;
};

export function Hero({ name, title, location }: HeroProps) {
  return (
    <header className="flex flex-col gap-9 py-8 sm:py-12">
      <nav
        aria-label="Primary navigation"
        className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/60"
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="space-y-5">
        <p className="text-sm text-white/60">{location}</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold leading-tight tracking-normal text-white sm:text-5xl md:text-6xl">
            {name}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {title} building fast, scalable, and thoughtful web applications.
          </p>
        </div>
      </div>
    </header>
  );
}
