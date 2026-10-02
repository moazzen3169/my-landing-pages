'use client';

import React from 'react';
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
  const curatedList = products.slice(0, 4);

  return (
    <section id="the-edit" className="py-20 md:py-28 bg-[#FFFFFF] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#E5E5E5] pb-6">
          <div>
            <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
              EDITORIAL EDIT
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#000000] tracking-normal">
              منتخب استایلیست‌ها
            </h2>
          </div>

          <p className="mt-4 sm:mt-0 text-xs text-[#666666] max-w-md font-normal leading-relaxed">
            مجموعه‌ای ویژه‌ از برترین قطعات کلکسیون برای استایل‌های مجلسی و رسمی فصل.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {curatedList.map((product) => (
            <ProductCard
              key={`curated-${product.id}`}
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
