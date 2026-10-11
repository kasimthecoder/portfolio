import type { ReactNode } from "react";

export function Section({
  id,
  index,
  title,
  note,
  children,
}: {
  id: string;
  index: string;
  title: string;
  note?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="editorial-section wrap" aria-labelledby={`${id}-heading`}>
      <div className="section-head" data-reveal>
        <div>
          <p className="section-index">{index} / {title}</p>
          <h2 id={`${id}-heading`} className="section-title">{title}</h2>
        </div>
        {note ? <p className="section-note">{note}</p> : null}
      </div>
      {children}
    </section>
  );
}
