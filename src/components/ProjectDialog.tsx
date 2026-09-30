import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, X } from 'lucide-react';
import type { Project } from '../data/portfolio';
import useAccessibleOverlay from '../hooks/useAccessibleOverlay';
import { PortfolioLink } from './Feedback';

export default function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  useAccessibleOverlay(true, dialogRef, onClose);

  return createPortal(
    <div className="project-overlay" onClick={onClose}>
      <div
        className="project-dialog font-hn"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="project-dialog-top">
          <span className="eyebrow">SELECTED WORK / {project.number}</span>
          <button onClick={onClose} className="dialog-close" aria-label="Close project details">
            <span>CLOSE</span><X size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
        <div className="project-dialog-image">
          <img src={project.image} alt={project.imageAlt} width={1536} height={1024} />
          <span>CONCEPTUAL PROJECT VISUAL</span>
        </div>
        <div className="project-dialog-body">
          <p className="eyebrow">{project.category}</p>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p className="dialog-description">{project.description}</p>
          <div className="dialog-details">
            <div>
              <h3 className="eyebrow">PROJECT FOCUS</h3>
              <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            </div>
            <div>
              <h3 className="eyebrow">TECHNOLOGIES & APPROACH</h3>
              <p>{project.technologies.join(' / ')}</p>
            </div>
          </div>
          {(project.additional || project.highlight) && <p className="dialog-additional">{project.additional || project.highlight}</p>}
          <div className="dialog-links">
            <PortfolioLink href={project.githubUrl} linkName={`${project.title} GitHub`} className="text-link">
              GITHUB<ArrowUpRight size={17} aria-hidden="true" />
            </PortfolioLink>
            {project.liveUrl && (
              <PortfolioLink href={project.liveUrl} linkName={`${project.title} live demo`} className="text-link">
                LIVE DEMO<ArrowUpRight size={17} aria-hidden="true" />
              </PortfolioLink>
            )}
            {project.githubUrl === '#' && <span className="dialog-link-note">Repository URL not yet provided.</span>}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}