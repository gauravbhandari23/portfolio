import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Cpu, Code, Wrench, Layers } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';
import SectionWrapper from './SectionWrapper';
import SectionHeader from './SectionHeader';
import TiltCard from './TiltCard';

const SKILL_GROUPS = [
  {
    title: 'Languages',
    icon: Code,
    gradient: 'from-sky-500 to-cyan-400',
    bgGradient: 'from-sky-400/15 to-cyan-500/5',
    borderHover: 'hover:border-sky-400/50 dark:hover:border-cyan-400/40',
    badgeColor:
      'text-sky-700 bg-sky-500/10 border-sky-500/20 dark:text-cyan-300 dark:bg-cyan-500/10 dark:border-cyan-400/20',
    glowColor: 'rgba(56, 189, 248, 0.15)',
    items: RESUME_DATA.skills.languages,
  },
  {
    title: 'Frameworks & Ecosystem',
    icon: Layers,
    gradient: 'from-violet-500 to-fuchsia-400',
    bgGradient: 'from-violet-400/15 to-fuchsia-500/5',
    borderHover: 'hover:border-violet-400/50 dark:hover:border-violet-400/40',
    badgeColor:
      'text-violet-700 bg-violet-500/10 border-violet-500/20 dark:text-violet-300 dark:bg-violet-500/10 dark:border-violet-400/20',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    items: RESUME_DATA.skills.frameworks,
  },
  {
    title: 'Developer Tools & Cloud',
    icon: Wrench,
    gradient: 'from-emerald-500 to-teal-400',
    bgGradient: 'from-emerald-400/15 to-teal-500/5',
    borderHover: 'hover:border-emerald-400/50 dark:hover:border-emerald-400/40',
    badgeColor:
      'text-emerald-700 bg-emerald-500/10 border-emerald-500/20 dark:text-emerald-300 dark:bg-emerald-500/10 dark:border-emerald-400/20',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    items: RESUME_DATA.skills.tools,
  },
];

function SkillBar({
  name,
  level,
  badgeColor,
  gradient,
  delay,
}: {
  name: string;
  level: string;
  badgeColor: string;
  gradient: string;
  delay: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ scale: 1.03, y: -2 }}
      className="rounded-xl bg-slate-50/90 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/15 p-3.5 transition-all cursor-default"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-slate-800 dark:text-slate-100">{name}</span>
        <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${badgeColor}`}>
          {level}
        </span>
      </div>
      {/* Animated bar */}
      <div className="h-1 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
          style={{
            width: isInView ? '100%' : '0%',
            transition: `width 1.2s ease-out ${delay + 0.3}s`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        icon={Cpu}
        label="Tech Stack"
        title="Technical"
        highlight="Skills"
        description="Modern frontend technologies, AI-assisted developer workflows, and cloud/container tooling I use to ship production web apps."
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, idx) => {
          const Icon = group.icon;
          return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
              >
              <TiltCard glowColor={group.glowColor} className="h-full">
                <div
                  className={`group relative rounded-2xl bg-white/85 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 ${group.borderHover} p-6 transition-all duration-300 overflow-hidden h-full shadow-[0_8px_30px_rgba(15,23,42,0.05)] dark:shadow-lg animated-border`}
                >
                  {/* Top gradient wash */}
                  <div
                    className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${group.bgGradient} opacity-60 dark:opacity-50 pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <motion.div
                        whileHover={{ rotate: 12, scale: 1.1 }}
                        className={`p-2.5 rounded-xl bg-gradient-to-br ${group.gradient} text-white shadow-lg`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {group.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 gap-2.5">
                      {group.items.map((skill, sIdx) => (
                        <SkillBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                          badgeColor={group.badgeColor}
                          gradient={group.gradient}
                          delay={sIdx * 0.08}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
