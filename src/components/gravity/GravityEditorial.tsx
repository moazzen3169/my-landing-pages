'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDownLeft, CheckCircle2 } from 'lucide-react';

export default function GravityEditorial() {
  return (
    <section className="py-20 md:py-28 bg-[#111111] text-white font-peyda overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Text Content (Desktop: 6 cols) */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <span className="text-xs font-bold text-[#3B82F6] tracking-widest uppercase block bg-[#2563EB]/20 w-fit px-3 py-1 rounded-full border border-[#2563EB]/40">
              انتخاب گراویتی / GRAVITY SELECT
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              برای وقتی که
              <br />
              جزئیات مهم‌اند.
            </h2>

            <p className="text-sm sm:text-base text-[#AAAAAA] leading-relaxed font-medium max-w-xl">
              در گراویتی، انتخاب هر کت، پیراهن یا اکسسوری بر اساس استانداردهای دقیق خیاطی کلاسیک و الگوهای مدرن انجام می‌شود. کیفیت پارچه، خط اتو، افت و ایستایی روی بدن، جزییاتی هستند که استایل شما را متمایز می‌سازند.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#CCCCCC]">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#3B82F6] shrink-0" />
                <span>پارچه‌های مرینو، کشمیر و لینن وارداتی با استاندارد اروپایی</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#3B82F6] shrink-0" />
                <span>الگوهای تن‌خور کاستوم فیت و تیلورد فیت دقیق</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-[#3B82F6] shrink-0" />
                <span>برگزیده‌شده از میان بیش از ۲۰ برند مطرح پوشاک مردانه</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#styles"
                className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm rounded-xs transition-colors"
              >
                <span>مشاهده استایل‌ها</span>
                <ArrowDownLeft size={16} />
              </a>
            </div>
          </div>

          {/* Large Lifestyle Image (Desktop: 6 cols) */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full rounded-xs overflow-hidden border border-[#333333] shadow-2xl">
              <Image
                src="/images/gravity/for-hero-section-3.png"
                alt="Gravity Editorial Selection"
                fill
                className="object-cover object-top hover:scale-102 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 right-6 left-6 p-4 bg-black/60 backdrop-blur-md rounded-xs border border-white/10">
                <span className="text-[10px] text-[#2563EB] font-bold block mb-0.5">
                  GRAVITY EDITORIAL 2026
                </span>
                <p className="text-xs text-white font-medium">
                  کالکشن ترکیبی کت تک لینن و پیراهن آکسفورد
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
