'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function GravityStoreSection() {
  return (
    <section id="store-section" className="py-20 md:py-28 bg-[#111111] text-white font-peyda relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content & Store Details (Desktop: 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#3B82F6] tracking-wider uppercase block bg-[#2563EB]/20 w-fit px-3 py-1 rounded-full border border-[#2563EB]/40">
              فروشگاه حضوری تبریز
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              گراویتی را از نزدیک ببینید
            </h2>

            <p className="text-sm sm:text-base text-[#CCCCCC] leading-relaxed font-medium">
              فروشگاه گراویتی در مرکز تبریز؛ تجربه‌ای که حالا می‌توانید از هر جای ایران آنلاین داشته باشید.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#333333] text-xs sm:text-sm text-[#DDDDDD]">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#3B82F6] shrink-0 mt-0.5" />
                <span>[تبریز، مرکز شهر، خیابان امام، برج تجاری / فروشگاه گراویتی]</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#3B82F6] shrink-0" />
                <span>ساعات کاری: همه روزه از ۱۰:۰۰ الی ۲۱:۳۰</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#3B82F6] shrink-0" />
                <span>[شماره تماس فروشگاه: ۰۴۱-XXXXXXXX]</span>
              </div>

              <div className="flex items-center gap-3">
                <InstagramIcon size={18} className="text-[#3B82F6] shrink-0" />
                <span>صفحه اینستاگرام: @gravity.menswear</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4">
              <a
                href="#footer"
                className="w-full sm:w-auto px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm rounded-xs transition-colors flex items-center justify-center gap-2"
              >
                <Navigation size={15} />
                <span>مسیر فروشگاه در نقشه</span>
              </a>

              <a
                href="#footer"
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white/30 text-white hover:bg-white hover:text-[#111111] font-bold text-xs sm:text-sm rounded-xs transition-colors text-center"
              >
                ارتباط با پشتیبانی
              </a>
            </div>
          </div>

          {/* Store Image / Presentation (Desktop: 6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] w-full rounded-xs overflow-hidden border border-[#333333] shadow-2xl">
              <Image
                src="/images/gravity/for-hero-section-2.png"
                alt="Gravity Physical Store Tabriz"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 right-6 left-6 p-4 bg-black/70 backdrop-blur-md rounded-xs border border-white/10">
                <span className="text-xs font-bold text-[#3B82F6] block mb-1">
                  مرکز فروشگاه‌های حضوری گراویتی
                </span>
                <p className="text-xs text-[#CCCCCC]">
                  میزبان شما برای انتخاب و تست انواع کت، پیراهن و استایل‌های رسمی مردانه.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
