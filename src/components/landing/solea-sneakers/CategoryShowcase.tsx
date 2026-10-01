'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Zap, Trophy, Compass, Flame } from 'lucide-react';
import { SOLEA_CATEGORIES } from '@/data/solea-sneakers';

interface CategoryShowcaseProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryShowcase({ onSelectCategory }: CategoryShowcaseProps) {
  const iconsMap = {
    running: Zap,
    lifestyle: Compass,
    basketball: Trophy,
    training: Flame,
  };

  return (
    <section id="categories" className="py-12 sm:py-16 bg-[#F5F4F0] border-b border-[#E5E4E0] font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E4E0] mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#777777] mb-2">
              <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
              SHOP BY CATEGORY
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717]">
              دسته‌بندی‌های تخصصی
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] font-vazir mt-1.5 font-normal">
              بر اساس نوع استفاده و سبک زندگی خود، کفش مناسب را کشف کنید.
            </p>
          </div>
        </div>

        {/* 4 EDITORIAL CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLEA_CATEGORIES.map((cat) => {
            const Icon = iconsMap[cat.id] || Compass;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative h-[360px] bg-[#FFFFFF] rounded-2xl border border-[#E5E4E0] p-6 flex flex-col justify-between overflow-hidden cursor-pointer hover:border-[#171717] hover:shadow-md transition-all duration-300"
              >
                {/* HEADER: ICON & COUNT */}
                <div className="flex items-center justify-between z-10">
                  <div className="w-9 h-9 rounded-xl bg-[#171717] text-[#CCFF00] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-[#F5F4F0] text-[#171717] px-2.5 py-1 rounded border border-[#E5E4E0]">
                    {cat.count} مدل
                  </span>
                </div>

                {/* SNEAKER IMAGE */}
                <div className="relative w-full h-[160px] my-auto flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.titlePersian}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* FOOTER TEXT */}
                <div className="z-10 pt-2 border-t border-[#E5E4E0]">
                  <h3 className="text-base font-extrabold text-[#171717] mb-1">
                    {cat.titlePersian}
                  </h3>
                  <p className="text-xs text-[#777777] font-vazir line-clamp-2 leading-relaxed mb-3 font-normal">
                    {cat.descriptionPersian}
                  </p>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#171717] group-hover:text-[#171717]">
                    <span>کشف مدل‌ها</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-[#171717] group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
