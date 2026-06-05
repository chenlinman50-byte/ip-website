'use client';

import ParticleBackground from '@/components/ParticleBackground';
import MouseTrail from '@/components/MouseTrail';
import FloatingOrbs from '@/components/FloatingOrbs';
import HeroCard from '@/components/HeroCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[var(--color-bg)] overflow-hidden">
      <ParticleBackground />
      <MouseTrail />
      <FloatingOrbs />
      <HeroCard />
    </section>
  );
}
