import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import ProfilePortrait from './ProfilePortrait';

export default function About() {
  return (
    <section id="about" className="section-light section-padding" aria-labelledby="about-title">
      <div className="page-container">
        <Reveal><SectionLabel number="01">THE PERSON</SectionLabel></Reveal>
        <div className="about-layout">
          <div className="about-visual-column">
            <Reveal variant="heading"><h2 id="about-title" className="section-title">ABOUT<span className="title-period">.</span></h2></Reveal>
            <Reveal variant="image" delay={150} className="about-brand-graphic"><ProfilePortrait placement="about" /></Reveal>
          </div>
          <div className="about-copy">
            <Reveal delay={100}><p className="about-introduction">{portfolio.about.introduction}</p></Reveal>
            <Reveal delay={150}>
              <div className="about-details">
                <p>{portfolio.about.description}</p>
                <p>{portfolio.about.current}</p>
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="about-signoff">
                <span>BASED IN {portfolio.location.toUpperCase()}</span>
                <span>SOFTWARE. INTELLIGENCE. IMPACT.</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}