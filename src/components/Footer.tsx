import { ArrowUp } from 'lucide-react';
import { portfolio } from '../data/portfolio';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-top">
          <a href="#home" className="footer-name">{portfolio.name}<span>.</span></a>
          <nav aria-label="More portfolio sections"><a href="#education">Education</a><a href="#research">Research</a></nav>
          <a className="back-to-top" href="#home">BACK TO TOP<ArrowUp size={16} aria-hidden="true" /></a>
        </div>
        <div className="footer-bottom">
          <p>Software Engineer <span aria-hidden="true">&middot;</span> AI/ML <span aria-hidden="true">&middot;</span> Full Stack</p>
          <p className="footer-status"><span className="status-dot" />Currently @ {portfolio.currentRole.company}</p>
          <p>&copy; {portfolio.year} {portfolio.name}</p>
        </div>
      </div>
    </footer>
  );
}