'use client';

import React from 'react';
import { AUTHENTICITY_PILLARS } from '@/data/persian-luxury-women';
import { ShieldCheck, PackageCheck, Headphones, Award } from 'lucide-react';

export default function AuthenticitySection() {
  const icons = [Award, PackageCheck, ShieldCheck, Headphones];

  return (
    <section className="py-16 md:py-24 bg-[#F2EFE9] border-y border-[#DDD9D2] font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-2">
            GUARANTEE & TRUST
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal mb-3">
            با خیال راحت انتخاب کنید
          </h2>
          <p className="text-sm text-[#77736D] leading-relaxed">
            اعتماد، بخشی از تجربه خرید شماست. ما امنیت خرید شما را از مرحله انتخاب تا تحویل نهایی تضمین می‌کنیم.
          </p>
        </div>

        {/* TRUST BLOCKS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUTHENTICITY_PILLARS.map((pillar, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={pillar.id}
                className="bg-[#F7F5F1] p-6 sm:p-8 border border-[#DDD9D2] text-start flex flex-col justify-between transition-all hover:border-[#171717]"
              >
                <div>
                  <div className="w-12 h-12 bg-[#EAE4DA] border border-[#DDD9D2] text-[#B29A6A] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-extrabold text-[#171717] mb-2">
                    {pillar.titlePersian}
                  </h3>
                  <p className="text-xs text-[#77736D] leading-relaxed">
                    {pillar.descriptionPersian}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
