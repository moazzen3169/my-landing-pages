'use client';

import React from 'react';
import { CATEGORIES_LIST } from '@/data/woman-lux';

interface CategorySectionProps {
  selectedCategory: string;
  onSelectCategory: (catId: string) => void;
}

export default function CategorySection({
  selectedCategory,
  onSelectCategory,
}: CategorySectionProps) {
  return (
    <section id="categories" className="w-full bg-white border-b border-[#E5E5E5] py-8 sm:py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">

          {/* SECTION TITLE */}
          <div className="text-right">
            <h2 className="text-xs tracking-widest text-[#6B6B6B] uppercase font-mono mb-1">
              DISCOVERY
            </h2>
            <p className="text-xl sm:text-2xl font-bold text-[#111111] font-peyda">
              دسته‌بندی‌ها
            </p>
          </div>

          {/* CATEGORY NAV HORIZONTAL */}
          <div className="overflow-x-auto no-scrollbar py-2">
            <div className="flex items-center gap-6 sm:gap-8 min-w-max">
              {CATEGORIES_LIST.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.id)}
                    className={`relative text-xs sm:text-sm font-medium transition-colors py-2 group ${
                      isActive ? 'text-[#111111] font-semibold' : 'text-[#6B6B6B] hover:text-[#111111]'
                    }`}
                  >
                    <span>{cat.title}</span>

                    {/* SUBTLE UNDERLINE ANIMATION */}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111] transition-transform duration-300 origin-right ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
