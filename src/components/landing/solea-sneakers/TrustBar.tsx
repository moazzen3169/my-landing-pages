'use client';

import React from 'react';
import { ShieldCheck, Truck, RefreshCw, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrustBar() {
  const trustItems = [
    {
      icon: ShieldCheck,
      title: 'اصالت ۱۰۰٪',
      description: 'تضمین اصالت کالا و گارانتی بازگشت وجه',
    },
    {
      icon: Truck,
      title: 'ارسال سریع',
      description: 'تحویل ایمن و سریع به سراسر ایران',
    },
    {
      icon: RefreshCw,
      title: '۷ روز ضمانت',
      description: 'امکان تعویض سایز و مدل بدون هزینه اضافه',
    },
    {
      icon: Headset,
      title: 'پشتیبانی اختصاصی',
      description: 'مشاوره حرفه‌ای انتخاب سایز و استایل',
    },
  ];

  return (
    <section className="bg-[#F3F3F1] py-12 sm:py-16 border-b border-[#D9D9D5] font-peyda" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#D9D9D5]">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-start gap-4 ${index !== 0 ? 'pt-6 sm:pt-0 sm:pr-8' : ''}`}
              >
                <div className="p-3 bg-[#E8E8E5] border border-[#D9D9D5] rounded-xl shrink-0 text-[#0A0A0A]">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0A0A0A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B6B68] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
