'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface NewArrivalsProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
}

export default function NewArrivals({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
}: NewArrivalsProps) {
  // Filter new arrival products
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <section id="new-arrivals" className="py-16 md:py-24 bg-[#F7F5F1] font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 text-start border-b border-[#DDD9D2] pb-6">
          <div>
            <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-1">
              NEW ARRIVALS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal">
              تازه‌های فروشگاه
            </h2>
            <p className="text-sm text-[#77736D] mt-2">
              جدیدترین کیف و کفش‌های لوکس گردآوری شده از جدیدترین کالکشن‌های جهان.
            </p>
          </div>

          <a
            href="#catalog"
            className="mt-4 md:mt-0 text-xs font-bold text-[#171717] hover:text-[#B29A6A] underline underline-offset-8 transition-colors self-start"
          >
            مشاهده تمام تازه‌ها ←
          </a>
        </div>

        {/* PRODUCTS GRID: Desktop 4, Tablet 3, Mobile 2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
