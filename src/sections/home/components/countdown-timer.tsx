'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

interface CountdownTimerProps {
  targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: CountdownTimerProps) => {
  const { t } = useTranslation('home');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // South Indian Auspicious Festive Gradients: Kumkum Red, Turmeric Amber, Sacred Saffron, and Kili Green
  const timeUnits = [
    {
      label: t('details.day'),
      value: timeLeft.days,
      gradient: 'from-red-600 via-rose-600 to-amber-600',
      badgeBg: 'bg-red-50 text-red-700 border-red-200',
      accentGlow: 'rgba(220,38,38,0.3)',
    },
    {
      label: t('details.hours'),
      value: timeLeft.hours,
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      accentGlow: 'rgba(245,158,11,0.3)',
    },
    {
      label: t('details.minutes'),
      value: timeLeft.minutes,
      gradient: 'from-orange-600 via-amber-600 to-yellow-600',
      badgeBg: 'bg-orange-50 text-orange-800 border-orange-200',
      accentGlow: 'rgba(234,88,12,0.3)',
    },
    {
      label: t('details.seconds'),
      value: timeLeft.seconds,
      gradient: 'from-emerald-600 via-teal-600 to-emerald-700',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      accentGlow: 'rgba(5,150,105,0.3)',
    },
  ];

  return (
    <div ref={ref} className="relative z-10 w-full max-w-5xl mx-auto my-8 px-2 sm:px-4">
      {/* 1. UNIFIED FROSTED TEMPLE MANDAP CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/90 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-[0_20px_60px_rgba(92,6,18,0.32)] border-2 border-amber-300/80 p-6 sm:p-10 md:p-12 text-center overflow-hidden"
      >
        {/* Subtle Decorative Golden Corner Motifs */}
        <div className="absolute top-4 left-4 text-amber-500/40 text-xl font-serif select-none">❖</div>
        <div className="absolute top-4 right-4 text-amber-500/40 text-xl font-serif select-none">❖</div>
        <div className="absolute bottom-4 left-4 text-amber-500/40 text-xl font-serif select-none">❖</div>
        <div className="absolute bottom-4 right-4 text-amber-500/40 text-xl font-serif select-none">❖</div>

        {/* 2. SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 sm:mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-300/70 rounded-full px-5 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-amber-950 uppercase shadow-sm">
            <span>⏳</span> Subhamurtha Velai <span>⏳</span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 mt-4 mb-3 font-bold leading-tight">
            Counting Down{' '}
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              to Forever
            </span>
          </h2>

          <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-2 rounded-full"></div>

          <p className="text-base sm:text-lg text-amber-950/80 font-medium mt-4 max-w-xl mx-auto leading-relaxed">
            {t('details.countdown-subtitle')}
          </p>
        </motion.div>

        {/* 3. INTERACTIVE COUNTDOWN TILES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.85, y: 35 }}
              animate={{
                opacity: inView ? 1 : 0,
                scale: inView ? 1 : 0.85,
                y: inView ? 0 : 35,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1 + 0.2,
                type: 'spring',
                stiffness: 120,
              }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="relative group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-white via-amber-50/40 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg border-2 border-amber-200/70 group-hover:border-amber-400 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center">
                {/* Subtle Hover Backdrop Sheen */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                {/* Counter Metric */}
                <div className="relative z-10">
                  <motion.div
                    key={unit.value}
                    initial={{ scale: 1.15, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif bg-gradient-to-r ${unit.gradient} bg-clip-text text-transparent mb-1 leading-none tracking-tight drop-shadow-sm`}
                  >
                    {unit.value.toString().padStart(2, '0')}
                  </motion.div>

                  <span className={`inline-block text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border mt-2 ${unit.badgeBg}`}>
                    {unit.label}
                  </span>
                </div>

                {/* Decorative Filigree Corner Accent */}
                <div className="absolute top-2 right-2 text-amber-400/40 text-xs select-none">
                  ✦
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. TIME REMAINING VOWS PILL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/15 via-white to-rose-500/15 backdrop-blur-md rounded-full px-6 sm:px-8 py-3 shadow-md border border-amber-300/80">
            <span className="text-xl sm:text-2xl animate-pulse">💖</span>
            <p className="text-gray-900 font-serif font-bold text-sm sm:text-base md:text-lg">
              {timeLeft.days > 0
                ? `${timeLeft.days} ${t('details.days-until')}`
                : timeLeft.hours > 0
                ? `${timeLeft.hours} ${t('details.hours-until')}`
                : timeLeft.minutes > 0
                ? `${timeLeft.minutes} ${t('details.minutes-until')}`
                : t('details.moment-arrived')}
            </p>
            <span className="text-xl sm:text-2xl animate-pulse">💖</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};