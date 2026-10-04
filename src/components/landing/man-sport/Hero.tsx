'use client';

import React from 'react';
import { ArrowDownLeft } from 'lucide-react';

interface HeroProps {
  onOpenSearch: () => void;
}

export default function Hero({ onOpenSearch }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] pt-24 sm:pt-32 pb-12 bg-[#F5F3EE] text-[#111111] overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* RIGHT COLUMN: SHORT HEADLINE & CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-right">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black font-peyda tracking-tight text-[#111111] leading-[1.08]">
              استایل روزمره،
              <br />
              <span className="text-[#111111]">
                متفاوت‌تر.
              </span>
            </h1>

            {/* CTA BUTTON */}
            <div className="pt-2">
              <a
                href="#products-section"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#111111] hover:bg-[#2455FF] text-white font-bold text-sm sm:text-base font-peyda transition-colors group"
              >
                <span>مشاهده محصولات</span>
                <ArrowDownLeft className="w-5 h-5 text-[#B7FF00] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* LEFT COLUMN: LARGE HERO VISUAL */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-slate-900/10 bg-slate-900 aspect-[4/5] group">
                <img
                  src="/images/man-sport/118624_BLAC_1.webp"
                  alt="Men Sport Collection"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
