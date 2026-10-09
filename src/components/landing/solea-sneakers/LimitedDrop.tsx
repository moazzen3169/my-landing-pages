'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Flame, Clock, ShoppingBag, ArrowLeft } from 'lucide-react';
import { SOLEA_LIMITED_DROPS, SOLEA_PRODUCTS, SneakerProduct } from '@/data/solea-sneakers';
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
    <section id="limited-drop" className="py-12 sm:py-20 lg:py-28 bg-white text-black font-peyda text-right border-b border-neutral-200 relative overflow-hidden" dir="rtl">

      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">

        {/* HEADER & COUNTDOWN TIMER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-neutral-200 mb-8 sm:mb-12">

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F8F8F6] border border-neutral-200 text-black text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-3 rounded-full shadow-2xs">
              <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse shrink-0" />
              <span>LIMITED EDITION DROPS — موجودی محدود</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight">
              کتانی‌های دراپ محدود
            </h2>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="bg-[#F8F8F6] border border-neutral-200 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shrink-0 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 shrink-0">
              <Clock className="w-4 h-4 text-black shrink-0" />
              <span>مهلت باقی‌مانده:</span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 font-mono text-center" dir="ltr">
              <div className="bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-neutral-200 rounded-lg min-w-[42px] sm:min-w-[50px] shadow-2xs">
                <span className="text-base sm:text-xl font-bold text-black block">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[9px] text-neutral-400 font-sans uppercase block">DAYS</span>
              </div>
              <span className="text-base sm:text-xl font-bold text-neutral-400">:</span>
              <div className="bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-neutral-200 rounded-lg min-w-[42px] sm:min-w-[50px] shadow-2xs">
                <span className="text-base sm:text-xl font-bold text-black block">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[9px] text-neutral-400 font-sans uppercase block">HRS</span>
              </div>
              <span className="text-base sm:text-xl font-bold text-neutral-400">:</span>
              <div className="bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-neutral-200 rounded-lg min-w-[42px] sm:min-w-[50px] shadow-2xs">
                <span className="text-base sm:text-xl font-bold text-black block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[9px] text-neutral-400 font-sans uppercase block">MIN</span>
              </div>
              <span className="text-base sm:text-xl font-bold text-neutral-400">:</span>
              <div className="bg-white px-2.5 sm:px-3.5 py-1.5 sm:py-2 border border-neutral-200 rounded-lg min-w-[42px] sm:min-w-[50px] shadow-2xs">
                <span className="text-base sm:text-xl font-bold text-rose-600 block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[8px] sm:text-[9px] text-neutral-400 font-sans uppercase block">SEC</span>
              </div>
            </div>
          </div>

        </div>

        {/* DROPS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {SOLEA_LIMITED_DROPS.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="bg-[#F8F8F6] border border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-7 group hover:border-black transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full sm:w-1/2 aspect-square bg-white border border-neutral-200 rounded-xl sm:rounded-2xl p-3 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-contain p-2 transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 right-2.5 bg-rose-100 border border-rose-200 text-rose-800 text-[9px] sm:text-[10px] font-mono font-bold px-2 py-0.5 rounded-md">
                  موجودی: {drop.stockRemaining} جفت
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                    {drop.brand} • {drop.tag}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold text-black group-hover:text-neutral-700 transition-colors">
                    {drop.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1.5 font-normal leading-relaxed">
                    نسخه منحصر‌به‌فرد کلکسیونی همراه با شناسنامه اصالت و جعبه ویژه‌نامه ۲۰۲۶.
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-200">
                  <div className="text-base sm:text-xl font-bold text-black mb-3">
                    {formatPersianPrice(drop.price)}
                  </div>

                  <button
                    onClick={() => handleQuickAdd(drop)}
                    className="w-full py-3 px-4 bg-black text-white hover:bg-neutral-800 font-bold text-xs rounded-full transition-colors flex items-center justify-center gap-2 group/btn shadow-xs active:scale-95"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
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
