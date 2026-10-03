'use client';

import React, { useRef, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onNewArrivalsClick?: () => void;
}

export default function HeroSection({
  onExploreClick,
  onNewArrivalsClick,
}: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback or muted autoplay handle
      });
    }
  }, []);

  const handleScrollDown = () => {
    const el = document.getElementById('categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[650px] overflow-hidden bg-[#0B0B0B]">
      {/* BACKGROUND VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/woman-lux/for-scrol-section-(1).webp"
        className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none"
      >
        <source src="/images/woman-lux/1.mp4" type="video/mp4" />
      </video>

      {/* SUBTLE DARK OVERLAY FOR TEXT LEGIBILITY */}
      <div className="absolute inset-0 bg-black/16 backdrop-brightness-95" />
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* HERO CONTENT OVERLAY */}
      <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-end pb-16 sm:pb-24">
        <div className="max-w-2xl mx-auto sm:space-y-6 text-center animate-fade-in-up">

          {/* SMALL LABEL */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-[white] text-[11px] font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            COLLECTION 2026
          </div>

          {/* LARGE HEADLINE */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight font-peyda tracking-normal">
            زیبایی در جزئیات است
          </h1>

          {/* SUPPORTING LINE */}
          <p className="text-sm sm:text-lg text-white/80 font-normal max-w-lg leading-relaxed">
            مجموعه‌ای برای لحظه‌هایی که ماندگار می‌شوند. ظرافت بی‌زمان، برش‌های معماری و خیاطی لوکس برای بانوی معاصر.
          </p>

          {/* DUAL CTA BUTTONS */}
          <div className="pt-2 flex justify-center flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={onExploreClick || handleScrollDown}
              className="px-6 sm:px-8 py-3.5 bg-[#111111] text-white text-xs sm:text-sm font-semibold border border-[#111111] hover:bg-white hover:text-[#111111] hover:border-white transition-all duration-300 min-w-[160px] text-center"
            >
              مشاهده مجموعه
            </button>

            <button
              onClick={onNewArrivalsClick || handleScrollDown}
              className="px-6 sm:px-8 py-3.5 bg-transparent text-white text-xs sm:text-sm font-medium border border-white/60 hover:bg-white hover:text-[#111111] hover:border-white transition-all duration-300 min-w-[160px] text-center"
            >
              خرید جدیدها
            </button>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 p-2 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
