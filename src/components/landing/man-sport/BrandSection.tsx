'use client';

import React from 'react';
import { MAN_SPORT_BRANDS } from '@/data/man-sport';

export default function BrandSection() {
  return (
    <section id="brands-section" className="py-12 bg-white text-[#111111] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* BRANDS GRID WALL */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {MAN_SPORT_BRANDS.map((brand) => (
            <a
              key={brand.id}
              href="#products-section"
              className="group relative h-40 rounded-2xl bg-[#F5F3EE] hover:bg-[#111111] border border-slate-200 hover:border-black transition-colors duration-300 overflow-hidden flex flex-col justify-end p-4"
            >
              {/* BRAND IMAGE PREVIEW */}
              <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-30 group-hover:opacity-40 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="relative z-10 text-right">
                <h3 className="text-lg font-black font-mono tracking-tight text-white group-hover:text-[#B7FF00] transition-colors">
                  {brand.logoText}
                </h3>
                <span className="text-xs font-peyda text-slate-300 font-medium">
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
