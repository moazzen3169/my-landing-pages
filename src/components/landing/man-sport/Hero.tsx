'use client';

import React from 'react';
import { ArrowDownLeft, ArrowUpLeft } from 'lucide-react';

interface HeroProps {
  onOpenSearch: () => void;
}

export default function Hero({ onOpenSearch }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] pt-26 sm:pt-26 pb-12 bg-[#F5F3EE] text-[#111111] overflow-hidden flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* RIGHT COLUMN: SHORT HEADLINE & CTA */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 text-right">
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
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E04A24] hover:bg-[#c93a16] text-white font-bold text-sm sm:text-base font-peyda transition-colors group"
              >
                <span>مشاهده محصولات</span>
                <ArrowUpLeft  className="w-5 h-5 text-[#ffffff] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* LEFT COLUMN: LARGE HERO VISUAL */}
          <div className="lg:col-span-57relative">
            <div className="relative mx-auto w-[700px] lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden  aspect-[5/4] group">
                <img
                  src="/images/man-sport/hero.png"
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
