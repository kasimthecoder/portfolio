import { navigation } from "@/lib/data";

type HeroProps = { name: string; location: string; email: string };

export function Hero({ name, location, email }: HeroProps) {
  const shortName = name.trim().split(/\s+/).slice(0, 2).join(" ");
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <nav className="wrap nav-row" aria-label="Primary navigation">
          <a className="wordmark" href="#top" aria-label={`KS. — ${shortName}, home`}>KS<span className="accent">.</span></a>
          <div className="nav-links">
            {navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
          </div>
        </nav>
      </header>
      <section className="hero" id="top" aria-labelledby="hero-heading">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-copy">Independent developer</span>
              <span className="eyebrow-location"><span aria-hidden="true">·</span> {location}</span>
            </p>
            <h1 id="hero-heading">
              <span className="hero-line">I build things</span>
              <span className="hero-line"><span className="hero-phrase-lock">for the</span>{" "}<span className="hero-phrase-lock">real world</span><span className="accent">.</span></span>
            </h1>
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
