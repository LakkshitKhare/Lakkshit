import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';
import { SignalGraphic } from './EditorialGraphics';

export default function Publications() {
  const research = portfolio.research;
  return (
    <section id="research" className="research section-padding" aria-labelledby="research-title">
      <div className="page-container">
        <Reveal><SectionLabel number="07">BEYOND THE CODE</SectionLabel></Reveal>
        <div className="research-layout">
          <div className="research-visual-column">
            <Reveal variant="heading"><h2 id="research-title" className="section-title">RESEARCH<span className="title-period">.</span></h2></Reveal>
            <Reveal delay={160} className="research-signal-reveal"><SignalGraphic /></Reveal>
          </div>
          <Reveal delay={100}>
            <article className="research-entry">
              <p className="eyebrow">PUBLICATION / {research.context.toUpperCase()}</p>
              <h3>{research.title}<br /><span>{research.institution}</span></h3>
              <p className="research-description">{research.description}</p>
              <div className="research-note"><span aria-hidden="true">[ R ]</span><p>{research.note}</p></div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}