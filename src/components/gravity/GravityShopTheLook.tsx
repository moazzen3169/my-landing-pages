'use client';

import React from 'react';
import Image from 'next/image';
import { GRAVITY_COMPLETE_LOOK } from '@/data/gravity-data';
import { ShoppingBag, Check } from 'lucide-react';

interface GravityShopTheLookProps {
  onAddToCart: (item: { id: string; name: string; price: number; image: string }) => void;
}

export default function GravityShopTheLook({ onAddToCart }: GravityShopTheLookProps) {
  const look = GRAVITY_COMPLETE_LOOK;

  const formatPersianPrice = (num: number) => {
    return num.toLocaleString('fa-IR') + ' تومان';
  };

  const totalPrice = look.items.reduce((acc, curr) => acc + curr.price, 0);

  const handleAddAllToCart = () => {
    look.items.forEach((item) => {
      onAddToCart({
        id: item.id,
        name: item.titleFa,
        price: item.price,
        image: item.image,
      });
    });
  };

  return (
    <section className="p-4 bg-[#F8F9FA] border-b border-[#D7D4CD] font-peyda">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-[#666666] tracking-wider uppercase block mb-1">
            خرید مجموعه‌ای
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111111] mb-3">
            این استایل را کامل کن
          </h2>
          <p className="text-sm text-[#666666] font-medium leading-relaxed">
            {look.subtitleFa}
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Outfit Showcase Image (Desktop: 6 cols) */}
          <div className="lg:col-span-5 relative aspect-[4/5] max-h-[750px] rounded-xs overflow-hidden ">
            <Image
              src={look.mainImage}
              alt={look.titleFa}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 " />
            <div className="absolute bottom-4 right-4 bg-[#111111]/90 text-white text-xs px-3 py-1.5 rounded-xs font-bold">
              {look.titleFa}
            </div>
          </div>

          {/* Outfit Products Breakdown (Desktop: 6 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
            <div>
              <h3 className="text-xl font-extrabold text-[#111111] mb-2">
                اجزای تشکیل‌دهنده استایل
              </h3>
              <p className="text-xs text-[#777777] font-medium mb-6">
                شما می‌توانید هر آیتم را جداگانه خریداری کرده یا کل استایل را به یکباره به سبد اضافه کنید.
              </p>

              {/* Items List */}
              <div className="space-y-3">
                {look.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3.5 bg-[#ffffff] border border-[#E5E5E5] rounded-xs hover:border-[#111111] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-14 bg-white rounded-xs overflow-hidden shrink-0 border border-[#E5E5E5]">
                        <Image
                          src={item.image}
                          alt={item.titleFa}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#666666] font-bold block">
                          {item.category}
                        </span>
                        <h4 className="text-xs font-bold text-[#111111]">
                          {item.titleFa}
                        </h4>
                        <span className="text-xs font-extrabold text-[#111111] block mt-0.5">
                          {formatPersianPrice(item.price)}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() =>
                        onAddToCart({
                          id: item.id,
                          name: item.titleFa,
                          price: item.price,
                          image: item.image,
                        })
                      }
                      className="px-4 py-2 cursor-pointer bg-[#111111] text-[#ffffff] border border-[#111111] hover:bg-[#ffffff] hover:text-[#111111] hover:border-[#111111] rounded-xs transition-colors flex items-center gap-1 text-xs font-medium"
                      aria-label="افزودن آیتم"
                    >
                      <ShoppingBag size={14} />
                      <span className="hidden sm:inline">افزودن</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Outfit Price & Buy All CTA */}
            <div className="pt-6 border-t border-[#E5E5E5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#777777] font-medium block">
                  مجموع قیمت استایل کامل:
                </span>
                <span className="text-xl font-black text-[#111111]">
                  {formatPersianPrice(totalPrice)}
                </span>
              </div>

              <button
                onClick={handleAddAllToCart}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#111111] hover:bg-[#333333] text-white font-bold text-sm rounded-xs transition-colors flex items-center justify-center gap-2"
              >
                <Check size={16} />
                <span>افزودن کل استایل به سبد</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
