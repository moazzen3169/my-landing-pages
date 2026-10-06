'use client';

import React from 'react';
import Image from 'next/image';
import { GRAVITY_CATEGORIES } from '@/data/gravity-data';
import { ArrowUpLeft } from 'lucide-react';

export default function GravityCategories() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-[#ffffff]  font-peyda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D7D4CD]/80 gap-4">
          <div>
            <span className="text-xs font-bold text-[#666666] tracking-wider uppercase block mb-1">
              دسته‌بندی‌های اصلی
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111]">
              چه چیزی می‌پوشی؟
            </h2>
          </div>

        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {GRAVITY_CATEGORIES.map((cat, idx) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`group relative overflow-hidden bg-[#EFEFEF] border border-[#D7D4CD] rounded-xs flex flex-col justify-end ${
                idx === 0 ? 'col-span-2 sm:col-span-2 lg:col-span-2 row-span-3 min-h-[360px] sm:min-h-[400px]' : 'min-h-[220px] sm:min-h-[260px]'
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.titleFa}
                  fill
                  className="object-contain object-left group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute top-[0px] right-[0px] p-5 sm:p-6 text-black z-10 flex items-end justify-between">
                <div>
                  <span className="text-[11px] font-medium text-black/70 block mb-1 tracking-wider">
                    {cat.titleEn} • {cat.count}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold tracking-normal group-hover:text-[#DDDDDD] transition-colors">
                    {cat.titleFa}
                  </h3>
                </div>

              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
