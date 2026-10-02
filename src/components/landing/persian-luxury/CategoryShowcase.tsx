'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { LUXURY_CATEGORIES } from '@/data/persian-luxury-women';

export default function CategoryShowcase() {
  return (
    <section id="categories" className="py-16 md:py-24 bg-[#EFECE6] font-peyda border-y border-[#ffffff]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-start mb-10 md:mb-14 max-w-xl">
          <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-1">
            CATEGORIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal mb-3">
            دسته‌بندی محصولات
          </h2>
          <p className="text-sm text-[#77736D] leading-relaxed">
            انتخابی هدفمند از اصلی‌ترین کیف‌ها، کفش‌های مجلسی، کیف‌پول‌ها و اکسسوری‌های زنانه.
          </p>
        </div>

        {/* CATEGORY TILES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {LUXURY_CATEGORIES.map((cat, idx) => {
            const isDominant = idx < 2; // Handbags and Shoes dominate visually

            return (
              <a
                key={cat.id}
                href="#catalog"
                className={`group relative bg-[#F7F5F1] border border-[#ffffff] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[#171717] ${
                  isDominant ? 'lg:col-span-1 min-h-[380px]' : 'min-h-[320px]'
                }`}
              >
                {/* BACKGROUND / CATEGORY IMAGE */}
                <div className="relative w-full h-64 sm:h-72 bg-[#E5DFD5] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.namePersian}
                    fill
                    className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F1] via-transparent to-transparent opacity-80" />
                </div>

                {/* CONTENT AREA */}
                <div className="p-6 text-start relative z-10 bg-[#F7F5F1] border-t border-[#ffffff]/60 flex items-end justify-between">
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-[#77736D] uppercase tracking-wider mb-1">
                      {cat.nameEnglish} — {cat.productCount} کالا
                    </span>
                    <h3 className="text-xl font-extrabold text-[#171717] group-hover:text-[#B29A6A] transition-colors">
                      {cat.namePersian}
                    </h3>
                  </div>

                  <div className="p-2.5 bg-[#171717] text-[#F7F5F1] group-hover:bg-[#B29A6A] group-hover:text-[#171717] transition-all">
                    <ArrowLeft className="w-4 h-4 stroke-[2]" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
