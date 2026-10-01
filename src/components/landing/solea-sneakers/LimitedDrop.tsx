'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, ShoppingBag, ArrowLeft, Clock } from 'lucide-react';
import { SOLEA_LIMITED_DROPS, SneakerProduct, SOLEA_PRODUCTS } from '@/data/solea-sneakers';
import { useCart } from '@/context/CartContext';

interface LimitedDropProps {
  onQuickView?: (product: SneakerProduct) => void;
}

export default function LimitedDrop({ onQuickView }: LimitedDropProps) {
  const { addToCart } = useCart();

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('fa-IR').format(amount);
  };

  const handleQuickAdd = (drop: typeof SOLEA_LIMITED_DROPS[0]) => {
    const matched = SOLEA_PRODUCTS.find(p => p.id === 'solea-11' || p.id === 'solea-09') || SOLEA_PRODUCTS[0];
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
      colors: [{ name: 'محدود', hex: '#171717' }],
      sizes: ['41', '42', '43'],
      images: [drop.image],
      description: 'نسخه کاملاً محدود کلکسیونی',
      material: 'چرم اختصاصی',
      fit: 'استاندارد',
    };
    addToCart(product, { name: 'محدود', hex: '#171717' }, '42');
  };

  return (
    <section id="limited-drop" className="py-12 sm:py-16 bg-[#171717] text-white font-peyda text-right relative overflow-hidden" dir="rtl">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#262626] mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#CCFF00] text-[#171717] text-xs font-mono font-bold rounded mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>LIMITED RELEASE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              دراپ‌های کلکسیونی محدود
            </h2>
            <p className="text-xs sm:text-sm text-[#A3A3A3] font-vazir mt-1.5 font-normal">
              مدل‌هایی با موجودی اندک در سطح جهانی که برای مجموعه‌داران و علاقه‌مندان خاص عرضه می‌شوند.
            </p>
          </div>

          <div className="text-xs font-vazir text-[#A3A3A3] flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#CCFF00]" />
            <span>عرضه انحصاری در SOLEA</span>
          </div>
        </div>

        {/* DROPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLEA_LIMITED_DROPS.map((drop) => (
            <div
              key={drop.id}
              className="bg-[#262626] border border-[#333333] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 hover:border-[#CCFF00] transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative w-full sm:w-1/2 aspect-square rounded-xl bg-[#171717] border border-[#333333] p-4 flex items-center justify-center shrink-0">
                <Image
                  src={drop.image}
                  alt={drop.title}
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform"
                />
                <span className="absolute top-3 right-3 px-2.5 py-0.5 bg-[#CCFF00] text-[#171717] text-[10px] font-mono font-bold rounded">
                  {drop.tag}
                </span>
              </div>

              {/* DETAILS */}
              <div className="w-full sm:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-bold text-[#CCFF00] uppercase tracking-wider">
                    {drop.brand}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    {drop.title}
                  </h3>
                  <div className="text-xs text-[#A3A3A3] font-vazir mt-2 font-normal">
                    موجودی باقی‌مانده: <span className="text-white font-bold">{drop.stockRemaining} جفت</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#333333]">
                  <div className="text-base font-bold text-white mb-3">
                    {formatPrice(drop.price)} <span className="text-xs font-normal text-[#A3A3A3]">تومان</span>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(drop)}
                    className="w-full py-3 bg-[#CCFF00] hover:bg-[#B8E600] text-[#171717] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
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
