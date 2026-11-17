import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AnimatedLogoBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { scrollYProgress } = useScroll();

  const logoOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [0.22, 0.12, 0.08, 0.18]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 0.96]);
  const logoY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool mirroring the pixel scatter of the Hawar W logo
    const count = 40;
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 3.5 + 1.5,
      speedX: (Math.random() - 0.3) * 0.7,
      speedY: -(Math.random() * 1.2 + 0.3),
      opacity: Math.random() * 0.5 + 0.15,
      color:
        Math.random() > 0.6
          ? '#38D9C5' // Mint
          : Math.random() > 0.3
          ? '#8B5CF6' // Orchid
          : '#6D3FD9', // Deep Orchid
      phase: Math.random() * Math.PI * 2,
    }));

    // Growth pulses along the arrow vector
    let pulseT = 0;

    const render = () => {
      pulseT += 0.012;
      ctx.clearRect(0, 0, width, height);

      // Trailing pixel particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;
        p.phase += 0.025;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.phase));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentOpacity;
        const s = p.size;
        ctx.fillRect(p.x, p.y, s, s);
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Underlying subtle canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 2. The Animated W Main Logo ("Where Worth Grows") */}
      <motion.div
        style={{
          opacity: logoOpacity,
          scale: logoScale,
          y: logoY,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] lg:w-[680px] lg:h-[680px] max-w-[90vw] max-h-[90vw]">
          {/* Soft ambient chromatic glow */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.35, 0.55, 0.35],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute inset-0 rounded-full blur-[80px] sm:blur-[110px] bg-gradient-to-tr from-[#DDD4FF] via-[#8B5CF6]/30 to-[#38D9C5]/30"
          />

          {/* Floating W Signature Mark */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full flex items-center justify-center"
          >
            <img
              src="/assets/aistudio/file_000000005fd08211910a8ab4a71ebcc1_c1c3bf9a.png"
              alt="Hawar Studio W Logo - Where Worth Grows"
              className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(139,92,246,0.25)] mix-blend-multiply"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
