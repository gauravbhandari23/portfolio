import { memo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
  Sparkles,
  Code2,
  Zap,
} from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

const TYPEWRITER_WORDS = [
  'React.js Interfaces',
  'Responsive Web Apps',
  'Clean UI Components',
  'Pixel-Perfect Designs',
];

/* ── Stagger container ── */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── Isolated Typewriter Pill (prevents Hero re-renders on every character) ── */
const TypewriterPill = memo(function TypewriterPill() {
  const [text, setText] = useState(TYPEWRITER_WORDS[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(TYPEWRITER_WORDS[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPEWRITER_WORDS[wordIdx];
    let delay = deleting ? 45 : 85;
    if (!deleting && charIdx === current.length) {
      delay = 2000;
    } else if (deleting && charIdx === 0) {
      delay = 250;
    }

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          const next = charIdx + 1;
          setText(current.slice(0, next));
          setCharIdx(next);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIdx > 0) {
          const next = charIdx - 1;
          setText(current.slice(0, next));
          setCharIdx(next);
        } else {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % TYPEWRITER_WORDS.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx]);

  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 sm:py-0.5 rounded-lg bg-white/90 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sky-700 dark:text-cyan-300 shadow-sm dark:shadow-none w-fit max-w-full">
      <Code2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
      <span className="truncate">{text}</span>
      <span className="animate-blink text-sky-500 dark:text-cyan-400 font-light shrink-0">|</span>
    </span>
  );
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-28 pb-16 sm:pt-32 sm:pb-24 overflow-hidden"
    >
      {/* ── GPU-friendly Radial Ambient Orbs (no heavy Gaussian blur filter) ── */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[34rem] h-[34rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.22)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(6,182,212,0.24)_0%,transparent_70%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/4 -right-40 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.2)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(124,58,237,0.22)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ── Left Column ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 min-w-0 space-y-5 sm:space-y-6"
          >
            {/* Status Pill */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 dark:bg-cyan-500/10 border border-sky-500/25 dark:border-cyan-400/25 text-sky-700 dark:text-cyan-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
                </span>
                Available for Opportunities
              </span>
            </motion.div>

            {/* Name + Typewriter */}
            <motion.div variants={item} className="space-y-3">
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base font-mono tracking-wide flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                Hi there, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                <span className="text-slate-900 dark:text-white">Gaurav </span>
                <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-violet-600 dark:from-cyan-400 dark:via-sky-300 dark:to-violet-400 bg-clip-text text-transparent text-shimmer">
                  Bhandari
                </span>
              </h1>
              <h2 className="text-base sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5 sm:flex-wrap">
                <span>Building modern</span>
                <TypewriterPill />
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={item}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-xl leading-relaxed"
            >
              {RESUME_DATA.tagline} Experienced across full-time, contract, and
              agile product teams—turning complex ideas into clean,
              high-performance interfaces.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-7 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base bg-gradient-to-r from-sky-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 text-white dark:text-slate-950 shadow-lg shadow-sky-500/25 dark:shadow-cyan-500/25 hover:shadow-sky-500/40 dark:hover:shadow-cyan-500/50 transition-all hover:scale-[1.03] active:scale-[0.97] overflow-hidden"
              >
                {/* Shine sweep */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href={RESUME_DATA.resumePdf}
                download="Gaurav_Bhandari_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 rounded-2xl font-semibold text-sm sm:text-base bg-white/80 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-100 shadow-sm dark:shadow-none transition-all hover:border-sky-400/50 dark:hover:border-cyan-400/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                Download CV
              </a>
            </motion.div>

            {/* Social Links & Quick Stats */}
            <motion.div
              variants={item}
              className="pt-4 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
            >
              <div className="flex items-center gap-3">
                {[
                  { href: RESUME_DATA.github, icon: Github, label: 'GitHub' },
                  { href: RESUME_DATA.linkedin, icon: Linkedin, label: 'LinkedIn' },
                  { href: `mailto:${RESUME_DATA.email}`, icon: Mail, label: 'Email' },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    rel={link.label !== 'Email' ? 'noreferrer' : undefined}
                    aria-label={link.label}
                    whileHover={{ y: -4, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 hover:text-sky-700 dark:text-slate-300 dark:hover:text-white hover:border-sky-400/50 dark:hover:border-cyan-400/40 hover:bg-sky-50 dark:hover:bg-cyan-500/10 shadow-sm dark:shadow-none transition-all hover:shadow-lg hover:shadow-sky-500/10"
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              <div className="h-6 w-px bg-slate-200 dark:bg-white/10 hidden sm:block" />

              <div className="flex items-center gap-6">
                {RESUME_DATA.stats.map((stat) => (
                  <div key={stat.label} className="group cursor-default">
                    <div className="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-[var(--font-display)] group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: 3D Floating Code Card (Crisp IDE Dark Window in Both Themes) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 min-w-0"
          >
            <div className="animate-float">
              <div className="group relative rounded-2xl bg-slate-900/95 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-800/80 dark:border-white/10 p-4 sm:p-6 shadow-[0_24px_70px_rgba(15,23,42,0.22)] dark:shadow-[0_20px_80px_rgba(0,0,0,0.65)] animated-border glow-hover overflow-hidden">
                {/* Gradient border glow */}
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/25 via-transparent to-violet-500/25 pointer-events-none" />

                {/* Window Chrome */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/85 hover:bg-rose-400 transition-colors" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/85 hover:bg-amber-300 transition-colors" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/85 hover:bg-emerald-300 transition-colors" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>developer.tsx</span>
                  </div>
                </div>

                {/* Code Content with line numbers */}
                <div className="flex relative z-10 overflow-hidden">
                  <div className="hidden sm:flex flex-col text-right pr-4 text-xs font-mono text-slate-600 select-none leading-relaxed shrink-0">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                  <pre className="font-mono text-[11px] sm:text-sm leading-relaxed overflow-x-auto flex-1 min-w-0 text-slate-200">
                    <code>
                      <span className="text-violet-400">const</span>{' '}
                      <span className="text-cyan-300">developer</span>{' '}
                      <span className="text-slate-400">=</span> {'{\n'}
                      {'  '}
                      <span className="text-slate-300">name:</span>{' '}
                      <span className="text-emerald-300">&quot;Gaurav Bhandari&quot;</span>,{'\n'}
                      {'  '}
                      <span className="text-slate-300">role:</span>{' '}
                      <span className="text-emerald-300">&quot;Frontend Developer&quot;</span>,{'\n'}
                      {'  '}
                      <span className="text-slate-300">education:</span>{' '}
                      <span className="text-emerald-300">&quot;MCA (8.4 CGPA)&quot;</span>,{'\n'}
                      {'  '}
                      <span className="text-slate-300">stack:</span> [
                      <span className="text-amber-300">&quot;ReactJS&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;JS&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;Tailwind&quot;</span>],{'\n'}
                      {'  '}
                      <span className="text-slate-300">tools:</span> [
                      <span className="text-amber-300">&quot;Cursor&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;Docker&quot;</span>,{' '}
                      <span className="text-amber-300">&quot;AWS&quot;</span>],{'\n'}
                      {'  '}
                      <span className="text-slate-300">passion:</span>{' '}
                      <span className="text-emerald-300">&quot;Pixel-perfect UI&quot;</span>
                      {'\n}'}
                      <span className="text-slate-400">;</span>
                    </code>
                  </pre>
                </div>

                {/* Bottom Status */}
                <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 relative z-10">
                  <span className="inline-flex items-center gap-1.5 text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5" />
                    Clean Hooks &amp; State Architecture
                  </span>
                  <span className="flex items-center gap-1.5 font-mono">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                    </span>
                    <span className="text-emerald-400">Ready</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
