import type { ReactNode } from "react";

export function Section({
  id,
  label,
  children,
}: {
  id: string;
  label?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-t border-white/10 py-16 sm:py-20"
    >
      <h2 id={`${id}-heading`} className="sr-only">
        {label ?? id}
      </h2>

      <div className="mx-auto max-w-[1220px]">
        {label ? (
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.22em] text-[#a29b93]">
            {label}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}
