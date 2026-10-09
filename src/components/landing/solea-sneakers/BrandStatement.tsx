'use client';

import React from 'react';
import { ShieldCheck, Activity, Award } from 'lucide-react';

export default function BrandStatement() {
  return (
    <section className="relative bg-white py-12 sm:py-20 lg:py-28 font-peyda text-right border-b border-neutral-200" dir="rtl">
      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* RIGHT COLUMN (RTL): CLEAR SPORTS STORE VALUE STATEMENT */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-neutral-500 uppercase mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-black"></span>
              <span>تضمین کیفیت و اصالت اسنیکر</span>
            </div>

            <h2 className="text-2xl sm:text-4xl xl:text-5xl font-bold text-black leading-tight tracking-tight mb-4 sm:mb-6">
              انتخاب تخصصی بهترین
              <br />
              <span className="text-amber-600 font-semibold">کفش‌های اسپورت و ورزشی</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl font-normal mb-6 sm:mb-8">
              در این فروشگاه، تمامی کفش‌ها با ارزیابی دقیق وزن، قابلیت تنفس‌پذیری و کوشنینگ لایه میانی انتخاب شده‌اند تا بهترین تجربه حرکت و فعالیت ورزشی را در اختیار شما قرار دهند.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-neutral-100">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-black">اصالت تضمین‌شده</h4>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-normal leading-relaxed">
                  ارسال مستقیم با لایسنس و بارکد معتبر کمپانی تولیدکننده.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black shrink-0">
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-black">تست ارگونومی</h4>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-normal leading-relaxed">
                  بررسی استانداردهای بیومکانیک و پشتیبانی کامل قوس پا.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-black shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-black">تنوع برندهای برتر</h4>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-normal leading-relaxed">
                  کامل‌ترین مجموعه از محبوب‌ترین اسنیکرها و کتانی‌های روز جهان.
                </p>
              </div>
            </div>
          </div>

          {/* LEFT COLUMN (RTL): HIGHLIGHT BOX */}
          <div className="lg:col-span-5 bg-[#F8F8F6] border border-neutral-200 p-5 sm:p-8 rounded-2xl shadow-2xs">
            <div className="space-y-6 sm:space-y-8 divide-y divide-neutral-200/80">
              <div className="pt-0">
                <div className="text-base sm:text-lg font-bold text-black mb-1.5">تست و تعویض ۷ روزه سایز</div>
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  در صورت عدم تناسب سایز، امکان تعویض سریع بدون هزینه‌های اضافی فراهم است.
                </div>
              </div>

              <div className="pt-5 sm:pt-6">
                <div className="text-base sm:text-lg font-bold text-black mb-1.5">ارسال سریع و رایگان</div>
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                  تحویل اکسپرس سفارش‌ها با بسته‌بندی ویژه محافظ کفش.
                </div>
              </div>

              <div className="pt-5 sm:pt-6">
                <div className="text-base sm:text-lg font-bold text-black mb-1.5">مشاوره تخصصی انتخاب کتانی</div>
                <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
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
