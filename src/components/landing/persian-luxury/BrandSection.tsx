'use client';

import React, { useState } from 'react';
import { LUXURY_BRANDS } from '@/data/persian-luxury-women';

interface BrandSectionProps {
  onSelectBrand?: (brandName: string) => void;
}

export default function BrandSection({ onSelectBrand }: BrandSectionProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleBrandClick = (brandName: string) => {
    setSelectedBrand(selectedBrand === brandName ? null : brandName);
    onSelectBrand?.(brandName);
  };

  return (
    <section id="brands" className="py-16 md:py-24 bg-[#FDFDFD] font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-start mb-10 md:mb-14 border-b border-[#ffffff] pb-6 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-1">
              OUR LUXURY PORTFOLIO
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal">
              برندهای منتخب
            </h2>
            <p className="text-sm text-[#77736D] mt-2 max-w-xl">
              برندهایی که با وسواس و دقت بالا برای انتخاب و آسودگی خاطر شما گردآوری کرده‌ایم.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono text-[#77736D] bg-[#EAE4DA] px-3.5 py-1.5 border border-[#ffffff]">
            ۲۵+ برند معتبر بین‌المللی
          </div>
        </div>

        {/* BRANDS GRID / MONOCHROME SHOWCASE */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {LUXURY_BRANDS.map((brand) => {
            const isSelected = selectedBrand === brand.name;

            return (
              <button
                key={brand.id}
                onClick={() => handleBrandClick(brand.name)}
                className={`p-4 sm:p-5 text-start transition-all border ${
                  isSelected
                    ? 'bg-[#171717] text-[#F7F5F1] border-[#171717] shadow-md'
                    : 'bg-[#F2EFE9] hover:bg-[#EAE4DA] text-[#171717] border-[#ffffff]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-base sm:text-lg font-extrabold font-serif tracking-widest uppercase ${
                    isSelected ? 'text-[#B29A6A]' : 'text-[#171717]'
                  }`}>
                    {brand.name}
                  </span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-xs ${
                    isSelected ? 'bg-[#333] text-[#B29A6A]' : 'bg-[#ffffff] text-[#77736D]'
                  }`}>
                    {brand.country}
                  </span>
                </div>

                <div className={`text-xs font-medium mb-1 ${
                  isSelected ? 'text-[#F7F5F1]' : 'text-[#171717]'
                }`}>
                  {brand.persianName}
                </div>

                <p className={`text-[11px] line-clamp-1 ${
                  isSelected ? 'text-[#ffffff]' : 'text-[#77736D]'
                }`}>
                  {brand.description}
                </p>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
