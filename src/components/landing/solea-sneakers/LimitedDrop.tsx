'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Flame, Clock, ShoppingBag, ArrowLeft } from 'lucide-react';
import { SOLEA_LIMITED_DROPS, SneakerProduct, SOLEA_PRODUCTS } from '@/data/solea-sneakers';
import { useCart } from '@/context/CartContext';

interface LimitedDropProps {
  onQuickView?: (product: SneakerProduct) => void;
}

export default function LimitedDrop({ onQuickView }: LimitedDropProps) {
  const { addToCart } = useCart();
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 8,
    minutes: 32,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const handleQuickAdd = (drop: typeof SOLEA_LIMITED_DROPS[0]) => {
    const matched = SOLEA_PRODUCTS.find(p => p.id === 'solea-11') || SOLEA_PRODUCTS[0];
    if (onQuickView) {
      onQuickView(matched);
      return;
    }

    const product = {
      id: drop.id,
      name: drop.title,
      brand: drop.brand,
      slug: drop.id,
      category: 'accessories' as const,
      price: drop.price,
      currency: 'TMN',
      colors: [{ name: 'محدود', hex: '#111111' }],
      sizes: ['41', '42', '43'],
      images: [drop.image],
      description: 'نسخه کاملاً محدود کلکسیونی',
      material: 'چرم اختصاصی',
      fit: 'استاندارد',
    };
    addToCart(product, { name: 'محدود', hex: '#111111' }, '42');
  };

  return (
    <section id="limited-drop" className="py-20 sm:py-28 bg-[#151515] text-white font-peyda text-right relative overflow-hidden" dir="rtl">

      {/* AMBIENT GLOW & PATTERN */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-rose-950/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* HEADER & COUNTDOWN TIMER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/10 mb-12">

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold rounded-full mb-3">
              <Flame className="w-4 h-4 shrink-0 animate-pulse" />
              <span>LIMITED EDITION DROPS — موجودی فوق‌العاده محدود</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white">
              دراپ محدود کلکسیونی
            </h2>
            <p className="text-sm sm:text-base text-[#A0A09A] font-vazir mt-2">
              مدل‌هایی با تولید محدود جهانی که قرار نیست برای همیشه در دسترس باشند.
            </p>
          </div>

          {/* FUNCTIONAL COUNTDOWN TIMER */}
          <div className="bg-[#222222] border border-white/10 p-4 sm:p-5 rounded-2xl flex items-center gap-4 shrink-0 shadow-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#A89B84] shrink-0">
              <Clock className="w-4 h-4" />
              <span>زمان باقی‌مانده:</span>
            </div>

            <div className="flex items-center gap-3 font-mono text-center" dir="ltr">
              <div className="bg-[#111111] px-3 py-2 rounded-xl border border-white/10 min-w-[50px]">
                <span className="text-xl font-black text-white block">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#888] font-vazir block">روز</span>
              </div>
              <span className="text-xl font-bold text-[#A89B84]">:</span>
              <div className="bg-[#111111] px-3 py-2 rounded-xl border border-white/10 min-w-[50px]">
                <span className="text-xl font-black text-white block">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#888] font-vazir block">ساعت</span>
              </div>
              <span className="text-xl font-bold text-[#A89B84]">:</span>
              <div className="bg-[#111111] px-3 py-2 rounded-xl border border-white/10 min-w-[50px]">
                <span className="text-xl font-black text-white block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#888] font-vazir block">دقیقه</span>
              </div>
              <span className="text-xl font-bold text-[#A89B84]">:</span>
              <div className="bg-[#111111] px-3 py-2 rounded-xl border border-white/10 min-w-[50px]">
                <span className="text-xl font-black text-rose-500 block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#888] font-vazir block">ثانیه</span>
              </div>
            </div>
          </div>

        </div>

        {/* DROPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLEA_LIMITED_DROPS.map((drop) => (
            <div
              key={drop.id}
              className="bg-[#1E1E1E] border border-white/10 rounded-[28px] overflow-hidden p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#A89B84]/60 transition-all duration-500 shadow-xl"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full sm:w-1/2 aspect-square rounded-2xl bg-[#141414] overflow-hidden p-4 flex items-center justify-center shrink-0">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  fill
                  className="object-contain -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-3 right-3 px-3 py-1 bg-rose-600 text-white text-[10px] font-black rounded-full">
                  {drop.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#A89B84] uppercase tracking-wider">
                    {drop.brand}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1 group-hover:text-[#A89B84] transition-colors">
                    {drop.title}
                  </h3>
                  <div className="text-xs text-[#888] font-vazir mt-2">
                    تنها <span className="text-white font-bold">{drop.stockRemaining} جفت</span> در انبار باقی مانده است.
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <div className="text-lg font-black text-white mb-3">
                    {formatPrice(drop.price)} <span className="text-xs font-medium text-[#888]">تومان</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(drop)}
                    className="w-full py-3.5 px-5 bg-white text-black hover:bg-[#A89B84] font-bold text-xs rounded-full transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <ShoppingBag className="w-4 h-4 shrink-0" />
                    <span>مشاهده و رزرو مستقیم</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
