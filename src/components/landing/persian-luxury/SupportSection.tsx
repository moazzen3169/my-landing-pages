'use client';

import React from 'react';
import { PhoneCall, MessageSquare, Compass } from 'lucide-react';
import { TABRIZ_STORE_INFO } from '@/data/persian-luxury-women';

export default function SupportSection() {
  return (
    <section className="py-16 bg-[#EFECE6] border-y border-[#ffffff] font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 text-start">

        <div className="max-w-2xl mb-10">
          <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-1">
            CUSTOMER SUPPORT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
            برای انتخاب بهتر، همراه شما هستیم
          </h2>
          <p className="text-xs sm:text-sm text-[#77736D] mt-1">
            اگر نیاز به راهنمایی در انتخاب کیف، ست کردن با کفش یا مشاوره هدیه دارید، با کارشناسان ما ارتباط بگیرید.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#F7F5F1] p-6 border border-[#ffffff] flex flex-col justify-between">
            <div>
              <PhoneCall className="w-6 h-6 text-[#B29A6A] mb-4 stroke-[1.5]" />
              <h3 className="text-sm font-bold text-[#171717] mb-1">تماس مستقیم با فروشگاه</h3>
              <p className="text-xs text-[#77736D] mb-4">پاسخگویی سریع در ساعات کاری boutique</p>
            </div>
            <a href={`tel:${TABRIZ_STORE_INFO.phone}`} className="text-xs font-bold text-[#171717] font-vazir underline">
              {TABRIZ_STORE_INFO.phone}
            </a>
          </div>

          <div className="bg-[#F7F5F1] p-6 border border-[#ffffff] flex flex-col justify-between">
            <div>
              <Compass className="w-6 h-6 text-[#B29A6A] mb-4 stroke-[1.5]" />
              <h3 className="text-sm font-bold text-[#171717] mb-1">مشاوره اختصاصی خرید</h3>
              <p className="text-xs text-[#77736D] mb-4">راهنمایی در انتخاب سایز، رنگ و ست‌های مجلسی</p>
            </div>
            <a href={`tel:${TABRIZ_STORE_INFO.consultationPhone}`} className="text-xs font-bold text-[#171717] font-vazir underline">
              {TABRIZ_STORE_INFO.consultationPhone}
            </a>
          </div>

          <div className="bg-[#F7F5F1] p-6 border border-[#ffffff] flex flex-col justify-between">
            <div>
              <MessageSquare className="w-6 h-6 text-[#B29A6A] mb-4 stroke-[1.5]" />
              <h3 className="text-sm font-bold text-[#171717] mb-1">پشتیبانی آنلاین</h3>
              <p className="text-xs text-[#77736D] mb-4">پیگیری سفارش‌ها و استعلام موجودی کالکشن‌ها</p>
            </div>
            <span className="text-xs font-bold text-[#171717]">فعال در تمام روزهای هفته</span>
          </div>
        </div>

      </div>
    </section>
  );
}
