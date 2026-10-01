'use client';

import React from 'react';
import { ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

export default function CustomerTrustSection() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: 'ضمانت ۱۰۰٪ اصالت',
      description: 'تضمین اصالت و اورجینال بودن تمام اسنیکرها مستقیماً از نمایندگی‌های رسمی جهانی.',
    },
    {
      icon: Truck,
      title: 'ارسال اکسپرس سراسری',
      description: 'تحویل سریع و ایمن به همراه ارسال رایگان برای سفارش‌های بالای ۲ میلیون تومان.',
    },
    {
      icon: RotateCcw,
      title: '۷ روز ضمانت تعویض',
      description: 'امکان تست سایز و تعویض مدل بدون هزینه اضافی در صورت عدم تطابق.',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی اختصاصی استایل',
      description: 'مشاوره تخصصی سایز و انتخاب کتانی توسط تیم استایلیست‌های سولئا.',
    },
  ];

  return (
    <section className="py-10 bg-[#F5F4F0] border-t border-[#E5E4E0] font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E5E4E0] p-5 rounded-2xl flex items-start gap-4 hover:border-[#171717] transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#171717] text-[#CCFF00] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#171717] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#777777] font-vazir leading-relaxed font-normal">
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
