'use client';

import type { WeddingConfigType } from '@/types';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface CoupleIntroductionProps {
  bride: WeddingConfigType['bride'];
  groom: WeddingConfigType['groom'];
  isVisible?: boolean;
}

export const CoupleIntroduction = ({
  bride,
  groom,
}: CoupleIntroductionProps) => {
  const { t } = useTranslation('home');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 bg-transparent">
      <div ref={ref} className="relative z-10 max-w-6xl mx-auto">
        {/* 1. SECTION HEADER (High-Contrast White & Gold) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 25 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-amber-500/20 border border-amber-300/70 rounded-full px-5 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-amber-200 uppercase shadow-sm">
            <span>✨</span> Sacred Union <span>✨</span>
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mt-4 mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
            {' '}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent font-bold">
              {t('couple.our-story')}
            </span>
          </h2>

          <div className="w-28 sm:w-36 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-2 rounded-full shadow-[0_0_8px_#f59e0b]"></div>

          <p className="text-base sm:text-lg md:text-xl text-amber-100 font-medium mt-5 max-w-2xl mx-auto leading-relaxed drop-shadow-sm px-2">
            {t('couple.story-text')}
          </p>
        </motion.div>

        {/* 2. COUPLE INTERACTIVE STAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 relative items-stretch">
          {/* BRIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -6, boxShadow: '0 25px 60px rgba(185,28,28,0.3)' }}
            className="group relative bg-white/90 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl border-2 border-amber-300/70 p-6 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300"
          >
            {/* Corner Filigrees */}
            <div className="absolute top-3 left-3 text-amber-500/40 text-lg font-serif">❖</div>
            <div className="absolute top-3 right-3 text-amber-500/40 text-lg font-serif">❖</div>

            <div>
              {/* Photo Frame Stage */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 mb-6">
                {/* Glowing Outer Halo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-amber-300 p-1.5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-rose-50">
                    <Image
                      src={bride.photo}
                      alt={`${bride.fullName}'s photo`}
                      width={280}
                      height={280}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Role Badge */}
                <div className="absolute bottom-1 right-2 w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-lg sm:text-xl">
                  👸
                </div>
              </div>

              {/* Bride Details */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 group-hover:text-rose-600 transition-colors">
                  {bride.fullName}
                </h3>
                <span className="inline-block text-xs sm:text-sm text-rose-600 font-bold tracking-widest uppercase mt-1 mb-4">
                  {t('couple.the-bride')}
                </span>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                  {t('couple.bride-description')}
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mt-6"></div>
          </motion.div>

          {/* CENTRAL INTERACTIVE KNOT (DESKTOP) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.18, 1], rotate: [0, 4, -4, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-16 h-16 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border-2 border-amber-300"
            >
              <span className="text-2xl animate-pulse">💖</span>
            </motion.div>
          </div>

          {/* CENTRAL INTERACTIVE KNOT (MOBILE) */}
          <div className="lg:hidden flex justify-center -my-3 z-20">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-12 h-12 bg-white/95 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border-2 border-amber-300"
            >
              <span className="text-xl">💖</span>
            </motion.div>
          </div>

          {/* GROOM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -6, boxShadow: '0 25px 60px rgba(180,83,9,0.3)' }}
            className="group relative bg-white/90 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-2xl border-2 border-amber-300/70 p-6 sm:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300"
          >
            {/* Corner Filigrees */}
            <div className="absolute top-3 left-3 text-amber-500/40 text-lg font-serif">❖</div>
            <div className="absolute top-3 right-3 text-amber-500/40 text-lg font-serif">❖</div>

            <div>
              {/* Photo Frame Stage */}
              <div className="relative mx-auto w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-amber-300 p-1.5 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-amber-50">
                    <Image
                      src={groom.photo}
                      alt={`${groom.fullName}'s photo`}
                      width={280}
                      height={280}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="absolute bottom-1 right-2 w-11 h-11 sm:w-13 sm:h-13 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white text-lg sm:text-xl">
                  🤴
                </div>
              </div>

              {/* Groom Details */}
              <div className="text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                  {groom.fullName}
                </h3>
                <span className="inline-block text-xs sm:text-sm text-amber-800 font-bold tracking-widest uppercase mt-1 mb-4">
                  {t('couple.the-groom')}
                </span>
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-md mx-auto">
                  {t('couple.groom-description')}
                </p>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-6"></div>
          </motion.div>
        </div>

        {/* 3. SACRED QUOTE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-white/85 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 max-w-2xl mx-auto shadow-2xl border-2 border-amber-300/60">
            <p className="text-lg sm:text-2xl font-serif text-gray-800 italic mb-4 leading-relaxed">
              &quot;{t('couple.love-quote')}&quot;
            </p>
            <div className="w-16 h-0.5 bg-amber-400 mx-auto mb-3"></div>
            <p className="text-amber-800 font-bold text-xs sm:text-sm tracking-widest uppercase">
                       — Hami
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};