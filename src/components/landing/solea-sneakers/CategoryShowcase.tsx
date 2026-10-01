'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Flame, Zap, Trophy, Compass } from 'lucide-react';
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

  const categorySpecs = {
    running: { spec: 'بازگشت انرژی ۹۲٪', metric: 'MAX CUSHION' },
    lifestyle: { spec: 'راحتی تمام‌روز', metric: 'ALL-DAY WEAR' },
    basketball: { spec: 'محافظت از مچ پا', metric: 'HIGH ANKLE LOCK' },
    training: { spec: 'پایداری حرکات عرضی', metric: 'FLAT STABILITY' },
  };

  return (
    <section id="categories" className="py-12 sm:py-16 bg-[#F8FAFC] font-peyda text-right border-t border-[#CBD5E1]/60" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#8FA9C4] mb-2">
            COLLECTIONS & PERFORMANCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1220]">
            طراحی شده برای عملکرد
          </h2>
          <p className="text-sm sm:text-base text-[#475569] font-peyda mt-2 leading-relaxed font-normal">
            بر اساس نوع فعالیت، سطح کوشنینگ و سبک حرکت خود انتخاب کنید.
          </p>
        </div>

        {/* 4 LARGE CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLEA_CATEGORIES.map((cat) => {
            const Icon = iconsMap[cat.id] || Compass;
            const extra = categorySpecs[cat.id] || { spec: 'عملکرد بالا', metric: 'SPORT' };

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative h-[380px] bg-[#FFFFFF] rounded-[24px] overflow-hidden cursor-pointer border border-[#CBD5E1]/60 flex flex-col justify-between p-6 transition-colors duration-300 hover:border-[#0B1220]"
              >
                {/* TOP HEADER: ICON, TITLE ENGLISH & COUNT */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1220] text-[#F8FAFC] flex items-center justify-center">
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold bg-[#F1F5F9] text-[#0B1220] px-3 py-1 rounded-full border border-[#CBD5E1]/50">
                    {cat.count} مدل
                  </span>
                </div>

                {/* CENTER REAL SHOE IMAGE */}
                <div className="relative w-full h-[180px] my-auto flex items-center justify-center">
                  <Image
                    src={cat.image}
                    alt={cat.titlePersian}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* BOTTOM CONTENT OVERLAY */}
                <div className="relative z-10 text-[#0B1220]">
                  {/* METRIC BADGE (SHOW DON'T TELL) */}
                  <div className="inline-block px-2.5 py-0.5 bg-[#F1F5F9] text-[#0B1220] text-[10px] font-mono font-bold rounded-md mb-1.5 border border-[#CBD5E1]/40">
                    {extra.metric} • {extra.spec}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-bold text-[#0B1220] mb-1">
                    {cat.titlePersian}
                  </h3>

                  {/* ACTION LINK */}
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0B1220] group-hover:text-[#8FA9C4] transition-colors mt-1">
                    <span>مشاهده مدل‌ها</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
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
