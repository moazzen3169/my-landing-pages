'use client';

import React from 'react';
import { SOLEA_BRANDS } from '@/data/solea-sneakers';

export default function BrandSection() {
  // We duplicate SOLEA_BRANDS twice to create two identical halves for a 100% seamless marquee loop (-50%)
  const marqueeBrands = [...SOLEA_BRANDS, ...SOLEA_BRANDS];

  return (
    <section className="py-10 bg-[#F1F5F9] border-y border-[#CBD5E1]/60 overflow-hidden font-peyda relative" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 text-center mb-6">
        <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#8FA9C4] uppercase">
          CURATED HOUSE OF BRANDS
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] mt-1">
          برندهای منتخب جهان
        </h3>
      </div>

      {/* CONTINUOUS MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden group py-3">
        {/* EDGE FADE MASK OVERLAYS */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#F1F5F9] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#F1F5F9] to-transparent z-10" />

        <div className="animate-marquee flex items-center">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 px-6 sm:px-8 text-2xl sm:text-3xl md:text-4xl font-bold font-mono tracking-widest text-[#0B1220]/40 hover:text-[#0B1220] transition-colors duration-300 cursor-pointer shrink-0 group/item"
            >
              <span className="group-hover/item:text-[#0B1220]">{brand.name}</span>
              <span className="text-xs font-mono font-medium text-[#8FA9C4] text-[10px] sm:text-xs">
                ({brand.established})
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] mr-4 sm:mr-6"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
