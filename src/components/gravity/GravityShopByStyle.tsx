'use client';

import React from 'react';
import Image from 'next/image';
import { GRAVITY_STYLES } from '@/data/gravity-data';
import { ArrowUpLeft } from 'lucide-react';

export default function GravityShopByStyle() {
  return (
    <section id="styles" className="py-20 md:py-28 bg-[#F3F2EE] border-b border-[#D7D4CD] font-peyda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#D7D4CD]/80 gap-4">
          <div>
            <span className="text-xs font-bold text-[#666666] tracking-wider uppercase block mb-1">
              خرید بر اساس موقعیت
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111]">
              برای هر موقعیت، یک انتخاب درست
            </h2>
          </div>
          <p className="text-sm text-[#666666] max-w-md font-medium leading-relaxed">
            به جای سردرگمی در میان دسته‌بندی‌ها، استایل متناسب با قرار ملاقات یا موقعیت مورد نظر خود را انتخاب کنید.
          </p>
        </div>

        {/* Styles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRAVITY_STYLES.map((style) => (
            <div
              key={style.id}
              className="group relative bg-white border border-[#E5E5E5] rounded-xs overflow-hidden flex flex-col justify-between hover:border-[#111111] transition-all duration-300"
            >
              {/* Image Box */}
              <div className="relative aspect-[3/4] w-full bg-[#E8E6E1] overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.titleFa}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <span className="absolute top-3 right-3 bg-[#111111]/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-xs backdrop-blur-xs">
                  {style.tag}
                </span>
              </div>

              {/* Text Area */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#666666] transition-colors mb-2">
                    {style.titleFa}
                  </h3>
                  <p className="text-xs text-[#666666] font-medium leading-relaxed mb-4">
                    {style.subtitleFa}
                  </p>
                </div>

                <a
                  href="#new-arrivals"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] group-hover:text-[#666666] transition-colors pt-2 border-t border-[#F0EEEC]"
                >
                  <span>مشاهده محصولات این استایل</span>
                  <ArrowUpLeft size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
