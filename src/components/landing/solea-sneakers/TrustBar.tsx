'use client';

import React from 'react';
import { Star, Shield, Truck, RefreshCw, Headphones } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    {
      icon: Star,
      title: '★★★★★ ۴.۹ از ۵',
      subtitle: '+۱۰,۰۰۰ مشتری راضی',
    },
    {
      icon: Shield,
      title: 'اصالت ۱۰۰٪ کالا',
      subtitle: 'تضمین بازگشت کامل وجه',
    },
    {
      icon: Truck,
      title: 'ارسال اکسپرس',
      subtitle: 'تحویل سریع سراسر ایران',
    },
    {
      icon: RefreshCw,
      title: '۷ روز ضمانت تعویض',
      subtitle: 'تعویض آسان سایز و مدل',
    },
    {
      icon: Headphones,
      title: 'پشتیبانی اختصاصی',
      subtitle: 'پاسخگویی سریع کارشناسان',
    },
  ];

  return (
    <section className="py-6 bg-[#FFFFFF] border-y border-[#E5E4E0] font-peyda" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center text-right">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-2 rounded-xl"
              >
                <div className="w-9 h-9 rounded-lg bg-[#F5F4F0] border border-[#E5E4E0] flex items-center justify-center text-[#171717] shrink-0">
                  <Icon className="w-4 h-4 text-[#171717]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#171717]">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-[#777777] font-vazir mt-0.5 font-normal">
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
