'use client';

import React from 'react';
import { ShieldCheck, Truck, Clock, RefreshCw } from 'lucide-react';

export default function SupportSection() {
  const supports = [
    {
      icon: ShieldCheck,
      title: 'ضمانت اصالت ۱۰۰٪',
      desc: 'تضمین اصالت تمامی کالاها',
    },
    {
      icon: Truck,
      title: 'ارسال اکسپرس',
      desc: 'تحویل سریع سراسر کشور',
    },
    {
      icon: RefreshCw,
      title: '۷ روز ضمانت بازگشت',
      desc: 'تعویض بدون قید و شرط',
    },
    {
      icon: Clock,
      title: 'پشتیبانی اختصاصی',
      desc: 'مشاوره آنلاین و تلفنی',
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAFA] border-t border-[#E5E5E5] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {supports.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-start gap-3">
                <Icon className="w-5 h-5 text-[#000000] stroke-[1.25]" />
                <div>
                  <h3 className="text-xs font-normal text-[#000000]">{item.title}</h3>
                  <p className="text-[11px] text-[#666666] mt-1 font-normal">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
