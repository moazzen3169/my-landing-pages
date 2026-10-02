'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LANDING_REGISTRY } from '@/data/noire';
import { Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function ShowcasePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', namePersian: 'همه لندینگ‌ها', nameEnglish: 'ALL LANDINGS' },
    { id: 'women-luxury', namePersian: 'کیف و کفش لوکس زنانه', nameEnglish: 'WOMEN LUXURY' },
    { id: 'men-formal', namePersian: 'پوشاک مردانه', nameEnglish: 'MENSWEAR' },
    { id: 'footwear-sneakers', namePersian: 'اسنیکر لوکس', nameEnglish: 'SNEAKERS' },
  ];

  const filteredLandings = activeCategory === 'all'
    ? LANDING_REGISTRY
    : LANDING_REGISTRY.filter((l) => l.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#F3F2EE] font-peyda selection:bg-[#C8A97E] selection:text-black dir-rtl" dir="rtl">
      {/* Top Bar Banner */}
      <div className="bg-[#181A20] border-b border-[#2A2E39] py-2.5 px-6 text-xs text-[#A0A5B5] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-medium text-[#E0E2EC]">پلتفرم چند لندینگی فروشگاهی لوکس</span>
        </div>
        <div className="text-[11px] font-mono text-[#82889A] dir-ltr" dir="ltr">
          Next.js E-Commerce Landing Showcase Platform
        </div>
      </div>

      {/* Main Header */}
      <header className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-16 border-b border-[#2A2E39]/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#252019] border border-[#C8A97E]/30 text-[#C8A97E] text-xs font-semibold rounded-full mb-4">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              کالکشن صفحات لندینگ اختصاصی
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3 font-peyda">
              کاتالوگ لندینگ‌های اختصاصی NOIRÉ
            </h1>
            <p className="text-[#9E9EB2] max-w-2xl text-base sm:text-lg leading-relaxed font-vazir">
              مشاهده و تست دو نسخه لندینگ پیج اختصاصی نوآر (NOIRÉ) به دو زبان انگلیسی و فارسی. هر دو نسخه دارای چیدمان، استایل و بخش‌های دقیقاً یکسان با تصاویر محلی پروژه هستند.
            </p>
          </div>

          <div className="flex items-center gap-2.5 bg-[#16181F] p-2 border border-[#2A2E39] rounded-xl self-start md:self-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#C8A97E] text-black shadow-lg shadow-[#C8A97E]/20'
                    : 'text-[#A0A5B5] hover:text-white hover:bg-[#252834]'
                }`}
              >
                {cat.namePersian}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Showcase Grid */}
      <main className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredLandings.map((landing) => {
            const landingPath = `/shop/${landing.slug}`;
            const isPersian = landing.slug.includes('fa') || landing.slug.includes('persian');

            return (
              <div
                key={landing.slug}
                className="group relative bg-[#15171E] border border-[#272B38] rounded-2xl overflow-hidden hover:border-[#C8A97E]/60 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-[#C8A97E]/10"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#1B1E27]">
                    <Image
                      src={landing.previewImage}
                      alt={landing.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15171E] via-transparent to-black/30" />

                    {/* Badge */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <span className="px-3 py-1 bg-[#0E0F12]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold rounded-md uppercase tracking-wider">
                        {isPersian ? 'نسخه فارسی (FA)' : 'ENGLISH VERSION (EN)'}
                      </span>
                      {isPersian && (
                        <span className="px-3 py-1 bg-[#C8A97E] text-black font-extrabold text-[11px] rounded-md flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3 shrink-0" />
                          زبان فارسی RTL
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-8 text-start">
                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C8A97E] transition-colors">
                      {landing.title}
                    </h2>
                    <p className="text-[#AAABC2] text-sm leading-relaxed mb-6 font-vazir">
                      {landing.description}
                    </p>

                    {/* Features list */}
                    <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-[#232733] text-xs text-[#8E90A6]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />
                        <span>طراحی responsive کامل</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />
                        <span>استایل و بخش‌های همسان</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />
                        <span>تصاویر محلی پروژه</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A97E] shrink-0" />
                        <span>سوئیچر دوزبانه مستقیم</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-6 pt-0">
                  <Link
                    href={landingPath}
                    className="w-full py-3.5 px-6 bg-[#232733] hover:bg-[#C8A97E] text-white hover:text-black font-bold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>مشاهده لندینگ پیج</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-8 mt-12 border-t border-[#232733] text-center text-xs text-[#6B7082]">
        <p>پلتفرم نمایش و تست صفحات لندینگ فروشگاهی لوکس — تمام حقوق محفوظ است.</p>
      </footer>
    </div>
  );
}
