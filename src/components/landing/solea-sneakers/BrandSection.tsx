'use client';

import React from 'react';
import { SOLEA_BRANDS } from '@/data/solea-sneakers';

export default function BrandSection() {
  const marqueeBrands = [...SOLEA_BRANDS, ...SOLEA_BRANDS];

  return (
    <section className="py-12 bg-[#E8E8E5] border-b border-[#D9D9D5] overflow-hidden font-peyda relative" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 text-center mb-6">
        <span className="text-xs font-mono font-bold tracking-widest text-[#6B6B68] uppercase">
          CURATED HOUSE OF BRANDS
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-[#0A0A0A] mt-1">
          برندهای منتخب جهان در SOLEA
        </h3>
      </div>

      {/* CONTINUOUS MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden group py-2">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#E8E8E5] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#E8E8E5] to-transparent z-10" />

        <div className="animate-marquee flex items-center">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 sm:gap-6 px-6 sm:px-10 text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-wider text-[#0A0A0A]/40 hover:text-[#0A0A0A] transition-colors duration-300 cursor-pointer shrink-0 group/item"
            >
              <span className="group-hover/item:text-[#0A0A0A]">{brand.name}</span>
              <span className="text-xs font-mono font-medium text-[#6B6B68]">
                EST. {brand.established}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#D9D9D5] mr-6 sm:mr-10"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
