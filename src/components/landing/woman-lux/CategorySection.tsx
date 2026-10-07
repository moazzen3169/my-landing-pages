'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpLeft, Sparkles } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
}

export default function CategorySection({ onSelectCategory }: CategorySectionProps) {
  const categories = [
    {
      id: 'manto',
      title: 'مانتو',
      subtitle: 'روزمره و مجلسی',
      categoryKey: 'مانتو',
      image: '/images/woman-lux/cat4.png',
      badge: 'کالکشن جدید',
      count: '۱۲ مدل',
    },
        {
      id: 'rainin',
      title: 'بارانی',
      subtitle: 'اتواع طرح ها',
      categoryKey: 'بارانی',
      image: '/images/woman-lux/cat3.png',
      badge: 'طراحی معاصر',
      count: '۸ مدل',
    },
    {
      id: 'coats',
      title: ' پالتو',
      subtitle: 'پشم، فوتر و چرم',
      categoryKey: 'پالتو',
      image: '/images/woman-lux/cat2.png',
      badge: 'خیاطی فاخر',
      count: '۱۸ مدل',
    },
    {
      id: 'coat',
      title: 'کت',
      subtitle: 'چرم طبیعی دست‌دوز',
      categoryKey: 'کت',
      image: '/images/woman-lux/cat1.png',
      badge: 'نسخه محدود',
      count: '۱۰ مدل',
    },
  ];

  const handleCategoryClick = (catKey: string) => {
    onSelectCategory(catKey);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl mx-auto bg-[#FFFFFF] border-b border-[#E5E5E5]">
      {/* SECTION HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-[#F0F0F0]">
        <div>
          <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B] mb-1">
            <Sparkles className="w-3 h-3 text-[#111111]" />
            <span>CATEGORIES — دسته‌بندی‌های نوآر</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#111111] font-peyda">
            مجموعه تخصصی پوشاک و اکسسوری
          </h2>
        </div>

      </div>

      {/* CATEGORIES GRID - 4 MINIMAL Sleek CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.categoryKey)}
            className="group relative  border border-[#EBEBEB] hover:border-[#111111] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between "
          >


            {/* CENTER: IMAGE PREVIEW WITH LUXURY CROP */}
            <div className="relative w-full aspect-[1/1]  overflow-hidden s">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="o  bject-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* BOTTOM: TITLE, SUBTITLE & ACTION */}
            <div className="absolute w-full bottom-0 p-3 z-10 flex items-end justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#111111] font-peyda group-hover:translate-x-1 transition-transform">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-[#6B6B6B] font-peyda line-clamp-1">
                  {cat.subtitle}
                </p>
              </div>
              <div className="w-7 h-7 rounded-full border border-[#D5D5D5] group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all flex items-center justify-center shrink-0">
                <ArrowUpLeft className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
