'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Compass } from 'lucide-react';

export default function EditorialStory() {
  const storeHighlights = [
    { label: 'اصالت ۱۰۰٪ کالا', desc: 'واردات مستقیم اسنیکرهای اورجینال با شناسه اصلی' },
    { label: 'تست فیزیکی ارگونومی', desc: 'بررسی لایه کوشنینگ و قوس پا قبل از تحویل' },
    { label: 'ارسال اکسپرس سراسری', desc: 'تحویل سریع و ایمن سفارشات در کوتاه‌ترین زمان' },
  ];

  return (
    <div id="editorial" className="font-peyda text-right" dir="rtl">

      {/* 01 — CLEAN SNEAKER FEATURE HIGHLIGHT */}
      <section className="py-12 sm:py-20 lg:py-28 bg-white border-b border-neutral-200 relative overflow-hidden">
        <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">
          <div className="bg-[#ffffff] text-black relative overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

              {/* RIGHT COLUMN (RTL): STATEMENT & STORE PROOF POINTS */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-neutral-200 text-xs font-mono font-bold text-black uppercase tracking-wider rounded-full shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                  <span>کیفیت و استاندارد ورزشی</span>
                </div>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight tracking-tight">
                  فن‌آوری پیشرفته
                  <br />
                  <span className="text-neutral-400 font-normal">در هر گام و هر فعالیت.</span>
                </h2>

                {/* PROOF POINTS */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-neutral-200">
                  {storeHighlights.map((item, idx) => (
                    <div key={idx} className="bg-[#F8F8F6] p-3.5 sm:p-4 border border-neutral-200 rounded-xl shadow-2xs">
                      <div className="text-xs sm:text-sm font-bold text-black font-sans mb-1">{item.label}</div>
                      <div className="font-normal text-neutral-500 text-[11px] sm:text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#products"
                    className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-black hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm rounded-full transition-colors group shadow-xs active:scale-95"
                  >
                    <Compass className="w-4 h-4 shrink-0" />
                    <span>کشف جدیدترین مدل‌ها</span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* LEFT COLUMN (RTL): SPOTLIGHT SNEAKER IMAGE */}
              <div className="lg:col-span-5 relative aspect-[4/3] sm:aspect-[5/6] bg-[#F8F8F6] border border-neutral-200 rounded-2xl flex items-center justify-center overflow-hidden group shadow-2xs">
                <Image
                  src="/images/landings/solea-sneakers/ADISTAR_XLG_2.0_SCHOENEN_Grijs_KJ7895_00_standard.png"
                  alt="Solea Sneaker Feature"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 left-3 bg-white/95 backdrop-blur-md p-3 sm:p-4 border border-neutral-200 rounded-xl text-right shadow-xs">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest text-neutral-400 uppercase block">
                    FEATURED MODEL
                  </span>
                  <p className="text-xs sm:text-sm text-black font-bold mt-0.5">
                    Adidas Adistar XLG 2.0 Luxe — طراحی ارگونومیک لایه میانی
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 02 — SPLIT CAMPAIGN SECTION FOR MEN AND WOMEN SNEAKER COLLECTIONS */}
      <section className="py-12 sm:py-20 lg:py-28 bg-[#F8F8F6] border-b border-neutral-200">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">

            {/* MEN CAMPAIGN BLOCK */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[440px] lg:min-h-[520px] bg-white border border-neutral-200 rounded-3xl overflow-hidden group shadow-2xs">
              <Image
                src="/images/landings/solea-sneakers/man.png"
                alt="Solea Campaign Men"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 sm:p-10 flex flex-col justify-end">
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white/80 uppercase mb-1.5">
                  MEN'S SNEAKER COLLECTION
                </span>
                <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight mb-1.5">
                  کفش‌های اسپورت مردانه
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 font-normal">
                  مجموعه‌ای کامل از کتانی‌های تخصصی و روزمره مردانه با بالاترین کیفیت.
                </p>
              </div>
            </div>

            {/* WOMEN CAMPAIGN BLOCK */}
            <div className="lg:col-span-6 relative min-h-[320px] sm:min-h-[440px] lg:min-h-[520px] bg-white border border-neutral-200 rounded-3xl overflow-hidden group shadow-2xs">
              <Image
                src="/images/landings/solea-sneakers/woman.png"
                alt="Solea Campaign Women"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6 sm:p-10 flex flex-col justify-end">
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white/80 uppercase mb-1.5">
                  WOMEN'S SNEAKER COLLECTION
                </span>
                <h3 className="text-xl sm:text-3xl font-bold text-white leading-tight mb-1.5">
                  کفش‌های اسپورت زنانه
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 font-normal">
                  طراحی‌شده برای سبکی، انعطاف‌پذیری و راحتی بی‌نظیر در طول روز.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
