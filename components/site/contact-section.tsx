type ContactSectionProps = { email: string; github: string; linkedin: string };

export function ContactSection({ email, github, linkedin }: ContactSectionProps) {
  return (
    <section id="contact" className="contact-section wrap" aria-labelledby="contact-heading">
      <div className="contact-grid" data-reveal>
        <div>
          <p className="section-index">05 / CONTACT</p>
          <h2 id="contact-heading" className="contact-title">Let&apos;s make something useful.</h2>
        </div>
        <div className="contact-aside">
          <a className="contact-email" href={`mailto:${email}`}>{email} <span aria-hidden="true">↗</span></a>
          <p className="mono muted">Find me elsewhere</p>
          <div className="footer-links">
            <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
}
