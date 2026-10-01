'use client';

import React from 'react';
import { SOLEA_BRANDS } from '@/data/solea-sneakers';
import { Globe, ArrowLeft, Layers } from 'lucide-react';

interface BrandSectionProps {
  onSelectBrand?: (brandName: string) => void;
}

export default function BrandSection({ onSelectBrand }: BrandSectionProps) {
  return (
    <section id="brands" className="py-12 sm:py-16 bg-[#F5F4F0] border-y border-[#E5E4E0] font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E4E0] mb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#777777] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
              SHOP BY BRAND
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717]">
              برندهای بین‌المللی منتخب سولئا
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] font-vazir mt-1.5 font-normal">
              ما تولیدکننده یک برند نیستیم؛ سولئا مقصد گلچین‌شده برترین برندهای اسنیکر جهان است.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#171717]">
            <Globe className="w-4 h-4 text-[#777777]" />
            <span>۲۰+ برند اصیل جهانی</span>
          </div>
        </div>

        {/* EDITORIAL BRAND GRID / TILES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
          {SOLEA_BRANDS.map((brand) => (
            <div
              key={brand.id}
              onClick={() => onSelectBrand && onSelectBrand(brand.name)}
              className="group bg-[#FFFFFF] border border-[#E5E4E0] rounded-2xl p-4 flex flex-col justify-between items-start hover:border-[#171717] hover:shadow-md transition-all duration-200 cursor-pointer h-[130px]"
            >
              <div className="w-full flex items-center justify-between text-[10px] font-mono text-[#777777]">
                <span>{brand.country}</span>
                <span className="group-hover:text-[#171717] font-bold">({brand.productCount})</span>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-black font-mono tracking-widest text-[#171717] uppercase group-hover:text-[#171717]">
                  {brand.name}
                </h3>
                <p className="text-[10px] text-[#777777] font-vazir line-clamp-1 mt-0.5">
                  {brand.tagline}
                </p>
              </div>

              <div className="w-full pt-1 flex items-center justify-between text-[10px] font-semibold text-[#171717] group-hover:underline">
                <span>مشاهده مدل‌ها</span>
                <ArrowLeft className="w-3 h-3 text-[#171717] group-hover:-translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* MARQUEE RUNNER FOR CONTINUOUS VISUAL ENERGY */}
        <div className="mt-10 bg-[#171717] text-white py-3 rounded-xl overflow-hidden shadow-sm">
          <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
            {SOLEA_BRANDS.concat(SOLEA_BRANDS).map((b, idx) => (
              <div key={idx} className="flex items-center gap-6 font-mono text-xs font-bold tracking-widest text-[#F5F4F0] uppercase shrink-0">
                <span>{b.name}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]"></span>
                <span className="text-[#777777] font-normal">{b.tagline}</span>
                <span className="text-[#333333]">/</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
