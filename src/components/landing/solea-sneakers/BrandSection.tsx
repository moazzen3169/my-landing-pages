'use client';

import React from 'react';
import { SOLEA_BRANDS } from '@/data/solea-sneakers';

export default function BrandSection() {
  const marqueeBrands = [...SOLEA_BRANDS, ...SOLEA_BRANDS, ...SOLEA_BRANDS];

  return (
    <section className="py-8 bg-[#F1F5F9] border-y border-[#CBD5E1]/60 overflow-hidden font-peyda" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 text-center mb-6">
        <span className="text-xs font-mono font-semibold tracking-[0.2em] text-[#8FA9C4] uppercase">
          CURATED HOUSE OF BRANDS
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-[#0B1220] mt-1">
          برندهای منتخب جهان
        </h3>
      </div>

      {/* CONTINUOUS MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] py-2">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-2xl sm:text-3xl font-bold font-mono tracking-widest text-[#0B1220]/40 hover:text-[#0B1220] transition-colors duration-300 cursor-pointer shrink-0"
            >
              <span>{brand.name}</span>
              <span className="text-xs font-mono font-medium text-[#8FA9C4] text-[10px]">
                ({brand.established})
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] ml-8"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
