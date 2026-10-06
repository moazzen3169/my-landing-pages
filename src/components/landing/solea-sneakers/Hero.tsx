"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Sparkles, ArrowDownRight, ArrowDownLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SOLEA_PRODUCTS } from "@/data/solea-sneakers";
import { formatPersianPrice } from "@/lib/utils";

interface HeroProps {
  onOpenSearch: () => void;
  onOpenQuickView?: (productId: string) => void;
}

export default function Hero({ onOpenSearch }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);

  // Hero product - featured flagship product
  const heroProduct = SOLEA_PRODUCTS[0]; // Adidas Adistar XLG 2.0 Luxe

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth scroll transformations
  const heroShoeY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroShoeRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const heroShoeScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-[#F3F3F1] pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-between font-peyda border-b border-[#D9D9D5]"
      dir="rtl"
    >
      {/* OVERSIZED BACKGROUND TYPOGRAPHY (PERSION "حرکت") */}
      <motion.div
        style={{ x: bgTextX }}
        className="absolute top-1/2 -translate-y-1/2 right-[5%] left-0 pointer-events-none select-none z-0 whitespace-nowrap overflow-hidden opacity-10"
      >
        <span className="text-[22vw] font-black leading-none text-[#0A0A0A] tracking-tighter">
          حرکـــــت
        </span>
      </motion.div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 w-full flex-1 flex flex-col justify-between">

        {/* TOP ROW: EYEBROW & META */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D9D9D5]/80 pb-4 mb-8 lg:mb-12">
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0A0A0A]/70 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
            <span>SOLEA / COLLECTION 2026</span>
          </div>
          <div className="text-xs font-medium text-[#6B6B68]">
            طراحی ارگونومیک • کیفیت پرمیوم • نسخه محدود
          </div>
        </div>

        {/* CENTER CONTENT GRID (ASYMMETRICAL EDITORIAL LAYOUT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">

          {/* RIGHT COLUMN (RTL): HEADLINE, TEXT, CTAs (6 COLS) */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E8E8E5] border border-[#D9D9D5] rounded-full text-[11px] font-semibold text-[#0A0A0A] mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#0A0A0A]" />
              <span>بازتعریف زیبایی‌شناسی اسنیکر</span>
            </div>

            {/* GIANT HEADLINE */}
            <h1 className="text-5xl sm:text-7xl xl:text-[84px] font-black text-[#0A0A0A] leading-[1.02] tracking-tight mb-6">
              هر قدم،
              <br />
              <span className="text-[#0A0A0A]/40 font-black">یک بیانیه است.</span>
            </h1>

            {/* SUPPORTING TEXT */}
            <p className="text-base sm:text-lg text-[#6B6B68] max-w-lg leading-relaxed font-normal mb-8 sm:mb-10">
              تلفیق ارگونومی تخصصی، ساختار مدرن معماری و اصالت استریت‌ویر. انتخابی بی‌زمان برای کسانی که سبک زندگی خود را خلق می‌کنند.
            </p>

            {/* CALL TO ACTIONS */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0A0A0A] text-[#F3F3F1] hover:bg-[#222222] font-semibold text-sm rounded-full transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <span>کشف کالکشن جدید</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="#limited-drop"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent hover:bg-[#E8E8E5] text-[#0A0A0A] border border-[#D9D9D5] hover:border-[#0A0A0A] font-semibold text-sm rounded-full transition-all duration-300"
              >
                <span>دراپ‌های محدود</span>
              </a>
            </div>
          </div>

          {/* LEFT COLUMN (RTL): FLOATING HERO PRODUCT WITH PARALLAX (6 COLS) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-6 lg:py-0">

            {/* FLOATING PRODUCT CANVAS */}
            <motion.div
              style={{
                y: heroShoeY,
                rotate: heroShoeRotate,
                scale: heroShoeScale,
              }}
              className="relative w-full max-w-[580px] aspect-4/3 flex items-center justify-center group"
            >
              {/* SUBTLE BACKGROUND CIRCLE GLOW */}
              <div className="absolute inset-4 rounded-full bg-[#E8E8E5]/70 blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700"></div>

              {/* OVERSIZED SECONDARY ENGLISH BRAND TEXT */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none font-black text-8xl sm:text-9xl uppercase tracking-widest text-[#0A0A0A]">
                SOLEA
              </div>

              {/* SNEAKER IMAGE */}
              <div className="relative w-full h-full p-4 flex items-center justify-center">
                <Image
                  src={heroProduct.images[0]}
                  alt={heroProduct.name}
                  fill
                  priority
                  className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* HOVER / INTERACTIVE PRODUCT BADGE (TSSF STYLE EDITORIAL CHIP) */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-[#F3F3F1]/95 backdrop-blur-md border border-[#D9D9D5] p-3.5 sm:p-4 rounded-2xl shadow-lg max-w-[240px] opacity-95 group-hover:opacity-100 transition-all duration-300">
                <div className="text-[10px] font-mono font-bold uppercase text-[#6B6B68] mb-1">
                  FLAGSHIP MODEL
                </div>
                <div className="text-xs font-bold text-[#0A0A0A] line-clamp-1">
                  {heroProduct.name}
                </div>
                <div className="text-xs font-semibold text-[#0A0A0A] mt-1 flex items-center justify-between">
                  <span>{formatPersianPrice(heroProduct.price)}</span>
                  <a
                    href="#products"
                    className="text-[11px] text-[#6B6B68] hover:text-[#0A0A0A] underline underline-offset-2 flex items-center gap-0.5"
                  >
                    <span>مشاهده</span>
                    <ArrowDownLeft className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* BOTTOM METRICS & SPECIFICATIONS STRIP */}
        <div className="pt-10 lg:pt-14 border-t border-[#D9D9D5]/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-right">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">۳۴۰g</div>
            <div className="text-xs text-[#6B6B68] font-medium mt-0.5">وزن فوق‌العاده سبک</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">Adiprene+</div>
            <div className="text-xs text-[#6B6B68] font-medium mt-0.5">کوشنینگ و جذب ضربه دوگانه</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">۱۰۰٪</div>
            <div className="text-xs text-[#6B6B68] font-medium mt-0.5">ضمانت اصالت و اورجینال</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#0A0A0A]">۲۴ ساعته</div>
            <div className="text-xs text-[#6B6B68] font-medium mt-0.5">ارسال اکسپرس سراسر کشور</div>
          </div>
        </div>

      </div>
    </section>
  );
}
