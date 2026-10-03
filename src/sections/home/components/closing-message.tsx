'use client';

import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

interface ClosingMessageProps {
  bride: string;
  groom: string;
}

export const ClosingMessage = ({ bride, groom }: ClosingMessageProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div
      ref={ref}
      className="relative z-10 pt-16 sm:pt-20 pb-16 px-4 sm:px-6 bg-transparent"
    >
      <div className="max-w-2xl mx-auto text-center">
        {/* 1. SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 15 }}
          transition={{ duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 border border-amber-300/70 rounded-full px-4 py-1 text-xs font-semibold tracking-widest text-amber-200 uppercase shadow-sm">
            <span>🪔</span> Seeking Your Blessings <span>🪔</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mt-2.5 mb-1.5 font-bold leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
            {t('closing-message.title')}
          </h2>

          <div className="w-20 sm:w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2 rounded-full shadow-[0_0_8px_#f59e0b]"></div>
        </motion.div>

        {/* 2. COMPACT ROYAL BLESSING CARD (Positioned upward to keep Kolam visible) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.94, y: inView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-5 sm:p-7 md:p-8 shadow-[0_15px_45px_rgba(92,6,18,0.3)] border-2 border-amber-300/80 mb-5 max-w-xl mx-auto overflow-hidden text-center"
        >
          {/* Subtle Decorative Golden Corner Motifs */}
          <div className="absolute top-3 left-3 text-amber-500/40 text-sm font-serif select-none">❖</div>
          <div className="absolute top-3 right-3 text-amber-500/40 text-sm font-serif select-none">❖</div>
          <div className="absolute bottom-3 left-3 text-amber-500/40 text-sm font-serif select-none">❖</div>
          <div className="absolute bottom-3 right-3 text-amber-500/40 text-sm font-serif select-none">❖</div>

          {/* Quote Text */}
          <p className="text-xs sm:text-sm md:text-base font-serif text-gray-700 leading-relaxed mb-4 italic font-medium px-2">
            &quot;{t('closing-message.quote')}&quot;
          </p>

          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-3"></div>

          {/* With All Our Love */}
          <div className="text-[10px] sm:text-xs font-bold tracking-widest text-amber-950 uppercase opacity-80 mb-2">
            {t('closing-message.with-love')}
          </div>

          {/* 3-LINE COUPLE NAME FORMAT: GROOM -> & -> BRIDE */}
          <div className="flex flex-col items-center justify-center space-y-1 my-1">
            {/* Groom Name */}
            <div className="text-lg sm:text-2xl md:text-3xl font-serif text-rose-700 font-bold tracking-normal drop-shadow-sm leading-tight">
              {groom}
            </div>

            {/* Sacred Connector Ampersand */}
            <div className="text-sm sm:text-base text-amber-600 font-serif font-semibold">
              &
            </div>

            {/* Bride Name */}
            <div className="text-lg sm:text-2xl md:text-3xl font-serif text-rose-700 font-bold tracking-normal drop-shadow-sm leading-tight">
              {bride}
            </div>
          </div>

          {/* Akshadhai Blessing Motif Accent */}
          <div className="flex items-center justify-center gap-2 mt-4 text-amber-700/80 text-xs">
            <span>🌾</span>
            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-amber-950/70">
              With Warm Wishes & Gratitude
            </span>
            <span>🌾</span>
          </div>
        </motion.div>

        {/* 3. FLOATING BLESSING ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex justify-center space-x-4 text-xl sm:text-2xl">
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              💕
            </motion.span>
            <motion.span
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              💖
            </motion.span>
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            >
              💕
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};