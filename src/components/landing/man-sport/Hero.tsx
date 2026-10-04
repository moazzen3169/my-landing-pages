'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowDownLeft, Sparkles, ShoppingBag, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface HeroProps {
  onOpenSearch: () => void;
}

export default function Hero({ onOpenSearch }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] pt-28 sm:pt-32 pb-12 bg-[#F5F3EE] text-[#111111] overflow-hidden flex flex-col justify-between">
      {/* BACKGROUND DECORATIVE ACCENTS */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#B7FF00]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2455FF]/10 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* RIGHT COLUMN: BIG TYPOGRAPHY & CALL TO ACTIONS */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-right">

            {/* BADGE */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F5F3EE] text-xs font-semibold tracking-wide border border-black/10">
              <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse" />
              <span className="font-peyda">کالکشن جدید استریت‌ویر و اسپرت ۲۰۲۶</span>
              <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-[#B7FF00]">
                MULTI-BRAND
              </span>
            </div>

            {/* HEADLINE */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-black font-peyda tracking-tight text-[#111111] leading-[1.08]">
                استایل روزمره،
                <br />
                <span className="relative inline-block text-[#111111]">
                  متفاوت‌تر و جسور.
                  <span className="absolute -bottom-2 right-0 w-full h-3 bg-[#B7FF00] -z-10 opacity-90 rounded-sm" />
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-700 font-medium font-peyda max-w-xl leading-relaxed pt-2">
                مرجع تخصصی پوشاک مردانه کژوال، استریت‌ویر و اسپرت در ایران. بیش از ۲۰ برند اصلی شامل نایکی، آدیداس، استوسی، کارهارت و نیوبالانس.
              </p>
            </div>

            {/* FEATURED CTA BUTTONS & QUICK STATS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products-section"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#111111] hover:bg-[#2455FF] text-white font-bold text-sm sm:text-base font-peyda transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <span>مشاهده محصولات</span>
                <ArrowDownLeft className="w-5 h-5 text-[#B7FF00] group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#build-your-fit"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white border border-slate-300 hover:border-[#111111] text-[#111111] font-bold text-sm sm:text-base font-peyda transition-all hover:bg-slate-50 shadow-xs"
              >
                <Sparkles className="w-4 h-4 text-[#FF5A1F]" />
                <span>استایل‌ساز (Build Your Fit)</span>
              </a>
            </div>

            {/* QUICK STATS & TRUST MINI BADGES */}
            <div className="pt-6 border-t border-slate-300/80 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <span className="block text-2xl font-black font-mono text-[#111111]">+۲۰</span>
                <span className="text-xs text-slate-600 font-medium font-peyda">برند بین‌المللی</span>
              </div>
              <div>
                <span className="block text-2xl font-black font-mono text-[#111111]">۱۰۰٪</span>
                <span className="text-xs text-slate-600 font-medium font-peyda">تضمین اصالت کالا</span>
              </div>
              <div>
                <span className="block text-2xl font-black font-mono text-[#111111]">۲۴h</span>
                <span className="text-xs text-slate-600 font-medium font-peyda">ارسال سریع سراسر کشور</span>
              </div>
            </div>

          </div>

          {/* LEFT COLUMN: HIGH-ENERGY HERO VISUAL IMAGE CARD */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* BACK DECORATIVE FRAME */}
              <div className="absolute -inset-3 bg-slate-900 rounded-3xl transform rotate-2 opacity-95 -z-10" />
              <div className="absolute -inset-3 bg-[#B7FF00] rounded-3xl transform -rotate-1 opacity-80 -z-20" />

              {/* MAIN HERO IMAGE */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-900/10 shadow-2xl bg-slate-900 aspect-[4/5] group">
                <img
                  src="/images/man-sport/118624_BLAC_1.webp"
                  alt="Men Sport Streetwear Collection"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* OVERLAY FLOATING PRODUCT TAG */}
                <div className="absolute bottom-4 right-4 left-4 bg-[#111111]/90 backdrop-blur-md border border-white/15 p-4 rounded-xl text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#B7FF00] tracking-widest uppercase block">
                      FEATURED OUTFIT
                    </span>
                    <h3 className="text-sm font-bold font-peyda text-white">کاپشن بومبر Tech Windbreaker</h3>
                    <p className="text-xs font-mono text-slate-300 mt-0.5">۵٬۸۰۰٬۰۰۰ تومان</p>
                  </div>
                  <a
                    href="#products-section"
                    className="p-2.5 rounded-lg bg-[#B7FF00] text-black hover:bg-white transition-colors"
                    title="مشاهده"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </a>
                </div>

                {/* HIGH ENERGY FLOATING BADGE */}
                <div className="absolute top-4 left-4 bg-[#FF5A1F] text-white px-3 py-1 rounded-full text-xs font-black font-mono tracking-wider uppercase shadow-lg transform -rotate-3">
                  STREET ESSENTIALS
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM TRUST STRIP */}
      <div className="border-t border-slate-300/80 bg-white/60 backdrop-blur-sm mt-12 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-around gap-4 text-xs font-semibold text-slate-700 font-peyda">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2455FF]" />
            <span>ضمانت ۱۰۰٪ اصالت کالا</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-[#FF5A1F]" />
            <span>ارسال اکسپرس به سراسر ایران</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-[#111111]" />
            <span>۷ روز مهلت تعویض کالا</span>
          </div>
        </div>
      </div>

    </section>
  );
}
