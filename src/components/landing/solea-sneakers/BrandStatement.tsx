'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BrandStatement() {
  return (
    <section className="relative bg-[#F3F3F1] py-24 lg:py-36 border-b border-[#D9D9D5] overflow-hidden font-peyda" dir="rtl">
      {/* OVERSIZED BACKGROUND TYPOGRAPHY "STYLE" */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none select-none opacity-5 text-center overflow-hidden">
        <span className="text-[25vw] font-black leading-none uppercase tracking-tighter text-[#0A0A0A]">
          STYLE
        </span>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* RIGHT COLUMN (RTL): BIG EDITORIAL STATEMENT (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#6B6B68] uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
              <span>PHILOSOPHY & VISION</span>
            </div>

            <h2 className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#0A0A0A] leading-[1.08] tracking-tight mb-8">
              ما فقط کفش
              <br />
              <span className="text-[#0A0A0A]/40">نمی‌فروشیم.</span>
            </h2>

            <p className="text-xl sm:text-2xl font-bold text-[#0A0A0A] leading-relaxed mb-6">
              ما انتخاب می‌کنیم که هر قدم، بخشی از سبک زندگی و هویت مدرن شما باشد.
            </p>

            <p className="text-base sm:text-lg text-[#6B6B68] leading-relaxed max-w-2xl font-normal">
              در SOLEA ما معتقدیم اسنیکرها فراتر از یک پوشش روزمره‌اند؛ آن‌ها نقطه تلاقی هنر خیابانی، نوآوری تکنولوژیک و بیانیه فردی هستند. هر مدل در مجموعه‌مان با وسواس تخصصی انتخاب شده تا تجربه‌ای متفاوت از راحتی و استایل ارائه دهد.
            </p>
          </div>

          {/* LEFT COLUMN (RTL): STATS & ASYMMETRICAL EDITORIAL BOX (5 COLS) */}
          <div className="lg:col-span-5 bg-[#E8E8E5] border border-[#D9D9D5] p-8 sm:p-10 rounded-2xl">
            <div className="space-y-8 divide-y divide-[#D9D9D5]">
              <div className="pt-0">
                <div className="text-3xl font-black text-[#0A0A0A] mb-2">اصالت تضمین‌شده</div>
                <div className="text-sm text-[#6B6B68] leading-relaxed">
                  تأمین مستقیم و بی‌واسطه از نمایندگی‌های معتبر اروپایی و آسیایی با کد شناسه معتبر.
                </div>
              </div>

              <div className="pt-6">
                <div className="text-3xl font-black text-[#0A0A0A] mb-2">بررسی تخصصی ارگونومی</div>
                <div className="text-sm text-[#6B6B68] leading-relaxed">
                  تست و ارزیابی دقیق وزن، قوس پا و کوشنینگ توسط تیم متخصص اسنیکر.
                </div>
              </div>

              <div className="pt-6">
                <div className="text-3xl font-black text-[#0A0A0A] mb-2">جامعه مخاطبان SOLEA</div>
                <div className="text-sm text-[#6B6B68] leading-relaxed">
                  بیش از ۱۵,۰۰۰ خریدار وفادار در سراسر ایران که به زیبایی‌شناسی مدرن اهمیت می‌دهند.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
