'use client';

import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export default function CustomerTrustSection() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: 'اصالت ۱۰۰٪ کالا',
      description: 'تضمین اصالت و اورجینال بودن تمام اسنیکرها مستقیماً از نمایندگی‌های رسمی.',
    },
    {
      icon: Truck,
      title: 'ارسال اکسپرس سراسری',
      description: 'بسته‌بندی ایمن کادویی و ارسال رایگان برای خریدهای بالای ۲ میلیون تومان.',
    },
    {
      icon: RotateCcw,
      title: '۷ روز ضمانت بازگشت',
      description: 'فرصت تست سایز و تعویض بی‌قید و شرط مدل بدون پرداخت هزینه‌های جانبی.',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی اختصاصی استایل',
      description: 'مشاوره رایگان انتخاب سایز و استایل در تمام روزهای هفته از ۸ صبح تا ۱۲ شب.',
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-[#F4F5F2] border-t border-[#111111]/[0.08] font-peyda text-right" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAFAF7] border border-[#111111]/[0.08] p-6 rounded-[22px] transition-all duration-300 hover:border-[#111111]/30 hover:shadow-lg shadow-black/5 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#111111] text-white flex items-center justify-center mb-5 shadow-md">
                    <Icon className="w-6 h-6 shrink-0" />
                  </div>
                  <h3 className="text-base font-bold text-[#111111] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B6B68] font-vazir leading-relaxed font-normal">
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
