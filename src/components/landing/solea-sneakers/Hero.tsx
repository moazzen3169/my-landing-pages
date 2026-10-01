'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Sparkles, ArrowLeft, Flame, Zap, Shield } from 'lucide-react';
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

  const quickStats = [
    {  value: '۲۸۰g', desc: 'وزن فوق‌العاده سبک' },
    {  value: '۸mm', desc: 'زاویه استاندارد گام' },
    {  value: 'Adiprene+', desc: 'جذب ضربه دوگانه' },
  ];

  return (
    <section className="pt-20 sm:pt-20 font-peyda" dir="rtl">
      <div className="w-full mx-auto px-4 sm:px-4 ">
        {/* HERO CONTAINER - DEEP NAVY PREMIUM EDITORIAL CANVAS */}
        <div className="relative bg-[#3695bb]  rounded-[24px] sm:rounded-[32px] h-[85dvh] overflow-hidden p-6 sm:p-10 md:p-12 lg:px-20 lg:py-10 border border-[#CBD5E1]/15 text-[#F8FAFC]">

          {/* SUBTLE ARCHITECTURAL ACCENTS */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8FA9C4] via-[#ffffff] to-transparent pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#8ddfff] rounded-full filter blur-3xl pointer-events-none" />

          {/* GRID CONTENT */}
          <div className="relative z-10 max-w-[1100px] max-h-[85dvh] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-2 lg:gap-2 items-center">

            {/* RIGHT COLUMN (RTL): HEADLINE & VISUAL SPECS */}
            <div className="lg:col-span-7 flex flex-col items-start text-right space-y-6">



              {/* MAIN HEADLINE */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-black text-[#F8FAFC] leading-[1.2] font-peyda tracking-normal"
              >
                حرکت بدون محدودیت؛ <br />
                <span className="text-[#16233A]">مهندسی سرعت</span> و استایل.
              </motion.h1>

                            {/* HERO INTERACTIVE SEARCH FIELD */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-full max-w-lg pt-2"
              >
                <div
                  onClick={onOpenSearch}
                  className="cursor-pointer group relative flex items-center bg-[#c6ccd6]  border border-[#CBD5E1]/20 w-full rounded-full px-4 py-3 transition-colors"
                >
                  <Search className="w-4 h-4 text-[#8FA9C4] shrink-0 ml-2.5" />
                  <span className="text-xs text-[#0B1220] font-normal flex-grow">
                    جستجوی سریع بر اساس مدل، برند یا کاربرد...
                  </span>
                </div>
              </motion.div>

              {/* SHOW, DON'T TELL: SCANNABLE VISUAL SPECIFICATIONS GRID */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-2"
              >
                {quickStats.map((stat, i) => (
                  <div
                    key={i}
                    className=" flex flex-col justify-between"
                  >
                    <span className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-peyda my-1">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-[#CBD5E1] font-normal">
                      {stat.desc}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
              >
                <a
                  href="#products"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#F8FAFC] text-[#0B1220] hover:bg-[#8FA9C4] hover:text-[#0B1220] font-semibold text-xs sm:text-sm rounded-full transition-colors flex items-center justify-center gap-2.5 group"
                >
                  <span>مشاهده محصولات</span>
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform shrink-0" />
                </a>

                <a
                  href="#limited-drop"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#16233A] hover:bg-[#0B1220] text-[#F8FAFC] border border-[#CBD5E1]/20 font-semibold text-xs sm:text-sm rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 text-[#8FA9C4] shrink-0" />
                  <span>نسخه‌های محدود</span>
                </a>
              </motion.div>



            </div>

            {/* LEFT COLUMN (RTL): HERO PRODUCT SPOTLIGHT VISUAL */}
            <div className="lg:col-span-5 relative flex items-center justify-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative w-full max-w-[400px] h-[550px] aspect-[4/5]  rounded-2xl overflow-hidden  flex items-center justify-center p-6"
              >
                <Image
                  src="/images/landings/solea-sneakers/Sporty-Woman-on-Gray-Studio-Block-for-hero-section.png"
                  alt="Solea Luxury Sneaker Hero"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out"
                />

                {/* OVERLAY BADGE (NO DROP SHADOW) */}
                <div className="absolute bottom-4 right-4 z-10 bg-[#0B1220]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#CBD5E1]/20 text-right">
                  <div className="text-xs font-bold text-[#F8FAFC]">ADISTAR XLG 2.0</div>
                  <div className="text-[10px] text-[#8FA9C4] font-mono mt-0.5">ADIPRENE CUSHIONING</div>
                </div>

                {/* TOP LEFT METRIC TAG */}
                <div className="absolute top-0 left-4 z-10 bg-[#0B1220]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#CBD5E1]/20 text-center">
                  <span className="text-[11px] font-mono font-bold text-[#8FA9C4] block">100% AUTHENTIC</span>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
