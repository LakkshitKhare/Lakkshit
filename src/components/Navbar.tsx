import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { indexNavigation, navigation, portfolio, socialLinks } from '../data/portfolio';
import useAccessibleOverlay from '../hooks/useAccessibleOverlay';
import { PortfolioLink } from './Feedback';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const drawerRef = useRef<HTMLDivElement>(null);
  const close = useCallback(() => setOpen(false), []);
  useAccessibleOverlay(open, drawerRef, close);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    const onResize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    window.addEventListener('resize', onResize);

    const observer = 'IntersectionObserver' in window ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    ) : null;
    indexNavigation.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer?.observe(section);
    });
    const hero = document.getElementById('home');
    if (hero) observer?.observe(hero);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="page-container navbar">
          <a href="#home" className="wordmark" aria-label="Lakkshit Khare, back to top">
            {portfolio.firstName}<span className="wordmark-dot">.</span>
          </a>
          <div className="navbar-actions">
            <div className="desktop-navigation">
              <span className="nav-status"><span className="status-dot" />Currently @ {portfolio.currentRole.company}</span>
              <nav aria-label="Main navigation">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} aria-current={active === item.href ? 'location' : undefined}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <ThemeToggle />
            <button
              className="menu-toggle"
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-haspopup="dialog"
            >
              <span>MENU</span><Menu size={23} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="menu-backdrop" onClick={close}>
          <div
            ref={drawerRef}
            id="mobile-navigation"
            className="navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-title"
            tabIndex={-1}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="drawer-top">
              <span className="wordmark">{portfolio.firstName}.</span>
              <div className="drawer-controls">
                <ThemeToggle />
                <button className="drawer-close" onClick={close} aria-label="Close navigation menu">
                  <span>CLOSE</span><X size={24} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>
            </div>
            <p id="menu-title" className="eyebrow drawer-heading">INDEX</p>
            <nav className="drawer-index" aria-label="Full portfolio navigation">
              {indexNavigation.map((item, index) => (
                <a key={item.href} href={item.href} onClick={close} style={{ animationDelay: `${70 + index * 45}ms` }}>
                  <span className="drawer-number">0{index + 1}</span>
                  <span>{item.label}</span>
                  <ArrowUpRight size={22} strokeWidth={1.25} aria-hidden="true" />
                </a>
              ))}
            </nav>
            <div className="drawer-connect">
              <p className="eyebrow">CONNECT</p>
              <div>
                {socialLinks.map((link) => (
                  <PortfolioLink key={link.label} href={link.href} linkName={link.label} onClick={close}>
                    {link.label}<ArrowUpRight size={15} aria-hidden="true" />
                  </PortfolioLink>
                ))}
              </div>
            </div>
            <p className="drawer-status"><span className="status-dot" />Currently @ {portfolio.currentRole.company} <span>{portfolio.location.toUpperCase()}</span></p>
          </div>
        </div>
      )}
    </>
  );
}