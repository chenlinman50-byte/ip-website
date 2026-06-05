'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  wobble: number;
  wobbleSpeed: number;
}

const COLORS = [
  [232, 160, 144],
  [244, 196, 188],
  [168, 197, 160],
  [242, 201, 119],
  [248, 216, 212],
];

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor(w * 0.025), 30);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.1,
          speedY: (Math.random() - 0.5) * 0.1,
          opacity: Math.random() * 0.15 + 0.05,
          wobble: Math.random() * Math.PI * 2,
          wobbleSpeed: Math.random() * 0.005 + 0.002,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.wobble += p.wobbleSpeed;
        p.x += Math.sin(p.wobble) * 0.12;
        p.y += Math.cos(p.wobble) * 0.08;

        if (p.x < -15) p.x = w + 15;
        if (p.x > w + 15) p.x = -15;
        if (p.y < -15) p.y = h + 15;
        if (p.y > h + 15) p.y = -15;

        const color = COLORS[Math.floor(p.wobble * 25) % COLORS.length];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${p.opacity})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
