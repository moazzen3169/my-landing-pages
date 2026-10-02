'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 md:pb-24 bg-[#F7F5F1] overflow-hidden font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* CONTENT COLUMN (RIGHT IN RTL) */}
          <div className="lg:col-span-6 text-start z-10 order-2 lg:order-1">

            {/* EYEBROW */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EAE4DA] border border-[#DDD9D2] text-[#171717] text-xs font-semibold rounded-xs mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#B29A6A] shrink-0" />
              <span className="tracking-wide">THE NEW EDIT — 2026</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] leading-[1.15] mb-6 font-peyda tracking-normal">
              انتخابی برای <br />
              <span className="font-serif italic font-normal text-[#B29A6A]">خاص‌پسندان</span>
            </h1>

            {/* SUPPORTING TEXT */}
            <p className="text-[#77736D] text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              مجموعه‌ای منتخب از کیف و کفش زنانه از برندهای معتبر و محبوب بین‌المللی. حس اصالت، کیفیت بی‌نظیر چرم و طراحی جاودانه در هر انتخاب.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#catalog"
                className="px-8 py-4 bg-[#171717] hover:bg-[#2C2926] text-[#F7F5F1] text-sm font-semibold transition-all flex items-center justify-center gap-2 group shadow-xs"
              >
                <span>مشاهده مجموعه</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform stroke-[1.75]" />
              </a>

              <a
                href="#new-arrivals"
                className="px-8 py-4 bg-transparent hover:bg-[#EAE4DA] text-[#171717] border border-[#DDD9D2] text-sm font-semibold transition-all text-center"
              >
                تازه‌ها را ببینید
              </a>
            </div>

            {/* SUBTLE BRAND BADGES */}
            <div className="mt-12 pt-8 border-t border-[#DDD9D2]/60 flex flex-wrap items-center gap-6 text-[11px] text-[#77736D] font-mono uppercase tracking-widest">
              <span>PRADA</span>
              <span className="w-1 h-1 rounded-full bg-[#B29A6A]" />
              <span>GUCCI</span>
              <span className="w-1 h-1 rounded-full bg-[#B29A6A]" />
              <span>SAINT LAURENT</span>
              <span className="w-1 h-1 rounded-full bg-[#B29A6A]" />
              <span>BOTTEGA VENETA</span>
            </div>

          </div>

          {/* IMAGE COLUMN (LEFT IN RTL) */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full bg-[#EFECE6] overflow-hidden border border-[#DDD9D2] shadow-sm">
              <Image
                src="/images/landings/persian-luxury-v1/hero-banner.svg"
                alt="کالکشن جدید کیف و کفش لوکس زنانه"
                fill
                priority
                className="object-cover object-center hover:scale-102 transition-transform duration-700 ease-out"
                unoptimized
              />

              {/* Floating Editorial Badge */}
              <div className="absolute bottom-6 right-6 bg-[#F7F5F1]/90 backdrop-blur-md p-4 border border-[#DDD9D2] max-w-[200px] text-start hidden sm:block">
                <span className="block text-[10px] text-[#77736D] font-mono uppercase tracking-wider">کالکشن منتخب</span>
                <span className="block text-xs font-bold text-[#171717] mt-0.5">کیف‌های چرمی دست‌ساز</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
