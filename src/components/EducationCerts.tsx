import { motion } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, Calendar, BookOpen, Trophy } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import SectionWrapper from './SectionWrapper';

export default function EducationCerts() {
  return (
    <SectionWrapper id="education">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* ── Education Column ── */}
        <div className="lg:col-span-7 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400">
              <GraduationCap className="w-4 h-4" />
              Academic Background
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Education
            </h2>
          </motion.div>

          <div className="space-y-5">
            {RESUME_DATA.education.map((edu, idx) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-cyan-400/35 p-5 sm:p-6 transition-all duration-300 glow-hover animated-border"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0"
                    >
                      <BookOpen className="w-4 h-4" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.institution}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 sm:ml-11">
                  {edu.degree}
                </p>
                <div className="mt-3 sm:ml-11 inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/10 to-sky-500/5 border border-cyan-400/20 text-cyan-300">
                  <Trophy className="w-3 h-3" />
                  {edu.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Certifications Column ── */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400">
              <Award className="w-4 h-4" />
              Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Certifications
            </h2>
          </motion.div>

          <div className="space-y-5">
            {RESUME_DATA.certifications.map((cert, idx) => (
              <motion.a
                key={cert.title}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group block rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-violet-400/40 p-5 sm:p-6 transition-all duration-300 glow-hover animated-border"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded-md">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-violet-300 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 group-hover:text-white group-hover:border-violet-400/40 group-hover:bg-violet-500/10 transition-all shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.span>
                </div>
                <p className="mt-3 text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                  Click to verify certificate →
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
