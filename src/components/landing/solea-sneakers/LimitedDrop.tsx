'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Flame, Clock, ShoppingBag, ArrowLeft } from 'lucide-react';
import { SOLEA_LIMITED_DROPS, SneakerProduct, SOLEA_PRODUCTS } from '@/data/solea-sneakers';
import { useCart } from '@/context/CartContext';
import { formatPersianPrice } from '@/lib/utils';
import { motion } from 'framer-motion';

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
      colors: [{ name: 'محدود', hex: '#0A0A0A' }],
      sizes: ['41', '42', '43'],
      images: [drop.image],
      description: 'نسخه کاملاً محدود کلکسیونی',
      material: 'چرم اختصاصی',
      fit: 'استاندارد',
    };
    addToCart(product, { name: 'محدود', hex: '#0A0A0A' }, '42');
  };

  return (
    <section id="limited-drop" className="py-24 lg:py-32 bg-[#0A0A0A] text-[#F3F3F1] font-peyda text-right border-b border-[#222222] relative overflow-hidden" dir="rtl">

      {/* OVERSIZED BACKGROUND TYPOGRAPHY "EXCLUSIVE" */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 left-0 pointer-events-none select-none opacity-5 text-center overflow-hidden">
        <span className="text-[20vw] font-black leading-none uppercase tracking-tighter text-[#F3F3F1]">
          EXCLUSIVE
        </span>
      </div>

      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">

        {/* HEADER & COUNTDOWN TIMER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#222222] mb-12">

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#181818] border border-[#333333] text-[#D9D9D5] text-xs font-mono font-bold uppercase tracking-wider mb-4">
              <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>LIMITED EDITION DROPS — موجودی انحصاری</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F3F3F1]">
              دراپ محدود کلکسیونی
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B68] mt-2 font-normal max-w-lg">
              نسخه‌های تخصصی با تولید محدود جهانی؛ اولویت تحویل بر اساس زمان ثبت سفارش است.
            </p>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="bg-[#181818] border border-[#333333] p-5 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#6B6B68] shrink-0">
              <Clock className="w-4 h-4 text-[#F3F3F1]" />
              <span>مهلت باقی‌مانده:</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-center" dir="ltr">
              <div className="bg-[#0A0A0A] px-3.5 py-2 border border-[#333333] min-w-[50px]">
                <span className="text-xl font-black text-[#F3F3F1] block">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#6B6B68] font-sans uppercase block">DAYS</span>
              </div>
              <span className="text-xl font-bold text-[#6B6B68]">:</span>
              <div className="bg-[#0A0A0A] px-3.5 py-2 border border-[#333333] min-w-[50px]">
                <span className="text-xl font-black text-[#F3F3F1] block">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#6B6B68] font-sans uppercase block">HRS</span>
              </div>
              <span className="text-xl font-bold text-[#6B6B68]">:</span>
              <div className="bg-[#0A0A0A] px-3.5 py-2 border border-[#333333] min-w-[50px]">
                <span className="text-xl font-black text-[#F3F3F1] block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#6B6B68] font-sans uppercase block">MIN</span>
              </div>
              <span className="text-xl font-bold text-[#6B6B68]">:</span>
              <div className="bg-[#0A0A0A] px-3.5 py-2 border border-[#333333] min-w-[50px]">
                <span className="text-xl font-black text-rose-500 block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] text-[#6B6B68] font-sans uppercase block">SEC</span>
              </div>
            </div>
          </div>

        </div>

        {/* DROPS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SOLEA_LIMITED_DROPS.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#181818] border border-[#333333] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 group hover:border-[#F3F3F1] transition-all duration-300"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full sm:w-1/2 aspect-square bg-[#0A0A0A] border border-[#333333] p-4 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-rose-950/80 border border-rose-800 text-rose-200 text-[10px] font-mono font-bold px-2.5 py-1">
                  موجودی: {drop.stockRemaining} جفت
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold text-[#6B6B68] uppercase tracking-wider block mb-1">
                    {drop.brand} • {drop.tag}
                  </span>
                  <h3 className="text-xl font-black text-[#F3F3F1] group-hover:text-[#D9D9D5] transition-colors">
                    {drop.title}
                  </h3>
                  <p className="text-xs text-[#6B6B68] mt-2 font-normal leading-relaxed">
                    نسخه منحصر‌به‌فرد کلکسیونی همراه با شناسنامه اصالت و جعبه ویژه‌نامه ۲۰۲۶.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#333333]">
                  <div className="text-xl font-black text-[#F3F3F1] mb-4">
                    {formatPersianPrice(drop.price)}
                  </div>

                  <button
                    onClick={() => handleQuickAdd(drop)}
                    className="w-full py-3.5 px-5 bg-[#F3F3F1] text-[#0A0A0A] hover:bg-[#D9D9D5] font-bold text-xs rounded-full transition-colors flex items-center justify-center gap-2 group/btn"
                  >
                    <ShoppingBag className="w-4 h-4 shrink-0" />
                    <span>مشاهده و سفارش مستقیم</span>
                    <ArrowLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
