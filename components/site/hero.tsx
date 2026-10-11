import { ThemeToggle } from "@/components/site/theme-toggle";

type HeroProps = { name: string; location: string; email: string };

export function Hero({ name, location, email }: HeroProps) {
  const shortName = name.trim().split(/\s+/).slice(0, 2).join(" ");
  return (
    <>
      <header className="site-header">
        <nav className="wrap nav-row" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label={`${shortName}, home`}>KS<span className="accent">.</span></a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <ThemeToggle />
        </nav>
      </header>
      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Independent developer <span aria-hidden="true">·</span> {location}</p>
            <h1 id="hero-heading">I build things<br />for the real world<span className="accent">.</span></h1>
            <div className="hero-lower">
              <div>
                <p className="hero-intro">Software, products and thoughtful digital experiences—made to solve actual problems.</p>
                <div className="hero-actions">
                  <a className="action-primary" href="#work">Explore selected work <span aria-hidden="true">↘</span></a>
                  <a className="action-text" href={`mailto:${email}`}>Get in touch <span aria-hidden="true">↗</span></a>
                </div>
              </div>
              <p className="hero-note"><strong className="mono">A practice in building</strong>From a clear problem to a useful product, with care for the details in between.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
