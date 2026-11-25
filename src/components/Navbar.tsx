import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sparkles } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('hero');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollSpyLocked = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Skip scroll-spy while a nav click scroll is settling
      if (scrollSpyLocked.current) return;

      // Find which section is currently most visible
      let currentId = NAV_LINKS[0].id;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(NAV_LINKS[i].id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          // Section is "active" if its top is in the upper 45% of viewport
          if (rect.top <= window.innerHeight * 0.45) {
            currentId = NAV_LINKS[i].id;
            break;
          }
        }
      }
      setActive(currentId);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    setActive(id);

    // Lock scroll-spy for 1.2s so it doesn't override the clicked section
    scrollSpyLocked.current = true;
    setTimeout(() => {
      scrollSpyLocked.current = false;
    }, 1200);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300 ${
              scrolled
                ? 'bg-slate-900/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
                : 'bg-slate-900/40 backdrop-blur-md border border-white/5'
            }`}
          >
            {/* Brand */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('hero');
              }}
              className="flex items-center gap-2.5 group"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
                GB
              </span>
              <span className="font-semibold tracking-tight text-slate-100 hidden sm:inline">
                Gaurav<span className="text-cyan-400">.dev</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3.5 py-1.5 text-sm font-medium rounded-xl transition-colors cursor-pointer ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-xl bg-white/10 border border-white/10"
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA + Mobile Toggle */}
            <div className="flex items-center gap-2.5">
              <a
                href={RESUME_DATA.resumePdf}
                download="Gaurav_Bhandari_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950 hover:opacity-95 shadow-md shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle Menu"
                className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 transition-colors cursor-pointer"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/10 p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500/20 to-violet-500/20 text-white border border-cyan-400/20'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-cyan-400" />}
                  </button>
                );
              })}
              <a
                href={RESUME_DATA.resumePdf}
                download="Gaurav_Bhandari_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-950"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

