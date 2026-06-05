'use client';

import { motion } from 'framer-motion';

const ORBS = [
  { size: 500, top: '-10%', left: '10%', color: 'rgba(244,196,188,0.18)', delay: 0, duration: 15 },
  { size: 400, top: '40%', left: '60%', color: 'rgba(216,232,210,0.15)', delay: 3, duration: 12 },
  { size: 350, top: '70%', left: '20%', color: 'rgba(248,224,168,0.12)', delay: 5, duration: 14 },
];

export default function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {ORBS.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            backgroundColor: orb.color,
            filter: 'blur(100px)',
          }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -25, 20, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
