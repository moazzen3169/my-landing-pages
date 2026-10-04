'use client';

import React from 'react';
import Link from 'next/link';
import { MAN_SPORT_CATEGORIES, MAN_SPORT_BRANDS } from '@/data/man-sport';
import { Phone, Mail, MapPin, Share2, Send, ShieldCheck, ArrowUpLeft } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#F5F3EE] pt-16 pb-12 border-t border-white/10" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">

          {/* BRAND SUMMARY */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/shop/man-sport" className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-[#B7FF00] text-black flex items-center justify-center font-black text-sm">
                MS
              </span>
              <span className="font-extrabold text-xl font-peyda text-white">
                MAN<span className="text-[#B7FF00] font-black">SPORT</span>
              </span>
            </Link>

            <p className="text-xs font-peyda text-slate-300 leading-relaxed max-w-sm">
              بزرگ‌ترین فروشگاه آنلاین پوشاک مردانه چندبرند در ایران. عرضه مستقیم محبوب‌ترین آیتم‌های استریت‌ویر، اسپرت و کژوال از برترین برندهای روز دنیا با ضمانت اصالت ۱۰۰٪.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#B7FF00] hover:text-black border border-white/10 text-white flex items-center justify-center transition-colors"
                title="اینستاگرام"
              >
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#2455FF] hover:text-white border border-white/10 text-white flex items-center justify-center transition-colors"
                title="تلگرام"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK CATEGORIES */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold font-peyda text-[#B7FF00] uppercase tracking-wider">
              دسته‌بندی‌های اصلی
            </h3>
            <ul className="space-y-2 text-xs font-peyda text-slate-300">
              {MAN_SPORT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <a href="#products-section" className="hover:text-white transition-colors">
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* BRANDS */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold font-peyda text-[#2455FF] uppercase tracking-wider">
              برندهای محبوب
            </h3>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              {MAN_SPORT_BRANDS.slice(0, 5).map((brand) => (
                <li key={brand.id}>
                  <a href="#brands-section" className="hover:text-white transition-colors">
                    {brand.logoText}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO & SUPPORT */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold font-peyda text-[#FF5A1F] uppercase tracking-wider">
              پشتیبانی و تماس
            </h3>
            <div className="space-y-2.5 text-xs font-peyda text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#B7FF00]" />
                <span className="font-mono">۰۲۱-۸۸۸۸۹۹۹۹</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2455FF]" />
                <span>support@mansport.ir</span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  تهران، خیابان فرشته، مرکز خرید سام سنتر، طبقه ۲، بوتیک مان اسپرت
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & BACK TO TOP */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-peyda text-slate-400">
          <p>© ۲۰۲۶ تمامی حقوق برای فروشگاه چندبرند MAN SPORT محفوظ است.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors font-bold"
          >
            <span>بازگشت به بالای صفحه</span>
            <ArrowUpLeft className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
