import { ArrowDown, Asterisk } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import { OrbitalGraphic } from './EditorialGraphics';
import ProfilePortrait from './ProfilePortrait';

function Marquee() {
  return (
    <div className="hero-marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-copy" key={copy}>
            {[0, 1].map((repeat) => (
              <span className="marquee-phrase" key={repeat}>
                SOFTWARE ENGINEER <Asterisk size={18} strokeWidth={1.3} />
                AI/ML <Asterisk size={18} strokeWidth={1.3} />
                FULL STACK <Asterisk size={18} strokeWidth={1.3} />
                BACKEND <Asterisk size={18} strokeWidth={1.3} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero relative h-[100dvh] w-full overflow-hidden" aria-labelledby="hero-title">
      <img
        className="hero-image pointer-events-none"
        src="/images/hero-sculpture.jpg"
        alt=""
        width={1536}
        height={1024}
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-image-shade pointer-events-none" aria-hidden="true" />
      <div className="hero-orbital pointer-events-none" aria-hidden="true"><OrbitalGraphic /></div>
      <div className="hero-title-wrap page-container">
        <h1 id="hero-title" className="hero-title" aria-label={portfolio.name}>
          <span className="hero-name-line"><span>{portfolio.firstName.toUpperCase()}</span></span>
          <span className="hero-name-line"><span>{portfolio.lastName.toUpperCase()}<span className="name-period">.</span></span></span>
        </h1>
      </div>
      <ProfilePortrait placement="hero" />
      <div className="hero-bottom page-container">
        <div className="hero-identity">
          <p className="hero-role">{portfolio.title}</p>
          <p className="hero-disciplines">{portfolio.disciplines.join(' \u00b7 ')}</p>
          <p className="hero-current">Currently building at {portfolio.currentRole.company}</p>
        </div>
        <a href="#about" className="scroll-cue">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow"><ArrowDown size={21} strokeWidth={1.3} aria-hidden="true" /></span>
        </a>
      </div>
      <Marquee />
    </section>
  );
}