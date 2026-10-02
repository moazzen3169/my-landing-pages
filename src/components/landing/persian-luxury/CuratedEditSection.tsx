'use client';

import React from 'react';
import Image from 'next/image';
import ProductCard from './ProductCard';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface CuratedEditSectionProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
}

export default function CuratedEditSection({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
}: CuratedEditSectionProps) {
  // Select curated items
  const curatedProducts = products.filter((p) => p.isCurated).slice(0, 3);

  return (
    <section id="the-edit" className="py-16 md:py-24 bg-[#EFECE6] border-y border-[#DDD9D2] font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-start mb-10 md:mb-14 border-b border-[#DDD9D2] pb-6 max-w-2xl">
          <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-1">
            THE EDIT
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal mb-2">
            منتخب ما
          </h2>
          <p className="text-sm text-[#77736D] leading-relaxed">
            انتخاب‌هایی برای کسانی که به جزئیات اهمیت می‌دهند. کالکشنی منحصربه‌فرد از کیف‌ها و کفش‌هایی که توازن استایل لوکس و هویت بصری شما را رقم می‌زنند.
          </p>
        </div>

        {/* EDITORIAL DISPLAY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LARGE EDITORIAL FEATURE (5 COLUMNS) */}
          <div className="lg:col-span-5 relative bg-[#171717] text-[#F7F5F1] p-8 sm:p-12 flex flex-col justify-between border border-[#171717] min-h-[480px]">
            <div className="relative z-10 text-start">
              <span className="inline-block text-[10px] font-mono font-bold text-[#B29A6A] border border-[#B29A6A]/40 px-2.5 py-1 mb-4 uppercase">
                CURATED SELECTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 font-serif leading-snug">
                راز جذابیت، در انتخاب جزئیات نهفته است
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD9D2] leading-relaxed mb-6 font-light">
                تأثیرگذاری با کیف‌های چرمی اصیل و کفش‌های دست‌ساز ایتالیایی و فرانسوی.
              </p>
            </div>

            {/* EDITORIAL IMAGE */}
            <div className="relative aspect-[4/3] w-full bg-[#23211F] overflow-hidden border border-[#333]">
              <Image
                src="/images/landings/persian-luxury-v1/eb999d2da3544527afa3f403b2f88acd.png"
                alt="منتخب لوکس کیف و کفش"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* CURATED PRODUCTS CARDS (7 COLUMNS) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {curatedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                badgeLabel="منتخب"
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
