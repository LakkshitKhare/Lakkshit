import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';

export default function Experience() {
  return (
    <section className="experience section-padding" aria-labelledby="experience-title">
      <div className="page-container">
        <Reveal><SectionLabel number="03">THE JOURNEY</SectionLabel></Reveal>
        <Reveal variant="heading"><h2 id="experience-title" className="section-title experience-title">EXPERIENCE<span className="title-period">.</span></h2></Reveal>
        <div className="experience-timeline">
          {portfolio.experiences.map((experience, index) => (
            <Reveal key={experience.company} delay={index * 70}>
              <article className="experience-entry">
                <div className="experience-meta">
                  <span className="eyebrow">{experience.current ? 'CURRENT ROLE' : 'PREVIOUS EXPERIENCE'}</span>
                  <p>{experience.period}</p>
                </div>
                <div className="experience-main">
                  <div className="experience-heading">
                    <h3>{experience.position}</h3>
                    {experience.current && <span className="timeline-current" aria-label="Current position" />}
                  </div>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-description">{experience.description}</p>
                  <ul className="experience-contributions">
                    {experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}