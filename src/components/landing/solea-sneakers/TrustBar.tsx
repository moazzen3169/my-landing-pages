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
    <section className="bg-[#F8F8F6] py-8 sm:py-12 border-b border-[#E8E8E5] font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white border border-neutral-200 p-3.5 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center gap-3 shadow-2xs hover:border-black transition-colors"
              >
                <div className="p-2.5 sm:p-3 bg-[#F3F3F1] border border-neutral-200 rounded-xl shrink-0 text-[#0A0A0A]">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0A0A0A] mb-0.5 sm:mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#6B6B68] leading-relaxed font-normal line-clamp-2">
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
