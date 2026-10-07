'use client';

import React from 'react';
import ProductCard from './ProductCard';
import { LuxuryProduct } from '@/data/persian-luxury-women';

interface ShoesSectionProps {
  products: LuxuryProduct[];
  wishlistIds: string[];
  onToggleWishlist: (id: string) => void;
  onQuickView: (product: LuxuryProduct) => void;
}

export default function ShoesSection({
  products,
  wishlistIds,
  onToggleWishlist,
  onQuickView,
}: ShoesSectionProps) {
  const shoesList = products.filter((p) => p.category === 'shoes').slice(0, 4);

  return (
    <section id="shoes-section" className="py-24 md:py-32 bg-[#FAFAFA] font-peyda text-[#111111]">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12">

        {/* SECTION HEADER WITH GENEROUS WHITE SPACE */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b border-[#E5E5E5] pb-8">
          <div>
            <span className="block text-[11px] font-mono font-medium text-[#999999] uppercase tracking-widest mb-3">
              FINE FOOTWEAR & HEELS
            </span>
            <h2 className="text-2xl sm:text-4xl font-light text-[#000000] tracking-tight">
              کفش زنانه
            </h2>
          </div>

          <a
            href="#catalog"
            className="mt-6 sm:mt-0 text-xs text-[#000000] hover:text-[#666666] transition-colors border-b border-[#000000] pb-1 font-normal self-start sm:self-auto"
          >
            مشاهده تمام کفش‌ها
          </a>
        </div>

        {/* 4-COLUMN SHOE GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {shoesList.map((product) => (
            <ProductCard
              key={`shoe-${product.id}`}
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
