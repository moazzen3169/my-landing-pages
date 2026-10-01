'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Globe, MessageCircle, Ruler } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide?: () => void;
}

export default function Footer({ onOpenSizeGuide }: FooterProps) {
  return (
    <footer className="bg-[#0B1220] text-[#F8FAFC] pt-16 sm:pt-20 pb-12 font-peyda text-right border-t border-[#CBD5E1]/20" dir="rtl">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">

        {/* TOP BRAND SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#CBD5E1]/20">

          {/* BRAND DESCRIPTION */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/shop/solea-sneakers" className="inline-block">
              <span className="text-3xl font-bold font-peyda tracking-[0.2em] text-[#F8FAFC] uppercase">
                SOLEA
              </span>
              <span className="block text-[10px] font-mono tracking-[0.25em] text-[#8FA9C4] uppercase mt-1">
                PREMIUM SNEAKERS & ATHLETICS
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#CBD5E1] font-peyda leading-relaxed max-w-sm">
              انتخابی بین‌المللی از اسنیکرهای روز دنیا برای حرکت، استایل و روزمرگی. تضمین اصالت کالا با ارسال اکسپرس سراسری.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#16233A] hover:bg-[#8FA9C4] hover:text-[#0B1220] text-[#F8FAFC] flex items-center justify-center transition-colors border border-[#CBD5E1]/20"
                aria-label="اینستاگرام"
              >
                <Globe className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#16233A] hover:bg-[#8FA9C4] hover:text-[#0B1220] text-[#F8FAFC] flex items-center justify-center transition-colors border border-[#CBD5E1]/20"
                aria-label="تلگرام"
              >
                <Send className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#16233A] hover:bg-[#8FA9C4] hover:text-[#0B1220] text-[#F8FAFC] flex items-center justify-center transition-colors border border-[#CBD5E1]/20"
                aria-label="ارتباط مستقیم"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-peyda">

            {/* COL 1: SHOP */}
            <div>
              <h4 className="text-sm font-semibold text-[#8FA9C4] font-peyda mb-4 uppercase tracking-wider">
                خرید اسنیکر
              </h4>
              <ul className="space-y-2.5 text-[#CBD5E1] font-normal">
                <li><a href="#products" className="hover:text-[#F8FAFC] transition-colors">همه اسنیکرها</a></li>
                <li><a href="#products" className="hover:text-[#F8FAFC] transition-colors">جدیدترین‌ها</a></li>
                <li><a href="#products" className="hover:text-[#F8FAFC] transition-colors">پرفروش‌ها</a></li>
                <li><a href="#products" className="hover:text-[#F8FAFC] transition-colors">کفش زنانه</a></li>
                <li><a href="#products" className="hover:text-[#F8FAFC] transition-colors">کفش مردانه</a></li>
                <li><a href="#products" className="hover:text-[#F8FAFC] transition-colors">یونیسکس</a></li>
              </ul>
            </div>

            {/* COL 2: GUIDE */}
            <div>
              <h4 className="text-sm font-semibold text-[#8FA9C4] font-peyda mb-4 uppercase tracking-wider">
                راهنمای مشتریان
              </h4>
              <ul className="space-y-2.5 text-[#CBD5E1] font-normal">
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenSizeGuide) onOpenSizeGuide();
                    }}
                    className="hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5 cursor-pointer text-right"
                  >
                    <Ruler className="w-3.5 h-3.5 text-[#8FA9C4]" />
                    <span>راهنمای سایز اختصاصی</span>
                  </button>
                </li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">شرایط ارسال و تحویل</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">قوانین بازگشت ۷ روزه</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">سوالات متداول</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">پیگیری سفارش</a></li>
              </ul>
            </div>

            {/* COL 3: ABOUT */}
            <div>
              <h4 className="text-sm font-semibold text-[#8FA9C4] font-peyda mb-4 uppercase tracking-wider">
                درباره سولئا
              </h4>
              <ul className="space-y-2.5 text-[#CBD5E1] font-normal">
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">داستان برند ما</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">تماس با کارشناسان</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">شعب و بوتیک‌ها</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">فرصت‌های همکاری</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">مجله استایل</a></li>
              </ul>
            </div>

            {/* COL 4: SUPPORT */}
            <div>
              <h4 className="text-sm font-semibold text-[#8FA9C4] font-peyda mb-4 uppercase tracking-wider">
                پشتیبانی مشتریان
              </h4>
              <ul className="space-y-2.5 text-[#CBD5E1] font-normal">
                <li><span className="block text-[#F8FAFC] font-semibold">۰۲۱-۹۱۰۷۷۰۰۰</span></li>
                <li><span>پاسخگویی ۸ الی ۲۴</span></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">پشتیبانی آنلاین</a></li>
                <li><a href="#" className="hover:text-[#F8FAFC] transition-colors">ضمانت اصالت و سلامت</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-peyda text-[#94A3B8]">
          <div>
            © ۱۴۰۵ تمامی حقوق متعلق به فروشگاه تخصصی اسنیکر SOLEA می‌باشد.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#F8FAFC] transition-colors font-semibold flex items-center gap-1">
              <span>کاتالوگ اصلی لندینگ‌ها</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
