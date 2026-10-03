'use client';

import { motion } from 'motion/react';
import {
  formatWeddingTime,
  generateGoogleCalendarLink,
  generateMapLink,
} from '@/lib/wedding-utils';
import type { WeddingConfigType } from '@/types';
import { useTranslation } from 'react-i18next';

interface WeddingDetailsCardProps {
  date: Date;
  venue: WeddingConfigType['venue'];
}

export const WeddingDetailsCard = ({
  date,
  venue,
}: WeddingDetailsCardProps) => {
  const { t } = useTranslation('home');

  const calendarEvent = {
    title: t('details.our-wedding-day'),
    start: date,
    end: new Date(date.getTime() + 5 * 60 * 60 * 1000),
    description: t('details.join-us'),
    location: venue.ceremony.address,
  };

  return (
    <div className="relative z-10 w-full max-w-5xl mx-auto my-8">
      {/* 1. UNIFIED FROSTED TEMPLE MANDAP CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/90 backdrop-blur-xl rounded-3xl sm:rounded-[2.5rem] shadow-[0_20px_60px_rgba(92,6,18,0.32)] border-2 border-amber-300/80 p-6 sm:p-10 md:p-12 overflow-hidden"
      >
        {/* Decorative Golden Corner Motifs */}
        <div className="absolute top-4 left-4 text-amber-500/40 text-xl font-serif select-none">❖</div>
        <div className="absolute top-4 right-4 text-amber-500/40 text-xl font-serif select-none">❖</div>
        <div className="absolute bottom-4 left-4 text-amber-500/40 text-xl font-serif select-none">❖</div>
        <div className="absolute bottom-4 right-4 text-amber-500/40 text-xl font-serif select-none">❖</div>

        {/* 2. SECTION HEADER */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 border border-amber-300/70 rounded-full px-5 py-1.5 text-xs sm:text-sm font-semibold tracking-widest text-amber-950 uppercase shadow-sm">
            <span>🪔</span> Auspicious Muhurtham <span>🪔</span>
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-gray-900 mt-4 mb-3 font-bold leading-tight">
            Wedding{' '}
            <span className="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent">
              Details
            </span>
          </h2>

          <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mt-2 rounded-full"></div>

          <p className="text-base sm:text-lg text-amber-950/80 font-medium mt-4 max-w-xl mx-auto leading-relaxed">
            {t('details.join-us-text')}
          </p>
        </div>

        {/* 3. INTERACTIVE CALENDAR TILES */}
        <div className="bg-gradient-to-br from-amber-50/70 via-white/80 to-rose-50/60 rounded-3xl p-6 sm:p-8 border border-amber-200/70 shadow-inner mb-10">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-900/70">
              Save The Sacred Date
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto mb-6">
            {/* Day Badge */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gradient-to-br from-red-600 to-rose-700 text-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-amber-200/40 text-center flex flex-col items-center justify-center min-h-[110px]"
            >
              <div className="text-4xl sm:text-5xl font-bold leading-none drop-shadow-sm font-serif">
                {date.getDate()}
              </div>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-2 opacity-90">
                {t('details.day')}
              </p>
            </motion.div>

            {/* Month & Year Badge */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gradient-to-br from-amber-500 to-orange-600 text-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-amber-200/40 text-center flex flex-col items-center justify-center min-h-[110px]"
            >
              <div className="text-2xl sm:text-3xl font-bold leading-none mb-1 font-serif drop-shadow-sm">
                {date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()}
              </div>
              <div className="text-sm font-semibold opacity-95">
                {date.getFullYear()}
              </div>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-1 opacity-90">
                {t('details.month')} & Year
              </p>
            </motion.div>

            {/* Time Badge */}
            <motion.div
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-2xl p-4 sm:p-6 shadow-lg border-2 border-emerald-200/40 text-center flex flex-col items-center justify-center min-h-[110px]"
            >
              <div className="text-xl sm:text-2xl font-bold leading-none font-serif drop-shadow-sm">
                {formatWeddingTime(date, 'en-US')}
              </div>
              <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider mt-2 opacity-90">
                Muhurtham Time
              </p>
            </motion.div>
          </div>

          {/* Weekday Banner */}
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-amber-200/60 max-w-lg mx-auto shadow-sm">
            <p className="text-lg sm:text-xl font-serif font-bold text-gray-900">
              🗓️ {date.toLocaleDateString('en-US', { weekday: 'long' })}, {date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-xs text-rose-600 font-semibold mt-1">
              {t('details.mark-calendar')}
            </p>
          </div>

          {/* Add to Calendar Button */}
          <div className="text-center mt-6">
            <motion.a
              href={generateGoogleCalendarLink(calendarEvent)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 25px rgba(185,28,28,0.3)' }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white px-7 py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:brightness-110 transition-all cursor-pointer border border-amber-200/50"
            >
              <span>📅</span>
              <span>{t('details.add-to-calendar')}</span>
              <span>→</span>
            </motion.a>
          </div>
        </div>

        {/* 4. CEREMONY & RECEPTION VENUES */}
        {/* 4. ENGAGEMENT & CEREMONY VENUES (SWAPPED ORDER) */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* 1. Engagement Card (First) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-rose-200/70 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-2xl border border-rose-300">
                  💍
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                    Engagement
                  </h3>
                  <p className="text-xs text-rose-700 font-semibold uppercase tracking-wider">
                    Celebrations
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-bold text-gray-800 text-base sm:text-lg">
                  {venue.reception.name}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {venue.reception.address}
                </p>
                <div className="inline-block bg-rose-50 px-3 py-1 rounded-lg border border-rose-200 text-xs font-semibold text-rose-900 mt-2">
                  ⏰ {venue.reception.time}
                </div>
              </div>
            </div>

          <motion.a
            href="https://www.google.com/maps?q=loc:9.1464082,77.8549944+(Shri+Ayyanar+Kovil)"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all cursor-pointer block"
          >
            📍 {t('details.get-directions')}
          </motion.a>
          </motion.div>

          {/* 2. Ceremony Card (Next) */}
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-white/95 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-amber-200/70 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-2xl border border-amber-300">
                  🛕
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900">
                    {t('details.ceremony')}
                  </h3>
                  <p className="text-xs text-amber-800 font-semibold uppercase tracking-wider">
                    Sacred Rites
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <h4 className="font-bold text-gray-800 text-base sm:text-lg">
                  {venue.ceremony.name}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {venue.ceremony.address}
                </p>
                <div className="inline-block bg-amber-50 px-3 py-1 rounded-lg border border-amber-200 text-xs font-semibold text-amber-900 mt-2">
                  ⏰ {venue.ceremony.time}
                </div>
              </div>
            </div>

            <motion.a
              href="https://www.google.com/maps?q=loc:9.0331212,77.3365681+(Yadava+Community+Hall)"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-xs sm:text-sm shadow-md hover:brightness-105 transition-all cursor-pointer block"
            >
              📍 {t('details.get-directions')}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};