'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { SOLEA_CATEGORIES } from '@/data/solea-sneakers';

interface CategoryShowcaseProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function CategoryShowcase({ onSelectCategory }: CategoryShowcaseProps) {
  const categorySpecs: Record<string, { spec: string; metric: string }> = {
    running: { spec: 'بازگشت انرژی ۹۲٪', metric: 'PERFORMANCE' },
    lifestyle: { spec: 'ارگونومی تمام‌روز', metric: 'URBAN STYLE' },
    basketball: { spec: 'قفل‌شدگی مچ پا', metric: 'COURT CONTROL' },
    training: { spec: 'پایداری حرکات عرضی', metric: 'STABILITY' },
  };

  return (
    <section id="categories" className="relative py-12 sm:py-20 lg:py-28 bg-[#F8F8F6] border-b border-neutral-200 font-peyda overflow-hidden text-right" dir="rtl">
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-black"></span>
            <span>دسته‌بندی‌های اصلی اسنیکر</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
            کالکشن تخصصی بر اساس نوع فعالیت
          </h2>
        </div>

        {/* CATEGORY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {SOLEA_CATEGORIES.map((cat, idx) => {
            const extra = categorySpecs[cat.id] || { spec: 'عملکرد عالی', metric: 'SPORT' };

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative bg-white border border-neutral-200 hover:border-black transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between p-0 rounded-2xl shadow-2xs hover:shadow-md"
              >
                {/* TOP ROW: NUMBER & METRIC BADGE */}
                <div className="flex items-center justify-between z-10 text-xs p-3.5 sm:p-4 font-mono border-b border-neutral-100 bg-[#FAF9F6]">
                  <span className="text-base sm:text-lg font-black text-black">
                    ۰{idx + 1}
                  </span>
                  <span className="px-2.5 py-1 bg-white border border-neutral-200 text-[10px] font-bold text-black tracking-wider uppercase rounded-full shadow-2xs">
                    {extra.metric}
                  </span>
                </div>

                {/* CENTER: PRODUCT SNEAKER IMAGE */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[1/1] my-auto flex items-center justify-center p-3">
                  <Image
                    src={cat.image}
                    alt={cat.titlePersian}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* BOTTOM CONTENT */}
                <div className="p-4 border-t border-neutral-200 bg-white">
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-500 mb-1">
                    {cat.titleEnglish} • {cat.count} مدل
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-black mb-1.5">
                    {cat.titlePersian}
                  </h3>

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-black group-hover:text-amber-600 transition-colors">
                    <span>مشاهده کفش‌های این دسته</span>
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
