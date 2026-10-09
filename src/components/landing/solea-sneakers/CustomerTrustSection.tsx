'use client';

import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export default function CustomerTrustSection() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: 'اصالت ۱۰۰٪ کالا',
      description: 'تضمین اصالت تمام اسنیکرها مستقیماً از نمایندگی‌های رسمی جهانی.',
    },
    {
      icon: Truck,
      title: 'ارسال اکسپرس سراسری',
      description: 'بسته‌بندی ایمن کادویی و ارسال رایگان برای خریدهای بالای ۲۰ میلیون تومان.',
    },
    {
      icon: RotateCcw,
      title: '۷ روز ضمانت بازگشت',
      description: 'فرصت تست سایز و تعویض بی‌قید و شرط مدل بدون هزینه‌های جانبی.',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی اختصاصی استایل',
      description: 'مشاوره رایگان انتخاب سایز و استایل همه‌روزه از ۸ صبح تا ۱۲ شب.',
    },
  ];

  return (
    <section className="py-12 sm:py-20 lg:py-28 bg-[#F8F8F6] border-t border-b border-neutral-200 font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-neutral-200 p-4 sm:p-6 rounded-2xl transition-all duration-300 hover:border-black flex flex-col justify-between shadow-2xs hover:shadow-md"
              >
                <div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black text-white flex items-center justify-center mb-3 sm:mb-4 shadow-2xs">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  </div>
                  <h3 className="text-xs sm:text-base font-bold text-black mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-600 font-peyda leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
