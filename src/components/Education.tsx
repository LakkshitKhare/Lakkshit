import { portfolio } from '../data/portfolio';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';

export default function Education() {
  const education = portfolio.education;
  return (
    <section id="education" className="education section-light section-padding" aria-labelledby="education-title">
      <div className="page-container">
        <Reveal><SectionLabel number="06">THE FOUNDATION</SectionLabel></Reveal>
        <div className="education-layout">
          <Reveal variant="heading"><h2 id="education-title" className="section-title education-title">EDUCATION<span className="title-period">.</span></h2></Reveal>
          <div>
            <Reveal delay={80}>
              <span className="eyebrow">{education.period}</span>
              <h3 className="institution-name">{education.institution}</h3>
              <div className="education-details"><p>{education.degree}</p><span>CGPA: {education.cgpa}</span></div>
            </Reveal>
            <Reveal delay={130}>
              <div className="certification">
                <h3 className="eyebrow">CERTIFICATION</h3>
                <p className="certificate-name">{portfolio.certification.title}</p>
                <p className="certificate-date">{portfolio.certification.date}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}