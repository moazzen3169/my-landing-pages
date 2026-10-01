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
    <section className="pt-28 sm:pt-18   font-peyda" dir="rtl">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 ">
        {/* HERO CONTAINER WITH ELEGANT WARM LUXURY CANVAS */}
        <div className="relative bg-[#B0BFC2] rounded-[16px] sm:rounded-[24px] overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16 border border-[#111111]/[0.08] shadow-2xl shadow-black/5 min-h-[660px] lg:min-h-[720px] flex flex-col justify-between">

          {/* BACKGROUND SUBTLE NOISE & GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#D8D4CB]/40 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-[550px] h-[550px] bg-white/40 rounded-full filter blur-3xl pointer-events-none" />

          {/* TWO-COLUMN GRID CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start my-auto">

       {/* LEFT COLUMN (RTL): HERO MAIN IMAGE & FLOATING CARDS */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">

              {/* MAIN HERO IMAGE CONTAINER */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[480px] lg:max-w-[600px] aspect-[4/6]  overflow-hidden "
              >
                <Image
                  src="/images/landings/solea-sneakers/Sporty-Woman-on-Gray-Studio-Block-for-hero-section.png"
                  alt="Solea Luxury Sneaker Hero"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle bottom gradient for image tag */}

                {/* Floating Image Label */}
                <div className="absolute bottom-5 right-5 z-10 bg-white/85 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/40 shadow-lg text-right">
                  <div className="text-xs font-black text-[#111111]">کالکشن استایل لوکس</div>
                  <div className="text-[10px] text-[#6B6B68] font-vazir">طراحی آینده‌نگرانه و راحت</div>
                </div>
              </motion.div>

              {/* FLOATING CARD 1: FREE SHIPPING */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 },
                  y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                }}
                className="absolute -bottom-4 -right-2 sm:bottom-6 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#111111]/10 shadow-2xl flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#111111]">
                    ارسال اکسپرس رایگان
                  </div>
                  <div className="text-[10px] text-[#6B6B68] font-vazir">
                    برای سفارش‌های بالای ۲ میلیون تومان
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARD 2: GUARANTEE */}


            </div>

            {/* RIGHT COLUMN (RTL): HEADLINE, TEXT & ACTION BUTTONS */}
            <div className="lg:col-span-7 flex flex-col items-start text-right space-y-6 sm:space-y-8">

              {/* EYEBROW BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-[#111111]/10 rounded-full text-xs font-bold text-[#111111] shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A89B84] shrink-0" />
                <span>کالکشن پاییز ۱۴۰۵ — اصالت لوکس و بی‌همتا</span>
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              </motion.div>

              {/* MAIN OVERSIZED HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-black text-[#111111] leading-[1.1] font-peyda"
              >
                کفش‌هایی 
                برای <br /> 
                <span>ورزش.</span> <br />
                استـــایل. <br /> <span className="text-[#6B6B68] font-extrabold">روزمرگی.</span>
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-[#3A3A37] font-medium leading-relaxed max-w-xl font-vazir"
              >
                مجموعه‌ای بی‌نظیر از لوکس‌ترین و محبوب‌ترین اسنیکرهای اصیل جهان؛ طراحی شده برای ارتقای استایل خیابانی و تجربه راحتی بی‌وقفه.
              </motion.p>

              {/* CTA BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto"
              >
                <a
                  href="#products"
                  className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white hover:bg-[#282828] font-bold text-sm sm:text-base rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-black/15 group"
                >
                  <span>کشف کالکشن جدید</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform shrink-0" />
                </a>

                <a
                  href="#limited-drop"
                  className="w-full sm:w-auto px-7 py-4 bg-white/70 hover:bg-white text-[#111111] border border-[#111111]/15 font-bold text-sm sm:text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md shadow-sm"
                >
                  <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>دراپ‌های محدود</span>
                </a>
              </motion.div>

              {/* HERO INTERACTIVE SEARCH FIELD */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full max-w-lg pt-4"
              >
                <div
                  onClick={onOpenSearch}
                  className="cursor-pointer group relative flex items-center bg-white/90 hover:bg-white border border-[#111111]/10 rounded-full px-5 py-3.5 shadow-md shadow-black/5 transition-all duration-300"
                >
                  <Search className="w-5 h-5 text-[#6B6B68] group-hover:text-[#111111] transition-colors shrink-0 ml-3" />
                  <span className="text-xs sm:text-sm text-[#6B6B68] group-hover:text-[#111111] transition-colors font-vazir flex-grow">
                    جستجو در میان مدل‌ها، برندها و دسته‌بندی‌ها...
                  </span>
                  <span className="text-[10px] font-mono bg-[#111111]/10 text-[#111111] px-2.5 py-1 rounded-md font-bold shrink-0 hidden sm:inline">
                    ⌘ K
                  </span>
                </div>

                {/* CATEGORY CHIPS */}
                <div className="flex items-center gap-2 flex-wrap mt-3.5">
                  <span className="text-xs font-bold text-[#111111]/70 ml-2">
                    محبوب:
                  </span>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                      className="px-3.5 py-1 bg-white/60 hover:bg-[#111111] hover:text-white text-[#111111] border border-[#111111]/10 rounded-full text-xs font-semibold transition-all duration-200"
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
