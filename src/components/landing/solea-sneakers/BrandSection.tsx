'use client';

import React from 'react';
import { SOLEA_BRANDS } from '@/data/solea-sneakers';

export default function BrandSection() {
  const marqueeBrands = [...SOLEA_BRANDS, ...SOLEA_BRANDS];

  return (
    <section className="py-16 bg-[#F8F8F6] border-b border-neutral-200 overflow-hidden font-peyda relative" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 text-center mb-8">
        <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
          OFFICIAL SPORT BRANDS
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-black mt-1">
          مجموعه برندهای معتبر جهانی
        </h3>
      </div>

      {/* CONTINUOUS MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden group py-2">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#F8F8F6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#F8F8F6] to-transparent z-10" />

        <div className="animate-marquee flex items-center">
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 sm:gap-6 px-6 sm:px-10 text-2xl sm:text-3xl md:text-4xl font-black font-mono tracking-wider text-black/40 hover:text-black transition-colors duration-300 cursor-pointer shrink-0 group/item"
            >
              <span className="group-hover/item:text-black">{brand.name}</span>
              <span className="text-xs font-mono font-medium text-neutral-400">
                EST. {brand.established}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 mr-6 sm:mr-10"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
