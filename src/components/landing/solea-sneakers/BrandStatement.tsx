'use client';

import React from 'react';
import { ShieldCheck, Activity, Award } from 'lucide-react';

export default function BrandStatement() {
  return (
    <section className="relative bg-white py-28 lg:py-40 font-peyda" dir="rtl">
      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* RIGHT COLUMN (RTL): CLEAR SPORTS STORE VALUE STATEMENT (7 COLS) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>تضمین کیفیت و اصالت اسنیکر</span>
            </div>

            <h2 className="text-3xl sm:text-5xl xl:text-6xl font-black text-black leading-[1.12] tracking-tight mb-6">
              انتخاب تخصصی بهترین
              <br />
              <span className="text-amber-600/50">کفش‌های اسپورت و ورزشی</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-normal mb-8">
              در این فروشگاه، تمامی کفش‌ها با ارزیابی دقیق وزن، قابلیت تنفس‌پذیری و کوشنینگ لایه میانی انتخاب شده‌اند تا بهترین تجربه حرکت و فعالیت ورزشی را در اختیار شما قرار دهند.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-100">
              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-black">اصالت تضمین‌شده</h4>
                <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                  ارسال مستقیم با لایسنس و بارکد معتبر کمپانی تولیدکننده.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-black">تست ارگونومی</h4>
                <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                  بررسی استانداردهای بیومکانیک و پشتیبانی کامل قوس پا.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-black">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-black">تنوع برندهای برتر</h4>
                <p className="text-xs text-neutral-500 font-normal leading-relaxed">
                  کامل‌ترین مجموعه از محبوب‌ترین اسنیکرها و کتانی‌های روز جهان.
                </p>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN (RTL): CLEAN HIGHLIGHT BOX (5 COLS) */}
          <div className="lg:col-span-5 bg-[#F8F8F6] border border-neutral-200 p-8 sm:p-10 rounded-2xl shadow-2xs">
            <div className="space-y-8 ">
              <div className="pt-0">
                <div className="text-xl font-bold text-black mb-2">تست و تعویض ۷ روزه سایز</div>
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  در صورت عدم تناسب سایز، امکان تعویض سریع بدون هزینه‌های اضافی فراهم است.
                </div>
              </div>

              <div className="pt-6">
                <div className="text-xl font-bold text-black mb-2">ارسال سریع و رایگان</div>
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  تحویل اکسپرس سفارش‌ها با بسته‌بندی ویژه محافظ کفش.
                </div>
              </div>

              <div className="pt-6">
                <div className="text-xl font-bold text-black mb-2">مشاوره تخصصی انتخاب کتانی</div>
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  راهنمایی کارشناسان ورزشی برای انتخاب بهترین کفش متناسب با نوع فعالیت شما.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
