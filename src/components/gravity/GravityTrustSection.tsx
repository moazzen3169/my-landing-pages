'use client';

import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones } from 'lucide-react';

export default function GravityTrustSection() {
  const trustItems = [
    {
      icon: Truck,
      titleFa: 'ارسال به سراسر ایران',
      descFa: 'ارسال ایمن و سریع با پست پیشتاز و تیپاکس به تمامی شهرهای ایران.',
    },
    {
      icon: ShieldCheck,
      titleFa: 'پرداخت امن و مطمئن',
      descFa: 'پرداخت آنلاین از طریق درگاه‌های عضو شبکه شتاب با بالاترین امنیت.',
    },
    {
      icon: RefreshCw,
      titleFa: 'ضمانت تعویض سایز',
      descFa: 'امکان تعویض سایز و کالا تا ۷ روز پس از تحویل سفارش.',
    },
    {
      icon: Headphones,
      titleFa: 'پشتیبانی اختصاصی',
      descFa: 'مشاوره استایل و پشتیبانی پاسخگو قبل و بعد از ثبت سفارش.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F8F9FA] border-b border-[#D7D4CD] font-peyda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 bg-white border border-[#E5E5E5] rounded-xs"
              >
                <div className="p-3 bg-[#F3F2EE] text-[#2563EB] rounded-xs shrink-0">
                  <Icon size={22} className="stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111111] mb-1">
                    {item.titleFa}
                  </h3>
                  <p className="text-xs text-[#666666] font-medium leading-relaxed">
                    {item.descFa}
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
