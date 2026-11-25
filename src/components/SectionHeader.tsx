import { motion } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  icon: LucideIcon;
  label: string;
  title: string;
  highlight: string;
  description: string;
  accentColor?: 'cyan' | 'violet';
}

export default function SectionHeader({
  icon: Icon,
  label,
  title,
  highlight,
  description,
  accentColor = 'cyan',
}: SectionHeaderProps) {
  const highlightClass =
    accentColor === 'cyan'
      ? 'bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent'
      : 'bg-gradient-to-r from-violet-400 to-fuchsia-300 bg-clip-text text-transparent';

  const labelClass =
    accentColor === 'cyan' ? 'text-cyan-400' : 'text-violet-400';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      className="mb-14 space-y-3"
    >
      <div className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest ${labelClass}`}>
        <Icon className="w-4 h-4" />
        {label}
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
        {title} <span className={highlightClass}>{highlight}</span>
      </h2>
      <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

