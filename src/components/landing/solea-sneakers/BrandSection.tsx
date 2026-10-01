'use client';

import React from 'react';
import { SOLEA_BRANDS } from '@/data/solea-sneakers';

export default function BrandSection() {
  // Duplicate array for infinite ticker loop
  const marqueeBrands = [...SOLEA_BRANDS, ...SOLEA_BRANDS, ...SOLEA_BRANDS];

  return (
    <section className="py-8 bg-[#F4F5F2] border-y border-[#111111]/[0.08] overflow-hidden font-peyda" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 text-center mb-8">
        <span className="text-xs font-mono font-extrabold tracking-[0.2em] text-[#6B6B68] uppercase">
          CURATED HOUSE OF BRANDS
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-[#111111] mt-1">
          برندهایی که انتخاب کرده‌ایم
        </h3>
      </div>

      {/* CONTINUOUS MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden group">
        <div className="flex items-center gap-12 sm:gap-16 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] py-2">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 text-2xl sm:text-3xl font-black font-mono tracking-widest text-[#111111]/40 hover:text-[#111111] transition-colors duration-300 cursor-pointer shrink-0"
            >
              <span>{brand.name}</span>
              <span className="text-xs font-mono font-normal text-[#A89B84] text-[10px]">
                ({brand.established})
              </span>
              <span className="w-2 h-2 rounded-full bg-[#111111]/20 ml-8"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
