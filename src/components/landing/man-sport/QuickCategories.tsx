'use client';

import React from 'react';
import { MAN_SPORT_CATEGORIES } from '@/data/man-sport';

interface QuickCategoriesProps {
  onSelectCategory?: (categoryId: string) => void;
}

export default function QuickCategories({ onSelectCategory }: QuickCategoriesProps) {
  // Filter out 'all' category for visual quick cards
  const visualCategories = MAN_SPORT_CATEGORIES.filter((c) => c.id !== 'all');

  return (
    <section className="py-12 bg-[#F5F3EE]  text-[#111111] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CATEGORY CARDS GRID - FULL BLEED IMAGES */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {visualCategories.map((cat) => (
            <a
              key={cat.id}
              href="#products-section"
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#111111] transition-all duration-300 block pb-6 "
            >
              {/* FULL BLEED IMAGE */}
              <img
                src={cat.image || '/images/man-sport/T-shirt-1.webp'}
                alt={cat.label}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* OVERLAY GRADIENT FOR TEXT READABILITY */}
              <div className="absolute inset-0  bg-gradient-to-t from-black/20  via-black/10 to-transparent transition-opacity group-hover:opacity-90" />

              {/* MINIMAL LABEL AT BOTTOM */}
              <div className="absolute bottom-4 right-4 left-4 text-right">
                <span className="font-bold text-sm sm:text-base font-peyda text-white group-hover:text-[#E04A24] transition-colors block">
                  {cat.label}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
