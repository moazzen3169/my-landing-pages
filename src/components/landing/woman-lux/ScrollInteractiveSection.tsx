'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { SCROLL_SECTION_PRODUCTS, ScrollSectionProduct } from '@/data/woman-lux';

interface ScrollInteractiveSectionProps {
  onOpenProductDetail: (product: ScrollSectionProduct) => void;
}

export default function ScrollInteractiveSection({
  onOpenProductDetail,
}: ScrollInteractiveSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress listener for pinned section on desktop/mobile
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate scroll progress within container
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      if (currentScroll >= 0 && currentScroll <= totalScrollable) {
        const progress = currentScroll / totalScrollable;
        const newIndex = Math.min(
          SCROLL_SECTION_PRODUCTS.length - 1,
          Math.floor(progress * SCROLL_SECTION_PRODUCTS.length)
        );
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeProduct = SCROLL_SECTION_PRODUCTS[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SCROLL_SECTION_PRODUCTS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? SCROLL_SECTION_PRODUCTS.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#0B0B0B] text-white min-h-[300vh] lg:min-h-[400vh]"
    >
      {/* STICKY VIEWPORT CONTAINER */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between p-4 sm:p-6 lg:p-10 overflow-hidden">

        {/* EDITORIAL TOP BAR */}
        <div className="relative z-20 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="text-right space-y-0.5">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/50 block">
              EDITORIAL CAMPAIGN 2026
            </span>
            <p className="text-xs sm:text-sm lg:text-base font-semibold font-peyda text-white">
              روایت تعاملی — {activeProduct.categoryTitle}
            </p>
          </div>

          {/* PROGRESS INDICATOR */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-mono text-white/80 tracking-widest">
              {activeProduct.stepNumber}
            </span>
            <div className="hidden sm:flex items-center gap-1.5">
              {SCROLL_SECTION_PRODUCTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? 'w-8 bg-white'
                      : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CENTER DISPLAY WITH IMAGE FRAME & ALTERNATING TEXT PANEL */}
        <div className="relative flex-1 my-2 flex items-center justify-center px-2 sm:px-6">

          {/* SCROLL SECTION PRODUCTS STACK */}
          {SCROLL_SECTION_PRODUCTS.map((prod, idx) => {
            const isActive = idx === activeIndex;
            // Alternating side: Even indices (0, 2) => RIGHT, Odd indices (1, 3) => LEFT
            const isRight = idx % 2 === 0;

            return (
              <div
                key={prod.id}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 scale-100 rotate-0 z-10 pointer-events-auto'
                    : idx < activeIndex
                    ? 'opacity-0 scale-95 -rotate-1 z-0 pointer-events-none'
                    : 'opacity-0 scale-105 rotate-1 z-0 pointer-events-none'
                }`}
              >
                {/* CENTERED EDITORIAL IMAGE FRAME */}
                <div className="relative w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px] aspect-[3/4] max-h-[58vh] sm:max-h-[62vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10 transition-all duration-700">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                  {/* Subtle inner vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                </div>

                {/* DYNAMIC TITLE & SUMMARY TEXT BOX (ALTERNATING RIGHT / LEFT) */}
                <div
                  className={`absolute top-1/2 -translate-y-1/2 z-30 w-[85%] max-w-[260px] sm:max-w-[290px] md:max-w-[340px] p-4 sm:p-6 bg-black/75 backdrop-blur-md rounded-2xl border border-white/15 shadow-2xl transition-all duration-700 ease-out text-right ${
                    isRight
                      ? 'right-2 sm:right-6 md:right-10 lg:right-16 xl:right-28'
                      : 'left-2 sm:left-6 md:left-10 lg:left-16 xl:left-28'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/60 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">
                      {prod.stepNumber}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg lg:text-xl font-bold font-peyda text-white mb-2 leading-snug">
                    {prod.scrollTitle || prod.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-normal font-peyda text-white/85 leading-relaxed">
                    {prod.scrollSummary || prod.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* MANUAL NAVIGATION PREV / NEXT BUTTONS */}
          <div className="absolute inset-x-2 sm:inset-x-6 top-1/2 -translate-y-1/2 flex items-center justify-between z-40 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 bg-black/60 hover:bg-white hover:text-black text-white backdrop-blur-md rounded-full transition-all border border-white/10 pointer-events-auto"
              aria-label="Previous Frame"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-black/60 hover:bg-white hover:text-black text-white backdrop-blur-md rounded-full transition-all border border-white/10 pointer-events-auto"
              aria-label="Next Frame"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* EDITORIAL BOTTOM INFO BAR & CTA */}
        <div className="relative z-20 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right space-y-0.5">
            <h3 className="text-base sm:text-lg lg:text-xl font-bold font-peyda text-white">
              {activeProduct.name}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-white/70">
              {activeProduct.formattedPrice}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenProductDetail(activeProduct)}
              className="px-6 py-3 bg-white text-[#111111] hover:bg-neutral-200 text-xs font-semibold rounded-lg flex items-center gap-2 transition-all duration-300 shadow-md"
            >
              <span>مشاهده جزئیات محصول</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
