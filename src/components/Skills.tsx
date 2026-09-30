import { skillGroups } from '../data/portfolio';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';

export default function Skills() {
  return (
    <section id="skills" className="skills section-light section-padding" aria-labelledby="skills-title">
      <div className="page-container">
        <Reveal><SectionLabel number="05">THE TOOLKIT</SectionLabel></Reveal>
        <Reveal variant="heading"><h2 id="skills-title" className="section-title capabilities-title">CAPABILITIES<span className="title-period">.</span></h2></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal key={group.name} delay={index * 45} className="skill-group">
              <span className="skill-index">0{index + 1}</span>
              <h3 className="eyebrow">{group.name.toUpperCase()}</h3>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}