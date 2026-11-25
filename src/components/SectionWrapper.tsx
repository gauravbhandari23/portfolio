import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-28 scroll-mt-10 sm:scroll-mt-0 relative overflow-x-clip ${className}`}
    >
      {/* Section divider glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-sky-500/30 dark:via-cyan-400/30 to-transparent" />

      {/* Ambient section radial glow (GPU-friendly, zero blur filter pass) */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">{children}</div>
    </section>
  );
}
