"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, Sparkles, ArrowDownLeft } from "lucide-react";
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
  const heroShoeY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroShoeRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const heroShoeScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <section
      ref={heroRef}
      className="relative bg-[#F8F8F6] pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden flex flex-col justify-between font-peyda border-b border-neutral-200"
      dir="rtl"
    >
      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 w-full flex-1 flex flex-col justify-between">

        {/* TOP ROW: STORE META */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-200 pb-5 mb-10 lg:mb-16">
          <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-black uppercase">
            <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
            <span>فروشگاه تخصصی کفش و اسنیکر اسپورت</span>
          </div>
          <div className="text-xs font-medium text-neutral-500">
            تضمین اصالت کالا • ارسال سریع • تنوع جدیدترین مدل‌های روز
          </div>
        </div>

        {/* CENTER CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center my-auto py-4">

          {/* RIGHT COLUMN (RTL): STORE HEADLINE & CTAs (6 COLS) */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-neutral-200 rounded-full text-xs font-semibold text-black mb-6 shadow-2xs">
              <Sparkles className="w-4 h-4 text-black" />
              <span>کالکشن جدید اسنیکرهای اسپورت ۲۰۲۶</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-black leading-[1.08] tracking-tight mb-6">
              جدیدترین کفش‌های اسپورت
              <br />
              <span className="text-neutral-400 font-bold">و اسنیکرهای اورجینال</span>
            </h1>

            {/* SUPPORTING TEXT - CLEAR AND CONCISE */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-lg leading-relaxed font-normal mb-8 lg:mb-10">
              مجموعه‌ای کامل از برترین مدل‌های تخصصی دویدن، تمرین و استفاده روزمره با طراحی ارگونومیک و راحتی فوق‌العاده.
            </p>

            {/* CALL TO ACTIONS */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white hover:bg-neutral-800 font-semibold text-sm rounded-full transition-all duration-300 group shadow-xs hover:shadow-md"
              >
                <span>مشاهده و خرید کفش‌ها</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform duration-300" />
              </a>

              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-neutral-100 text-black border border-neutral-200 hover:border-black font-semibold text-sm rounded-full transition-all duration-300 shadow-2xs"
              >
                <span>دسته‌بندی‌های ورزشی</span>
              </a>
            </div>
          </div>

          {/* LEFT COLUMN (RTL): ENLARGED HERO SNEAKER DISPLAY (6 COLS) */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4 lg:py-0">

            <motion.div
              style={{
                y: heroShoeY,
                rotate: heroShoeRotate,
                scale: heroShoeScale,
              }}
              className="relative w-full max-w-[620px] aspect-4/3 flex items-center justify-center group"
            >
              {/* CLEAN LIGHT BACKGROUND SHADOW */}
              <div className="absolute inset-2 rounded-full bg-neutral-200/50 blur-3xl -z-10 group-hover:scale-105 transition-transform duration-700"></div>

              {/* SNEAKER IMAGE - LARGER & PROMINENT */}
              <div className="relative w-full h-full p-2 flex items-center justify-center">
                <Image
                  src={heroProduct.images[0]}
                  alt={heroProduct.name}
                  fill
                  priority
                  className="object-contain transform group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              {/* PRODUCT QUICK CHIP */}
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 bg-white border border-neutral-200 p-4 rounded-2xl shadow-md max-w-[260px] transition-all duration-300">
                <div className="text-[10px] font-mono font-bold uppercase text-neutral-400 mb-1">
                  مدل ویژه فروشگاه
                </div>
                <div className="text-xs font-bold text-black line-clamp-1">
                  {heroProduct.name}
                </div>
                <div className="text-xs font-bold text-black mt-1.5 flex items-center justify-between pt-1.5 border-t border-neutral-100">
                  <span>{formatPersianPrice(heroProduct.price)}</span>
                  <a
                    href="#products"
                    className="text-[11px] text-neutral-600 hover:text-black font-medium underline underline-offset-2 flex items-center gap-0.5"
                  >
                    <span>خرید</span>
                    <ArrowDownLeft className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* BOTTOM STORE ADVANTAGES STRIP */}
        <div className="pt-12 lg:pt-16 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-8 text-right">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-black">۳۴۰ گرم</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">وزن سبک و راحتی حرکت</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-black">جذب ضربه دوگانه</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">کوشنینگ پیشرفته ورزشی</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-black">۱۰۰٪ اورجینال</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">تضمین اصالت تمام برندها</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-black">تحویل اکسپرس</div>
            <div className="text-xs text-neutral-500 font-medium mt-1">ارسال سریع به سراسر کشور</div>
          </div>
        </div>

      </div>
    </section>
  );
}
