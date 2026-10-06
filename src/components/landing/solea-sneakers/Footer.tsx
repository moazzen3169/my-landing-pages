'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Send, Globe, MessageCircle, Ruler } from 'lucide-react';

interface FooterProps {
  onOpenSizeGuide?: () => void;
}

export default function Footer({ onOpenSizeGuide }: FooterProps) {
  return (
    <footer className="bg-[#0A0A0A] text-[#F3F3F1] pt-20 pb-12 font-peyda text-right border-t border-[#222222]" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12">

        {/* TOP BRAND SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#222222]">

          {/* BRAND DESCRIPTION */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/shop/solea-sneakers" className="inline-block">
              <span className="text-3xl font-black font-peyda tracking-tight text-[#F3F3F1] uppercase">
                SOLEA
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-[#6B6B68] uppercase mt-1">
                EDITORIAL SNEAKERS & ATHLETICS
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#D9D9D5] font-normal leading-relaxed max-w-sm">
              انتخابی بین‌المللی از اسنیکرهای روز دنیا برای حرکت، استایل و روزمرگی. تضمین ۱۰۰٪ اصالت کالا همراه با ارسال اکسپرس سراسری.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 bg-[#181818] hover:bg-[#F3F3F1] hover:text-[#0A0A0A] text-[#F3F3F1] flex items-center justify-center transition-colors border border-[#333333]"
                aria-label="اینستاگرام"
              >
                <Globe className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#181818] hover:bg-[#F3F3F1] hover:text-[#0A0A0A] text-[#F3F3F1] flex items-center justify-center transition-colors border border-[#333333]"
                aria-label="تلگرام"
              >
                <Send className="w-4 h-4 shrink-0" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-[#181818] hover:bg-[#F3F3F1] hover:text-[#0A0A0A] text-[#F3F3F1] flex items-center justify-center transition-colors border border-[#333333]"
                aria-label="ارتباط مستقیم"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs">

            {/* COL 1: SHOP */}
            <div>
              <h4 className="text-xs font-mono font-bold text-[#6B6B68] uppercase tracking-wider mb-4">
                فروشگاه SOLEA
              </h4>
              <ul className="space-y-3 text-[#D9D9D5] font-normal">
                <li><a href="#products" className="hover:text-[#F3F3F1] transition-colors">همه اسنیکرها</a></li>
                <li><a href="#products" className="hover:text-[#F3F3F1] transition-colors">جدیدترین‌ها</a></li>
                <li><a href="#products" className="hover:text-[#F3F3F1] transition-colors">پرفروش‌ها</a></li>
                <li><a href="#products" className="hover:text-[#F3F3F1] transition-colors">کفش زنانه</a></li>
                <li><a href="#products" className="hover:text-[#F3F3F1] transition-colors">کفش مردانه</a></li>
                <li><a href="#products" className="hover:text-[#F3F3F1] transition-colors">یونیسکس</a></li>
              </ul>
            </div>

            {/* COL 2: GUIDE */}
            <div>
              <h4 className="text-xs font-mono font-bold text-[#6B6B68] uppercase tracking-wider mb-4">
                راهنمای مشتریان
              </h4>
              <ul className="space-y-3 text-[#D9D9D5] font-normal">
                <li>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      if (onOpenSizeGuide) onOpenSizeGuide();
                    }}
                    className="hover:text-[#F3F3F1] transition-colors flex items-center gap-1.5 cursor-pointer text-right"
                  >
                    <Ruler className="w-3.5 h-3.5 text-[#6B6B68]" />
                    <span>راهنمای سایز اختصاصی</span>
                  </button>
                </li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">شرایط ارسال و تحویل</a></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">قوانین تعویض و مرجوعی</a></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">سوالات متداول</a></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">پیگیری سفارش</a></li>
              </ul>
            </div>

            {/* COL 3: ABOUT */}
            <div>
              <h4 className="text-xs font-mono font-bold text-[#6B6B68] uppercase tracking-wider mb-4">
                درباره سولئا
              </h4>
              <ul className="space-y-3 text-[#D9D9D5] font-normal">
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">فلسفه و داستان برند</a></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">تماس با کارشناسان</a></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">فرصت‌های همکاری</a></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">مجله استایل</a></li>
              </ul>
            </div>

            {/* COL 4: SUPPORT */}
            <div>
              <h4 className="text-xs font-mono font-bold text-[#6B6B68] uppercase tracking-wider mb-4">
                پشتیبانی مشتریان
              </h4>
              <ul className="space-y-3 text-[#D9D9D5] font-normal">
                <li><span className="block text-[#F3F3F1] font-bold">۰۲۱-۹۱۰۷۷۰۰۰</span></li>
                <li><span>پاسخگویی ۸ الی ۲۴</span></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">پشتیبانی تلگرام</a></li>
                <li><a href="#" className="hover:text-[#F3F3F1] transition-colors">ضمانت اصالت و سلامت</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B68]">
          <div>
            © ۲۰۲۶ تمامی حقوق متعلق به بوتیک تخصصی اسنیکر SOLEA می‌باشد.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#F3F3F1] transition-colors font-bold flex items-center gap-1.5">
              <span>کاتالوگ اصلی لندینگ‌ها</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
