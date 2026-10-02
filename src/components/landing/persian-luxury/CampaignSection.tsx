'use client';

import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { LuxuryProduct, PRIVATE_SALE_CAMPAIGN } from '@/data/persian-luxury-women';
import { Clock, Flame } from 'lucide-react';

interface CampaignSectionProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
}

export default function CampaignSection({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
}: CampaignSectionProps) {
  // Countdown timer state (starting at 5 hours 23 minutes 39 seconds)
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 23,
    seconds: 39,
    isExpired: false,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
        }
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            }
          }
        }
        return { hours, minutes, seconds, isExpired: false };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format Persian digits
  const toPersianDigits = (num: number) => {
    const str = num.toString().padStart(2, '0');
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return str.replace(/\d/g, (d) => persianDigits[parseInt(d)]);
  };

  const campaignProducts = products.filter((p) => p.isCampaign);

  return (
    <section id="campaign" className="py-16 md:py-24 bg-[#171717] text-[#F7F5F1] font-peyda relative overflow-hidden">

      {/* BACKGROUND BURGUNDY ACCENT PATTERN */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#6F1D2A]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#B29A6A]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 relative z-10">

        {/* CAMPAIGN BANNER HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 border-b border-[#2C2926] pb-8 text-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#6F1D2A] text-white text-xs font-bold rounded-xs mb-3">
              <Flame className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono tracking-wider">{PRIVATE_SALE_CAMPAIGN.subtitlePersian}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F7F5F1] tracking-normal mb-2">
              {PRIVATE_SALE_CAMPAIGN.titlePersian}
            </h2>
            <p className="text-sm text-[#A09C96] max-w-xl">
              {PRIVATE_SALE_CAMPAIGN.descriptionPersian}
            </p>
          </div>

          {/* COUNTDOWN TIMER BOX */}
          <div className="mt-6 lg:mt-0 p-4 bg-[#23211F] border border-[#3D3A36] rounded-xs flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B29A6A]">
              <Clock className="w-4 h-4 stroke-[2]" />
              <span>زمان باقی‌مانده تا پایان کمپین:</span>
            </div>

            {timeLeft.isExpired ? (
              <span className="text-sm font-bold text-[#6F1D2A] py-1">
                این کمپین به پایان رسیده است.
              </span>
            ) : (
              <div className="flex items-center gap-3 dir-ltr" dir="ltr">
                <div className="flex flex-col items-center bg-[#171717] px-3 py-1.5 border border-[#3D3A36] min-w-[52px]">
                  <span className="text-lg font-bold text-[#F7F5F1] font-vazir">
                    {toPersianDigits(timeLeft.hours)}
                  </span>
                  <span className="text-[10px] text-[#A09C96] font-mono">ساعت</span>
                </div>
                <span className="text-lg font-bold text-[#B29A6A]">:</span>
                <div className="flex flex-col items-center bg-[#171717] px-3 py-1.5 border border-[#3D3A36] min-w-[52px]">
                  <span className="text-lg font-bold text-[#F7F5F1] font-vazir">
                    {toPersianDigits(timeLeft.minutes)}
                  </span>
                  <span className="text-[10px] text-[#A09C96] font-mono">دقیقه</span>
                </div>
                <span className="text-lg font-bold text-[#B29A6A]">:</span>
                <div className="flex flex-col items-center bg-[#171717] px-3 py-1.5 border border-[#3D3A36] min-w-[52px]">
                  <span className="text-lg font-bold text-[#6F1D2A] font-vazir">
                    {toPersianDigits(timeLeft.seconds)}
                  </span>
                  <span className="text-[10px] text-[#A09C96] font-mono">ثانیه</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CAMPAIGN PRODUCTS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {campaignProducts.map((product) => (
            <div key={product.id} className="relative">
              {/* Limited Stock Warning Label */}
              <div className="absolute top-2 right-2 bg-[#6F1D2A] text-[#F7F5F1] text-[10px] font-bold px-2.5 py-1 z-20 shadow-md">
                فقط {toPersianDigits(product.stock)} عدد باقی مانده
              </div>

              <ProductCard
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
