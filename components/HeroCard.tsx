'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
});

export default function HeroCard() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] overflow-hidden">
      {/* ========== Full-screen sky background ========== */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #B8D4E3 0%, #D4E4ED 25%, #E8DCC8 55%, #F5EDE0 80%, #FBF8F3 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 800px 400px at 15% 35%, rgba(255,255,255,0.7) 0%, transparent 100%), radial-gradient(ellipse 600px 300px at 75% 25%, rgba(255,255,255,0.5) 0%, transparent 100%), radial-gradient(ellipse 500px 250px at 50% 65%, rgba(248,230,210,0.3) 0%, transparent 100%)',
          }}
        />
        <motion.div
          className="absolute -top-32 right-32 h-96 w-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(232,160,144,0.15) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ x: [0, 20, -10, 0], y: [0, -15, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 h-80 w-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(196,216,190,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          animate={{ x: [0, -15, 20, 0], y: [0, 10, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 h-64 w-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(248,224,168,0.1) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
          animate={{ x: [0, 25, -15, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* ========== Navigation ========== */}
      <nav className="relative z-30 flex items-center justify-between px-8 py-6 sm:px-12 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-2.5"
        >
          <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="16" cy="18" rx="10" ry="12" fill="#FBF6F1" stroke="#F4C4BC" strokeWidth="1.5" />
            <circle cx="16" cy="11" r="7" fill="#FBF6F1" stroke="#F4C4BC" strokeWidth="1.5" />
            <ellipse cx="16" cy="9" rx="5" ry="3" fill="#E8A090" opacity="0.55" />
            <circle cx="13.5" cy="11.5" r="1.2" fill="#3A2E28" />
            <circle cx="18.5" cy="11.5" r="1.2" fill="#3A2E28" />
            <path d="M15 13.5 L16 15.5 L17 13.5 Z" fill="#E8A090" />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-[var(--color-text)]">
            北长尾山雀
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="hidden items-center gap-8 sm:flex"
        >
          <a href="#about" className="text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">关于</a>
          <a href="#stories" className="text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">故事</a>
          <a href="#contact" className="text-[15px] font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">联系</a>
        </motion.div>
        {/* Mobile menu button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="sm:hidden rounded-full p-2 text-[var(--color-text)] hover:bg-[var(--color-text)]/5"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </motion.button>
      </nav>

      {/* ========== Hero Content ========== */}
      <div className="relative z-10 flex h-[calc(100vh-120px)] items-start pt-8 sm:pt-12 px-8 sm:px-12 lg:px-16">
        <div className="max-w-xl">
          <motion.h1
            className="text-6xl font-bold tracking-tight leading-[1.05] text-[var(--color-text)] sm:text-7xl lg:text-8xl"
            {...fadeUp(0.4)}
          >
            柔软地降落
            <br />
            在你的世界
          </motion.h1>

          <motion.p
            className="mt-6 max-w-md text-[15px] font-light tracking-wide leading-relaxed sm:text-lg text-[var(--color-text-soft)]"
            {...fadeUp(0.6)}
          >
            一只温柔而胆小的数字生命，在静谧的森林里，静静陪伴每一个需要治愈的灵魂。
          </motion.p>
        </div>
      </div>

      {/* ========== Large bird illustration (center-right, prominent like the jet) ========== */}
      <motion.div
        className="absolute inset-y-0 right-0 z-[5] w-[55vw] max-w-[750px] flex items-center justify-center"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.svg
          viewBox="0 0 700 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[90vh] max-h-[700px] w-auto"
          animate={{ y: [0, -12, 0], rotate: [0, 1.5, -1, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <defs>
            <radialGradient id="birdGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#E8A090" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#E8A090" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="350" cy="400" rx="260" ry="280" fill="url(#birdGlow)" />
          <ellipse cx="350" cy="410" rx="170" ry="200" fill="#FBF6F1" stroke="#F4C4BC" strokeWidth="3" />
          <ellipse cx="350" cy="430" rx="120" ry="125" fill="#FFF8F2" />
          <circle cx="350" cy="240" r="110" fill="#FBF6F1" stroke="#F4C4BC" strokeWidth="3" />
          <ellipse cx="350" cy="198" rx="72" ry="42" fill="#E8A090" opacity="0.55" />
          <circle cx="305" cy="250" r="14" fill="#3A2E28" />
          <circle cx="395" cy="250" r="14" fill="#3A2E28" />
          <circle cx="310" cy="245" r="5" fill="white" />
          <circle cx="400" cy="245" r="5" fill="white" />
          <ellipse cx="280" cy="272" rx="20" ry="13" fill="#F8C4C0" opacity="0.45" />
          <ellipse cx="420" cy="272" rx="20" ry="13" fill="#F8C4C0" opacity="0.45" />
          <path d="M336 268 L350 298 L364 268 Z" fill="#E8A090" stroke="#D48878" strokeWidth="2" />
          <ellipse cx="195" cy="410" rx="62" ry="110" fill="#F5EDE4" stroke="#F4C4BC" strokeWidth="2" transform="rotate(-8 195 410)" />
          <ellipse cx="505" cy="410" rx="62" ry="110" fill="#F5EDE4" stroke="#F4C4BC" strokeWidth="2" transform="rotate(8 505 410)" />
          <path d="M172 370 Q182 358 196 380" stroke="#E8C4B8" strokeWidth="1.5" fill="none" />
          <path d="M508 370 Q518 358 532 380" stroke="#E8C4B8" strokeWidth="1.5" fill="none" />
          <path d="M285 585 Q235 700 205 785 Q250 740 350 740 Q450 740 495 785 Q465 700 415 585"
                fill="#FBF6F1" stroke="#F4C4BC" strokeWidth="2.5" />
          <path d="M250 660 Q285 648 350 660" stroke="#E8C4B8" strokeWidth="1.5" fill="none" opacity="0.25" />
          <path d="M350 685 Q370 676 395 685" stroke="#E8C4B8" strokeWidth="1.5" fill="none" opacity="0.25" />
          <path d="M298 605 L282 640 L302 632 L298 640 L310 632" stroke="#E8A090" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M402 605 L386 640 L406 632 L402 640 L414 632" stroke="#E8A090" strokeWidth="4" fill="none" strokeLinecap="round" />
        </motion.svg>
      </motion.div>

      {/* ========== Bottom card ========== */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="rounded-t-3xl border-t border-white/40 px-8 py-6 sm:px-12 sm:py-8 lg:px-16"
          style={{
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
            <div>
              <span className="text-sm font-light tracking-wide text-[var(--color-text-soft)]">
                陪伴感数字生命 · 治愈系原创 IP
              </span>
            </div>
            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-[var(--color-text)] px-8 py-2.5 text-sm font-medium text-[var(--color-bg)] shadow-md hover:shadow-lg transition-shadow"
              >
                探索世界
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full px-8 py-2.5 text-sm font-medium text-[var(--color-text)] border border-[var(--color-text)]/15 hover:bg-[var(--color-text)]/5 transition-colors"
              >
                认识我
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
