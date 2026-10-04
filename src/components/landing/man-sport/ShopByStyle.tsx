'use client';

import React from 'react';
import { MAN_SPORT_STYLES } from '@/data/man-sport';

export default function ShopByStyle() {
  return (
    <section id="styles-section" className="py-16 sm:py-20 bg-[#111111] text-[#F5F3EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-4xl font-black font-peyda text-white tracking-tight">
            با چه استایلی حال می‌کنی؟
          </h2>
        </div>

        {/* STYLE CARDS GRID - LARGE IMAGES + MINIMAL NAME */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {MAN_SPORT_STYLES.map((style) => (
            <a
              key={style.id}
              href="#products-section"
              className="group relative h-80 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors duration-300 flex flex-col justify-end p-4"
            >
              {/* CAMPAIGN BACKGROUND IMAGE */}
              <img
                src={style.image}
                alt={style.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

              {/* MINIMAL STYLE NAME */}
              <div className="relative z-10 text-right">
                <span className="text-[10px] font-mono text-[#E04A24] font-bold block uppercase tracking-wider mb-0.5">
                  {style.englishTitle}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold font-peyda text-white">
                  {style.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
