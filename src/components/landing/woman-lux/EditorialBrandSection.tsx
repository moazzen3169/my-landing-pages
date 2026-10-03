'use client';

import React from 'react';

interface EditorialBrandSectionProps {
  onExploreClick?: () => void;
}

export default function EditorialBrandSection({
  onExploreClick,
}: EditorialBrandSectionProps) {
  const handleScroll = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('catalog');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#FFFFFF] section-padding border-b border-[#E5E5E5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-6 sm:space-y-8">

        <span className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
          BRAND MANIFESTO
        </span>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#111111] leading-tight font-peyda">
          «لباس، بخشی از داستان شماست.»
        </h2>

        <p className="text-sm sm:text-base text-[#6B6B6B] font-normal max-w-2xl mx-auto leading-relaxed">
          مجموعه‌ای از فرم‌های معاصر، پارچه‌های منتخب و جزئیاتی که برای ماندن طراحی شده‌اند.
          ما باور داریم مد حقیقی در سادگی هوشمندانه، اصالت پارچه و احترام به فرم انسانی تجلی می‌یابد.
        </p>

        <div className="pt-4">
          <button
            onClick={handleScroll}
            className="px-8 py-3.5 bg-[#111111] text-white text-xs sm:text-sm font-semibold hover:bg-black/80 transition-all duration-300 min-w-[180px]"
          >
            مشاهده مجموعه
          </button>
        </div>
      </div>
    </section>
  );
}
