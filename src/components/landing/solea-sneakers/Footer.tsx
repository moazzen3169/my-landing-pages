'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Globe, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 sm:pt-20 pb-12 font-peyda text-right border-t border-white/10" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        {/* TOP BRAND SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">

          {/* BRAND DESCRIPTION */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/shop/solea-sneakers" className="inline-block">
              <span className="text-3xl font-black font-peyda tracking-[0.2em] text-white uppercase">
                SOLEA
              </span>
              <span className="block text-[10px] font-mono tracking-[0.25em] text-[#A89B84] uppercase mt-1">
                HAUTE SNEAKERS & STREETWEAR
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#A0A09A] font-vazir leading-relaxed max-w-sm">
              انتخابی دقیق از اسنیکرهای روز دنیا برای حرکت، استایل و زندگی روزمره. تضمین ۱۰۰٪ اصالت کالا با ارسال اکسپرس سراسری.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A89B84] hover:text-black flex items-center justify-center transition-colors"
                aria-label="اینستاگرام"
              >
                <Globe className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A89B84] hover:text-black flex items-center justify-center transition-colors"
                aria-label="تلگرام"
              >
                <Send className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#A89B84] hover:text-black flex items-center justify-center transition-colors"
                aria-label="ارتباط مستقیم"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-vazir">

            {/* COL 1: SHOP */}
            <div>
              <h4 className="text-sm font-semibold text-[#A89B84] font-peyda mb-4 uppercase tracking-wider">
                خرید اسنیکر
              </h4>
              <ul className="space-y-2.5 text-[#C0C0BA] font-normal">
                <li><a href="#products" className="hover:text-white transition-colors">همه اسنیکرها</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">جدیدترین‌ها</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">پرفروش‌ها</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">کفش زنانه</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">کفش مردانه</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">یونیسکس</a></li>
              </ul>
            </div>

            {/* COL 2: GUIDE */}
            <div>
              <h4 className="text-sm font-semibold text-[#A89B84] font-peyda mb-4 uppercase tracking-wider">
                راهنمای مشتریان
              </h4>
              <ul className="space-y-2.5 text-[#C0C0BA] font-normal">
                <li><a href="#" className="hover:text-white transition-colors">راهنمای سایز اختصاصی</a></li>
                <li><a href="#" className="hover:text-white transition-colors">شرایط ارسال و تحویل</a></li>
                <li><a href="#" className="hover:text-white transition-colors">قوانین بازگشت ۷ روزه</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سوالات متداول</a></li>
                <li><a href="#" className="hover:text-white transition-colors">پیگیری سفارش</a></li>
              </ul>
            </div>

            {/* COL 3: ABOUT */}
            <div>
              <h4 className="text-sm font-semibold text-[#A89B84] font-peyda mb-4 uppercase tracking-wider">
                درباره سولئا
              </h4>
              <ul className="space-y-2.5 text-[#C0C0BA] font-normal">
                <li><a href="#" className="hover:text-white transition-colors">داستان برند ما</a></li>
                <li><a href="#" className="hover:text-white transition-colors">تماس با کارشناسان</a></li>
                <li><a href="#" className="hover:text-white transition-colors">شعب و بوتیک‌ها</a></li>
                <li><a href="#" className="hover:text-white transition-colors">فرصت‌های همکاری</a></li>
                <li><a href="#" className="hover:text-white transition-colors">مجله استایل</a></li>
              </ul>
            </div>

            {/* COL 4: SUPPORT */}
            <div>
              <h4 className="text-sm font-semibold text-[#A89B84] font-peyda mb-4 uppercase tracking-wider">
                پشتیبانی مشتریان
              </h4>
              <ul className="space-y-2.5 text-[#C0C0BA] font-normal">
                <li><span className="block text-white font-medium">۰۲۱-۹۱۰) ۷۷ ۰ ۰۰</span></li>
                <li><span>پاسخگویی ۸ الی ۲۴</span></li>
                <li><a href="#" className="hover:text-white transition-colors">پشتیبانی آنلاین تلگرام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ضمانت اصالت و سلامت</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-vazir text-[#888880]">
          <div>
            © ۱۴۰۵ تمامی حقوق مادی و معنوی متعلق به فروشگاه تخصصی اسنیکر SOLEA می‌باشد.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors font-bold flex items-center gap-1">
              <span>کاتالوگ اصلی لندینگ‌ها</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
