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

  // Scroll Progress listener for pinned section on desktop
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
      className="relative w-full bg-[#ffffff] text-white min-h-[300vh] lg:min-h-[400vh]"
    >
      {/* STICKY VIEWPORT CONTAINER */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between  overflow-hidden">

        {/* EDITORIAL TOP BAR */}
        <div className="relative z-20 flex items-center justify-between b">
          <div className="text-right">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/50">
              EDITORIAL CAMPAIGN 2026
            </span>
            <p className="text-sm sm:text-base font-semibold font-peyda text-white">
              روایت تعاملی — {activeProduct.categoryTitle}
            </p>
          </div>

          {/* PROGRESS INDICATOR */}
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-mono text-white/80 tracking-widest">
              {activeProduct.stepNumber}
            </span>
            <div className="hidden sm:flex items-center gap-1">
              {SCROLL_SECTION_PRODUCTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CENTER IMAGE DISPLAY WITH IMMERSIVE TRANSITIONS */}
        <div className="relative flex-1 my-1 flex items-center justify-center">



          {/* MAIN CENTERED EDITORIAL FRAME */}
          <div className="relative w-full max-w-md  aspect-[1/6] max-h-[100vh]  overflow-hidden  transition-all duration-700">
            {SCROLL_SECTION_PRODUCTS.map((prod, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={prod.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive
                      ? 'opacity-100 scale-100 rotate-0 z-10 pointer-events-auto'
                      : idx < activeIndex
                      ? 'opacity-0 scale-95 -rotate-2 z-0 pointer-events-none'
                      : 'opacity-0 scale-105 rotate-2 z-0 pointer-events-none'
                  }`}
                >
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 50vw"
                    className="object-cover object-center"
                    priority={idx === 0}
                  />

                  {/* SUBTLE INNER VIGNETTE */}
                  <div className="absolute inset-0  pointer-events-none" />
                </div>
              );
            })}
          </div>

          {/* MANUAL PREV/NEXT CONTROLS FOR DIRECT NAVIGATION */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-2 sm:px-6 z-20 pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-3 bg-black/50 hover:bg-white hover:text-black text-white backdrop-blur-md rounded-full transition-all pointer-events-auto"
              aria-label="Previous Frame"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-black/50 hover:bg-white hover:text-black text-white backdrop-blur-md rounded-full transition-all pointer-events-auto"
              aria-label="Next Frame"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* EDITORIAL BOTTOM INFO BAR & CTA */}
        <div className="relative z-20 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-right space-y-1">
            <h3 className="text-lg sm:text-xl font-bold font-peyda text-white">
              {activeProduct.name}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-white/70">
              {activeProduct.formattedPrice}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenProductDetail(activeProduct)}
              className="px-6 py-3 bg-white text-[#111111] hover:bg-neutral-200 text-xs font-semibold flex items-center gap-2 transition-all duration-300"
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
