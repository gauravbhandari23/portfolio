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

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const count = Math.floor((canvas.width * canvas.height) / 6500);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.9 + 0.4,
        opacity: Math.random() * 0.6 + 0.12,
        speed: Math.random() * 0.16 + 0.03,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.35 ? 'cyan' : 'violet',
      }));
    };

    const draw = (time: number) => {
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

        if (isDark) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle =
            star.hue === 'cyan'
              ? `rgba(148, 210, 255, ${alpha})`
              : `rgba(196, 181, 253, ${alpha})`;
          ctx.fill();

          if (star.size > 1.2) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.15})`;
            ctx.fill();
          }
        } else {
          // Light mode: floating soft sky & violet ambient particles
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 1.35, 0, Math.PI * 2);
          ctx.fillStyle =
            star.hue === 'cyan'
              ? `rgba(14, 165, 233, ${alpha * 0.45})`
              : `rgba(139, 92, 246, ${alpha * 0.4})`;
          ctx.fill();

          if (star.size > 1.3) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * 3.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${alpha * 0.1})`;
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);

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
