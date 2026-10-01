import { useCallback, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { PortfolioLink } from './Feedback';
import ProjectDialog from './ProjectDialog';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const closeProject = useCallback(() => setSelectedProject(null), []);

  return (
    <section id="projects" className="projects section-padding" aria-labelledby="projects-title">
      <div className="page-container">
        <Reveal><SectionLabel number="04">SELECTED WORK</SectionLabel></Reveal>
        <div className="projects-heading">
          <Reveal variant="heading"><h2 id="projects-title" className="section-title">SELECTED<br />WORK<span className="title-period">.</span></h2></Reveal>
          <Reveal delay={100}><p>Intelligent systems, thoughtful applications.<br />A few things I've been building.</p></Reveal>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article key={project.number} className={`project-row ${index % 2 === 1 ? 'project-row--reverse' : ''}`}>
              <Reveal variant="image" className="project-visual" delay={60}>
                <button
                  className="project-image-button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Explore ${project.title}`}
                  aria-haspopup="dialog"
                >
                  <img src={project.image} alt={project.imageAlt} width={1536} height={1024} loading="lazy" decoding="async" />
                </button>
                <div className="project-caption"><span>FIG. {project.number}</span><span>CONCEPTUAL VISUAL</span></div>
              </Reveal>
              <Reveal className="project-information" delay={120}>
                <div className="project-number-row"><span className="project-number">{project.number}</span><span className="eyebrow">{project.category}</span></div>
                <h3>{project.displayTitle.map((line) => <span key={line}>{line}</span>)}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                {project.highlight && <p className="project-highlight">{project.highlight}</p>}
                <p className="project-technologies">{project.technologies.join(' / ')}</p>
                <div className="project-actions">
                  <PortfolioLink href='https://github.com/LakkshitKhare/EEG-Mental-Health-App' linkName={`${project.title} on GitHub`} className="text-link">
                    VIEW PROJECT<ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
                  </PortfolioLink>
                  <PortfolioLink href={project.githubUrl} linkName={`${project.title} GitHub`} className="project-github">
                    GitHub<ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                  </PortfolioLink>
                  {project.liveUrl && (
                    <PortfolioLink href={project.liveUrl} linkName={`${project.title} live demo`} className="project-github">
                      Live demo<ArrowUpRight size={15} aria-hidden="true" />
                    </PortfolioLink>
                  )}
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
      {selectedProject && <ProjectDialog project={selectedProject} onClose={closeProject} />}
    </section>
  );
}