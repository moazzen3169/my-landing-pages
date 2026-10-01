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

  return (
    <section id="categories" className="py-16 sm:py-24 bg-[#FAFAF7] font-peyda text-right" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold uppercase tracking-widest text-[#A89B84] mb-2">
            COLLECTIONS & PERFORMANCES
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-[#111111]">
            برای هر حرکت، یک انتخاب
          </h2>
          <p className="text-sm sm:text-base text-[#6B6B68] font-vazir mt-3 leading-relaxed">
            مدل مناسب خودت را بر اساس سبک زندگی، نوع تمرین و استایل روزمره‌ات پیدا کن.
          </p>
        </div>

        {/* 4 LARGE CATEGORY CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOLEA_CATEGORIES.map((cat) => {
            const Icon = iconsMap[cat.id] || Compass;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative h-[320px] sm:h-[360px] rounded-[24px] overflow-hidden cursor-pointer border border-[#111111]/10 shadow-lg shadow-black/5 flex flex-col justify-end p-6 transition-all duration-500"
              >
                {/* BACKGROUND IMAGE WITH ZOOM */}
                <Image
                  src={cat.image}
                  alt={cat.titlePersian}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />

                {/* CONTENT OVERLAY */}
                <div className="relative z-10 text-white transform group-hover:-translate-y-1.5 transition-transform duration-300">

                  {/* ICON & COUNT BADGE */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="text-[10px] font-mono font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {cat.count} مدل
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-extrabold text-white mb-1.5">
                    {cat.titlePersian}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-xs text-white/80 font-vazir leading-relaxed line-clamp-2 mb-4">
                    {cat.descriptionPersian}
                  </p>

                  {/* ACTION LINK */}
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#A89B84] group-hover:text-white transition-colors">
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
