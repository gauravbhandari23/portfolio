import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Download,
  Rocket,
} from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export default function ContactFooter() {
  const [copied, setCopied] = useState<'email' | 'phone' | null>(null);

  const handleCopy = async (text: string, type: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  return (
    <footer id="contact" className="pt-16 sm:pt-20 pb-12 scroll-mt-10 sm:scroll-mt-4 relative overflow-x-clip">
      {/* Gradient divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-sky-500/30 dark:via-cyan-400/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-white/95 via-slate-50/90 to-sky-50/80 dark:from-slate-900/90 dark:via-slate-900/70 dark:to-slate-950/90 border border-slate-200/90 dark:border-white/10 p-7 sm:p-12 overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.08)] dark:shadow-2xl glow-hover"
        >
          {/* Ambient Glows */}
          <motion.div
            animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -top-28 -right-28 w-80 h-80 rounded-full bg-sky-400/20 dark:bg-cyan-500/20 blur-[120px]"
          />
          <motion.div
            animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute -bottom-28 -left-28 w-80 h-80 rounded-full bg-violet-400/20 dark:bg-violet-500/20 blur-[120px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-cyan-400">
                <Send className="w-3.5 h-3.5" />
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                Let&apos;s build something{' '}
                <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-violet-600 dark:from-cyan-400 dark:via-sky-300 dark:to-violet-400 bg-clip-text text-transparent text-shimmer">
                  remarkable
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300/90 text-sm sm:text-base max-w-xl leading-relaxed">
                Looking for a Frontend Developer who cares deeply about clean
                React architecture, responsive design, and smooth user
                experiences? Reach out anytime!
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href={`mailto:${RESUME_DATA.email}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-violet-600 dark:from-cyan-400 dark:to-violet-500 text-white dark:text-slate-950 shadow-lg shadow-sky-500/20 dark:shadow-cyan-500/20 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10 flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Send an Email
                  </span>
                </motion.a>
                <motion.a
                  href={RESUME_DATA.resumePdf}
                  download="Gaurav_Bhandari_Resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm bg-white/80 hover:bg-white dark:bg-white/5 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-white shadow-sm dark:shadow-none transition-all hover:border-sky-400/50 dark:hover:border-cyan-400/40"
                >
                  <Download className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                  Download Resume
                </motion.a>
              </div>
            </div>

            {/* ── Contact Cards ── */}
            <div className="lg:col-span-5 space-y-3">
              {/* Email */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-center justify-between gap-3 rounded-2xl bg-white/90 dark:bg-slate-950/70 border border-slate-200/90 dark:border-white/10 hover:border-sky-400/50 dark:hover:border-cyan-400/30 p-4 shadow-sm dark:shadow-none transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Email</div>
                    <a
                      href={`mailto:${RESUME_DATA.email}`}
                      className="text-sm font-medium text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-cyan-300 truncate block transition-colors"
                    >
                      {RESUME_DATA.email}
                    </a>
                  </div>
                </div>
                <motion.button
                  onClick={() => handleCopy(RESUME_DATA.email, 'email')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Copy Email"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                >
                  {copied === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              </motion.div>

              {/* Phone */}
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-center justify-between gap-3 rounded-2xl bg-white/90 dark:bg-slate-950/70 border border-slate-200/90 dark:border-white/10 hover:border-violet-400/50 dark:hover:border-violet-400/30 p-4 shadow-sm dark:shadow-none transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Phone</div>
                    <a
                      href={`tel:${RESUME_DATA.phone}`}
                      className="text-sm font-medium text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-300 truncate block transition-colors"
                    >
                      {RESUME_DATA.phone}
                    </a>
                  </div>
                </div>
                <motion.button
                  onClick={() => handleCopy(RESUME_DATA.phone, 'phone')}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Copy Phone"
                  className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors shrink-0 cursor-pointer"
                >
                  {copied === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              </motion.div>

              {/* Social Row */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <motion.a
                  href={RESUME_DATA.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white/90 dark:bg-slate-950/70 border border-slate-200/90 dark:border-white/10 hover:border-sky-400/50 dark:hover:border-cyan-400/40 py-3 px-4 text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white shadow-sm dark:shadow-none transition-all hover:bg-sky-50/70 dark:hover:bg-cyan-500/5"
                >
                  <Linkedin className="w-4 h-4 text-sky-600 dark:text-cyan-400" />
                  LinkedIn
                </motion.a>
                <motion.a
                  href={RESUME_DATA.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-white/90 dark:bg-slate-950/70 border border-slate-200/90 dark:border-white/10 hover:border-violet-400/50 dark:hover:border-violet-400/40 py-3 px-4 text-sm font-medium text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white shadow-sm dark:shadow-none transition-all hover:bg-violet-50/70 dark:hover:bg-violet-500/5"
                >
                  <Github className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  GitHub
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Copyright */}
        <div className="mt-10 flex items-center justify-center text-xs text-slate-500 dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {RESUME_DATA.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
