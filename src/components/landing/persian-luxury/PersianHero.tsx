'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles, ShieldCheck, Award, Flame } from 'lucide-react';

export default function PersianHero() {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0A0B0E] font-peyda">
      {/* Hero Background Image Banner */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banners/Group 242.jpg"
          alt="کالکشن لوکس فاخر گارنت"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 animate-pulse transition-all duration-1000"
          unoptimized
        />
        {/* Dark Luxury Vignette & Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0E] via-[#0A0B0E]/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0E] via-transparent to-[#0A0B0E]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1F1C18]/90 border border-[#C8A97E]/40 text-[#C8A97E] text-xs font-semibold tracking-wide backdrop-blur-md mb-6 shadow-xl shadow-[#C8A97E]/5">
          <Sparkles className="w-4 h-4 animate-spin" />
          <span>کالکشن جدید زمستان و بهار ۱۴۰۴ — اصالت نوین</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.25] tracking-tight max-w-4xl mb-6">
          وقار، ظرافت و <span className="bg-gradient-to-r from-[#F1D7B1] via-[#C8A97E] to-[#99794D] bg-clip-text text-transparent">تجربه لوکس</span> در پوشاک فاخر مردانه
        </h1>

        {/* Description */}
        <p className="text-[#A5A8B8] text-base sm:text-xl font-vazir leading-relaxed max-w-2xl mb-10 font-normal">
          مجموعه‌ای برگزیده از بهترین پارچه‌های ارگانیک، الگوسازی ارگونومیک و خیاطی لوکس. تلفیقی از سنت وقار و طراحی مدرن پیشرو برای آقایان بااستایل.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-4 bg-[#C8A97E] hover:bg-[#D9B98E] text-black font-bold text-base rounded-xl shadow-2xl shadow-[#C8A97E]/20 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>مشاهده کالکشن جدید</span>
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </a>

          <a
            href="#outfits"
            className="w-full sm:w-auto px-8 py-4 bg-[#181A22] hover:bg-[#252936] text-white border border-[#2F3446] font-semibold text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>بررسی ست‌های پیشنهادی</span>
          </a>
        </div>

        {/* Highlight Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mt-16 pt-10 border-t border-[#232734]/80 text-right w-full max-w-3xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#181A22] border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">تضمین اصالت پارچه</h4>
              <p className="text-xs text-[#818598] font-vazir">۱۰۰٪ الیاف طبیعی و ارگانیک</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#181A22] border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">برش مهندسی‌شده</h4>
              <p className="text-xs text-[#818598] font-vazir">طراحی تن‌خور ارگونومیک</p>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-center md:justify-start">
            <div className="w-10 h-10 rounded-lg bg-[#181A22] border border-[#C8A97E]/30 flex items-center justify-center text-[#C8A97E] shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">بسته‌بندی لوکس کادویی</h4>
              <p className="text-xs text-[#818598] font-vazir">ارسال اکسپرس اختصاصی</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
