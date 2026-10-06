'use client';

import React from 'react';

interface GravityFooterProps {
  storeName?: string;
}

export default function GravityFooter({ storeName = 'دپیکس' }: GravityFooterProps) {
  return (
    <footer id="footer" className="bg-[#111111] text-[#AAAAAA] font-peyda pt-16 pb-12 border-t border-[#222222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#222222]">
          {/* Column 1: Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block">
              <span className="text-2xl font-black text-white tracking-widest uppercase font-sans block">
                {storeName}
              </span>
              <span className="text-xs text-[#888888] font-bold block mt-0.5">
                {storeName} • فروشگاه منتخب پوشاک مردانه
              </span>
            </a>
            <p className="text-xs text-[#888888] leading-relaxed max-w-sm">
              {storeName} مرجع تخصصی پوشاک مردانه با انتخاب دقیق از برترین برندهای ایرانی و بین‌المللی. ارائه محصولات باکیفیت برای استایل‌های رسمی، نیمه‌رسمی و روزمره همراه با ارسال به سراسر ایران.
            </p>
            <div className="text-xs text-[#777777] space-y-1 pt-2">
              <p>دفتر و فروشگاه مرکزی: تبریز، [خیابان امام، برج تجاری / فروشگاه {storeName}]</p>
              <p>پشتیبانی مشتریان: [شماره تماس فروشگاه: ۰۴۱-XXXXXXXX]</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              فروشگاه
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#new-arrivals" className="hover:text-white transition-colors">
                  جدیدترین محصولات
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  کت و شلوار و کت تک
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">
                  پیراهن و شلوار
                </a>
              </li>
              <li>
                <a href="#styles" className="hover:text-white transition-colors">
                  استایل بر اساس موقعیت
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-white transition-colors">
                  برندهای منتخب
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              راهنمای مشتریان
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  راهنمای انتخاب سایز
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  شرایط و نحوه ارسال
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  قوانین تعویض و بازگشت
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  سوالات متداول
                </a>
              </li>
              <li>
                <a href="#store-section" className="hover:text-white transition-colors">
                  آدرس و ساعات کاری فروشگاه
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Ecommerce Badges / Placeholders */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              نمادهای اعتماد
            </h3>
            <p className="text-[11px] text-[#777777]">
              خرید امن آنلاین همراه با درگاه‌های رسمی شتاب
            </p>
            <div className="flex items-center gap-2 pt-2">
              <div className="px-3 py-2 bg-[#1C1C1C] border border-[#333333] text-[10px] text-[#888888] rounded-xs font-medium text-center">
                [نماد اعتماد الکترونیکی]
              </div>
              <div className="px-3 py-2 bg-[#1C1C1C] border border-[#333333] text-[10px] text-[#888888] rounded-xs font-medium text-center">
                [سامانه ساماندهی]
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#666666] gap-4">
          <p>© ۲۰۲۶ {storeName}. تمامی حقوق برای فروشگاه {storeName} محفوظ است.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#" className="hover:text-[#AAAAAA]">حریم خصوصی</a>
            <span>•</span>
            <a href="#" className="hover:text-[#AAAAAA]">شرایط استفاده</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
