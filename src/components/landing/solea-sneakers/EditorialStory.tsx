'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';

export default function EditorialStory() {
  const editorialStats = [
    { label: '100% ORIGINAL', desc: 'تضمین اصالت مستقیم از نمایندگی' },
    { label: '8-POINT CHECK', desc: 'بررسی فیزیکی و تخصصی بارکد' },
    { label: 'EXPRESS DELIVERY', desc: 'ارسال ایمن ۲۴ ساعته سراسری' },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F8FAFC] font-peyda text-right border-t border-[#CBD5E1]/60" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        <div className="bg-[#0B1220] text-[#F8FAFC] rounded-[28px] sm:rounded-[36px] p-8 sm:p-12 lg:p-16 overflow-hidden relative border border-[#CBD5E1]/20">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">

            {/* RIGHT COLUMN (RTL): EDITORIAL STATEMENT & FACTS */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#16233A] border border-[#CBD5E1]/20 rounded-full text-xs font-semibold text-[#8FA9C4]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>فلسفه استایل و حرکت — SOLEA EDITORIAL</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-[#F8FAFC] leading-[1.15] font-peyda">
                هنر خیابانی؛ <br />
                <span className="text-[#8FA9C4]">ارگونومی و هویت.</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-[#CBD5E1] font-peyda leading-relaxed max-w-2xl font-normal">
                هر گام بیانیه‌ای برای سبک زندگی شماست. ما در سولئا فقط اسنیکرهای اصیل و برتر جهان را گردآوری کرده‌ایم تا تجربه حرکت شما فراتر از یک پوشش معمولی باشد.
              </p>

              {/* SHOW DON'T TELL: VISUAL FACTS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#CBD5E1]/15 text-xs font-peyda">
                {editorialStats.map((item, idx) => (
                  <div key={idx} className="bg-[#16233A]/80 p-3.5 rounded-2xl border border-[#CBD5E1]/15">
                    <div className="text-base font-bold text-[#8FA9C4] font-mono mb-1">{item.label}</div>
                    <div className="font-normal text-[#CBD5E1] text-[11px]">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#products"
                  className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#8FA9C4] hover:bg-[#F8FAFC] text-[#0B1220] font-semibold text-sm rounded-full transition-colors group"
                >
                  <Compass className="w-4 h-4 shrink-0" />
                  <span>کشف کالکشن روز</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* LEFT COLUMN (RTL): EDITORIAL VISUAL SPOTLIGHT */}
            <div className="lg:col-span-5 relative aspect-[4/5] bg-[#16233A] rounded-[24px] overflow-hidden border border-[#CBD5E1]/20 flex items-center justify-center p-6">
              <Image
                src="/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KJ7895_00_plp_standard.png"
                alt="Solea Editorial Heritage"
                fill
                className="object-contain hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 right-4 left-4 bg-[#0B1220]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#CBD5E1]/20 text-right">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#8FA9C4] uppercase block">
                  SOLEA EDITORIAL VOL. 04
                </span>
                <p className="text-xs text-[#F8FAFC] font-peyda mt-0.5">
                  تلفیق نوآوری ارگونومیک و زیبایی‌شناسی خیابانی
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
