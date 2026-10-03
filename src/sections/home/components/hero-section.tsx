'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface HeroSectionProps {
  isLoaded: boolean;
  couple: WeddingConfigType;
  onScrollToSection: (sectionId: string) => void;
}

export const HeroSection = ({
  isLoaded,
  couple,
  onScrollToSection,
}: HeroSectionProps) => {
  const { t } = useTranslation('home');

  return (
    <div className="h-screen w-full relative flex flex-col justify-between items-center px-4 sm:px-6 pt-20 pb-4 overflow-hidden">
      {/* 1. SCREEN-FITTED MANDAP CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.94, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-3xl sm:max-w-4xl bg-white/85 backdrop-blur-xl rounded-3xl shadow-[0_15px_50px_rgba(92,6,18,0.35)] border-2 border-amber-300/80 px-6 py-6 sm:px-10 sm:py-8 text-center my-auto flex flex-col justify-center items-center"
      >
        {/* Subtle Decorative Golden Corner Motifs */}
        <div className="absolute top-3 left-3 text-amber-500/40 text-base sm:text-xl font-serif select-none">❖</div>
        <div className="absolute top-3 right-3 text-amber-500/40 text-base sm:text-xl font-serif select-none">❖</div>
        <div className="absolute bottom-3 left-3 text-amber-500/40 text-base sm:text-xl font-serif select-none">❖</div>
        <div className="absolute bottom-3 right-3 text-amber-500/40 text-base sm:text-xl font-serif select-none">❖</div>

        {/* 2. WELCOME BADGE & TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-3 sm:mb-4"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-300 rounded-full px-4 py-1 text-[11px] sm:text-xs font-semibold tracking-widest text-amber-950 uppercase shadow-sm">
            <span>✨</span> {t('hero.welcome')} <span>✨</span>
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-900 mt-2 sm:mt-3 mb-1 leading-tight tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent font-bold drop-shadow-sm">
              Wedding
            </span>
          </h1>

          <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-2"></div>
        </motion.div>

        {/* 3. PROPORTIONAL COUPLE STAGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-row items-center justify-center gap-4 sm:gap-10 md:gap-14 my-3 sm:my-5"
        >
          {/* Bride Avatar */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-amber-300 p-1 sm:p-1.5 shadow-xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl border-2 sm:border-3 border-white shadow-inner">
                  👸
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs sm:text-sm shadow-md border-2 border-white">
                👸
              </div>
            </div>
            <h3 className="mt-2 text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
              {couple.bride.name}
            </h3>
            <span className="text-[10px] sm:text-xs text-rose-600 font-bold tracking-widest uppercase">
              Bride
            </span>
          </motion.div>

          {/* Central Knot */}
          <div className="flex flex-col items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500/15 border border-amber-300 flex items-center justify-center text-xl sm:text-2xl shadow-md"
            >
              💖
            </motion.div>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-amber-900/70 font-bold mt-1">
              Vows
            </span>
          </div>

          {/* Groom Avatar */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="flex flex-col items-center cursor-pointer group"
          >
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-amber-400 via-orange-400 to-amber-300 p-1 sm:p-1.5 shadow-xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl border-2 sm:border-3 border-white shadow-inner">
                  🤵🏻
                </div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs sm:text-sm shadow-md border-2 border-white">
                🤴
              </div>
            </div>
            <h3 className="mt-2 text-base sm:text-xl md:text-2xl font-serif font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
              {couple.groom.name}
            </h3>
            <span className="text-[10px] sm:text-xs text-amber-800 font-bold tracking-widest uppercase">
              Groom
            </span>
          </motion.div>
        </motion.div>

        {/* 4. CTA BUTTON (Fully visible on screen) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-3 sm:mt-4"
        >
          <motion.button
            onClick={() => onScrollToSection('details')}
            whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(180,83,9,0.35)' }}
            whileTap={{ scale: 0.96 }}
            className="bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 text-white font-semibold px-6 py-2.5 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base shadow-lg hover:brightness-110 transition-all cursor-pointer border border-amber-200/50"
          >
            {t('hero.view-details')} →
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 5. SCROLL DOWN INDICATOR */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="text-amber-200/90 text-center cursor-pointer font-medium z-10 mb-2 flex-shrink-0"
        onClick={() => onScrollToSection('couple')}
      >
        <div className="text-[10px] sm:text-xs font-bold tracking-widest uppercase drop-shadow-sm">
          {t('hero.scroll-down')}
        </div>
        <div className="text-base sm:text-lg font-bold">⌄</div>
      </motion.div>
    </div>
  );
};