import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';

export default function CurrentRole() {
  const role = portfolio.currentRole;
  return (
    <section id="now" className="current-role section-padding" aria-labelledby="now-title">
      <div className="page-container">
        <Reveal><SectionLabel number="02">THE PRESENT</SectionLabel></Reveal>
        <div className="now-layout">
          <Reveal variant="heading"><h2 id="now-title" className="section-title">NOW<span className="title-period">.</span></h2></Reveal>
          <div className="now-content">
            <Reveal>
              <div className="now-status-row">
                <span className="eyebrow"><span className="status-dot" />CURRENTLY WORKING</span>
                <span className="eyebrow">{role.period.toUpperCase()}</span>
              </div>
              <p className="now-position">{role.displayPosition.map((line) => <span key={line}>{line}</span>)}</p>
              <p className="now-company">{role.company.toUpperCase()}<span aria-hidden="true">&#8599;</span></p>
            </Reveal>
            <Reveal delay={100}>
              <p className="now-description">{role.description}</p>
              <p className="now-technologies">{role.technologies.join(' / ')}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}