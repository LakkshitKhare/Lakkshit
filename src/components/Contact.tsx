import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
import { portfolio, socialLinks } from '../data/portfolio';
import { PortfolioLink, useFeedback } from './Feedback';
import Reveal from './Reveal';
import SectionLabel from './SectionLabel';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const notify = useFeedback();

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      notify('Email address copied to clipboard.', true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2500);
    } catch {
      notify('Copy is unavailable in this browser. Click the email address to get in touch.');
    }
  };

  return (
    <section id="contact" className="contact section-padding" aria-labelledby="contact-title">
      <div className="page-container">
        <Reveal><SectionLabel number="08">THE NEXT CONVERSATION</SectionLabel></Reveal>
        <div className="contact-layout">
          <Reveal variant="heading"><h2 id="contact-title" className="contact-title">LET'S<br />BUILD<br />SOMETHING<span className="title-period">.</span></h2></Reveal>
          <Reveal delay={120} className="contact-aside">
            <ArrowUpRight className="contact-arrow" size={120} strokeWidth={0.8} aria-hidden="true" />
            <p>{portfolio.contact.description}</p>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className="contact-email-row">
            <a className="contact-email" href={`mailto:${portfolio.email}`}>
              {portfolio.email}<ArrowUpRight size={32} strokeWidth={1.3} aria-hidden="true" />
            </a>
            <button className="copy-email" onClick={copyEmail} aria-label={copied ? 'Email address copied' : 'Copy email address'}>
              {copied ? <Check size={18} aria-hidden="true" /> : <Copy size={18} strokeWidth={1.3} aria-hidden="true" />}
              <span>{copied ? 'COPIED' : 'COPY EMAIL'}</span>
            </button>
          </div>
          <div className="contact-socials">
            <span className="eyebrow">ELSEWHERE</span>
            {socialLinks.filter((link) => link.label !== 'Email').map((link) => (
              <PortfolioLink key={link.label} href={link.href} linkName={link.label}>
                {link.label}<ArrowUpRight size={17} strokeWidth={1.5} aria-hidden="true" />
              </PortfolioLink>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}