'use client';

import React from 'react';
import { Truck, ShieldCheck, RefreshCw, CreditCard } from 'lucide-react';

export default function TrustSection() {
  const trustItems = [
    {
      icon: <Truck className="w-5 h-5 text-[#FF5A1F]" />,
      title: 'ارسال سریع',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#2455FF]" />,
      title: 'اصالت کالا',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#B7FF00]" />,
      title: 'تعویض آسان',
    },
    {
      icon: <CreditCard className="w-5 h-5 text-emerald-500" />,
      title: 'پرداخت امن',
    },
  ];

  return (
    <section className="py-10 bg-[#F5F3EE] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-right">
              <div className="p-2.5 rounded-xl bg-[#F5F3EE] border border-slate-200 shrink-0">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold font-peyda text-[#111111]">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
