'use client';

import React from 'react';
import Image from 'next/image';
import { Search, ArrowLeft, ArrowDown, Sparkles, Layers, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenSearch: () => void;
  onSelectCategory?: (category: string) => void;
  onSelectGender?: (gender: string) => void;
}

export default function Hero({ onOpenSearch, onSelectCategory, onSelectGender }: HeroProps) {
  const genderFilters = [
    { id: 'all', label: 'همه مدل‌ها' },
    { id: 'women', label: 'زنانه' },
    { id: 'men', label: 'مردانه' },
    { id: 'unisex', label: 'یونیسکس' },
  ];

  const categoryFilters = [
    { id: 'lifestyle', label: 'لایف‌استایل و شهری' },
    { id: 'running', label: 'دویدن و رانینگ' },
    { id: 'training', label: 'تمرین و جیم' },
    { id: 'basketball', label: 'بسکتبال تخصصی' },
  ];

  return (
    <section className="pt-28 sm:pt-32 pb-8 font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* HERO CONTAINER: EDITORIAL FASHION RETAIL CANVAS */}
        <div className="relative bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E5E4E0] overflow-hidden p-6 sm:p-10 lg:p-12 shadow-sm">

          {/* TWO-COLUMN EDITORIAL LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* RTL RIGHT COLUMN: CONTENT & EDITORIAL HEADLINE */}
            <div className="lg:col-span-7 flex flex-col items-start space-y-6">

              {/* RETAILER CURATION BADGE */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F5F4F0] border border-[#E5E4E0] rounded-full text-xs font-semibold text-[#171717]">
                <span className="w-2 h-2 rounded-full bg-[#CCFF00]"></span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#777777]">THE NEW EVERYDAY</span>
                <span className="text-[#E5E4E0]">|</span>
                <span>منتخب ۲۰ برند بین‌المللی اسنیکر</span>
              </div>

              {/* HEADLINE */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#171717] leading-[1.12] tracking-normal font-peyda">
                کفش‌هایی برای <br className="hidden sm:inline" />
                <span className="text-[#171717]">هر حرکت. </span>
                <span className="text-[#777777] font-bold">هر استایل.</span>
              </h1>

              {/* SUBTITLE */}
              <p className="text-sm sm:text-base lg:text-lg text-[#777777] font-vazir font-normal leading-relaxed max-w-xl">
                مجموعه‌ای دست‌چین شده از برترین اسنیکرهای اصیل جهان — ساخته شده برای زندگی روزمره، تمرینات ورزشی و هر آنچه بین آن‌هاست.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
                <a
                  href="#products"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#171717] text-white hover:bg-[#262626] font-semibold text-xs sm:text-sm rounded-full transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm group"
                >
                  <span>خرید جدیدترین‌ها</span>
                  <ArrowLeft className="w-4 h-4 text-[#CCFF00] group-hover:-translate-x-1 transition-transform" />
                </a>

                <a
                  href="#brands"
                  className="w-full sm:w-auto px-6 py-3.5 bg-[#F5F4F0] hover:bg-[#E5E4E0] text-[#171717] border border-[#E5E4E0] font-semibold text-xs sm:text-sm rounded-full transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Compass className="w-4 h-4 text-[#777777]" />
                  <span>کشف برندها</span>
                </a>
              </div>

              {/* SEARCH BAR TRIGGER */}
              <div className="w-full max-w-lg pt-2">
                <div
                  onClick={onOpenSearch}
                  className="cursor-pointer group flex items-center justify-between bg-[#F5F4F0] hover:bg-[#E5E4E0]/60 border border-[#E5E4E0] rounded-full px-4 py-3 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-xs font-vazir text-[#777777]">
                    <Search className="w-4 h-4 text-[#171717]" />
                    <span>جستجو بین نایکی، آدیداس، نیوبالانس، آسیکس...</span>
                  </div>
                  <span className="text-[10px] font-mono bg-[#FFFFFF] text-[#171717] px-2 py-0.5 rounded border border-[#E5E4E0] font-medium hidden sm:inline">
                    ⌘ K
                  </span>
                </div>
              </div>

            </div>

            {/* RTL LEFT COLUMN: FASHION CAMPAIGN LIFESTYLE IMAGE */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#E5E4E0] bg-[#F5F4F0] shadow-md">
                <Image
                  src="/images/landings/solea-sneakers/Sporty-Woman-on-Gray-Studio-Block-for-hero-section.png"
                  alt="SOLEA Editorial Campaign"
                  fill
                  priority
                  className="object-cover object-center hover:scale-102 transition-transform duration-500"
                />

                {/* EDITORIAL OVERLAY BADGE */}
                <div className="absolute bottom-4 right-4 z-10 bg-[#FFFFFF]/95 backdrop-blur-sm p-3 rounded-xl border border-[#E5E4E0] shadow-sm text-right">
                  <div className="text-xs font-bold text-[#171717] font-peyda">
                    استایل و کارایی بدون مرز
                  </div>
                  <div className="text-[10px] text-[#777777] font-vazir font-normal mt-0.5">
                    کالکشن پاییز ۲۰۲۶
                  </div>
                </div>

                <div className="absolute top-4 left-4 z-10 bg-[#CCFF00] text-[#171717] text-[10px] font-mono font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                  EDITORIAL
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* QUICK SHOP / DISCOVERY BAR (IMMEDIATELY AFTER HERO) */}
        <div className="mt-6 bg-[#FFFFFF] rounded-2xl border border-[#E5E4E0] p-4 sm:p-5 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            {/* DISCOVERY TITLE */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#171717] text-[#CCFF00] flex items-center justify-center font-bold text-xs">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#171717]">ورود سریع به خرید</div>
                <div className="text-[10px] font-vazir text-[#777777]">دسته‌بندی و جنسیت مورد نظر خود را انتخاب کنید</div>
              </div>
            </div>

            {/* QUICK CATEGORY & GENDER PILLS */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <span className="text-[11px] font-vazir text-[#777777] ml-1 hidden sm:inline">جنسیت:</span>
              {genderFilters.map((g) => (
                <button
                  key={g.id}
                  onClick={() => onSelectGender && onSelectGender(g.id)}
                  className="px-3.5 py-1.5 bg-[#F5F4F0] hover:bg-[#171717] hover:text-white text-[#171717] text-xs font-medium rounded-full transition-all duration-150 border border-[#E5E4E0]"
                >
                  {g.label}
                </button>
              ))}

              <span className="text-[#E5E4E0] mx-1 hidden lg:inline">|</span>

              <span className="text-[11px] font-vazir text-[#777777] ml-1 hidden sm:inline">دسته:</span>
              {categoryFilters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onSelectCategory && onSelectCategory(c.id)}
                  className="px-3.5 py-1.5 bg-[#F5F4F0] hover:bg-[#171717] hover:text-white text-[#171717] text-xs font-medium rounded-full transition-all duration-150 border border-[#E5E4E0]"
                >
                  {c.label}
                </button>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
