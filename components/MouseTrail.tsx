'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TRAIL_LENGTH = 4;

interface Point {
  x: number;
  y: number;
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<Point[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );
  const posRef = useRef({ x: -100, y: -100 });
  const trailRef = useRef<Point[]>(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: -100, y: -100 }))
  );

  useEffect(() => {
    let raf: number;
    const handleMouseMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      trailRef.current[0] = { ...posRef.current };
      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const prev = trailRef.current[i - 1];
        const curr = trailRef.current[i];
        trailRef.current[i] = {
          x: curr.x + (prev.x - curr.x) * 0.12,
          y: curr.y + (prev.y - curr.y) * 0.12,
        };
      }
      setTrail([...trailRef.current]);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 50 }}>
      {trail.map((point, i) => {
        const progress = i / (TRAIL_LENGTH - 1);
        const size = 32 - progress * 24;
        const opacity = 0.18 * (1 - progress);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: point.x - size / 2,
              top: point.y - size / 2,
              background: `radial-gradient(circle, rgba(232,160,144,${opacity}) 0%, rgba(232,160,144,0) 70%)`,
              boxShadow: `0 0 ${size}px rgba(232,160,144,${opacity * 0.3})`,
            }}
            transition={{ duration: 0 }}
          />
        );
      })}
    </div>
  );
}
