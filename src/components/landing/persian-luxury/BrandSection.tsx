'use client';

import React from 'react';
import { LUXURY_BRANDS } from '@/data/persian-luxury-women';

interface BrandSectionProps {
  onSelectBrand?: (brandName: string) => void;
}

export default function BrandSection({ onSelectBrand }: BrandSectionProps) {
  // Split brands into two equal rows
  const halfLength = Math.ceil(LUXURY_BRANDS.length / 2);
  const row1Brands = LUXURY_BRANDS.slice(0, halfLength);
  const row2Brands = LUXURY_BRANDS.slice(halfLength);

  // 4x duplication to guarantee full width coverage on all screens and seamless looping
  const row1Items = [...row1Brands, ...row1Brands, ...row1Brands, ...row1Brands];
  const row2Items = [...row2Brands, ...row2Brands, ...row2Brands, ...row2Brands];

  return (
    <section id="brands" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-b border-[#E5E5E5] font-peyda overflow-hidden">
      {/* SECTION HEADER */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 mb-12 text-center">
        <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
          CURATED HOUSES
        </span>
        <h2 className="text-2xl sm:text-3xl font-light text-[#000000] tracking-normal">
          برندهای منتخب
        </h2>
      </div>

      {/* 2-ROW INFINITE CAROUSEL CONTAINER */}
      <div className="relative w-full overflow-hidden select-none space-y-4">
        {/* GRADIENT FADE EDGES */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* ROW 1 - MARQUEE SLOWLY TO RIGHT */}
        <div className="relative w-full flex overflow-hidden py-1" dir="ltr">
          <div className="flex shrink-0 gap-4 animate-brand-marquee-right hover:[animation-play-state:paused]">
            {row1Items.map((brand, idx) => (
              <button
                key={`r1-${brand.id}-${idx}`}
                onClick={() => onSelectBrand?.(brand.name)}
                className="w-48 sm:w-60 h-20 sm:h-24 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#000000] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col items-center justify-center px-4 shrink-0 group/card cursor-pointer rounded-none"
              >
                <span className="text-sm sm:text-base font-normal tracking-widest text-[#111111] group-hover/card:text-[#000000] uppercase font-sans text-center transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-[#888888] font-peyda mt-1">
                  {brand.persianName}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ROW 2 - MARQUEE SLOWLY TO LEFT */}
        <div className="relative w-full flex overflow-hidden py-1" dir="ltr">
          <div className="flex shrink-0 gap-4 animate-brand-marquee-left hover:[animation-play-state:paused]">
            {row2Items.map((brand, idx) => (
              <button
                key={`r2-${brand.id}-${idx}`}
                onClick={() => onSelectBrand?.(brand.name)}
                className="w-48 sm:w-60 h-20 sm:h-24 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#000000] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col items-center justify-center px-4 shrink-0 group/card cursor-pointer rounded-none"
              >
                <span className="text-sm sm:text-base font-normal tracking-widest text-[#111111] group-hover/card:text-[#000000] uppercase font-sans text-center transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-[#888888] font-peyda mt-1">
                  {brand.persianName}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* INLINE CSS KEYFRAMES FOR NON-STOP SMOOTH MARQUEE */}
      <style jsx>{`
        @keyframes brandMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes brandMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-brand-marquee-right {
          display: flex;
          animation: brandMarqueeRight 45s linear infinite;
          will-change: transform;
        }
        .animate-brand-marquee-left {
          display: flex;
          animation: brandMarqueeLeft 45s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
