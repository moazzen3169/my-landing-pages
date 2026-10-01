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
    <section className="pt-28 pb-10 sm:pt-36 sm:pb-16 font-peyda" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12">
        {/* HERO CONTAINER WITH SAGE BACKGROUND & RADIUS */}
        <div className="relative bg-[#C8D1CE] rounded-[28px] sm:rounded-[36px] overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16 border border-[#111111]/[0.06] shadow-xl shadow-black/5 min-h-[640px] lg:min-h-[700px] flex flex-col justify-between">

          {/* BACKGROUND SUBTLE NOISE & RADIAL GLOW */}
          <div className="absolute inset-0 bg-gradient-to-bl from-white/30 via-transparent to-black/10 pointer-events-none" />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/20 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />

          {/* TWO-COLUMN GRID CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">

            {/* RIGHT COLUMN (RTL): HEADLINE, TEXT & ACTION BUTTONS */}
            <div className="lg:col-span-7 flex flex-col items-start text-right space-y-6 sm:space-y-8">

              {/* EYEBROW BADGE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-md border border-[#111111]/10 rounded-full text-xs font-bold text-[#111111] shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#A89B84] shrink-0" />
                <span>کالکشن پاییز ۱۴۰۵ — اصالت نوآوری</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              </motion.div>

              {/* MAIN OVERSIZED HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-black text-[#111111] leading-[0.98] tracking-tight font-peyda"
              >
                کفش‌هایی <br />
                برای <span className="underline decoration-[#A89B84]/40 decoration-wavy underline-offset-8">حرکت.</span> <br />
                استایل. <span className="text-[#6B6B68] font-extrabold">روزمرگی.</span>
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-[#3A3A37] font-medium leading-relaxed max-w-xl font-vazir"
              >
                انتخابی دقیق از اسنیکرهای روز دنیا؛ برای تمرین، خیابان و هر جایی که حرکت ادامه دارد. بالاترین کیفیت، ضمانت ۱۰۰٪ اصالت کالا.
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
                  className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white hover:bg-[#252525] font-bold text-sm sm:text-base rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-black/15 group"
                >
                  <span>مشاهده کالکشن</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform shrink-0" />
                </a>

                <a
                  href="#limited-drop"
                  className="w-full sm:w-auto px-7 py-4 bg-white/60 hover:bg-white text-[#111111] border border-[#111111]/15 font-bold text-sm sm:text-base rounded-full transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-md"
                >
                  <Flame className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>جدیدترین دراپ‌ها</span>
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
                      className="px-3 py-1 bg-white/55 hover:bg-[#111111] hover:text-white text-[#111111] border border-[#111111]/10 rounded-full text-xs font-semibold transition-all duration-200"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* LEFT COLUMN (RTL): DOMINANT SNEAKER VISUAL & FLOATING CARDS */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">

              {/* SNEAKER MAIN IMAGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[480px] lg:max-w-[560px] aspect-[4/3] flex items-center justify-center group"
              >
                {/* Visual Backdrop Halo */}
                <div className="absolute inset-0 bg-white/40 rounded-full filter blur-2xl scale-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

                <Image
                  src="/images/landings/solea-sneakers/hero-sneaker.svg"
                  alt="Solea Luxury Sneaker"
                  fill
                  priority
                  className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.22)] -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-700 ease-out"
                />
              </motion.div>

              {/* FLOATING CARD 1: FREE SHIPPING */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: [0, -6, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.5 },
                  y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                }}
                className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-0 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#111111]/10 shadow-xl shadow-black/10 flex items-center gap-3 z-20"
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
              <motion.div
                initial={{ opacity: 0, x: 20, y: -10 }}
                animate={{ opacity: 1, x: 0, y: [0, 6, 0] }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.6 },
                  y: { repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 },
                }}
                className="absolute -top-4 -left-2 sm:top-2 sm:left-0 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-[#111111]/10 shadow-xl shadow-black/10 flex items-center gap-3 z-20"
              >
                <div className="w-10 h-10 rounded-xl bg-[#A89B84] text-black flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold text-[#111111]">
                    ضمانت اصالت ۱۰۰٪
                  </div>
                  <div className="text-[10px] text-[#6B6B68] font-vazir">
                    تضمین بازگشت ۷ روزه کالا
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
