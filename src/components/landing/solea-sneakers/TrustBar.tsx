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
      subtitle: 'ضمانت بازگشت وجه در صورت عدم اصالت',
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
      subtitle: 'پاسخگویی کارشناسان استایل',
    },
  ];

  return (
    <section className="py-7 bg-[#F1F5F9] border-y border-[#CBD5E1]/60 font-peyda" dir="rtl">
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center text-right">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 group transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ffffffffffff] border border-[#CBD5E1]/50 flex items-center justify-center text-[#0B1220] group-hover:bg-[#0B1220] group-hover:text-[#F8FAFC] transition-colors shrink-0">
                  <Icon className="w-4 h-4 shrink-0" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#0B1220] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-[#475569] font-peyda mt-0.5 font-normal">
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
