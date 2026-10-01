'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Globe, Send, MessageCircle, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white pt-16 pb-10 font-peyda text-right border-t border-[#262626]" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* TOP BRAND & COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#262626]">

          {/* BRAND COL */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/shop/solea-sneakers" className="inline-block">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black font-peyda tracking-[0.15em] text-white uppercase">
                  SOLEA
                </span>
                <span className="bg-[#CCFF00] text-[#171717] text-[9px] font-mono font-bold px-1.5 py-0.5 rounded uppercase">
                  STORE
                </span>
              </div>
              <span className="block text-[10px] font-mono tracking-wider text-[#A3A3A3] uppercase mt-1">
                CURATED MULTI-BRAND FOOTWEAR RETAILER
              </span>
            </Link>

            <p className="text-xs text-[#A3A3A3] font-vazir leading-relaxed max-w-sm">
              مقصد تخصصی و گلچین‌شده اسنیکرهای اصیل از برترین برندهای بین‌المللی جهان. تضمین ۱۰۰٪ اصالت کالا و ارسال اکسپرس.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#262626] hover:bg-[#CCFF00] hover:text-[#171717] text-white flex items-center justify-center transition-colors"
                aria-label="اینستاگرام"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#262626] hover:bg-[#CCFF00] hover:text-[#171717] text-white flex items-center justify-center transition-colors"
                aria-label="تلگرام"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#262626] hover:bg-[#CCFF00] hover:text-[#171717] text-white flex items-center justify-center transition-colors"
                aria-label="پشتیبانی"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-vazir">

            {/* SHOP COL */}
            <div>
              <h4 className="text-xs font-bold text-[#CCFF00] font-mono mb-4 uppercase tracking-wider">
                خرید اسنیکر
              </h4>
              <ul className="space-y-2 text-[#A3A3A3] font-normal">
                <li><a href="#products" className="hover:text-white transition-colors">جدیدترین اسنیکرها</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">کفش زنانه</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">کفش مردانه</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">مدل‌های یونیسکس</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">دراپ‌های محدود</a></li>
              </ul>
            </div>

            {/* BRANDS COL */}
            <div>
              <h4 className="text-xs font-bold text-[#CCFF00] font-mono mb-4 uppercase tracking-wider">
                برندهای برتر
              </h4>
              <ul className="space-y-2 text-[#A3A3A3] font-normal">
                <li><a href="#brands" className="hover:text-white transition-colors">NIKE</a></li>
                <li><a href="#brands" className="hover:text-white transition-colors">ADIDAS</a></li>
                <li><a href="#brands" className="hover:text-white transition-colors">NEW BALANCE</a></li>
                <li><a href="#brands" className="hover:text-white transition-colors">ASICS</a></li>
                <li><a href="#brands" className="hover:text-white transition-colors">JORDAN & SALOMON</a></li>
              </ul>
            </div>

            {/* CUSTOMER CARE */}
            <div>
              <h4 className="text-xs font-bold text-[#CCFF00] font-mono mb-4 uppercase tracking-wider">
                خدمات مشتریان
              </h4>
              <ul className="space-y-2 text-[#A3A3A3] font-normal">
                <li><a href="#" className="hover:text-white transition-colors">راهنمای تخصصی سایز</a></li>
                <li><a href="#" className="hover:text-white transition-colors">شرایط ارسال و تحویل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ضمانت ۷ روزه بازگشت</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سوالات متداول</a></li>
                <li><a href="#" className="hover:text-white transition-colors">پیگیری سفارش</a></li>
              </ul>
            </div>

            {/* ABOUT SOLEA */}
            <div>
              <h4 className="text-xs font-bold text-[#CCFF00] font-mono mb-4 uppercase tracking-wider">
                درباره SOLEA
              </h4>
              <ul className="space-y-2 text-[#A3A3A3] font-normal">
                <li><span className="block text-white font-bold font-mono">۰۲۱-۹۱۰۷۷۰۰</span></li>
                <li><span className="text-[11px]">پاسخگویی ۸ الی ۲۴</span></li>
                <li><a href="#" className="hover:text-white transition-colors">درباره فروشگاه ما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ارتباط با کارشناسان</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-vazir text-[#737373]">
          <div>
            © ۲۰۲۶ تمامی حقوق متعلق به فروشگاه آنلاین اسنیکر SOLEA می‌باشد.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors font-medium flex items-center gap-1">
              <span>مشاهده کاتالوگ تمام لندینگ‌ها</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
