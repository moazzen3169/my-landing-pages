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
  const categorySpecs = {
    running: { spec: 'بازگشت انرژی ۹۲٪', metric: 'PERFORMANCE' },
    lifestyle: { spec: 'ارگونومی تمام‌روز', metric: 'URBAN STYLE' },
    basketball: { spec: 'قفل‌شدگی مچ پا', metric: 'COURT CONTROL' },
    training: { spec: 'پایداری حرکات عرضی', metric: 'STABILITY' },
  };

  return (
    <section id="categories" className="relative py-28 lg:py-40 bg-white border-b border-neutral-200 font-peyda overflow-hidden" dir="rtl">
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 border-b border-neutral-200 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-neutral-500 mb-3">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              CATEGORIES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
              دسته‌بندی‌های ورزشی و اسپورت
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-600 max-w-md font-normal leading-relaxed">
            انتخاب کفش بر اساس نیاز شما؛ از کفش‌های تخصصی دویدن و تمرین تا کتانی‌های سبک روزمره و استریت‌ویر.
          </p>
        </div>

        {/* CATEGORY GRID WITH WHITE CARDS & ENLARGED SHOE IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SOLEA_CATEGORIES.map((cat, idx) => {
            const extra = categorySpecs[cat.id] || { spec: 'عملکرد عالی', metric: 'SPORT' };

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                className="group relative bg-[#F8F8F6] border border-neutral-200 hover:border-black transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between p-7 h-[480px] rounded-2xl shadow-2xs hover:shadow-md"
              >
                {/* TOP ROW: NUMBER & METRIC BADGE */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-lg font-black text-black">
                    ۰{idx + 1}
                  </span>
                  <span className="px-3 py-1 bg-white border border-neutral-200 text-[10px] font-bold text-black tracking-wider uppercase rounded-full shadow-2xs">
                    {extra.metric}
                  </span>
                </div>

                {/* CENTER: ENLARGED PRODUCT SNEAKER IMAGE */}
                <div className="relative w-full h-[220px] my-auto flex items-center justify-center p-2">
                  <Image
                    src={cat.image}
                    alt={cat.titlePersian}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* BOTTOM CONTENT */}
                <div className="pt-4 border-t border-neutral-200">
                  <div className="text-[11px] font-mono text-neutral-500 mb-1">
                    {cat.titleEnglish} • {cat.count} مدل
                  </div>

                  <h3 className="text-xl font-bold text-black mb-1.5">
                    {cat.titlePersian}
                  </h3>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                    {cat.descriptionPersian}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-black group-hover:text-neutral-600 transition-colors">
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
