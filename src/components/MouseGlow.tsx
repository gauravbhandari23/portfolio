import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[1] transition-transform duration-200 ease-out hidden lg:block"
      style={{
        left: pos.x - 240,
        top: pos.y - 240,
        width: 480,
        height: 480,
        background:
          'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(2px)',
      }}
      aria-hidden="true"
    />
  );
}

