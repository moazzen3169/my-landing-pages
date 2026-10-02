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
  const newArrivalsList = products.filter((p) => p.isNew).slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-[#E5E5E5] pb-6">
          <div>
            <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-2">
              NEW COLLECTION 2026
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#000000] tracking-normal">
              جدیدترین محصولات
            </h2>
          </div>

          <a
            href="#catalog"
            className="mt-4 sm:mt-0 text-xs text-[#000000] hover:text-[#666666] transition-colors border-b border-[#000000] pb-0.5 self-start sm:self-auto font-normal"
          >
            مشاهده همه
          </a>
        </div>

        {/* 4-COLUMN PRODUCT GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {newArrivalsList.map((product) => (
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
