import { navItems } from "@/lib/portfolio";

type HeroProps = {
  name: string;
  location: string;
  email: string;
};

export function Hero({ name, location, email }: HeroProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/10 px-4 pb-16 pt-5 sm:px-6 sm:pb-20 sm:pt-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(149,125,102,0.12),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(100,116,145,0.12),transparent_32%)]" />

      <nav
        aria-label="Primary navigation"
        className="relative z-10 mx-auto flex max-w-[1220px] items-center justify-between gap-4 pb-10 text-[10px] uppercase tracking-[0.22em] text-[#c8c1b7]"
      >
        <div className="font-medium text-[#f6f2ec] transition-colors duration-300 hover:text-white">
          {name}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[10px]">
          <button type="button" className="transition-colors duration-300 hover:text-white">
            EN
          </button>
          <span className="text-[#726b63]">/</span>
          <button type="button" className="text-[#726b63] transition-colors duration-300 hover:text-white">
            IN
          </button>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-[1220px] pt-8 sm:pt-10 lg:min-h-[68vh] lg:pt-14">
        <div className="max-w-[1100px] space-y-7">
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#a29b93]">{location}</p>

          <h1 className="max-w-[1000px] text-[clamp(3.8rem,10vw,9.7rem)] font-light leading-[0.82] tracking-[-0.08em] text-[#f4efe9]">
            {name}
          </h1>

          <div className="space-y-3 text-[11px] uppercase tracking-[0.24em] text-[#c8c1b7]">
            <p>FULL STACK DEVELOPER · PRODUCT BUILDER</p>
          </div>

          <p className="max-w-[760px] text-base leading-7 text-[#c7c0b8] sm:text-lg sm:leading-8">
            I build fast, thoughtful digital products with clean interfaces and solid engineering.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full border border-white/15 bg-transparent px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#f6f2ec] transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.02]"
          >
            View work
          </a>
          <a
            href={`mailto:${email}`}
            className="rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[#f6f2ec] transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.05]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
