'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-[#F7F5F1] font-peyda pt-16 pb-24 lg:pb-12 border-t border-[#2C2926]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2C2926] text-start">

          {/* COL 1: ABOUT BOUTIQUE */}
          <div>
            <span className="block text-xl font-bold font-serif text-[#F7F5F1] mb-2 uppercase tracking-wide">
              mor'e
            </span>
            <p className="text-xs text-[#A09C96] leading-relaxed mb-4">
              مرجع تخصصی عرضه کیف و کفش‌های زنانه فاخر و بااصالت از برندهای برتر جهان در ایران.
            </p>

            <div className="text-[11px] text-[#B29A6A] font-mono">
              LOCATION: TABRIZ, IRAN
            </div>
          </div>

          {/* COL 2: STORE LINKS */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-wider mb-4">
              فروشگاه
            </h4>
            <ul className="space-y-2.5 text-xs text-[#ffffff]">
              <li><a href="#categories" className="hover:text-[#B29A6A] transition-colors">کیف زنانه</a></li>
              <li><a href="#categories" className="hover:text-[#B29A6A] transition-colors">کفش زنانه</a></li>
              <li><a href="#categories" className="hover:text-[#B29A6A] transition-colors">کیف پول و کلچ</a></li>
              <li><a href="#categories" className="hover:text-[#B29A6A] transition-colors">اکسسوری لوکس</a></li>
              <li><a href="#brands" className="hover:text-[#B29A6A] transition-colors">برندهای منتخب</a></li>
              <li><a href="#campaign" className="hover:text-[#B29A6A] transition-colors text-[#6F1D2A] font-bold">فروش ویژه</a></li>
            </ul>
          </div>

          {/* COL 3: CUSTOMER SERVICES */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-wider mb-4">
              خدمات مشتریان
            </h4>
            <ul className="space-y-2.5 text-xs text-[#ffffff]">
              <li><a href="#store-info" className="hover:text-[#B29A6A] transition-colors">تماس با ما</a></li>
              <li><a href="#authenticity" className="hover:text-[#B29A6A] transition-colors">راهنمای خرید و انتخاب</a></li>
              <li><a href="#authenticity" className="hover:text-[#B29A6A] transition-colors">ارسال و تحویل اکسپرس</a></li>
              <li><a href="#authenticity" className="hover:text-[#B29A6A] transition-colors">شرایط بازگشت و ضمانت اصالت</a></li>
            </ul>
          </div>

          {/* COL 4: STORE IDENTITY */}
          <div>
            <h4 className="text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-wider mb-4">
              درباره فروشگاه
            </h4>
            <ul className="space-y-2.5 text-xs text-[#ffffff]">
              <li><a href="#store-info" className="hover:text-[#B29A6A] transition-colors">فروشگاه حضوری تبریز</a></li>
              <li><a href="#authenticity" className="hover:text-[#B29A6A] transition-colors">اصالت و ضمانت محصولات</a></li>
              <li><a href="#the-edit" className="hover:text-[#B29A6A] transition-colors">استایل و کالکشن‌ها</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#77736D] text-center sm:text-start gap-4">
          <p>© ۲۰۲۶ بوتیک چندبرند کیف و کفش تبریز — تمامی حقوق محفوظ است.</p>
          <div className="flex items-center gap-4 text-[10px] font-mono text-[#A09C96]">
            <span>QUIET LUXURY SELECTION</span>
            <span>•</span>
            <span>TABRIZ, IRAN</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
