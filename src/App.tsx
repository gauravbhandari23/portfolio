import { lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Lazy-load below-the-fold sections and ambient canvas for fast mobile initial paint
const StarField = lazy(() => import('./components/StarField'));
const MouseGlow = lazy(() => import('./components/MouseGlow'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const EducationCerts = lazy(() => import('./components/EducationCerts'));
const ContactFooter = lazy(() => import('./components/ContactFooter'));

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-slate-100 bg-grid-pattern overflow-x-clip transition-colors duration-300">
      <Suspense fallback={null}>
        <StarField />
        <MouseGlow />
      </Suspense>

      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 origin-left z-[60]"
      />

      <Navbar />

      <main className="relative z-[2]">
        <Hero />
        <Suspense fallback={<div className="min-h-[40vh]" />}>
          <Experience />
          <Skills />
          <Projects />
          <EducationCerts />
        </Suspense>
      </main>

      <div className="relative z-[2]">
        <Suspense fallback={null}>
          <ContactFooter />
        </Suspense>
      </div>
    </div>
  );
}
