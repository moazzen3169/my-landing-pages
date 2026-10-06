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
    <section id="limited-drop" className="py-28 lg:py-40 bg-white text-black font-peyda text-right border-b border-neutral-200 relative overflow-hidden" dir="rtl">

      <div className="max-w-[1500px] mx-auto px-6 sm:px-10 md:px-16 relative z-10">

        {/* HEADER & COUNTDOWN TIMER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-neutral-200 mb-14">

          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#F8F8F6] border border-neutral-200 text-black text-xs font-mono font-bold uppercase tracking-wider mb-4 rounded-full shadow-2xs">
              <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>LIMITED EDITION DROPS — موجودی محدود</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
              کتانی‌های دراپ محدود
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal max-w-lg leading-relaxed">
              مدل‌های اختصاصی با تولید محدود جهانی؛ اولویت تحویل بر اساس زمان ثبت سفارش است.
            </p>
          </div>

          {/* COUNTDOWN TIMER */}
          <div className="bg-[#F8F8F6] border border-neutral-200 p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 shrink-0 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-500 shrink-0">
              <Clock className="w-4 h-4 text-black" />
              <span>مهلت باقی‌مانده:</span>
            </div>

            <div className="flex items-center gap-2 font-mono text-center" dir="ltr">
              <div className="bg-white px-3.5 py-2 border border-neutral-200 rounded-lg min-w-[50px] shadow-2xs">
                <span className="text-xl font-black text-black block">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="text-[9px] text-neutral-400 font-sans uppercase block">DAYS</span>
              </div>
              <span className="text-xl font-bold text-neutral-400">:</span>
              <div className="bg-white px-3.5 py-2 border border-neutral-200 rounded-lg min-w-[50px] shadow-2xs">
                <span className="text-xl font-black text-black block">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] text-neutral-400 font-sans uppercase block">HRS</span>
              </div>
              <span className="text-xl font-bold text-neutral-400">:</span>
              <div className="bg-white px-3.5 py-2 border border-neutral-200 rounded-lg min-w-[50px] shadow-2xs">
                <span className="text-xl font-black text-black block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] text-neutral-400 font-sans uppercase block">MIN</span>
              </div>
              <span className="text-xl font-bold text-neutral-400">:</span>
              <div className="bg-white px-3.5 py-2 border border-neutral-200 rounded-lg min-w-[50px] shadow-2xs">
                <span className="text-xl font-black text-rose-600 block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] text-neutral-400 font-sans uppercase block">SEC</span>
              </div>
            </div>
          </div>

        </div>

        {/* DROPS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {SOLEA_LIMITED_DROPS.map((drop) => (
            <motion.div
              key={drop.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-[#F8F8F6] border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-8 group hover:border-black transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full sm:w-1/2 aspect-square bg-white border border-neutral-200 rounded-2xl p-4 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-contain p-2 transform group-hover:scale-108 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-rose-100 border border-rose-200 text-rose-800 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md">
                  موجودی: {drop.stockRemaining} جفت
                </div>
              </div>

              {/* CONTENT */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider block mb-1">
                    {drop.brand} • {drop.tag}
                  </span>
                  <h3 className="text-xl font-black text-black group-hover:text-neutral-700 transition-colors">
                    {drop.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2 font-normal leading-relaxed">
                    نسخه منحصر‌به‌فرد کلکسیونی همراه با شناسنامه اصالت و جعبه ویژه‌نامه ۲۰۲۶.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <div className="text-xl font-black text-black mb-4">
                    {formatPersianPrice(drop.price)}
                  </div>

                  <button
                    onClick={() => handleQuickAdd(drop)}
                    className="w-full py-3.5 px-5 bg-black text-white hover:bg-neutral-800 font-bold text-xs rounded-full transition-colors flex items-center justify-center gap-2 group/btn shadow-xs"
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
