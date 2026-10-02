'use client';

import React from 'react';
import { AUTHENTICITY_PILLARS } from '@/data/persian-luxury-women';

export default function AuthenticitySection() {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-t border-b border-[#E5E5E5] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        <div className="text-center mb-16">
          <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
            OUR PROMISE
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#000000]">
            تضمین اصالت و کیفیت MOR'E
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {AUTHENTICITY_PILLARS.map((pillar) => (
            <div key={pillar.id} className="text-start space-y-3">
              <h3 className="text-sm font-medium text-[#000000]">
                {pillar.titlePersian}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed font-normal">
                {pillar.descriptionPersian}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
