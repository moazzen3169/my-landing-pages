'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowLeft, Sparkles, Tag, Check, Shirt } from 'lucide-react';
import { SOLEA_PRODUCTS } from '@/data/solea-sneakers';

export default function EditorialStory() {
  const editorialPicks = [
    {
      title: 'استایل مینی‌مال شهری با Adidas Samba & BW Army',
      description: 'ترکیب شلوار پارچه‌ای راستا با کتانی‌های کلاسیک تخت چرمی؛ ساده، شیک و مناسب برای جلسات کاری غیررسمی و کافه‌گردی.',
      tag: 'STREETWEAR EDIT',
      shoeName: 'Adidas Samba OG Core Leather',
      price: '۱۴,۸۰۰,۰۰۰ تومان',
      image: '/images/landings/solea-sneakers/Samba_OG_Schoenen_Bruin_ID1481_00_plp_standard.png',
    },
    {
      title: 'ترند رترو رانینگ با New Balance & Asics GEL',
      description: 'حجم لایه‌ای لایف‌استایل رانینگ دهه ۲۰۰۰. ترکیب با شلوار کارگو یا نیم‌بگ برای ظاهری مدرن و مدرن‌ترین کوشنینگ شهری.',
      tag: 'TECH RUNNER EDIT',
      shoeName: 'New Balance 1906R Tech Runner',
      price: '۲۱,۵۰۰,۰۰۰ تومان',
      image: '/images/landings/solea-sneakers/OZWEEGO_Schoenen_Grijs_EE6461_00_plp_standard.png',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-[#E5E4E0] font-peyda text-right" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E5E4E0] mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00] text-[#171717] rounded text-xs font-mono font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              THE SOLEA EDIT
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717]">
              پیشنـهاد این هفته استایلیست‌های سولئا
            </h2>
            <p className="text-xs sm:text-sm text-[#777777] font-vazir mt-1.5 font-normal">
              چگونه اسنیکرهای برتر فصل را ست کنیم؟ تحلیل استایل، پیشنهاد ترکیب لباس و کتانی.
            </p>
          </div>

          <a
            href="#products"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F5F4F0] hover:bg-[#171717] hover:text-white border border-[#E5E4E0] text-xs font-semibold rounded-full transition-all"
          >
            <span>مشاهده همه محصولات منتخب</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* EDITORIAL CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {editorialPicks.map((edit, idx) => (
            <div
              key={idx}
              className="bg-[#F5F4F0] border border-[#E5E4E0] rounded-2xl overflow-hidden p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 hover:shadow-md transition-all duration-300"
            >
              {/* SHOE IMAGE CONTAINER */}
              <div className="relative w-full md:w-1/2 aspect-square rounded-xl bg-[#FFFFFF] border border-[#E5E4E0] p-6 flex items-center justify-center shrink-0">
                <Image
                  src={edit.image}
                  alt={edit.shoeName}
                  fill
                  className="object-contain p-4 hover:scale-105 transition-transform"
                />
                <span className="absolute top-3 right-3 px-2.5 py-1 bg-[#171717] text-[#CCFF00] text-[10px] font-mono font-bold rounded uppercase">
                  {edit.tag}
                </span>
              </div>

              {/* EDITORIAL CONTENT & STYLING COMMENTARY */}
              <div className="w-full md:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-vazir text-[#777777] mb-1">
                    <Shirt className="w-3.5 h-3.5 text-[#171717]" />
                    <span>پیشنهاد ست‌کردن</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#171717]">
                    {edit.title}
                  </h3>
                  <p className="text-xs text-[#777777] font-vazir leading-relaxed mt-2 font-normal">
                    {edit.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E4E0]">
                  <div className="text-xs font-bold text-[#171717] font-peyda">
                    {edit.shoeName}
                  </div>
                  <div className="text-xs font-bold text-[#171717] mt-0.5">
                    {edit.price}
                  </div>

                  <a
                    href="#products"
                    className="mt-3 inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#171717] hover:bg-[#262626] text-white text-xs font-semibold rounded-lg transition-all"
                  >
                    <span>مشاهده و خرید مدل</span>
                    <ArrowLeft className="w-3.5 h-3.5 text-[#CCFF00]" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
