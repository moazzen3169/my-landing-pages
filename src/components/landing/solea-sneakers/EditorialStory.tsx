'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EditorialStory() {
  const editorialStats = [
    { label: '100% ORIGINAL', desc: 'تضمین اصالت مستقیم از نمایندگی' },
    { label: '8-POINT CHECK', desc: 'بررسی فیزیکی و ارگونومی بارکد' },
    { label: 'EXPRESS DELIVERY', desc: 'ارسال ایمن ۲۴ ساعته سراسری' },
  ];

  return (
    <div className="font-peyda text-right" dir="rtl">

      {/* 01 — EDITORIAL MAGAZINE STORY */}
      <section className="py-24 lg:py-32 bg-[#F3F3F1] border-b border-[#D9D9D5] relative overflow-hidden">
        {/* BACKGROUND TYPOGRAPHY */}
        <div className="absolute top-1/2 -translate-y-1/2 right-0 left-0 pointer-events-none select-none opacity-5 text-center overflow-hidden">
          <span className="text-[22vw] font-black leading-none uppercase tracking-tighter text-[#0A0A0A]">
            IDENTITY
          </span>
        </div>

        <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="bg-[#0A0A0A] text-[#F3F3F1] p-8 sm:p-14 lg:p-20 relative overflow-hidden border border-[#0A0A0A]">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* RIGHT COLUMN (RTL): STATEMENT & PROOF POINTS */}
              <div className="lg:col-span-7 space-y-8">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#222222] border border-[#333333] text-xs font-mono font-bold text-[#D9D9D5] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>فلسفه استایل و حرکت — SOLEA EDITORIAL</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F3F3F1] leading-[1.08] tracking-tight">
                  هنر خیابانی؛
                  <br />
                  <span className="text-[#6B6B68]">ارگونومی و هویت.</span>
                </h2>

                <p className="text-base sm:text-lg text-[#D9D9D5] leading-relaxed max-w-2xl font-normal">
                  هر گام بیانیه‌ای برای سبک زندگی شماست. ما در SOLEA فقط اسنیکرهای اصیل و برتر جهان را گردآوری کرده‌ایم تا تجربه حرکت شما فراتر از یک پوشش معمولی باشد.
                </p>

                {/* PROOF POINTS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#333333]">
                  {editorialStats.map((item, idx) => (
                    <div key={idx} className="bg-[#181818] p-4 border border-[#333333]">
                      <div className="text-sm font-bold text-[#F3F3F1] font-mono mb-1">{item.label}</div>
                      <div className="font-normal text-[#6B6B68] text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#F3F3F1] hover:bg-[#D9D9D5] text-[#0A0A0A] font-bold text-sm rounded-full transition-colors group"
                  >
                    <Compass className="w-4 h-4 shrink-0" />
                    <span>کشف کالکشن روز</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* LEFT COLUMN (RTL): SPOTLIGHT IMAGE */}
              <div className="lg:col-span-5 relative aspect-4/5 bg-[#181818] border border-[#333333] flex items-center justify-center p-6 overflow-hidden group">
                <Image
                  src="/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KZ9157_00_plp_standard.png"
                  alt="Solea Editorial Heritage"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 right-4 left-4 bg-[#0A0A0A]/90 backdrop-blur-md p-4 border border-[#333333] text-right">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#6B6B68] uppercase block">
                    SOLEA EDITORIAL VOL. 04
                  </span>
                  <p className="text-xs text-[#F3F3F1] font-medium mt-0.5">
                    تلفیق نوآوری ارگونومیک و زیبایی‌شناسی خیابانی
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 02 — LARGE SPLIT CAMPAIGN SECTION (TSSF inspo) */}
      <section className="py-24 lg:py-32 bg-[#F3F3F1] border-b border-[#D9D9D5]">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* LEFT CAMPAIGN BLOCK (6 COLS) */}
            <div className="lg:col-span-6 relative min-h-[480px] lg:min-h-[640px] bg-[#E8E8E5] border border-[#D9D9D5] overflow-hidden group">
              <Image
                src="/images/landings/solea-sneakers/man.png"
                alt="Solea Campaign Men"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent p-8 sm:p-12 flex flex-col justify-end">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F3F3F1]/80 uppercase mb-2">
                  CAMPAIGN 2026
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-[#F3F3F1] leading-tight mb-3">
                  استایل، فقط چیزی نیست که می‌پوشی.
                </h3>
                <p className="text-base text-[#D9D9D5] font-normal">
                  شیوه‌ای است که حرکت می‌کنی و فضا را شکل می‌دهی.
                </p>
              </div>
            </div>

            {/* RIGHT CAMPAIGN BLOCK (6 COLS) */}
            <div className="lg:col-span-6 relative min-h-[480px] lg:min-h-[640px] bg-[#E8E8E5] border border-[#D9D9D5] overflow-hidden group">
              <Image
                src="/images/landings/solea-sneakers/woman.png"
                alt="Solea Campaign Women"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent p-8 sm:p-12 flex flex-col justify-end">
                <span className="text-xs font-mono font-bold tracking-widest text-[#F3F3F1]/80 uppercase mb-2">
                  WOMEN & UNISEX
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-[#F3F3F1] leading-tight mb-3">
                  آزادی فرم و تعادل بی‌نقص.
                </h3>
                <p className="text-base text-[#D9D9D5] font-normal">
                  طراحی شده برای پویایی، سبکی و حضور مؤثر در تمام لحظات.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
