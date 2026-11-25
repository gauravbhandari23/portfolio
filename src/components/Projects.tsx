import { motion } from 'framer-motion';
import { FolderGit2, Github, ShoppingBag, Building2, Check, ArrowUpRight } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        icon={FolderGit2}
        label="Featured Work"
        title="Selected"
        highlight="Projects"
        description="Real-world React applications engineered with clean state management, responsive layouts, and intuitive user flows."
      />

      {/* Project Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {RESUME_DATA.projects.map((project, idx) => {
          const isCyan = project.accent === 'cyan';
          const Icon = isCyan ? ShoppingBag : Building2;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <TiltCard
                glowColor={isCyan ? 'rgba(56, 189, 248, 0.14)' : 'rgba(139, 92, 246, 0.14)'}
                className="h-full"
              >
                <article
                  className={`group relative rounded-3xl bg-white/85 dark:bg-slate-900/65 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 ${
                    isCyan
                      ? 'hover:border-sky-400/50 dark:hover:border-cyan-400/40'
                      : 'hover:border-violet-400/50 dark:hover:border-violet-400/40'
                  } overflow-hidden transition-all duration-500 shadow-[0_12px_35px_rgba(15,23,42,0.06)] dark:shadow-xl flex flex-col h-full animated-border glow-hover`}
                >
                  {/* ── Top Banner ── */}
                  <div
                    className={`relative min-h-[11.5rem] sm:h-52 p-5 sm:p-6 flex flex-col justify-between gap-4 overflow-hidden ${
                      isCyan
                        ? 'bg-gradient-to-br from-sky-500/20 via-cyan-500/10 to-slate-100 dark:from-cyan-500/20 dark:via-sky-500/10 dark:to-slate-900'
                        : 'bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-slate-100 dark:from-violet-500/20 dark:via-fuchsia-500/10 dark:to-slate-900'
                    }`}
                  >
                    {/* Animated grid overlay */}
                    <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-grid-pattern pointer-events-none" />

                    <div className="flex items-center justify-between gap-2 relative z-10">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold border backdrop-blur-md ${
                          isCyan
                            ? 'bg-white/80 border-sky-400/35 text-sky-800 dark:bg-cyan-500/15 dark:border-cyan-400/30 dark:text-cyan-200'
                            : 'bg-white/80 border-violet-400/35 text-violet-800 dark:bg-violet-500/15 dark:border-violet-400/30 dark:text-violet-200'
                        }`}
                      >
                        <Icon className="w-4 h-4 shrink-0" />
                        {project.subtitle}
                      </motion.span>

                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub`}
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2.5 rounded-xl bg-white/85 dark:bg-slate-950/60 border border-slate-200 dark:border-white/10 text-slate-700 hover:text-slate-950 dark:text-slate-200 dark:hover:text-white transition-colors backdrop-blur-md shadow-sm dark:shadow-none shrink-0"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    </div>

                    {/* Metric Pills */}
                    <div className="flex flex-wrap items-center gap-3 relative z-10">
                      {project.metrics.map((m, mIdx) => (
                        <motion.div
                          key={m.label}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + mIdx * 0.1 }}
                          className="px-3 py-1.5 rounded-xl bg-white/85 dark:bg-slate-950/70 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-none"
                        >
                          <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                            {m.label}
                          </span>
                          <span className="text-xs font-mono font-semibold text-slate-900 dark:text-white">
                            {m.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated Decorative Orb */}
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.55, 0.3],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                      className={`absolute -bottom-12 -right-12 w-48 h-48 rounded-full blur-3xl ${
                        isCyan ? 'bg-sky-400 dark:bg-cyan-400' : 'bg-violet-400 dark:bg-violet-500'
                      }`}
                    />
                  </div>

                  {/* ── Body ── */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed">
                        {project.description}
                      </p>

                      <ul className="space-y-2.5 pt-1">
                        {project.highlights.map((h, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed"
                          >
                            <Check
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isCyan
                                  ? 'text-sky-600 dark:text-cyan-400'
                                  : 'text-violet-600 dark:text-violet-400'
                              }`}
                            />
                            <span>{h}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-5 pt-2">
                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t, tIdx) => (
                          <motion.span
                            key={t}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * tIdx }}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`text-xs font-mono px-2.5 py-1 rounded-lg border transition-all cursor-default ${
                              isCyan
                                ? 'bg-sky-500/10 border-sky-500/20 text-sky-700 hover:bg-sky-500/15 dark:bg-cyan-500/5 dark:border-cyan-400/15 dark:text-cyan-200 dark:hover:bg-cyan-500/15'
                                : 'bg-violet-500/10 border-violet-500/20 text-violet-700 hover:bg-violet-500/15 dark:bg-violet-500/5 dark:border-violet-400/15 dark:text-violet-200 dark:hover:bg-violet-500/15'
                            }`}
                          >
                            {t}
                          </motion.span>
                        ))}
                      </div>

                      {/* Action Link */}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ x: 4 }}
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                          isCyan
                            ? 'text-sky-600 hover:text-sky-700 dark:text-cyan-300 dark:hover:text-cyan-200'
                            : 'text-violet-600 hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-200'
                        }`}
                      >
                        View Source on GitHub
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
