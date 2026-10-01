'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Sparkles, ArrowLeft, ShieldCheck, Truck, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenSearch: () => void;
  onSelectCategory?: (category: string) => void;
}

export default function Hero({ onOpenSearch, onSelectCategory }: HeroProps) {
  const categories = [
    { id: 'running', label: 'دویدن' },
    { id: 'lifestyle', label: 'لایف‌استایل' },
    { id: 'basketball', label: 'بسکتبال' },
    { id: 'training', label: 'تمرین' },
    { id: 'unisex', label: 'یونیسکس' },
  ];

  return (
    <section className="pt-24 sm:pt-28 font-peyda" dir="rtl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        {/* HERO CONTAINER WITH ELEGANT LUXURY CANVAS */}
        <div className="relative bg-[#B0BFC2] rounded-[20px] sm:rounded-[28px] overflow-hidden p-6 sm:p-10 md:p-12 lg:p-6 border border-[#111111]/[0.08] shadow-xl shadow-black/5">

          {/* BACKGROUND SUBTLE NOISE & GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#D8D4CB]/40 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-white/35 rounded-full filter blur-3xl pointer-events-none" />

          {/* TWO-COLUMN GRID CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* LEFT COLUMN (RTL): HERO MAIN IMAGE & FLOATING CARDS */}
            <div className="lg:col-span-5 relative flex items-center justify-center">

              {/* MAIN HERO IMAGE CONTAINER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full max-w-[300px] h-[500px]  lg:max-w-[480px] lg:h-[650px]  rounded-2xl overflow-hidden "
              >
                <Image
                  src="/images/landings/solea-sneakers/Sporty-Woman-on-Gray-Studio-Block-for-hero-section.png"
                  alt="Solea Luxury Sneaker Hero"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Image Label */}
                <div className="absolute bottom-4 right-4 z-10 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/50 shadow-md text-right">
                  <div className="text-xs font-bold text-[#111111]">کالکشن استایل لوکس</div>
                  <div className="text-[10px] text-[#6B6B68] font-vazir font-normal">طراحی آینده‌نگرانه و راحت</div>
                </div>
              </motion.div>

              {/* FLOATING CARD: FREE SHIPPING */}
              <motion.div
                initial={{ opacity: 0, x: -15, y: -10 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.4 },
                  y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                }}
                className="absolute -bottom-3 -right-2 sm:bottom-4 sm:-right-3 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-[#111111]/10 shadow-xl flex items-center gap-3 z-20"
              >
                <div className="w-9 h-9 rounded-lg bg-[#111111] text-white flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-[#111111]">
                    ارسال اکسپرس رایگان
                  </div>
                  <div className="text-[10px] text-[#6B6B68] font-vazir font-normal">
                    برای سفارش‌های بالای ۲ میلیون تومان
                  </div>
                </div>
              </motion.div>

            </div>

            {/* RIGHT COLUMN (RTL): HEADLINE, TEXT & ACTION BUTTONS */}
            <div className="lg:col-span-7 flex flex-col items-start text-right space-y-5 sm:space-y-6">

              {/* EYEBROW BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/80 backdrop-blur-md border border-[#111111]/10 rounded-full text-xs font-medium text-[#111111] shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A89B84] shrink-0" />
                <span>کالکشن پاییز ۱۴۰۵ — اصالت لوکس و بی‌همتا</span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              </motion.div>

              {/* MAIN HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-[#111111] leading-[1.15] font-peyda"
              >
                کفش‌هایی برای <br className="hidden sm:inline" />
                <span className="text-[#111111]">ورزش. </span>
                <span className="text-[#111111]">استایل. </span>
                <span className="text-[#555552] font-extrabold">روزمرگی.</span>
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg text-[#3A3A37] font-vazir font-normal leading-relaxed max-w-xl"
              >
                مجموعه‌ای بی‌نظیر از لوکس‌ترین و محبوب‌ترین اسنیکرهای اصیل جهان؛ طراحی شده برای ارتقای استایل خیابانی و تجربه راحتی بی‌وقفه.
              </motion.p>

              {/* CTA BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto"
              >
                <a
                  href="#products"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#111111] text-white hover:bg-[#282828] font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg shadow-black/15 group"
                >
                  <span>کشف کالکشن جدید</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
                </a>

                <a
                  href="#limited-drop"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white/80 hover:bg-white text-[#111111] border border-[#111111]/15 font-semibold text-xs sm:text-sm rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md shadow-sm"
                >
                  <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>دراپ‌های محدود</span>
                </a>
              </motion.div>

              {/* HERO INTERACTIVE SEARCH FIELD */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-lg pt-2"
              >
                <div
                  onClick={onOpenSearch}
                  className="cursor-pointer group relative flex items-center bg-white/90 hover:bg-white border border-[#111111]/10 rounded-full px-4 py-3 shadow-sm transition-all duration-300"
                >
                  <Search className="w-4 h-4 text-[#6B6B68] group-hover:text-[#111111] transition-colors shrink-0 ml-2.5" />
                  <span className="text-xs text-[#6B6B68] group-hover:text-[#111111] transition-colors font-vazir font-normal flex-grow">
                    جستجو در میان مدل‌ها، برندها و دسته‌بندی‌ها...
                  </span>
                  <span className="text-[10px] font-mono bg-[#111111]/10 text-[#111111] px-2 py-0.5 rounded font-medium shrink-0 hidden sm:inline">
                    ⌘ K
                  </span>
                </div>

                {/* CATEGORY CHIPS */}
                <div className="flex items-center gap-2 flex-wrap mt-3">
                  <span className="text-xs font-medium text-[#111111]/70 ml-1">
                    محبوب:
                  </span>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                      className="px-3 py-1 bg-white/60 hover:bg-[#111111] hover:text-white text-[#111111] border border-[#111111]/10 rounded-full text-xs font-medium transition-all duration-200"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
