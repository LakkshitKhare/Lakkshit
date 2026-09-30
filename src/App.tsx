import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CurrentRole from './components/CurrentRole';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { FeedbackProvider } from './components/Feedback';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <FeedbackProvider>
        <div className="portfolio font-hn">
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <Hero />
            <About />
            <div id="experience" className="anchor-section">
              <CurrentRole />
              <Experience />
            </div>
            <Projects />
            <Skills />
            <Education />
            <Publications />
            <Contact />
          </main>
          <Footer />
        </div>
      </FeedbackProvider>
    </ThemeProvider>
  );
}
