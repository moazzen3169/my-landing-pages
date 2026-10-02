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

  // Repeat arrays to ensure smooth infinite seamless marquee scrolling
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

      {/* 2-ROW INFINITE CAROUSEL */}
      <div className="space-y-4 w-full overflow-hidden select-none">

        {/* ROW 1 - MARQUEE RIGHT TO LEFT */}
        <div className="relative w-full flex overflow-hidden py-1">
          <div className="flex shrink-0 gap-4 animate-brand-marquee-left">
            {row1Items.map((brand, idx) => (
              <button
                key={`r1-${brand.id}-${idx}`}
                onClick={() => onSelectBrand?.(brand.name)}
                className="w-48 sm:w-60 h-20 sm:h-24 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#000000] hover:bg-[#FFFFFF] transition-all duration-300 flex items-center justify-center px-4 shrink-0 group cursor-pointer rounded-none"
              >
                <span className="text-sm sm:text-base font-normal tracking-widest text-[#111111] group-hover:text-[#000000] uppercase font-sans text-center transition-colors">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ROW 2 - MARQUEE LEFT TO RIGHT */}
        <div className="relative w-full flex overflow-hidden py-1">
          <div className="flex shrink-0 gap-4 animate-brand-marquee-right">
            {row2Items.map((brand, idx) => (
              <button
                key={`r2-${brand.id}-${idx}`}
                onClick={() => onSelectBrand?.(brand.name)}
                className="w-48 sm:w-60 h-20 sm:h-24 bg-[#FAFAFA] border border-[#E5E5E5] hover:border-[#000000] hover:bg-[#FFFFFF] transition-all duration-300 flex items-center justify-center px-4 shrink-0 group cursor-pointer rounded-none"
              >
                <span className="text-sm sm:text-base font-normal tracking-widest text-[#111111] group-hover:text-[#000000] uppercase font-sans text-center transition-colors">
                  {brand.name}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* INLINE CSS KEYFRAMES FOR NON-STOP MARQUEE */}
      <style jsx>{`
        @keyframes brandMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes brandMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-brand-marquee-left {
          display: flex;
          animation: brandMarqueeLeft 35s linear infinite;
        }
        .animate-brand-marquee-right {
          display: flex;
          animation: brandMarqueeRight 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
