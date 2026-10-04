'use client';

import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Headphones, CreditCard, Award } from 'lucide-react';

export default function TrustSection() {
  const trustItems = [
    {
      icon: <Truck className="w-6 h-6 text-[#FF5A1F]" />,
      title: 'ارسال اکسپرس سراسری',
      description: 'ارسال فوری در تهران (۲ ساعته) و ارسال پیشتاز ۲۴ الی ۴۸ ساعته به کل کشور.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#2455FF]" />,
      title: 'ضمانت اصالت ۱۰۰٪',
      description: 'تمامی محصولات دارای هولوگرام و تاییدیه اصالت برند اصلی می‌باشند.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#B7FF00]" />,
      title: '۷ روز مهلت تعویض',
      description: 'امکان تعویض سایز یا مدل تا ۷ روز کاری بدون قید و شرط.',
    },
    {
      icon: <CreditCard className="w-6 h-6 text-emerald-500" />,
      title: 'پرداخت امن آنلاین',
      description: 'درگاه‌های بانکی رسمی کشور با بالاترین سطح امنیت پروتکل‌های رمزنگاری.',
    },
  ];

  return (
    <section className="py-12 bg-[#F5F3EE] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-start text-right space-y-3">
              <div className="p-3 rounded-2xl bg-[#F5F3EE] border border-slate-200 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-base font-extrabold font-peyda text-[#111111]">
                {item.title}
              </h3>
              <p className="text-xs font-peyda text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
