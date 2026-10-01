'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';

export default function EditorialStory() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF7] font-peyda text-right" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        <div className="bg-[#111111] text-white rounded-[32px] p-8 sm:p-12 lg:p-16 overflow-hidden relative shadow-2xl">

          {/* AMBIENT BACKGROUND GLOW */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A89B84]/15 rounded-full filter blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

            {/* RIGHT COLUMN (RTL): EDITORIAL TEXT & MANIFESTO */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/15 rounded-full text-xs font-bold text-[#A89B84]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>فلسفه طراحی و برند SOLEA</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] font-peyda">
                فراتر از یک کفش؛ <br />
                بیانیه‌ای برای <span className="text-[#A89B84]">حرکت و هویت.</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#D0C8B8] font-vazir leading-relaxed max-w-2xl">
                اسنیکر فقط بخشی از پوشش شما نیست؛ نقطه تقاطع مهندسی ارگونومیک، هنر خیابانی و نحوه مواجهه شما با دنیای اطراف است. ما در سولئا بر این باوریم که هر گام، امضای استایل شماست.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs font-vazir text-[#A0A5B5]">
                <div>
                  <div className="text-xl font-black text-white font-mono mb-1">100% ORIGINAL</div>
                  <div>ضمانت اصالت تمام محصولات از نمایندگی‌های رسمی</div>
                </div>
                <div>
                  <div className="text-xl font-black text-white font-mono mb-1">CURATED SELECTION</div>
                  <div>انتخاب وسواس‌گونه مدل‌های برتر سال</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#products"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#A89B84] hover:bg-white text-black font-extrabold text-sm rounded-full transition-all duration-300 shadow-lg group"
                >
                  <Compass className="w-4 h-4 shrink-0" />
                  <span>داستان ما و کشف کالکشن</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* LEFT COLUMN (RTL): EDITORIAL VISUAL */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-[24px] overflow-hidden border border-white/15 shadow-2xl group">
                <Image
                  src="/images/landings/solea-sneakers/editorial-story.svg"
                  alt="Solea Editorial Heritage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 text-right">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#A89B84] uppercase">
                    SOLEA EDITORIAL — VOLUME 04
                  </span>
                  <p className="text-xs text-white/90 font-vazir mt-1">
                    ترکیب استایل شهری و فناوری روز جهان
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
