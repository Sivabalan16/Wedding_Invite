'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useScrollSpy } from '@/hooks/use-scroll-spy';
import { LetterAnimation } from '@/components';
import { HeroBackgroundFX } from '../components/hero-background-fx';
import {
  HeroSection,
  CoupleIntroduction,
  WeddingDetailsCard,
  CountdownTimer,
  VenueInformation,
  EventSchedule,
  RSVP,
  GalleryPreview,
  ClosingMessage,
  FloatingNavigation,
  NavigationFAB,
  MusicPlayer,
  ScrollProgressIndicator,
} from '../components';
import { NAVIGATION_SECTIONS, WEDDING_CONFIG } from '@/constants';

// ==========================================
// 🛠️ AVATAR CUSTOMIZATION SETTINGS
// Edit this object easily anytime!
// ==========================================
const AVATAR_SETTINGS = {
  show: true, // Toggle true / false to display or hide
  imageSrc: '/avatar.png', // Image in /public folder (e.g., public/avatar.PNG)
  altText: 'Created with Love',
  name: 'Created by Sivabalan T', // Name shown on hover
  tooltip: 'With Best Wishes 💖', // Small subtitle/greeting
  link: 'https://www.instagram.com/_.siva_._16._?stkn=NW04NXZkNnhlbGc2', // Optional: Add a link (e.g. 'https://instagram.com/yourhandle') or leave ''
  size: 50, // Avatar size in pixels
};

export default function HomeView() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLetter, setShowLetter] = useState(true);

  // Auto-detect active section using scroll spy
  const activeSection = useScrollSpy(
    NAVIGATION_SECTIONS.map((section) => section.id)
  );

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleLetterOpen = () => {
    setShowLetter(false);
    setTimeout(() => setIsLoaded(true), 300);
  };

  // Show letter animation first
  if (showLetter) {
    return (
      <LetterAnimation
        onOpen={handleLetterOpen}
        coupleName={`${WEDDING_CONFIG.bride.name} & ${WEDDING_CONFIG.groom.name}`}
      />
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-amber-500 selection:text-white">
      {/* 1. STATIC FIXED MASTER BACKGROUND (Locks to screen; cards slide over it) */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <HeroBackgroundFX />
      </div>

      {/* 2. Top Floating Navigation */}
      <FloatingNavigation
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
      />

      {/* 3. SCROLLING CARDS CONTAINER (Scrolls upward seamlessly) */}
      <main className="relative z-10 flex flex-col transform-gpu will-change-transform">
        {/* Hero Section */}
        <section id="hero" className="relative w-full">
          <HeroSection
            isLoaded={isLoaded}
            couple={WEDDING_CONFIG}
            onScrollToSection={scrollToSection}
          />
        </section>

        {/* Couple Introduction */}
        <section id="couple" className="relative w-full">
          <CoupleIntroduction
            bride={WEDDING_CONFIG.bride}
            groom={WEDDING_CONFIG.groom}
            isVisible={isLoaded}
          />
        </section>

        {/* Wedding Details */}
        <section id="details" className="relative w-full py-12 px-4 max-w-5xl mx-auto">
          <WeddingDetailsCard
            date={WEDDING_CONFIG.date}
            venue={WEDDING_CONFIG.venue}
          />
          <CountdownTimer targetDate={WEDDING_CONFIG.date} />
        </section>

        {/* Closing Message */}
        <section id="closing" className="relative w-full">
          <ClosingMessage
            bride={WEDDING_CONFIG.bride.fullName}
            groom={WEDDING_CONFIG.groom.fullName}
          />
        </section>
      </main>

      {/* 4. CUSTOM FLOATING BOTTOM-LEFT AVATAR BADGE */}
      {AVATAR_SETTINGS.show && (
        <aside
          aria-label="Creator badge"
          className="fixed bottom-4 left-4 z-40 flex items-center group select-none"
        >
          {/* Main Avatar Link / Container */}
          <a
            href={AVATAR_SETTINGS.link || '#'}
            target={AVATAR_SETTINGS.link ? '_blank' : '_self'}
            rel="noopener noreferrer"
            className="relative flex items-center cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
          >
            {/* Glowing Golden Silk Outer Ring */}
            <div className="relative p-0.5 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-amber-300 shadow-[0_4px_16px_rgba(245,158,11,0.4)]">
              <div
                style={{ width: AVATAR_SETTINGS.size, height: AVATAR_SETTINGS.size }}
                className="relative rounded-full overflow-hidden border-2 border-white bg-amber-950 flex items-center justify-center"
              >
                <Image
                  src={AVATAR_SETTINGS.imageSrc}
                  alt={AVATAR_SETTINGS.altText}
                  width={AVATAR_SETTINGS.size}
                  height={AVATAR_SETTINGS.size}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Hover Tooltip Card */}
            <div className="absolute left-full ml-3 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-amber-300/80 text-left whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
              <p className="text-xs font-bold text-gray-900 leading-tight">
                {AVATAR_SETTINGS.name}
              </p>
              <p className="text-[10px] text-rose-600 font-semibold leading-tight">
                {AVATAR_SETTINGS.tooltip}
              </p>
            </div>
          </a>
        </aside>
      )}

      {/* 5. Floating Controls */}
      <MusicPlayer />
      <NavigationFAB
        activeSection={activeSection}
        onScrollToSection={scrollToSection}
      />
      <ScrollProgressIndicator activeSection={activeSection} />
    </div>
  );
}