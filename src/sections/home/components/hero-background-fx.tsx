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

interface FloatingLeaf {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
}

export const HeroBackgroundFX: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [petals, setPetals] = useState<Particle[]>([]);
  const [sparkles, setSparkles] = useState<Particle[]>([]);
  const [leaves, setLeaves] = useState<FloatingLeaf[]>([]);

  useEffect(() => {
    setMounted(true);

    const festiveColors = ['#f59e0b', '#d97706', '#dc2626', '#fbbf24', '#f97316', '#fffbeb'];
    const generatedPetals: Particle[] = Array.from({ length: 26 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 85,
      size: Math.random() * 10 + 8,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 4,
      color: festiveColors[Math.floor(Math.random() * festiveColors.length)],
    }));
    setPetals(generatedPetals);

    const generatedSparkles: Particle[] = Array.from({ length: 24 }).map((_, i) => ({
      id: i + 100,
      x: Math.random() * 100,
      y: Math.random() * 85,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 3,
      color: '#fef08a',
    }));
    setSparkles(generatedSparkles);

    // Auspicious Green Mango & Betel Leaves fluttering in the breeze
    const generatedLeaves: FloatingLeaf[] = Array.from({ length: 16 }).map((_, i) => ({
      id: i + 300,
      x: Math.random() * 95,
      y: Math.random() * 85,
      size: Math.random() * 14 + 16,
      duration: Math.random() * 9 + 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    }));
    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. DEEP SOUTH INDIAN WEDDING SILK WITH SOFT EMERALD GREEN GRADIENT MIST */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b0712] via-[#701a2d] via-35% via-[#831843]/90 via-65% to-[#7c2d12]" />
      
      {/* Subtle organic emerald silk glow layers */}
      <div className="absolute inset-0 bg-radial from-emerald-950/25 via-emerald-900/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-emerald-950/30 via-transparent to-transparent" />

      {/* 2. REALISTIC FLUFFY MARIGOLD & JASMINE THORANAI MAALAI (AT TOP) */}
      <div className="absolute top-0 inset-x-0 z-30 pointer-events-none overflow-visible">
        {/* Horizontal Ceiling Band */}
        <div className="w-full h-4 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 shadow-md flex items-center justify-around overflow-hidden">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={`thoran-tie-${i}`}
              className={`w-3.5 h-3.5 rounded-full shadow-inner ${
                i % 3 === 0 ? 'bg-amber-400' : i % 3 === 1 ? 'bg-orange-600' : 'bg-stone-100'
              }`}
            />
          ))}
        </div>

        {/* Triple Floral Swag Drapes */}
        <svg
          viewBox="0 0 1200 180"
          className="w-full h-auto max-h-36 sm:max-h-48 drop-shadow-[0_12px_15px_rgba(0,0,0,0.4)]"
          fill="none"
        >
          <path
            d="M 40,0 Q 300,165 600,60 Q 900,165 1160,0"
            stroke="#c2410c"
            strokeWidth="20"
            strokeLinecap="round"
            strokeDasharray="14 12"
            className="opacity-95"
          />
          <path
            d="M 40,0 Q 300,140 600,50 Q 900,140 1160,0"
            stroke="#fffbeb"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="12 10"
            className="opacity-95"
          />
          <path
            d="M 40,0 Q 300,115 600,40 Q 900,115 1160,0"
            stroke="#facc15"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray="13 11"
            className="opacity-95"
          />
        </svg>

        {/* Vertical Side Garlands */}
        <div className="absolute top-2 left-2 sm:left-6 flex flex-col items-center">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={`vert-garland-l-${i}`}
              animate={{ rotate: [-1.2, 1.2, -1.2] }}
              transition={{ duration: 4 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
              className={`w-5 h-5 rounded-full -mb-1.5 shadow-md ${
                i % 3 === 0 ? 'bg-amber-400' : i % 3 === 1 ? 'bg-orange-600' : 'bg-stone-100'
              }`}
            />
          ))}
        </div>

        <div className="absolute top-2 right-2 sm:right-6 flex flex-col items-center">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.div
              key={`vert-garland-r-${i}`}
              animate={{ rotate: [1.2, -1.2, 1.2] }}
              transition={{ duration: 4.2 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
              className={`w-5 h-5 rounded-full -mb-1.5 shadow-md ${
                i % 3 === 0 ? 'bg-amber-400' : i % 3 === 1 ? 'bg-orange-600' : 'bg-stone-100'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 3. TOP ANNAPAKSHI BRASS HANGING LAMPS (LEFT & RIGHT) */}
      <motion.div
        animate={{ rotate: [-2.5, 2.5, -2.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-2 left-4 sm:left-16 origin-top flex flex-col items-center z-25 drop-shadow-2xl"
      >
        <svg width="86" height="240" viewBox="0 0 90 260" fill="none">
          <g stroke="url(#brassChain)" strokeWidth="3" fill="none">
            <ellipse cx="45" cy="15" rx="5" ry="9" />
            <ellipse cx="45" cy="30" rx="5" ry="9" />
            <ellipse cx="45" cy="45" rx="5" ry="9" />
            <ellipse cx="45" cy="60" rx="5" ry="9" />
            <ellipse cx="45" cy="75" rx="5" ry="9" />
            <ellipse cx="45" cy="90" rx="6" ry="11" strokeWidth="4" />
          </g>
          <g fill="url(#brassGold)" stroke="#78350f" strokeWidth="1.2">
            <path d="M43,92 C45,86 47,86 49,92 Z" />
            <path d="M37,105 C35,97 42,95 46,98 C50,101 49,106 43,109 Z" />
            <path d="M36,101 L32,103 L36,104 Z" />
            <path d="M34,103 L32,112 L35,110 Z" fill="#f59e0b" />
            <path d="M43,108 C40,113 42,122 55,124 C53,118 50,112 43,108 Z" />
            <path d="M48,103 C60,94 68,102 62,114 C58,121 52,124 48,123 C55,116 57,108 48,103 Z" />
            <path d="M41,123 L51,123 L49,132 L43,132 Z" />
            <path d="M38,132 L54,132 L56,138 L36,138 Z" />
          </g>
          <path
            d="M10,146 C10,138 80,138 80,146 C74,166 16,166 10,146 Z"
            fill="url(#brassGold)"
            stroke="#92400e"
            strokeWidth="1.5"
          />
          <ellipse cx="45" cy="144" rx="35" ry="5" fill="#fde68a" stroke="#b45309" strokeWidth="1" />
          <path d="M43,166 L47,166 L45,176 Z" fill="#d97706" />
          <circle cx="45" cy="178" r="3" fill="#f59e0b" />
        </svg>

        <div className="absolute top-[125px] left-[18px] sm:left-[20px] flex flex-col items-center">
          <motion.div
            animate={{
              scale: [1, 1.25, 0.95, 1.2, 1],
              opacity: [0.85, 1, 0.8, 1, 0.85],
            }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-4 h-7 rounded-full bg-gradient-to-t from-red-600 via-amber-300 to-yellow-100 shadow-[0_0_20px_#f59e0b]"
          />
          <div className="absolute bottom-1 w-2 h-3.5 rounded-full bg-white blur-[0.5px]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: [2.5, -2.5, 2.5] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute top-2 right-4 sm:right-16 origin-top flex flex-col items-center z-25 drop-shadow-2xl scale-x-[-1]"
      >
        <svg width="86" height="240" viewBox="0 0 90 260" fill="none">
          <g stroke="url(#brassChain)" strokeWidth="3" fill="none">
            <ellipse cx="45" cy="15" rx="5" ry="9" />
            <ellipse cx="45" cy="30" rx="5" ry="9" />
            <ellipse cx="45" cy="45" rx="5" ry="9" />
            <ellipse cx="45" cy="60" rx="5" ry="9" />
            <ellipse cx="45" cy="75" rx="5" ry="9" />
            <ellipse cx="45" cy="90" rx="6" ry="11" strokeWidth="4" />
          </g>
          <g fill="url(#brassGold)" stroke="#78350f" strokeWidth="1.2">
            <path d="M43,92 C45,86 47,86 49,92 Z" />
            <path d="M37,105 C35,97 42,95 46,98 C50,101 49,106 43,109 Z" />
            <path d="M36,101 L32,103 L36,104 Z" />
            <path d="M34,103 L32,112 L35,110 Z" fill="#f59e0b" />
            <path d="M43,108 C40,113 42,122 55,124 C53,118 50,112 43,108 Z" />
            <path d="M48,103 C60,94 68,102 62,114 C58,121 52,124 48,123 C55,116 57,108 48,103 Z" />
            <path d="M41,123 L51,123 L49,132 L43,132 Z" />
            <path d="M38,132 L54,132 L56,138 L36,138 Z" />
          </g>
          <path
            d="M10,146 C10,138 80,138 80,146 C74,166 16,166 10,146 Z"
            fill="url(#brassGold)"
            stroke="#92400e"
            strokeWidth="1.5"
          />
          <ellipse cx="45" cy="144" rx="35" ry="5" fill="#fde68a" stroke="#b45309" strokeWidth="1" />
          <path d="M43,166 L47,166 L45,176 Z" fill="#d97706" />
          <circle cx="45" cy="178" r="3" fill="#f59e0b" />
        </svg>

        <div className="absolute top-[125px] left-[18px] sm:left-[20px] flex flex-col items-center">
          <motion.div
            animate={{
              scale: [1.15, 0.95, 1.25, 1, 1.15],
              opacity: [0.9, 0.8, 1, 0.85, 0.9],
            }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="w-4 h-7 rounded-full bg-gradient-to-t from-red-600 via-amber-300 to-yellow-100 shadow-[0_0_20px_#f59e0b]"
          />
          <div className="absolute bottom-1 w-2 h-3.5 rounded-full bg-white blur-[0.5px]" />
        </div>
      </motion.div>

      {/* 4. GRAND FLOOR KOLAM (LOCATED IN BOTTOM-MIDDLE FLOOR) */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[520px] sm:w-[720px] h-[190px] sm:h-[240px] z-10 pointer-events-none opacity-60">
        <svg viewBox="0 0 600 220" fill="none" className="w-full h-full drop-shadow-[0_0_12px_rgba(254,240,138,0.3)]">
          {/* Ground Kolam Ellipses / Lotus Rings */}
          <ellipse cx="300" cy="170" rx="280" ry="45" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="6 6" />
          <ellipse cx="300" cy="170" rx="230" ry="38" stroke="#ffffff" strokeWidth="2" opacity="0.8" />
          <ellipse cx="300" cy="170" rx="170" ry="28" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="5 5" />
          <ellipse cx="300" cy="170" rx="110" ry="18" stroke="#ffffff" strokeWidth="2" />
          <ellipse cx="300" cy="170" rx="50" ry="9" fill="#fef08a" opacity="0.4" />

          {/* Symmetrical South Indian Rice Flour Flower Petals */}
          <path d="M300,125 C330,150 350,170 300,170 C250,170 270,150 300,125 Z" stroke="#ffffff" strokeWidth="2" fill="none" />
          <path d="M220,155 C260,165 280,170 300,170 C280,170 250,160 220,155 Z" stroke="#ffffff" strokeWidth="1.5" fill="none" />
          <path d="M380,155 C340,165 320,170 300,170 C320,170 350,160 380,155 Z" stroke="#ffffff" strokeWidth="1.5" fill="none" />

          {/* Flour Dots (Pulli Kolam) */}
          {[-180, -120, -60, 0, 60, 120, 180].map((offset, idx) => (
            <circle key={`kolam-dot-${idx}`} cx={300 + offset} cy={170 + Math.sin(idx) * 8} r="3" fill="#ffffff" />
          ))}
        </svg>
      </div>

      {/* 5. INWARD-FACING REALISTIC AGAL VILAKKU WITH NATURAL CANDLE FLAME (BOTTOM CORNERS) */}
      {/* Bottom Left Vilakku (Pointing Inward to the Right) */}
      <div className="absolute bottom-6 left-3 sm:left-10 z-20 flex flex-col items-center pointer-events-none drop-shadow-2xl">
        <div className="relative">
          {/* Flame on the inward-facing right wick tip */}
          <div className="absolute -top-11 right-3 flex flex-col items-center">
            {/* Ambient Flame Halo */}
            <motion.div
              animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-2 rounded-full bg-amber-400/40 blur-md"
            />
            {/* Tear-drop flame */}
            <motion.div
              animate={{
                scaleY: [1, 1.18, 0.94, 1.1, 1],
                scaleX: [1, 0.92, 1.05, 0.96, 1],
                skewX: [-2, 3, -1, 2, -2],
              }}
              transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ borderRadius: '50% 50% 20% 20% / 80% 80% 20% 20%' }}
              className="w-4 h-9 bg-gradient-to-t from-red-600 via-amber-400 via-60% to-yellow-100 shadow-[0_0_16px_#f59e0b]"
            />
            <div className="absolute bottom-1 w-2 h-4 rounded-full bg-white blur-[0.3px]" />
            <div className="w-1.5 h-2 bg-stone-900 rounded-sm -mt-0.5" />
          </div>

          {/* Clay Bowl Facing Inward */}
          <svg width="125" height="58" viewBox="0 0 120 54" fill="none">
            <path
              d="M10,22 C8,30 20,48 55,50 C90,52 108,38 116,24 C118,22 112,18 108,18 C70,18 20,18 10,22 Z"
              fill="url(#terracottaGrad)"
              stroke="#450a0a"
              strokeWidth="1.5"
            />
            <ellipse cx="60" cy="22" rx="46" ry="7" fill="#380608" />
            <path
              d="M16,28 Q22,23 28,28 T40,28 T52,28 T64,28 T76,28 T88,28 T100,28 T110,26"
              stroke="#ffffff"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="28" cy="34" r="1.6" fill="#ffffff" />
            <circle cx="52" cy="34" r="1.6" fill="#ffffff" />
            <circle cx="76" cy="34" r="1.6" fill="#ffffff" />
            <circle cx="100" cy="32" r="1.6" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Bottom Right Vilakku (Inward-Facing toward the Left) */}
      <div className="absolute bottom-6 right-3 sm:right-10 z-20 flex flex-col items-center pointer-events-none drop-shadow-2xl scale-x-[-1]">
        <div className="relative">
          <div className="absolute -top-11 right-3 flex flex-col items-center">
            <motion.div
              animate={{ opacity: [0.6, 0.9, 0.6], scale: [0.95, 1.1, 0.95] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute -inset-2 rounded-full bg-amber-400/40 blur-md"
            />
            <motion.div
              animate={{
                scaleY: [1, 1.15, 0.96, 1.12, 1],
                scaleX: [1, 0.94, 1.04, 0.95, 1],
                skewX: [2, -3, 1, -2, 2],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              style={{ borderRadius: '50% 50% 20% 20% / 80% 80% 20% 20%' }}
              className="w-4 h-9 bg-gradient-to-t from-red-600 via-amber-400 via-60% to-yellow-100 shadow-[0_0_16px_#f59e0b]"
            />
            <div className="absolute bottom-1 w-2 h-4 rounded-full bg-white blur-[0.3px]" />
            <div className="w-1.5 h-2 bg-stone-900 rounded-sm -mt-0.5" />
          </div>

          <svg width="125" height="58" viewBox="0 0 120 54" fill="none">
            <path
              d="M10,22 C8,30 20,48 55,50 C90,52 108,38 116,24 C118,22 112,18 108,18 C70,18 20,18 10,22 Z"
              fill="url(#terracottaGrad)"
              stroke="#450a0a"
              strokeWidth="1.5"
            />
            <ellipse cx="60" cy="22" rx="46" ry="7" fill="#380608" />
            <path
              d="M16,28 Q22,23 28,28 T40,28 T52,28 T64,28 T76,28 T88,28 T100,28 T110,26"
              stroke="#ffffff"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="28" cy="34" r="1.6" fill="#ffffff" />
            <circle cx="52" cy="34" r="1.6" fill="#ffffff" />
            <circle cx="76" cy="34" r="1.6" fill="#ffffff" />
            <circle cx="100" cy="32" r="1.6" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* 6. FLYING GREEN MANGO & BETEL LEAVES IN THE AIR */}
      {mounted &&
        leaves.map((l) => (
          <motion.div
            key={`leaf-${l.id}`}
            initial={{
              top: `${l.y}%`,
              left: `${l.x}%`,
              opacity: 0,
              rotate: l.rotation,
              scale: 0.7,
            }}
            animate={{
              top: [`${l.y}%`, `${(l.y + 40) % 100}%`],
              left: [
                `${l.x}%`,
                `${l.x + Math.sin(l.id) * 12}%`,
                `${l.x - Math.cos(l.id) * 8}%`,
              ],
              opacity: [0, 0.85, 0],
              rotate: [l.rotation, l.rotation + 180, l.rotation + 360],
              scale: [0.7, 1.05, 0.6],
            }}
            transition={{
              duration: l.duration,
              delay: l.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ width: l.size, height: l.size * 1.6 }}
            className="absolute z-15 pointer-events-none"
          >
            <svg viewBox="0 0 30 50" fill="none" className="w-full h-full drop-shadow-md">
              <path
                d="M15,0 C3,15 2,38 15,50 C28,38 27,15 15,0 Z"
                fill="url(#leafGrad)"
                stroke="#14532d"
                strokeWidth="1"
              />
              <path d="M15,5 L15,45" stroke="#86efac" strokeWidth="0.8" opacity="0.6" />
            </svg>
          </motion.div>
        ))}

      {/* 7. FALLING MARIGOLD PETALS & GLOWING EMBERS */}
      {mounted &&
        petals.map((p) => (
          <motion.div
            key={`petal-${p.id}`}
            initial={{ top: `${p.y}%`, left: `${p.x}%`, opacity: 0, scale: 0.6 }}
            animate={{
              top: [`${p.y}%`, `${(p.y + 45) % 100}%`],
              left: [
                `${p.x}%`,
                `${p.x + Math.sin(p.id + 1) * 8}%`,
                `${p.x - Math.cos(p.id) * 6}%`,
              ],
              opacity: [0, 0.95, 0],
              scale: [0.6, 1.15, 0.45],
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
              borderRadius: '60% 25% 60% 25%',
              boxShadow: '0 2px 10px rgba(185, 28, 28, 0.35)',
            }}
            className="absolute z-10"
          />
        ))}

      {mounted &&
        sparkles.map((s) => (
          <motion.div
            key={`spark-${s.id}`}
            initial={{ top: `${s.y}%`, left: `${s.x}%`, opacity: 0, scale: 0.4 }}
            animate={{
              top: [`${s.y}%`, `${(s.y - 25 + 100) % 100}%`],
              opacity: [0, 0.85, 0],
              scale: [0.4, 1.25, 0.2],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{ width: s.size, height: s.size }}
            className="absolute rounded-full bg-amber-300 shadow-[0_0_10px_#fde047] z-10"
          />
        ))}

      {/* SVG GRADIENT DEFINITIONS */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="brassChain" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b45309" />
            <stop offset="50%" stopColor="#fef08a" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="brassGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="40%" stopColor="#f59e0b" />
            <stop offset="80%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>
          <linearGradient id="terracottaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#991b1b" />
            <stop offset="60%" stopColor="#7f1d1d" />
            <stop offset="100%" stopColor="#450a0a" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" />
            <stop offset="60%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#14532d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};