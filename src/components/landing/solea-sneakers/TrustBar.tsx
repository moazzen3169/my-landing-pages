'use client';

import React from 'react';
import { Star, Shield, Truck, RefreshCw, Headphones } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Star,
      title: '★★★★★ ۴.۹ از ۵',
      subtitle: '+۱۰,۰۰۰ رضایت ثبت‌شده مشتریان',
    },
    {
      icon: Shield,
      title: 'اصالت ۱۰۰٪ کالا',
      subtitle: 'ضمانت بازگشت تمام وجه در صورت عدم اصالت',
    },
    {
      icon: Truck,
      title: 'ارسال ایمن و سریع',
      subtitle: 'تحویل اکسپرس ۲۴ ساعته در سراسر ایران',
    },
    {
      icon: RefreshCw,
      title: '۷ روز ضمانت تعویض',
      subtitle: 'تعویض سایز و مدل بدون هزینه اضافی',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی اختصاصی',
      subtitle: 'پاسخگویی سریع کارشناسان استایل',
    },
  ];

  return (
    <section className="py-8 bg-[#FAFAF7] border-y border-[#111111]/[0.06] font-peyda" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center text-right">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 group transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F4F5F2] border border-[#111111]/10 flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all shrink-0 shadow-sm">
                  <Icon className="w-4 h-4 shrink-0" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#111111] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#6B6B68] font-vazir mt-0.5 font-normal">
                    {item.subtitle}
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
