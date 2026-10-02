'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E5E5] font-peyda text-[#111111] pt-16 pb-24 md:pb-16 dir-rtl">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#E5E5E5]">
          {/* BRAND */}
          <div className="space-y-4 text-start">
            <span className="text-2xl font-light tracking-widest text-[#000000] font-serif uppercase block">
              MOR'E
            </span>
            <p className="text-xs text-[#666666] leading-relaxed font-normal">
              مرجع تخصصی کیف و کفش‌های لوکس زنانه با ضمانت اصالت.
            </p>
          </div>

          {/* SHOP LINKS */}
          <div className="space-y-3 text-start">
            <span className="block text-[11px] font-mono text-[#999999] uppercase tracking-wider">
              فروشگاه
            </span>
            <ul className="space-y-2 text-xs text-[#333333] font-normal">
              <li><a href="#categories" className="hover:text-[#000000]">کیف زنانه</a></li>
              <li><a href="#categories" className="hover:text-[#000000]">کفش و اکسسوری</a></li>
              <li><a href="#brands" className="hover:text-[#000000]">برندها</a></li>
              <li><a href="#catalog" className="hover:text-[#000000]">کاتالوگ کامل</a></li>
            </ul>
          </div>

          {/* ABOUT & HELP */}
          <div className="space-y-3 text-start">
            <span className="block text-[11px] font-mono text-[#999999] uppercase tracking-wider">
              راهنما
            </span>
            <ul className="space-y-2 text-xs text-[#333333] font-normal">
              <li><a href="#" className="hover:text-[#000000]">راهنمای سایز</a></li>
              <li><a href="#" className="hover:text-[#000000]">شرایط تعویض و بازگشت</a></li>
              <li><a href="#" className="hover:text-[#000000]">پیگیری سفارش</a></li>
              <li><a href="#" className="hover:text-[#000000]">تماس با ما</a></li>
            </ul>
          </div>

          {/* LOCATION */}
          <div className="space-y-3 text-start">
            <span className="block text-[11px] font-mono text-[#999999] uppercase tracking-wider">
              بوتیک
            </span>
            <p className="text-xs text-[#333333] font-normal leading-relaxed">
              تبریز، ولیعصر، سنگفرش شهریار، بوتیک موره
            </p>
            <p className="text-xs font-mono text-[#666666] dir-ltr text-end sm:text-start">
              +98 41 3333 0000
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#999999] font-mono gap-4">
          <span>© 2026 MOR'E. ALL RIGHTS RESERVED.</span>
          <span>HAUTE COUTURE & LUXURY LEATHER</span>
        </div>

      </div>
    </footer>
  );
}
