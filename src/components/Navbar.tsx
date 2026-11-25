import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Sparkles, Sun, Moon } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import { useTheme } from '../context/ThemeContext';

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
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Skip scroll-spy while a nav click scroll is settling
      if (scrollSpyLocked.current) return;

      let currentId = NAV_LINKS[0].id;
      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(NAV_LINKS[i].id);
        if (sec) {
          const rect = sec.getBoundingClientRect();
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

    scrollSpyLocked.current = true;
    setTimeout(() => {
      scrollSpyLocked.current = false;
    }, 1200);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

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
                ? 'bg-white/80 dark:bg-slate-900/75 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-[0_8px_32px_rgba(15,23,42,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.45)]'
                : 'bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/60 dark:border-white/5'
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
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 text-white dark:text-slate-950 font-bold text-sm shadow-lg shadow-sky-500/25 dark:shadow-cyan-500/25 group-hover:scale-105 transition-transform">
                GB
              </span>
              <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100 hidden sm:inline">
                Gaurav<span className="text-sky-600 dark:text-cyan-400">.dev</span>
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
                      isActive
                        ? 'text-sky-700 dark:text-white'
                        : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        className="absolute inset-0 rounded-xl bg-sky-500/10 border border-sky-500/20 dark:bg-white/10 dark:border-white/10"
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Theme Toggle + Resume CTA + Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Animated Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.92 }}
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100/90 hover:bg-slate-200/80 border border-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:border-white/10 dark:text-slate-200 transition-colors cursor-pointer overflow-hidden"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === 'dark' ? (
                    <motion.span
                      key="sun"
                      initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="text-amber-300"
                    >
                      <Sun className="w-4 h-4" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="moon"
                      initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
                      animate={{ rotate: 0, scale: 1, opacity: 1 }}
                      exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="text-violet-600"
                    >
                      <Moon className="w-4 h-4" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

              <a
                href={RESUME_DATA.resumePdf}
                download="Gaurav_Bhandari_Resume.pdf"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 text-white dark:text-slate-950 hover:opacity-95 shadow-md shadow-sky-500/20 dark:shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-3.5 h-3.5" />
                Resume
              </a>

              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle Menu"
                className="md:hidden p-2 rounded-xl bg-slate-100/90 border border-slate-200 text-slate-700 hover:bg-slate-200/80 dark:bg-white/5 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10 transition-colors cursor-pointer"
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
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-4 shadow-2xl"
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
                        ? 'bg-gradient-to-r from-sky-500/15 to-violet-500/15 dark:from-cyan-500/20 dark:to-violet-500/20 text-sky-700 dark:text-white border border-sky-400/25 dark:border-cyan-400/20'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-sky-600 dark:text-cyan-400" />}
                  </button>
                );
              })}
              <a
                href={RESUME_DATA.resumePdf}
                download="Gaurav_Bhandari_Resume.pdf"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-sky-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 text-white dark:text-slate-950"
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
