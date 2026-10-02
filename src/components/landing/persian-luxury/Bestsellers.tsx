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
  const bestsellersList = products.slice(2, 6);

  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#E5E5E5] pb-6">
          <div>
            <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
              BESTSELLERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#000000] tracking-normal">
              محبوب‌ترین طراحی‌ها
            </h2>
          </div>

          <a
            href="#catalog"
            className="mt-4 sm:mt-0 text-xs text-[#000000] hover:text-[#666666] transition-colors border-b border-[#000000] pb-0.5 font-normal"
          >
            مشاهده تمام پرفروش‌ها
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {bestsellersList.map((product) => (
            <ProductCard
              key={`bestseller-${product.id}`}
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
