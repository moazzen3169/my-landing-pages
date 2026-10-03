'use client';

import React from 'react';
import { GRAVITY_BRANDS } from '@/data/gravity-data';

export default function GravityBrands() {
  return (
    <section id="brands" className="py-20 md:py-24 bg-[#F3F2EE] border-b border-[#D7D4CD] font-peyda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <span className="text-xs font-bold text-[#2563EB] tracking-wider uppercase block mb-1">
          فروشگاه مولتی‌برند
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-3">
          برندهای منتخب
        </h2>
        <p className="text-sm text-[#666666] max-w-xl mx-auto font-medium mb-12">
          عرضه مستقیم اصیل‌ترین و برترین برندهای ایرانی و بین‌المللی پوشاک مردانه در فروشگاه گراویتی.
        </p>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {GRAVITY_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-[#E5E5E5] rounded-xs flex flex-col items-center justify-center text-center hover:border-[#111111] transition-all group"
            >
              <span className="text-base font-black text-[#111111] font-sans tracking-widest uppercase group-hover:text-[#2563EB] transition-colors">
                {brand.name}
              </span>
              <span className="text-[10px] text-[#777777] font-medium block mt-1">
                {brand.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
