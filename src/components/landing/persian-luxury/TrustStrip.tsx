'use client';

import React from 'react';
import { ShieldCheck, Lock, Truck, Headset } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'اصالت کالا',
      description: 'محصولات منتخب با ضمانت اصالت فروشگاه',
    },
    {
      icon: Lock,
      title: 'پرداخت امن',
      description: 'پرداخت آنلاین امن و مطمئن',
    },
    {
      icon: Truck,
      title: 'ارسال به سراسر ایران',
      description: 'ارسال سریع و قابل پیگیری',
    },
    {
      icon: Headset,
      title: 'پشتیبانی خرید',
      description: 'پاسخ‌گویی برای انتخاب بهتر',
    },
  ];

  return (
    <section className="bg-[#F2EFE9] border-y border-[#DDD9D2] py-8 sm:py-10 font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-3 rounded-xs text-start transition-all hover:bg-[#F7F5F1]/60"
              >
                <div className="p-2.5 bg-[#F7F5F1] border border-[#DDD9D2] text-[#B29A6A] shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#171717] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#77736D] leading-relaxed">
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
