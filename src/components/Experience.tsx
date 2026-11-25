import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';

const cardVariants = {
  hidden: { opacity: 0, x: -32, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader
        icon={Briefcase}
        label="Career Journey"
        title="Work"
        highlight="Experience"
        description="From internships to full-time and contract frontend engineering—delivering scalable React applications and responsive user interfaces."
      />

      {/* Timeline */}
      <div className="relative">
        {/* Animated Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute left-4 sm:left-6 top-2 w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/40 to-transparent"
        />

        <div className="space-y-10">
          {RESUME_DATA.experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="relative pl-12 sm:pl-16"
            >
              {/* Timeline Dot with pulse ring */}
              <span className="absolute left-[9px] sm:left-[17px] top-6 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#050816] ring-4 ring-cyan-400/20 border-2 border-cyan-400">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                <span className="absolute h-6 w-6 rounded-full border border-cyan-400/30 animate-pulse-ring" />
              </span>

              {/* Card */}
              <div className="group rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/35 p-5 sm:p-7 transition-all duration-500 shadow-lg glow-hover animated-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {exp.company}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.overallPeriod}
                  </span>
                </div>

                {/* Roles */}
                <div className="space-y-6">
                  {exp.roles.map((role) => (
                    <div
                      key={role.title}
                      className="relative pl-4 border-l-2 border-white/10 hover:border-cyan-400/40 transition-colors space-y-3"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h4 className="text-base sm:text-lg font-semibold text-slate-100">
                            {role.title}
                          </h4>
                          {role.badge && (
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.3 }}
                              className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                                role.badge === 'Current'
                                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-400/30'
                                  : role.badge === 'Contract'
                                    ? 'bg-violet-500/10 text-violet-300 border-violet-400/30'
                                    : 'bg-cyan-500/10 text-cyan-300 border-cyan-400/30'
                              }`}
                            >
                              {role.badge}
                            </motion.span>
                          )}
                        </div>
                        <span className="text-xs font-mono text-slate-400">{role.period}</span>
                      </div>

                      <ul className="space-y-2.5">
                        {role.highlights.map((bullet, bIdx) => (
                          <motion.li
                            key={bIdx}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 * bIdx }}
                            className="flex items-start gap-2.5 text-sm text-slate-300/90 leading-relaxed"
                          >
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Tags with staggered entry */}
                <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.05 * tIdx }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-white/5 hover:border-cyan-400/30 hover:text-cyan-200 transition-all cursor-default"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
