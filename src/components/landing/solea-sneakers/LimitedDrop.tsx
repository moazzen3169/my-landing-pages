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
      colors: [{ name: 'محدود', hex: '#0B1220' }],
      sizes: ['41', '42', '43'],
      images: [drop.image],
      description: 'نسخه کاملاً محدود کلکسیونی',
      material: 'چرم اختصاصی',
      fit: 'استاندارد',
    };
    addToCart(product, { name: 'محدود', hex: '#0B1220' }, '42');
  };

  return (
    <section id="limited-drop" className="py-12 sm:py-16 bg-[#070B13] text-[#F8FAFC] font-peyda text-right border-t border-[#CBD5E1]/20 relative" dir="rtl">

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* HEADER & COUNTDOWN TIMER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#CBD5E1]/20 mb-12">

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#16233A] border border-[#CBD5E1]/20 text-[#8FA9C4] text-xs font-semibold rounded-full mb-3">
              <Flame className="w-4 h-4 shrink-0 text-[#8FA9C4]" />
              <span>LIMITED EDITION DROPS — موجودی فوق‌العاده محدود</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#F8FAFC]">
              دراپ محدود کلکسیونی
            </h2>
            <p className="text-sm sm:text-base text-[#CBD5E1] font-peyda mt-2 font-normal">
              مدل‌هایی با تولید محدود جهانی؛ زمان و تعداد موجودی محدود است.
            </p>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="bg-[#16233A] border border-[#CBD5E1]/20 p-4 sm:p-5 rounded-2xl flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#8FA9C4] shrink-0">
              <Clock className="w-4 h-4" />
              <span>زمان باقی‌مانده:</span>
            </div>

            <div className="flex items-center gap-2.5 font-mono text-center" dir="ltr">
              <div className="bg-[#0B1220] px-3 py-2 rounded-xl border border-[#CBD5E1]/20 min-w-[48px]">
                <span className="text-xl font-bold text-[#F8FAFC] block">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#94A3B8] font-peyda block">روز</span>
              </div>
              <span className="text-xl font-bold text-[#8FA9C4]">:</span>
              <div className="bg-[#0B1220] px-3 py-2 rounded-xl border border-[#CBD5E1]/20 min-w-[48px]">
                <span className="text-xl font-bold text-[#F8FAFC] block">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#94A3B8] font-peyda block">ساعت</span>
              </div>
              <span className="text-xl font-bold text-[#8FA9C4]">:</span>
              <div className="bg-[#0B1220] px-3 py-2 rounded-xl border border-[#CBD5E1]/20 min-w-[48px]">
                <span className="text-xl font-bold text-[#F8FAFC] block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#94A3B8] font-peyda block">دقیقه</span>
              </div>
              <span className="text-xl font-bold text-[#8FA9C4]">:</span>
              <div className="bg-[#0B1220] px-3 py-2 rounded-xl border border-[#CBD5E1]/20 min-w-[48px]">
                <span className="text-xl font-bold text-[#8FA9C4] block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#94A3B8] font-peyda block">ثانیه</span>
              </div>
            </div>
          </div>

        </div>

        {/* DROPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLEA_LIMITED_DROPS.map((drop) => (
            <div
              key={drop.id}
              className="bg-[#0B1220] border border-[#CBD5E1]/20 rounded-[24px] overflow-hidden p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 group hover:border-[#8FA9C4] transition-colors duration-300"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full sm:w-1/2 aspect-square rounded-xl bg-[#16233A] overflow-hidden p-4 flex items-center justify-center shrink-0 border border-[#CBD5E1]/15">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#8FA9C4] text-[#0B1220] text-[10px] font-semibold rounded-full uppercase">
                  {drop.tag}
                </span>
              </div>

              {/* CONTENT */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-mono font-bold text-[#8FA9C4] uppercase tracking-wider">
                    {drop.brand}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F8FAFC] mt-1 group-hover:text-[#8FA9C4] transition-colors">
                    {drop.title}
                  </h3>
                  <div className="text-xs text-[#CBD5E1] font-peyda mt-2 font-normal">
                    تنها <span className="text-[#F8FAFC] font-semibold">{drop.stockRemaining} جفت</span> در انبار باقی مانده است.
                  </div>
                </div>

                <div className="pt-2 border-t border-[#CBD5E1]/20">
                  <div className="text-lg font-bold text-[#F8FAFC] mb-3">
                    {formatPrice(drop.price)} <span className="text-xs font-normal text-[#94A3B8]">تومان</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(drop)}
                    className="w-full py-3 px-5 bg-[#F8FAFC] text-[#0B1220] hover:bg-[#8FA9C4] font-semibold text-xs rounded-full transition-colors flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4 shrink-0" />
                    <span>مشاهده و رزرو مستقیم</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
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
