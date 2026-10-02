'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface BestsellersProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
}

export default function Bestsellers({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
}: BestsellersProps) {
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-[#FDFDFD] font-peyda">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">

        {/* SECTION HEADER */}
        <div className="text-start mb-10 md:mb-14 border-b border-[#ffffff] pb-6 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="block text-xs font-mono font-bold text-[#B29A6A] uppercase tracking-widest mb-1">
              BESTSELLERS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-normal">
              پرفروش‌ترین‌ها
            </h2>
            <p className="text-sm text-[#77736D] mt-2">
              محبوب‌ترین و مورد اعتمادترین انتخاب‌های بانوان شیک‌پوش.
            </p>
          </div>

          <a
            href="#catalog"
            className="mt-4 md:mt-0 text-xs font-bold text-[#171717] hover:text-[#B29A6A] underline underline-offset-8 transition-colors self-start"
          >
            مشاهده تمام پرفروش‌ها ←
          </a>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlistIds.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              badgeLabel="پرفروش"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
