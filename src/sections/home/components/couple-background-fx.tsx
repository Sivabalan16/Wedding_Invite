'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

export const CoupleBackgroundFX: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [petals, setPetals] = useState<Particle[]>([]);
  const [sparkles, setSparkles] = useState<Particle[]>([]);

  useEffect(() => {
    setMounted(true);

    // High-contrast, bright festive marigold and scarlet petals
    const festiveColors = ['#fbbf24', '#f59e0b', '#f97316', '#ef4444', '#f43f5e', '#fef08a'];
    const generatedPetals: Particle[] = Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 75,
      size: Math.random() * 10 + 8,
      duration: Math.random() * 6 + 7,
      delay: Math.random() * 4,
      color: festiveColors[Math.floor(Math.random() * festiveColors.length)],
    }));
    setPetals(generatedPetals);

    // Glowing golden embers
    const generatedSparkles: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
      id: i + 300,
      x: Math.random() * 100,
      y: Math.random() * 70,
      size: Math.random() * 4 + 2.5,
      duration: Math.random() * 4 + 4,
      delay: Math.random() * 3,
      color: '#fffbeb',
    }));
    setSparkles(generatedSparkles);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. DEEP ROYAL TEMPLE SILK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#4a040d] via-[#7f1d1d] via-30% via-[#991b1b] to-[#b45309]" />

      {/* 2. CENTRAL RADIANT GOD-RAYS (Luminous Sunburst) */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] opacity-60">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.65, 0.9, 0.65] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(254, 240, 138, 0.5) 0%, rgba(245, 158, 11, 0.25) 45%, transparent 75%)',
          }}
        />
        {/* Revolving Ray Angles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-25"
          style={{
            background:
              'repeating-conic-gradient(from 0deg, rgba(254, 240, 138, 0.45) 0deg 14deg, transparent 14deg 28deg)',
          }}
        />
      </div>

      {/* 3. TWIN GOLDEN KOLAM HALOS (Behind Bride & Groom Positions) */}
      <div className="hidden lg:block absolute top-[48%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full rounded-full border-2 border-amber-300/30 border-dashed shadow-[0_0_20px_rgba(251,191,36,0.2)]"
        />
      </div>

      <div className="hidden lg:block absolute top-[48%] right-[25%] translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px]">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full rounded-full border-2 border-amber-300/30 border-dashed shadow-[0_0_20px_rgba(251,191,36,0.2)]"
        />
      </div>

      {/* 4. FLICKERING AMBIENT DIYA LIGHT AURA (Left & Right Margins) */}
      <motion.div
        animate={{ scale: [1, 1.2, 0.95, 1.15, 1], opacity: [0.55, 0.85, 0.6, 0.8, 0.55] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 -left-16 w-80 h-80 rounded-full bg-radial from-amber-400/35 via-orange-500/20 to-transparent blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.15, 0.95, 1.2, 1, 1.15], opacity: [0.6, 0.85, 0.55, 0.9, 0.6] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
        className="absolute top-1/4 -right-16 w-80 h-80 rounded-full bg-radial from-amber-400/35 via-red-500/20 to-transparent blur-3xl"
      />

      {/* 5. CASCADING MARIGOLD & LOTUS PETALS */}
      {mounted &&
        petals.map((p) => (
          <motion.div
            key={`petal-c-${p.id}`}
            initial={{ top: `${p.y}%`, left: `${p.x}%`, opacity: 0, scale: 0.6 }}
            animate={{
              top: [`${p.y}%`, `${p.y + 40}%`],
              left: [
                `${p.x}%`,
                `${p.x + Math.sin(p.id) * 8}%`,
                `${p.x - Math.cos(p.id) * 6}%`,
              ],
              opacity: [0, 1, 0],
              scale: [0.6, 1.2, 0.45],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: p.size,
              height: p.size * 1.35,
              backgroundColor: p.color,
              borderRadius: '65% 25% 65% 25%',
              boxShadow: '0 0 12px rgba(251, 191, 36, 0.5)',
            }}
            className="absolute z-10"
          />
        ))}

      {/* 6. GLOWING GOLDEN DIYA SPARKS (RISING EMBERS) */}
      {mounted &&
        sparkles.map((s) => (
          <motion.div
            key={`spark-c-${s.id}`}
            initial={{ top: `${s.y}%`, left: `${s.x}%`, opacity: 0, scale: 0.4 }}
            animate={{
              top: [`${s.y}%`, `${(s.y - 25 + 100) % 100}%`],
              opacity: [0, 1, 0],
              scale: [0.4, 1.35, 0.2],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ width: s.size, height: s.size }}
            className="absolute rounded-full bg-yellow-200 shadow-[0_0_12px_#fde047] z-10"
          />
        ))}

      {/* 7. SEAMLESS BOTTOM CONNECTOR FADE (Smooth Handoff to Card 3) */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#b45309]/30" />
    </div>
  );
};