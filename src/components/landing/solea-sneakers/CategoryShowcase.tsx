'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Zap, Trophy, Flame, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOLEA_CATEGORIES } from '@/data/solea-sneakers';

interface CategoryShowcaseProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryShowcase({ onSelectCategory }: CategoryShowcaseProps) {
  const categorySpecs = {
    running: { spec: 'بازگشت انرژی ۹۲٪', metric: 'PERFORMANCE' },
    lifestyle: { spec: 'ارگونومی تمام‌روز', metric: 'URBAN STYLE' },
    basketball: { spec: 'قفل‌شدگی مچ پا', metric: 'COURT CONTROL' },
    training: { spec: 'پایداری حرکات عرضی', metric: 'STABILITY' },
  };

  return (
    <section id="categories" className="relative py-24 lg:py-32 bg-[#F3F3F1] border-b border-[#D9D9D5] font-peyda overflow-hidden" dir="rtl">
      {/* OVERSIZED BACKGROUND TYPOGRAPHY */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 left-0 pointer-events-none select-none opacity-5 text-center overflow-hidden">
        <span className="text-[20vw] font-black leading-none uppercase tracking-tighter text-[#0A0A0A]">
          PERFORMANCE
        </span>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-[#D9D9D5] mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#6B6B68] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
              COLLECTIONS & CATEGORIES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-tight">
              برای هر حرکت،
              <br />
              <span className="text-[#0A0A0A]/40">یک انتخاب درست.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B6B68] max-w-md font-normal leading-relaxed">
            دسته‌بندی‌های تخصصی SOLEA بر اساس فاکتورهای فنی کوشنینگ، پایداری بیومکانیک و زیبایی‌شناسی استریت‌ویر طراحی شده‌اند.
          </p>
        </div>

        {/* EDITORIAL HORIZONTAL / GRID CATEGORIES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SOLEA_CATEGORIES.map((cat, idx) => {
            const extra = categorySpecs[cat.id] || { spec: 'عملکرد عالی', metric: 'SPORT' };

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative bg-[#E8E8E5] border border-[#D9D9D5] hover:border-[#0A0A0A] transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between p-6 h-[460px]"
              >
                {/* TOP ROW: NUMBER & METRIC BADGE */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-lg font-black text-[#0A0A0A]">
                    ۰{idx + 1}
                  </span>
                  <span className="px-2.5 py-1 bg-[#F3F3F1] border border-[#D9D9D5] text-[10px] font-bold text-[#0A0A0A] tracking-wider uppercase">
                    {extra.metric}
                  </span>
                </div>

                {/* CENTER: LARGE PRODUCT IMAGE */}
                <div className="relative w-full h-[200px] my-auto flex items-center justify-center p-2">
                  <Image
                    src={cat.image}
                    alt={cat.titlePersian}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* BOTTOM CONTENT */}
                <div className="pt-4 border-t border-[#D9D9D5]">
                  <div className="text-[11px] font-mono text-[#6B6B68] mb-1">
                    {cat.titleEnglish} • {cat.count} مدل
                  </div>

                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">
                    {cat.titlePersian}
                  </h3>

                  <p className="text-xs text-[#6B6B68] line-clamp-2 leading-relaxed mb-4">
                    {cat.descriptionPersian}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#0A0A0A] group-hover:text-[#6B6B68] transition-colors">
                    <span>مشاهده کالکشن</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
