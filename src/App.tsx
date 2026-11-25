import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationCerts from './components/EducationCerts';
import ContactFooter from './components/ContactFooter';
import StarField from './components/StarField';
import MouseGlow from './components/MouseGlow';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 bg-grid-pattern">
      {/* Animated Star Canvas */}
      <StarField />

      {/* Mouse Cursor Glow (desktop only) */}
      <MouseGlow />

      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 origin-left z-[60]"
      />

      <Navbar />

      <main className="relative z-[2]">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <EducationCerts />
      </main>

      <div className="relative z-[2]">
        <ContactFooter />
      </div>
    </div>
  );
}
