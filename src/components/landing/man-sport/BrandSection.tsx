'use client';

import React from 'react';
import { MAN_SPORT_BRANDS } from '@/data/man-sport';
import { ShieldCheck, ArrowLeft } from 'lucide-react';

export default function BrandSection() {
  return (
    <section id="brands-section" className="py-16 bg-white text-[#111111] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2455FF]/10 text-[#2455FF] font-mono text-xs font-bold uppercase mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>OFFICIAL MULTI-BRAND CURATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-peyda text-[#111111]">
              برندهایی که می‌شناسید و دوست دارید
            </h2>
            <p className="text-sm font-peyda text-slate-600 mt-1">
              مجموعه‌ای از محبوب‌ترین برندهای استریت‌ویر و اسپرت جهان با تضمین اصالت
            </p>
          </div>

          <a
            href="#products-section"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#111111] hover:bg-[#2455FF] text-white font-peyda text-xs font-bold transition-colors shadow-sm"
          >
            <span>مشاهده همه برندها</span>
            <ArrowLeft className="w-4 h-4" />
          </a>
        </div>

        {/* BRANDS GRID WALL */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {MAN_SPORT_BRANDS.map((brand) => (
            <a
              key={brand.id}
              href="#products-section"
              className="group p-5 rounded-2xl bg-[#F5F3EE] hover:bg-[#111111] border border-slate-200 hover:border-black transition-all duration-300 flex flex-col justify-between h-36"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#B7FF00] uppercase tracking-widest">
                  {brand.country}
                </span>
                <span className="text-[10px] font-mono text-slate-400 group-hover:text-slate-300">
                  {brand.productCount} محصول
                </span>
              </div>

              <div>
                <h3 className="text-xl font-black font-mono tracking-tight text-[#111111] group-hover:text-white transition-colors">
                  {brand.logoText}
                </h3>
                <span className="text-xs font-peyda text-slate-600 group-hover:text-slate-300 font-medium">
                  {brand.name}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
