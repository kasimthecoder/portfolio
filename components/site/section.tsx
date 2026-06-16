import type { ReactNode } from "react";

export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="py-12 sm:py-16">
      <h2 id={`${id}-heading`} className="sr-only">
        {label}
      </h2>
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.16em] text-white/50">
        {label}
      </p>
      {children}
    </section>
  );
}
