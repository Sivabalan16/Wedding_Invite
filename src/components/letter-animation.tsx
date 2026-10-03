'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface LetterAnimationProps {
  onOpen: () => void;
  guestName?: string;
  coupleName?: string;
}

// Particle definitions
interface Petal {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
  explodeX: number;
  explodeY: number;
}

interface Spark {
  id: number;
  left: number;
  bottomStart: number;
  bottomEnd: number;
  delay: number;
  duration: number;
  scale: number;
}

export const LetterAnimation: React.FC<LetterAnimationProps> = ({
  onOpen,
  guestName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Particles
  const [petals, setPetals] = useState<Petal[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    // Generate Petals with pre-calculated explosion trajectory
    const petalColors = ['#e11d48', '#fbbf24', '#f43f5e', '#f59e0b'];
    const generatedPetals: Petal[] = Array.from({ length: 30 }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 200 + Math.random() * 300;
      return {
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 12 + 10,
        delay: Math.random() * 4,
        duration: Math.random() * 6 + 7,
        color: petalColors[Math.floor(Math.random() * petalColors.length)],
        rotation: Math.random() * 360,
        explodeX: Math.cos(angle) * radius,
        explodeY: Math.sin(angle) * radius,
      };
    });

    // Generate Golden Sparks
    const generatedSparks: Spark[] = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: 45 + (Math.random() * 20 - 10),
      bottomStart: 15 + Math.random() * 15,
      bottomEnd: 35 + Math.random() * 25,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      scale: 0.5 + Math.random() * 0.7,
    }));

    setPetals(generatedPetals);
    setSparks(generatedSparks);
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen();
    }, 1300);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          key="entry-container"
          initial={{ opacity: 1, backgroundColor: '#18080c' }}
          exit={{
            opacity: [1, 1, 1, 0],
            transition: { duration: 1.3, ease: 'easeIn', times: [0, 0.4, 0.8, 1] },
          }}
          className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden py-10 px-4 select-none"
        >
          {/* Background Image with subtle Ken Burns camera motion */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: 1.06 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="absolute inset-0 z-0 h-full w-full"
          >
            <Image
              src="/temple-gopuram.png"
              alt="Temple Gopuram"
              fill
              priority
              className="object-cover object-center opacity-85"
            />
          </motion.div>

          {/* Vignette gradients to preserve contrast */}
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/80 via-black/20 to-black/85 pointer-events-none"
          />

          {/* Falling Flower Petals Layer with Explosion Exit */}
          <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
            {petals.map((petal) => (
              <motion.div
                key={`petal-${petal.id}`}
                initial={{
                  top: '-5%',
                  left: `${petal.x}%`,
                  opacity: 0,
                  rotate: petal.rotation,
                }}
                animate={{
                  top: '105%',
                  left: `${petal.x + (Math.random() * 10 - 5)}%`,
                  opacity: [0, 0.85, 0.85, 0],
                  rotate: petal.rotation + 360,
                }}
                transition={{
                  duration: petal.duration,
                  delay: petal.delay,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                exit={{
                  x: [0, 0, petal.explodeX],
                  y: [0, 0, petal.explodeY],
                  scale: [1, 1.4, 0],
                  opacity: [1, 1, 0],
                  transition: {
                    duration: 1.3,
                    times: [0, 0.3, 1],
                    ease: 'easeOut',
                  },
                }}
                style={{
                  width: petal.size,
                  height: petal.size * 1.3,
                  backgroundColor: petal.color,
                  borderRadius: '50% 10% 50% 10%',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                }}
                className="absolute"
              />
            ))}
          </div>

          {/* Golden Sparks Layer */}
          <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
            {sparks.map((spark) => (
              <motion.div
                key={`spark-${spark.id}`}
                initial={{
                  left: `${spark.left}%`,
                  bottom: `${spark.bottomStart}%`,
                  opacity: 0,
                  scale: 0.5,
                }}
                animate={{
                  bottom: `${spark.bottomEnd}%`,
                  opacity: [0, 0.9, 0],
                  scale: [spark.scale, spark.scale, 0.2],
                }}
                transition={{
                  duration: spark.duration,
                  delay: spark.delay,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.4 },
                }}
                className="absolute h-1.5 w-1.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fde047]"
              />
            ))}
          </div>

          {/* Top Header Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center text-center mt-2"
          >
            <span className="text-xs md:text-sm tracking-[0.35em] uppercase text-amber-300 font-semibold drop-shadow-md">
              || ஸ்ரீ கணேஷாய நமஹ ||
            </span>
            <h1 className="mt-2 text-3xl md:text-5xl font-serif font-bold text-amber-100 tracking-wide drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
              Shubh Vivah
            </h1>
            <p className="mt-1 text-sm md:text-base font-medium tracking-widest uppercase text-amber-200/90 drop-shadow">
              A Sacred Union
            </p>
          </motion.div>

          {/* Bottom Interactive Area (Diya Button) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.8,
              transition: { duration: 0.5 },
            }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10 flex flex-col items-center text-center mb-6"
          >
            <motion.button
              type="button"
              onClick={handleOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              className="group relative flex items-center justify-center h-16 w-16 md:h-18 md:w-18 rounded-full bg-gradient-to-br from-[#d97706] via-[#b45309] to-[#78350f] shadow-[0_0_30px_rgba(245,158,11,0.6)] border-2 border-amber-300 focus:outline-none transition-all duration-300 cursor-pointer"
              aria-label="Tap to Open Invitation"
            >
              <span className="absolute -inset-1.5 rounded-full bg-amber-400/40 animate-ping pointer-events-none" />
              <div className="absolute inset-0 rounded-full bg-amber-500/20 blur-sm group-hover:bg-amber-500/40 transition-colors" />
              <span className="relative z-10 text-2xl md:text-3xl filter drop-shadow-[0_0_8px_rgba(255,215,0,0.9)]">
                🪔
              </span>
            </motion.button>

            <p
              onClick={handleOpen}
              className="mt-3 text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-amber-200/95 cursor-pointer drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] hover:text-amber-100 transition-colors"
            >
              Tap to open the invitation
            </p>

            {guestName && (
              <p className="mt-1 text-xs text-amber-300/80 tracking-wider">
                Invited with Love for {guestName}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LetterAnimation;