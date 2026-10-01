'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PERSIAN_LUXURY_LOOKS } from '@/data/persian-luxury';
import { Sparkles, Check, ArrowLeft, Layers } from 'lucide-react';

export default function PersianOutfitBuilder() {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const activeLook = PERSIAN_LUXURY_LOOKS[activeLookIndex];

  return (
    <section id="outfits" className="py-24 bg-[#0E0F13] text-white font-peyda relative border-t border-[#1F222D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-semibold text-[#C8A97E] tracking-widest uppercase mb-2 block flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              پیشنهاد استایلیست اختصاصی
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              ست‌های همگون و استایل‌های کامل
            </h2>
          </div>
          <p className="text-[#989BA8] text-sm sm:text-base max-w-md font-vazir leading-relaxed">
            ترکیب‌های هوشمندانه از برترین قطعات پوشاک با هارمونی رنگ و بافت ایده‌آل.
          </p>
        </div>

        {/* Outfit Switcher Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {PERSIAN_LUXURY_LOOKS.map((look, index) => (
            <button
              key={look.id}
              onClick={() => setActiveLookIndex(index)}
              className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-3 ${
                activeLookIndex === index
                  ? 'bg-[#C8A97E] text-black shadow-xl shadow-[#C8A97E]/20 scale-105'
                  : 'bg-[#161820] text-[#A0A4B8] hover:text-white border border-[#252938]'
              }`}
            >
              <span className="px-2 py-0.5 rounded bg-black/20 text-[11px] font-mono">
                {look.number}
              </span>
              <span>{look.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Look Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#14161F] border border-[#252838] rounded-3xl p-6 sm:p-10 shadow-2xl">
          {/* Look Image */}
          <div className="lg:col-span-6 relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden bg-[#1B1E2B]">
            <Image
              src={activeLook.image}
              alt={activeLook.title}
              fill
              className="object-cover object-center"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14161F] via-transparent to-transparent" />
            <div className="absolute bottom-6 right-6 left-6 p-4 bg-[#0A0B0E]/90 backdrop-blur-md rounded-xl border border-white/10">
              <span className="text-xs text-[#C8A97E] font-bold block mb-1">{activeLook.subtitle}</span>
              <h4 className="text-xl font-bold text-white">{activeLook.name}</h4>
            </div>
          </div>

          {/* Look Details & Included Items */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-mono text-[#C8A97E] uppercase tracking-wider block mb-2">
                {activeLook.number} — {activeLook.subtitle}
              </span>
              <h3 className="text-3xl font-extrabold text-white mb-4">
                {activeLook.title}
              </h3>
              <p className="text-[#A0A4B8] text-sm sm:text-base font-vazir leading-relaxed mb-8">
                {activeLook.description}
              </p>

              {/* Items included */}
              <h4 className="text-xs font-bold text-[#C8A97E] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>قطعات تشکیل‌دهنده این استایل:</span>
              </h4>

              <div className="space-y-4 mb-8">
                {activeLook.products.map((item: any, i: number) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-[#1B1E2A] border border-[#2B2F40] rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-[#12141C]">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-contain p-1"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h5 className="text-sm font-bold text-white">{item.name}</h5>
                        <span className="text-xs text-[#828698] font-vazir">{item.categoryPersian}</span>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-[#C8A97E] font-peyda">{item.priceFormatted}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total price & CTA */}
            <div className="pt-6 border-t border-[#252838] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#828698] block font-vazir">مجموع قیمت کل ست:</span>
                <span className="text-2xl font-black text-[#C8A97E] font-peyda">
                  {activeLook.price.toLocaleString('fa-IR')} تومان
                </span>
              </div>

              <button className="w-full sm:w-auto px-8 py-3.5 bg-[#C8A97E] hover:bg-[#D8B88D] text-black font-bold text-sm rounded-xl transition-all shadow-xl shadow-[#C8A97E]/20 flex items-center justify-center gap-2">
                <span>سفارش کل این ست با تخفیف</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
