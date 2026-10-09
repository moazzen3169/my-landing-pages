'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Globe, Ruler, ShieldCheck, Truck, RotateCcw, Headphones } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide?: () => void;
  storeName?: string;
}

export default function Footer({ onOpenSizeGuide, storeName = 'دپیکس' }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F3F1] pt-12 sm:pt-16 pb-8 font-peyda text-right border-t border-[#222222]" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12">

        {/* TOP BRAND & NEWSLETTER STRIP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-neutral-800">

          {/* BRAND OVERVIEW */}
          <div className="lg:col-span-5 space-y-4">
            <Link
              href="/shop/solea-sneakers"
              className="inline-block text-2xl sm:text-3xl font-black tracking-tight text-white uppercase"
            >
              {storeName} <span className="text-amber-500 text-xs font-mono font-normal">SNEAKERS</span>
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed max-w-md">
              مرکز تخصصی اسنیکر و کتانی‌های اورجینال. ارائه مستقیم آخرین مدل‌های برندهای معتبر جهانی با تضمین اصالت و ارسال سریع.
            </p>

            {/* SIZE GUIDE TRIGGER BUTTON */}
            {onOpenSizeGuide && (
              <div className="pt-2">
                <button
                  onClick={onOpenSizeGuide}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-white text-xs font-semibold rounded-xl transition-colors active:scale-95"
                >
                  <Ruler className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>راهنمای تخصصی محاسبه سایز پا</span>
                </button>
              </div>
            )}
          </div>

          {/* QUICK LINKS & CATEGORIES */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 lg:pt-0">
            {/* COLUMN 1: NAVIGATION */}
            <div>
              <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-4">
                دسترسی سریع
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li>
                  <a href="#products" className="hover:text-amber-400 transition-colors">فروشگاه اصلی</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-amber-400 transition-colors">جدیدترین محصولات</a>
                </li>
                <li>
                  <a href="#categories" className="hover:text-amber-400 transition-colors">کالکشن‌ها</a>
                </li>
                <li>
                  <a href="#limited-drop" className="hover:text-amber-400 transition-colors">دراپ‌های محدود</a>
                </li>
              </ul>
            </div>

            {/* COLUMN 2: CATEGORIES */}
            <div>
              <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-4">
                دسته‌بندی‌ها
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li>
                  <a href="#products" className="hover:text-amber-400 transition-colors">کفش‌های مردانه</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-amber-400 transition-colors">کفش‌های زنانه</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-amber-400 transition-colors">کتانی‌های رانینگ</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-amber-400 transition-colors">کتانی‌های لایف‌استایل</a>
                </li>
              </ul>
            </div>

            {/* COLUMN 3: SERVICE GUARANTEES */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-4">
                تضمین‌های خرید
              </h4>
              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>اصالت ۱۰۰٪ کالاها</span>
                </li>
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>ارسال اکسپرس سراسری</span>
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>۷ روز ضمانت تعویض</span>
                </li>
                <li className="flex items-center gap-2">
                  <Headphones className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  <span>پشتیبانی اختصاصی</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT STRIP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-normal">
          <div>
            © {new Date().getFullYear()} {storeName} — تمامی حقوق برای این فروشگاه محفوظ است.
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            >
              <span>کاتالوگ لندینگ‌ها</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
