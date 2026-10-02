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
    <section className="py-10 sm:py-14 bg-[#F1F5F9] border-t border-[#CBD5E1]/60 font-peyda text-right" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#ffffffffffff] border border-[#CBD5E1]/60 p-6 rounded-[20px] transition-colors duration-300 hover:border-[#0B1220] flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#0B1220] text-[#F8FAFC] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1220] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#475569] font-peyda leading-relaxed font-normal">
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
