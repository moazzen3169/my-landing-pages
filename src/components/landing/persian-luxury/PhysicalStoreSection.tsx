'use client';

import React from 'react';

export default function PhysicalStoreSection() {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-start">
            <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest">
              BOUTIQUE EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#000000] leading-snug">
              مجموعه حضوری بوتیک MOR'E
            </h2>
            <p className="text-xs sm:text-sm text-[#333333] leading-relaxed font-normal">
              تجربه لمس کیفیت واقعی و پرو اختصاصی انواع کیف‌ها و کفش‌های لوکس در فضایی مدرن و آرامی از مد فاخر.
            </p>

            <div className="pt-4 border-t border-[#E5E5E5] space-y-2 text-xs font-normal text-[#666666]">
              <p>آدرس: تبریز، ولیعصر، سنگفرش شهریار، بوتیک موره</p>

              <p>ساعات کاری: ۱۰:۰۰ الی ۲۲:۰۰</p>
            </div>
          </div>

          <div className="aspect-[4/3] bg-[#F5F5F5] border border-[#E5E5E5] flex items-center justify-center p-8 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#999999] tracking-widest uppercase block">TABRIZ BOUTIQUE</span>
              <p className="text-sm font-light text-[#111111]">فضای مینیمال مد و استایل اختصاصی</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
