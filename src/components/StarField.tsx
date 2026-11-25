import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  twinkleSpeed: number;
  twinklePhase: number;
  hue: 'cyan' | 'violet';
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let stars: Star[] = [];
    let isMobile = window.innerWidth < 768;

    const resize = () => {
      isMobile = window.innerWidth < 768;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const rawCount = Math.floor((canvas.width * canvas.height) / (isMobile ? 14000 : 7000));
      const count = isMobile ? Math.min(35, rawCount) : Math.min(110, rawCount);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.8 + 0.4,
        opacity: Math.random() * 0.55 + 0.15,
        speed: Math.random() * 0.15 + 0.03,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.35 ? 'cyan' : 'violet',
      }));
    };

    const draw = (time: number) => {
      if (document.hidden) {
        animId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = themeRef.current === 'dark';

      for (const star of stars) {
        star.y -= star.speed;
        if (star.y < -4) {
          star.y = canvas.height + 4;
          star.x = Math.random() * canvas.width;
        }

        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.5 + 0.5;
        const alpha = star.opacity * (0.4 + twinkle * 0.6);

        ctx.beginPath();
        ctx.arc(star.x, star.y, isDark ? star.size : star.size * 1.3, 0, Math.PI * 2);

        if (isDark) {
          ctx.fillStyle =
            star.hue === 'cyan'
              ? `rgba(148, 210, 255, ${alpha})`
              : `rgba(196, 181, 253, ${alpha})`;
          ctx.fill();

          if (!isMobile && star.size > 1.2) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.14})`;
            ctx.fill();
          }
        } else {
          ctx.fillStyle =
            star.hue === 'cyan'
              ? `rgba(14, 165, 233, ${alpha * 0.42})`
              : `rgba(139, 92, 246, ${alpha * 0.38})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
