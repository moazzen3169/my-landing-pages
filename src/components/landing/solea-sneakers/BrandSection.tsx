'use client';

import React from 'react';
import { SOLEA_BRANDS } from '@/data/solea-sneakers';

export default function BrandSection() {
  const halfLength = Math.ceil(SOLEA_BRANDS.length / 2);
  const row1Brands = SOLEA_BRANDS.slice(0, halfLength);
  const row2Brands = SOLEA_BRANDS.slice(halfLength);

  const row1Items = [...row1Brands, ...row1Brands, ...row1Brands, ...row1Brands];
  const row2Items = [...row2Brands, ...row2Brands, ...row2Brands, ...row2Brands];

  return (
    <section id="brands" className="py-10 sm:py-16 bg-[#F8F8F6] border-b border-neutral-200 overflow-hidden font-peyda relative group/brands text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 text-center mb-6 sm:mb-8">
        <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase">
          OFFICIAL SPORT BRANDS
        </span>
        <h3 className="text-lg sm:text-2xl font-bold text-black mt-1">
          مجموعه برندهای معتبر جهانی
        </h3>
      </div>

      {/* CONTINUOUS DUAL MARQUEE TICKER */}
      <div className="relative w-full overflow-hidden select-none space-y-3 sm:space-y-4">
        {/* GRADIENT FADE EDGES */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F8F6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F8F6] to-transparent z-10" />

        {/* ROW 1 - MARQUEE SLOWLY TO RIGHT */}
        <div className="relative w-full flex overflow-hidden py-1" dir="ltr">
          <div className="flex shrink-0 gap-3 sm:gap-6 animate-solea-brand-marquee-right hover:[animation-play-state:paused]">
            {row1Items.map((brand, idx) => (
              <div
                key={`r1-${idx}`}
                className="w-36 sm:w-56 h-16 sm:h-20 bg-white border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col items-center justify-center px-3 sm:px-4 shrink-0 rounded-xl shadow-2xs group/card cursor-pointer"
              >
                <span className="text-sm sm:text-lg font-bold font-mono tracking-wider text-black group-hover/card:scale-105 transition-transform">
                  {brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 mt-0.5">
                  EST. {brand.established} • {brand.country}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 - MARQUEE SLOWLY TO LEFT */}
        <div className="relative w-full flex overflow-hidden py-1" dir="ltr">
          <div className="flex shrink-0 gap-3 sm:gap-6 animate-solea-brand-marquee-left hover:[animation-play-state:paused]">
            {row2Items.map((brand, idx) => (
              <div
                key={`r2-${idx}`}
                className="w-36 sm:w-56 h-16 sm:h-20 bg-white border border-neutral-200 hover:border-black transition-all duration-300 flex flex-col items-center justify-center px-3 sm:px-4 shrink-0 rounded-xl shadow-2xs group/card cursor-pointer"
              >
                <span className="text-sm sm:text-lg font-bold font-mono tracking-wider text-black group-hover/card:scale-105 transition-transform">
                  {brand.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-neutral-400 mt-0.5">
                  EST. {brand.established} • {brand.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes soleaBrandMarqueeRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes soleaBrandMarqueeLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-solea-brand-marquee-right {
          display: flex;
          animation: soleaBrandMarqueeRight 35s linear infinite;
          will-change: transform;
        }
        .animate-solea-brand-marquee-left {
          display: flex;
          animation: soleaBrandMarqueeLeft 35s linear infinite;
          will-change: transform;
        }
        .group\/brands:hover .animate-solea-brand-marquee-right,
        .group\/brands:hover .animate-solea-brand-marquee-left,
        #brands:hover .animate-solea-brand-marquee-right,
        #brands:hover .animate-solea-brand-marquee-left {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
