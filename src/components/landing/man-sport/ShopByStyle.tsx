'use client';

import React from 'react';
import { MAN_SPORT_STYLES } from '@/data/man-sport';
import { Sparkles, ArrowLeft } from 'lucide-react';

export default function ShopByStyle() {
  return (
    <section id="styles-section" className="py-16 sm:py-24 bg-[#111111] text-[#F5F3EE] relative overflow-hidden">

      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B7FF00]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#B7FF00] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#B7FF00]" />
            <span>STYLE GUIDE & MOOD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black font-peyda text-white tracking-tight">
            با چه استایلی حال می‌کنی؟
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-peyda font-normal leading-relaxed">
            استایل خیابانی مورد علایقت را بر اساس مود و لایف‌استایل شخصی‌ات پیدا کن.
          </p>
        </div>

        {/* STYLE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAN_SPORT_STYLES.map((style) => (
            <a
              key={style.id}
              href="#products-section"
              className="group relative h-96 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 shadow-xl flex flex-col justify-between p-6"
            >
              {/* CAMPAIGN BACKGROUND IMAGE */}
              <img
                src={style.image}
                alt={style.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity group-hover:opacity-90" />

              {/* TOP ACCENT BADGE */}
              <div className="relative z-10 flex items-center justify-between">
                <span
                  className="px-3 py-1 rounded-full text-[11px] font-mono font-bold text-black uppercase shadow-md"
                  style={{ backgroundColor: style.accentColor }}
                >
                  {style.englishTitle}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#B7FF00] group-hover:text-black transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>

              {/* BOTTOM DETAILS */}
              <div className="relative z-10 space-y-1">
                <h3 className="text-2xl font-black font-peyda text-white group-hover:text-[#B7FF00] transition-colors">
                  {style.title}
                </h3>
                <p className="text-xs font-peyda text-slate-300 leading-relaxed line-clamp-2">
                  {style.tagline}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
